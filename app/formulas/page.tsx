import type { Metadata } from "next";
import Link from "next/link";
import type { FormulaFact, Misconception, Mnemonic, Topic } from "@/lib/types";
import { TOPICS } from "@/lib/server/content";
import { STRANDS } from "@/lib/topics/meta";
import { Rich, RichInline } from "@/components/Rich";
import { PrintButton, PrintStyles } from "@/components/Certificate";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "CIE 0266 Key Studies, Terms & Marks-Saver Vault",
  description: "Every Cambridge IGCSE Psychology (0266) named study, theory, research-methods term, mnemonic (GRAVE, DRIP) and Never Write → Write Instead mark-scheme trap in one printable vault.",
};

const STRAND_STYLE: Record<string, { text: string; border: string; dot: string }> = {
  "Paper 1: Cognition, Behaviour & Experiments": { text: "text-s-algebra", border: "border-s-algebra", dot: "bg-s-algebra" },
  "Paper 2: Perception, Development & Non-Experimental": { text: "text-s-ratio", border: "border-s-ratio", dot: "bg-s-ratio" },
};

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const formulasOf = (t: Topic): FormulaFact[] => t.learn?.formulas ?? [];
const trapsOf = (t: Topic): Misconception[] => t.learn?.misconceptions ?? [];
const mnemonicsOf = (t: Topic): Mnemonic[] => t.learn?.mnemonics ?? [];

