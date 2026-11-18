# Shared cast, season list and beat helpers for "Mind Games: CIE 0266 Psychology" (Season 1).
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=...) and call the helpers below.

VOICES = {
    "vani":     dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":      dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":      dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "synapse":  dict(voice="am_fenrir", speed=0.98, lang="en-us", pitch=-1.5),
    "examiner": dict(voice="af_sarah", speed=1.02, lang="en-us"),
    "cashier":  dict(voice="am_puck", speed=1.12, lang="en-us"),
    "uncle":    dict(voice="am_michael", speed=1.0, lang="en-us", pitch=-1.0),
}

SHOW = "MIND GAMES"
SHOW_TAG = "CIE PSYCHOLOGY"
SEASON_NUM = 1
TEACHER = "synapse"   # Dr. Synapse runs the Neuro-Board and the 3 pause challenges

# Season 1 running order = the Year 11 Psychology Lab's topic order (lib/topics/meta.ts).
# (num, topic id, short topic name, episode title)
SEASON = [
    (1, "memory-and-forgetting", "Memory & Forgetting", "Seven Plus Or Minus Dad"),
    (2, "sleep-and-dreams", "Sleep & Dreams", "Manifest Destiny, Latent Chaos"),
    (3, "prosocial-behaviour", "Prosocial Behaviour", "Diffusion Of Dishwashing"),
    (4, "visual-perception", "Visual Perception", "Seeing Is Deceiving"),
    (5, "motivation-and-needs", "Motivation & Needs", "Tokens Of Affection"),
    (6, "language-development", "Language Development", "Wugs In The Hawker Centre"),
    (7, "research-methods", "Research Methods", "Confounded At Birth"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "mall", "checkout", "classroom", "hawker", "park",
        "beach", "desert", "polar", "mountain", "megacity", "reef", "weatherdesk"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "cushion", "book", "plate", "map", "dice", "calculator", "compass", "paintroller",
         "globe", "umbrella", "sunglasses", "binoculars", "bucket"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.5):
    num, _, _, t = _ep()
    B.append(dict(type="title", title=SHOW, tag=SHOW_TAG, sub=f"Season {SEASON_NUM} · Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else f"That's a wrap on Season {SEASON_NUM}!"
    B.append(dict(type="card", text=f"{SHOW}: {SHOW_TAG}", sub=sub, dur=dur))
