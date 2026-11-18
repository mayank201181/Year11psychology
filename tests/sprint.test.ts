import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

/** A tiny fake fact-bank drill for a topic. */
function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms"): Drill {
  const bank = [
    ["Name the brain structure essential for episodic memory consolidation", "hippocampus"],
    ["Give the term for consistency of a psychological measure", "reliability"],
    ["Name the endogenous pacemaker in the hypothalamus", "suprachiasmatic nucleus"],
    ["Give the term for spreading responsibility across bystanders", "diffusion of responsibility"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake drill",
    level,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.mean`,
    topicId,
    title: "Fake mean drill",
    level: 1,
    generate(rng) {
      const a = rng.int(4, 12);
      const b = a + 2;
      const c = a + 4;
      return {
        prompt: `Scores: ${a}, ${b}, ${c}. Mean?`,
        answer: { type: "number", value: b, tolerance: 0.01 },
        solution: [`(${a} + ${b} + ${c}) ÷ 3 = ${b}`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are paper1, paper2, methods and mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["paper1", "paper2", "methods", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("tables"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: paper modes take their strand's level 1–2 drills; methods takes research-methods; mixed takes all", () => {
  const p1 = firstTopic("Paper 1: Cognition, Behaviour & Experiments");
  const p2 = firstTopic("Paper 2: Perception, Development & Non-Experimental");
  const drills = [
    bankDrill(p1, 1),
    bankDrill(p1, 3, "hard"),
    bankDrill(p2, 2),
    bankDrill("research-methods", 1),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("paper1", drills).map((d) => d.id), [`${p1}.terms`]);
  assert.deepEqual(sprintPool("methods", drills).map((d) => d.id), ["research-methods.terms"]);
  assert.deepEqual(
    sprintPool("mixed", drills).map((d) => d.id).sort(),
    [`${p1}.terms`, `${p2}.terms`, "research-methods.terms"].sort(),
  );
});

test("items carry a checkable answer (preserving tolerance) and a display of the correct answer", () => {
  const p1 = firstTopic("Paper 1: Cognition, Behaviour & Experiments");
  const pool = sprintPool("mixed", [bankDrill(p1, 1), numberDrill(p1)]);
  const rng = makeRng(42);
  const keys = new Set<string>();
  for (let i = 0; i < 200; i++) {
    const it = sprintItem(pool, rng)!;
    assert.ok(it, "always produces an item");
    assert.ok(it.prompt && it.answerText && it.key);
    keys.add(it.key);
    if (it.answer.type === "text") {
      assert.equal(it.answerText, it.answer.accept[0]);
      assert.equal(checkAnswer(it.answer, it.answer.accept[0].toUpperCase()).status, "correct");
    } else if (it.answer.type === "number") {
      assert.equal(it.answerText, String(it.answer.value));
      assert.equal(it.answer.tolerance, 0.01);
      assert.equal(checkAnswer(it.answer, String(it.answer.value)).status, "correct");
    }
  }
  assert.ok(keys.size > 10, "varied items");
});

test("a drill that throws is skipped, not fatal", () => {
  const p1 = firstTopic("Paper 1: Cognition, Behaviour & Experiments");
  const broken: Drill = { id: `${p1}.broken`, topicId: p1, title: "Broken", level: 1, generate() { throw new Error("boom"); } };
  const pool = sprintPool("paper1", [broken, bankDrill(p1, 1)]);
  const rng = makeRng(7);
  for (let i = 0; i < 50; i++) assert.ok(sprintItem(pool, rng));
  assert.equal(sprintItem(sprintPool("paper1", [broken]), makeRng(3)), null);
});
