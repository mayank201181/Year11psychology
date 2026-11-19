"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITCOM_EPISODES, sitcomEpisodeFor } from "@/lib/sitcom";
import { STRANDS } from "@/lib/topics/meta";
import { formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export interface WatchTopicItem {
  id: string;
  num: number;
  title: string;
  icon: string;
  strand: string;
  summary: string;
}

export function WatchHub({ topics }: { topics: WatchTopicItem[] }) {
  const [strand, setStrand] = useState<string>("All");
  const epDone = useWatchedEpisodes();

  const strands = ["All", ...STRANDS];
  const visible = strand === "All" ? topics : topics.filter((t) => t.strand === strand);
  const heroPoster = SITCOM_EPISODES[0]?.poster ?? "/videos/posters/memory-and-forgetting.jpg";

  return (
    <div className="space-y-6 pb-8">
      <section className="card overflow-hidden border-2 border-brand/30 p-5 sm:p-6">
        <div className="grid items-center gap-5 md:grid-cols-12">
          <div className="space-y-3 md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip border-0 bg-brand-soft text-brand">📺 7 Narrated Sitcom Episodes</span>
              <span className="chip border-0 bg-accent-soft text-warn">🎯 Examiner Chen&apos;s Trap Beats</span>
              <span className="chip">⭐ {Object.keys(epDone).length}/{topics.length} Watched</span>
            </div>
            <h1 className="text-2xl font-black leading-tight sm:text-3xl">
              Mind Games: CIE 0266 Psychology TV &amp; Watch Hub
            </h1>
            <p className="text-sm text-ink-2 sm:text-base">
              Binge-watch <strong>Vani, Dr. Synapse &amp; Examiner Chen</strong> turning every Cambridge IGCSE Psychology (0266) topic into a narrated animated comedy episode — with Neuro-Board diagrams, mark-scheme traps, and 3 interactive pause challenges per topic!
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link href="/episodes" className="btn btn-primary">
                📺 Open Binge Player (/episodes)
              </Link>
              <Link href="/formulas" className="btn btn-secondary">
                🎯 Marks-Saver &amp; Key Studies Vault
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            {SITCOM_EPISODES.length > 0 ? (
              <Image
                src={heroPoster}
                alt="Mind Games: CIE 0266 Psychology — Vani, Mum, Dad and Dr. Synapse"
                width={960}
                height={540}
                className="h-auto w-full rounded-2xl border border-line object-cover"
                priority
              />
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-2xl border border-line bg-surface-2 text-4xl">
                🧠📺
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {strands.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStrand(s)}
            className={`btn btn-sm ${strand === s ? "btn-primary" : "btn-secondary"}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((t) => {
          const ep = sitcomEpisodeFor(t.id);
          return (
            <article key={t.id} className="card flex flex-col justify-between gap-3 p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="chip text-xs">
                    {t.icon} Ep {String(t.num).padStart(2, "0")}
                  </span>
                  <div className="flex gap-1">
                    {ep ? <span className="chip text-xs">{formatDuration(ep.durationSec)}</span> : null}
                    {epDone[t.id] ? <span className="chip border-0 bg-good-soft text-good">Watched ✓</span> : null}
                  </div>
                </div>
                <h2 className="mt-2 text-lg font-extrabold">{t.title}</h2>
                {ep ? (
                  <p className="mt-1 text-sm font-semibold text-brand">&ldquo;{ep.title}&rdquo;</p>
                ) : null}
                <p className="mt-1 text-sm text-ink-2">{ep?.logline || t.summary}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                <Link href={`/topic/${t.id}?tab=watch`} className="btn btn-primary btn-sm">
                  📺 Watch
                </Link>
                <Link href={`/topic/${t.id}?tab=explore`} className="btn btn-secondary btn-sm">
                  🎛️ Explore
                </Link>
                <Link href={`/topic/${t.id}?tab=revise`} className="btn btn-secondary btn-sm">
                  🎯 Traps
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