export default function FormulasPage() {
  const groups = STRANDS.map((strand) => ({
    strand,
    topics: TOPICS.filter((t) => t.strand === strand && (formulasOf(t).length > 0 || trapsOf(t).length > 0)),
  })).filter((g) => g.topics.length > 0);
  const formulaCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + formulasOf(t).length, 0), 0);
  const trapCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + trapsOf(t).length, 0), 0);
  const topicCount = groups.reduce((n, g) => n + g.topics.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-black uppercase tracking-wider text-brand">Cambridge IGCSE Psychology (0266)</div>
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl print:text-xl">
            🎯 Key Studies, Terms &amp; Marks-Saver Vault
          </h1>
          <p className="mt-1 max-w-2xl text-ink-2 print:hidden">
            Every compulsory named study, core theory, research-methods definition, mnemonic (<strong>GRAVE</strong>, <strong>DRIP</strong>) and <strong>Never Write ❌ → Write Instead ✅</strong> mark-scheme comparison across Paper 1 and Paper 2.
          </p>
          {formulaCount || trapCount ? (
            <p className="mt-1 text-sm font-bold text-ink-2 print:text-xs print:font-normal">
              {formulaCount} key studies &amp; terms · {trapCount} mark-scheme traps · {topicCount} topic{topicCount === 1 ? "" : "s"}
              <span className="hidden print:inline"> · Year 11 IGCSE Psychology (0266)</span>
            </p>
          ) : null}
        </div>
        {formulaCount ? <PrintButton label="Print vault" /> : null}
      </header>

      {groups.length > 1 ? (
        <nav className="no-print flex flex-wrap gap-2" aria-label="Jump to a paper">
          {groups.map((g) => (
            <a key={g.strand} href={`#strand-${slug(g.strand)}`} className="btn btn-secondary btn-sm min-h-10">
              <span aria-hidden className={`h-2 w-2 rounded-full ${STRAND_STYLE[g.strand]?.dot ?? "bg-brand"}`} />
              {g.strand}
            </a>
          ))}
        </nav>
      ) : null}

      {!groups.length ? (
        <section className="card p-6 text-center sm:p-8">
          <div className="text-4xl" aria-hidden>
            🧠
          </div>
          <h2 className="mt-2 text-xl font-extrabold">The CIE 0266 Vault is loading</h2>
          <p className="mx-auto mt-2 max-w-md text-ink-2">Key studies, terms and mark-scheme traps appear here automatically from each topic.</p>
          <Link href="/topics" className="btn btn-primary mt-5">
            Browse topics
          </Link>
        </section>
      ) : (
        groups.map((g) => {
          const st = STRAND_STYLE[g.strand] ?? { text: "text-brand", border: "border-brand", dot: "bg-brand" };
          return (
            <section key={g.strand} id={`strand-${slug(g.strand)}`} className="scroll-mt-20 space-y-5" aria-labelledby={`strand-${slug(g.strand)}-h`}>
              <h2 id={`strand-${slug(g.strand)}-h`} className={`flex items-center gap-2 text-lg font-black break-after-avoid print:mb-2 print:text-base ${st.text}`}>
                <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${st.dot}`} />
                {g.strand}
              </h2>
              <div className="space-y-6">
                {g.topics.map((t) => (
                  <article
                    key={t.id}
                    className={`card break-inside-avoid border-l-4 p-4 sm:p-5 print:mb-3 print:rounded-lg print:p-2.5 print:text-[10pt] print:shadow-none ${st.border}`}
                    aria-labelledby={`f-${t.id}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 id={`f-${t.id}`} className="text-lg font-extrabold leading-snug">
                        <span aria-hidden>{t.icon} </span>
                        {t.title}
                      </h3>
                      <div className="no-print flex flex-wrap gap-2">
                        <Link href={`/topic/${t.id}?tab=revise`} className="btn btn-secondary btn-sm">
                          🎯 Topic Marks-Savers
                        </Link>
                        <Link href={`/topic/${t.id}?tab=learn`} className="btn btn-ghost btn-sm text-brand">
                          Lessons →
                        </Link>
                      </div>
                    </div>

                    {trapsOf(t).length > 0 ? (
                      <div className="mt-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-brand">
                          🎯 Paper Mark-Scheme Traps: Never Write ❌ → Write Instead ✅
                        </h4>
                        <ul className="mt-2 grid gap-2.5 lg:grid-cols-2">
                          {trapsOf(t).map((m, i) => (
                            <li key={`${t.id}-trap-${i}`} className="grid overflow-hidden rounded-xl border border-line text-sm sm:grid-cols-2">
                              <div className="bg-bad-soft p-3">
                                <div className="text-[0.68rem] font-black uppercase tracking-wider text-bad">❌ Never Write</div>
                                <p className="mt-0.5 line-through decoration-bad/60">
                                  <RichInline text={m.wrong} />
                                </p>
                              </div>
                              <div className="bg-good-soft p-3">
                                <div className="text-[0.68rem] font-black uppercase tracking-wider text-good">✅ Write Instead</div>
                                <p className="mt-0.5 font-medium">
                                  <RichInline text={m.right} />
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {mnemonicsOf(t).length > 0 ? (
                      <div className="mt-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-ink-2">🧩 Memory Tricks &amp; Mnemonics</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {mnemonicsOf(t).map((mn, i) => (
                            <div key={`${t.id}-mn-${i}`} className="rounded-xl bg-surface-2 px-3 py-2 text-xs">
                              <span className="font-black text-brand">{mn.device}</span> ({mn.topic}): <span className="text-ink-2">{mn.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-4">
                      <h4 className="text-xs font-black uppercase tracking-wider text-ink-2">📖 Key Studies, Theories &amp; Definitions</h4>
                      <dl className="mt-2 grid gap-x-6 gap-y-2 divide-y divide-line md:grid-cols-2 md:divide-y-0">
                        {formulasOf(t).map((f, i) => (
                          <div key={`${t.id}-${i}`} className="border-b border-line/60 py-2 last:border-b-0 print:py-1.5">
                            <dt className="text-xs font-extrabold uppercase tracking-wide text-brand print:text-[8pt]">
                              <RichInline text={f.name} />
                            </dt>
                            <dd className="mt-0.5">
                              <Rich text={f.formula} className="text-sm font-semibold text-ink print:text-[10pt]" />
                              {f.note ? <Rich text={f.note} className="mt-0.5 text-xs text-ink-2 print:text-[8.5pt]" /> : null}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
