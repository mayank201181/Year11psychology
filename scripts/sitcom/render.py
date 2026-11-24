"""Render frames + poster for a sitcom episode using Playwright + static_ffmpeg.
Usage:
  python render.py <outdir> [--workers 2]
  python render.py <outdir> --poster <poster.jpg>
"""
import asyncio
import base64
import functools
import http.server
import json
import os
import subprocess
import sys
import threading
import time

try:
    import static_ffmpeg
    static_ffmpeg.add_paths()
except Exception:
    pass

from playwright.async_api import async_playwright

HERE = os.path.dirname(os.path.abspath(__file__))


def start_server():
    class QuietHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, format, *args):
            pass
    handler = functools.partial(QuietHandler, directory=HERE)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    t = threading.Thread(target=srv.serve_forever, daemon=True)
    t.start()
    return srv, srv.server_address[1]


async def open_page(browser, port, tl):
    pg = await browser.new_page(viewport={"width": 1280, "height": 720})
    pg.on("pageerror", lambda e: print("PAGEERR", e, file=sys.stderr))
    await pg.goto(f"http://127.0.0.1:{port}/render.html")
    await pg.evaluate("tl => window.init(tl)", tl)
    return pg


async def main():
    out = os.path.abspath(sys.argv[1])
    args = sys.argv[2:]
    def opt(k, d=None):
        return args[args.index(k) + 1] if k in args else d

    with open(os.path.join(out, "timeline.json"), "r", encoding="utf-8") as f:
        tl = json.load(f)

    srv, port = start_server()
    async with async_playwright() as p:
        browser = await p.chromium.launch(args=["--disable-gpu", "--disable-gpu-vsync"])
        poster = opt("--poster")
        if poster:
            pg = await open_page(browser, port, tl)
            d = await pg.evaluate("t => window.frameJpeg(t, 0.85)", tl.get("poster_t", 8))
            os.makedirs(os.path.dirname(os.path.abspath(poster)), exist_ok=True)
            with open(poster, "wb") as pf:
                pf.write(base64.b64decode(d.split(",", 1)[1]))
            await browser.close()
            srv.shutdown()
            return

        fps = int(tl.get("fps", 24))
        total_frames = int(tl["duration"] * fps + 0.999999)
        # Strict cap <= 2 concurrent ffmpeg workers
        workers = min(2, max(1, int(opt("--workers", "1"))))
        per = (total_frames + workers - 1) // workers
        t0 = time.time()

        async def run_worker(w):
            a = w * per
            b = min(total_frames, a + per)
            if a >= b:
                return
            pg = await open_page(browser, port, tl)
            seg = os.path.join(out, f"part{w}.mp4")
            ff = subprocess.Popen(
                [
                    "ffmpeg", "-y", "-loglevel", "error",
                    "-f", "image2pipe", "-framerate", str(fps), "-c:v", "mjpeg", "-i", "-",
                    "-vf", "scale=in_range=full:out_range=tv,format=yuv420p",
                    "-c:v", "libx264", "-preset", "veryfast", "-threads", "2", "-crf", "25",
                    "-pix_fmt", "yuv420p", "-color_range", "tv", "-tune", "animation", seg,
                ],
                stdin=subprocess.PIPE,
            )
            assert ff.stdin is not None
            batch = 16
            for i in range(a, b, batch):
                ts = [j / fps for j in range(i, min(b, i + batch))]
                ds = await pg.evaluate("ts => ts.map(t => window.frameJpeg(t, 0.85))", ts)
                for d in ds:
                    ff.stdin.write(base64.b64decode(d.split(",", 1)[1]))
                if w == 0 and ((i - a) // batch) % 10 == 0:
                    print(f"w0 {i - a}/{b - a}  {time.time() - t0:.0f}s", flush=True)
            ff.stdin.close()
            rc = await asyncio.to_thread(ff.wait)
            if rc != 0:
                raise RuntimeError(f"ffmpeg worker {w} exited with {rc}")

        await asyncio.gather(*(run_worker(w) for w in range(workers)))
        await browser.close()
    srv.shutdown()
    parts = [f"file 'part{w}.mp4'" for w in range(workers) if os.path.exists(os.path.join(out, f"part{w}.mp4"))]
    with open(os.path.join(out, "parts.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(parts) + "\n")
    print(f"frames done {time.time() - t0:.0f}s", flush=True)


if __name__ == "__main__":
    asyncio.run(main())
