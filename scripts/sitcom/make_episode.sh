#!/usr/bin/env bash
# Build + render one or more Mind Games (CIE 0266 Psychology) episodes end to end.
# Uses read-only /Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv (<= 2 concurrent ffmpeg workers).
#   scripts/sitcom/make_episode.sh <topic-id> [<topic-id> ...]
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
PY="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python"
export PATH="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin:$PATH"

mkdir -p "$ROOT/public/videos/posters"
stamp() { echo "=== $T: $1 (+$(( $(date +%s) - S0 ))s)"; }

for T in "$@"; do
  S0=$(date +%s)
  echo "=== $T: lint"
  "$PY" lint_episode.py "episodes/$T.py"
  if [ ! -s "out/$T/audio.wav" ] || [ ! -s "out/$T/timeline.json" ] || [ "episodes/$T.py" -nt "out/$T/timeline.json" ] || [ "build.py" -nt "out/$T/timeline.json" ]; then
    echo "=== $T: voices + timeline"
    "$PY" build.py "episodes/$T.py" "out/$T"
    stamp "voices done"
  else
    echo "=== $T: voices + timeline cached"
  fi
  echo "=== $T: frames (--workers 1)"
  rm -f "out/$T"/part*.mp4
  "$PY" render.py "out/$T" --workers 1
  stamp "frames done"
  echo "=== $T: encode"
  ffmpeg -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy \
    -af "loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$ROOT/public/videos/$T.mp4"
  "$PY" render.py "out/$T" --poster "$ROOT/public/videos/posters/$T.jpg"
  rm -f "out/$T"/part*.mp4
  stamp "encoded + poster"
  echo "=== $T: done $(du -h "$ROOT/public/videos/$T.mp4" | cut -f1) $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$ROOT/public/videos/$T.mp4")s"
done
"$PY" gen_manifest.py
