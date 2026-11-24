import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "visual-perception-m1",
    title: "MCQ Paper 1: Sensation, Depth Cues, Constancy & Gestalt",
    questions: [
      {
        kind: "mcq",
        id: "visual-perception-m1-q01",
        question:
          "Which statement accurately distinguishes **sensation** from **perception** in CIE 0266 Psychology?",
        options: [
          "Sensation is the physiological detection and transduction of light by retinal receptors, whereas perception is the cortical organisation and interpretation of those neural signals into meaning.",
          "Sensation occurs in the occipital cortex using past memories, whereas perception occurs passively in the cornea and lens.",
          "Sensation only operates with two eyes open, whereas perception only operates when one eye is closed.",
          "Sensation refers to emotional feelings about art, whereas perception refers to optical reflexes in the pupil.",
        ],
        answerIndex: 0,
        explanation:
          "Sensation is the raw receptor stage (rods and cones transducing light wavelengths into nerve impulses along the optic nerve), whereas perception is the brain's active selection, organisation, and interpretation of those signals into recognisable 3D objects.",
        difficulty: "warmup",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Separate raw retinal detection from brain interpretation.",
        ],
        strategy: "Receptor stage vs cortical stage",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q02",
        question:
          "Which list contains **ONLY monocular depth cues** (depth cues that still operate when one eye is covered)?",
        options: [
          "Retinal disparity, linear perspective, and occlusion",
          "Linear perspective, height in plane, occlusion, relative size, and texture gradient",
          "Convergence, retinal disparity, and size constancy",
          "Texture gradient, convergence, and figure–ground",
        ],
        answerIndex: 1,
        explanation:
          "Linear perspective, height in plane, occlusion, relative size, and texture gradient are all monocular (pictorial) depth cues requiring only one eye. Retinal disparity and convergence are binocular depth cues requiring both eyes.",
        difficulty: "warmup",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Eliminate any list containing 'retinal disparity' or 'convergence' — both require two eyes!",
        ],
        strategy: "Use L-R-O-H-T monocular checklist",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q03",
        question:
          "An artist paints two hot-air balloons of identical real-world model type in a landscape below the horizon: Balloon X is painted smaller and closer to the horizon line, while Balloon Y is painted larger near the bottom edge of the canvas and partially overlaps a tree trunk. Which depth cues make Balloon X look **further away**?",
        options: [
          "Retinal disparity and oculomotor convergence",
          "Shape constancy and Gestalt similarity",
          "Relative size and height in plane",
          "Figure–ground reversal and closure",
        ],
        answerIndex: 2,
        explanation:
          "On a 2D canvas, Balloon X's smaller drawn size relative to an identical balloon uses relative size, while its higher position closer to the horizon uses height in plane (both monocular pictorial cues).",
        difficulty: "core",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Remember a flat painting cannot produce binocular disparity or eye-muscle convergence.",
          "Match 'smaller image' + 'higher toward the horizon' to two monocular cues.",
        ],
        strategy: "Map stem features to pictorial cues",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q04",
        question:
          "How does the binocular depth cue of **convergence** inform the brain that a bee hovering 20 cm in front of your nose is very close?",
        options: [
          "Each retina captures a slightly different horizontal image of the bee, which the visual cortex fuses into a single 3D view.",
          "The bee's silhouette overlaps and conceals the garden hedge behind it, signalling that the unblocked object lies closer.",
          "Parallel edges of the garden path behind the bee appear to narrow towards a distant vanishing point on the horizon.",
          "Extraocular muscles rotate both eyeballs sharply inwards, sending strong proprioceptive tension signals to the brain.",
        ],
        answerIndex: 3,
        explanation:
          "Convergence is an oculomotor binocular cue: focusing on a near object requires turning both eyes inward toward the nose, generating strong muscle-stretch feedback compared with relaxed parallel eyes when viewing distant horizons.",
        difficulty: "core",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Distinguish muscle rotation (**convergence**) from comparing two retinal pictures (**retinal disparity**).",
          "What do your eyeballs physically do when you look at the tip of your nose?",
        ],
        strategy: "Muscle tension vs image comparison",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q05",
        question:
          "As a round dinner plate tilts away on a dining table, its projection on your retina flattens into a narrow **ellipse** — yet you continue to experience a **circular** plate. Which phenomenon is this?",
        options: [
          "Shape constancy",
          "Size constancy",
          "Colour constancy",
          "Binocular retinal disparity",
        ],
        answerIndex: 0,
        explanation:
          "Shape constancy maintains perception of an object's true geometric form (a circle) despite changes in viewing angle that alter the geometric outline of its 2D retinal sensation (an ellipse).",
        difficulty: "warmup",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Notice what property stayed constant despite tilting: circle vs ellipse!",
        ],
        strategy: "Identify the invariant property",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q06",
        question:
          "When looking at **Rubin's Vase**, viewers alternate between seeing **one white goblet** in the centre or **two black facial profiles** facing each other, never seeing both as focal objects at once. Which **Gestalt principle** and **illusion type** does Rubin's Vase demonstrate?",
        options: [
          "Gestalt proximity; geometric distortion illusion",
          "Gestalt figure–ground organisation; ambiguous figure",
          "Gestalt similarity; illusory fiction",
          "Gestalt continuity; binocular disparity",
        ],
        answerIndex: 1,
        explanation:
          "Rubin's Vase demonstrates reversible figure–ground segregation: whichever region owns the shared contour becomes the foreground 'figure' while the other recedes into 'ground', making it a classic ambiguous figure.",
        difficulty: "warmup",
        guideRef: "gestalt-and-illusions",
        hints: [
          "One unchanging image flips between two valid objects — what illusion category is that?",
        ],
        strategy: "Pair Gestalt law with illusion family",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q07",
        question:
          "In the **Kanizsa Triangle**, three black circles with wedge-shaped cut-outs make viewers perceive a bright white triangle with crisp edges even though **zero lines** are drawn between the circles. Which **Gestalt principle** creates this **fiction** illusion?",
        options: [
          "Similarity",
          "Proximity",
          "Closure",
          "Height in plane",
        ],
        answerIndex: 2,
        explanation:
          "Gestalt closure causes the visual cortex to fill in missing contour segments between aligned Pac-Man notches so we perceive a complete, closed white triangle floating in front of three full discs.",
        difficulty: "warmup",
        guideRef: "gestalt-and-illusions",
        hints: [
          "Which Gestalt rule bridges missing gaps to complete an unfinished outline?",
        ],
        strategy: "Gaps filled = Closure",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q08",
        question:
          "On a periodic table poster, noble gases on the right are shaded purple while alkali metals on the left are shaded orange, helping chemistry students instantly group elements by family even across distant rows. Which **Gestalt law** is the designer primarily exploiting?",
        options: [
          "Closure",
          "Occlusion",
          "Linear perspective",
          "Similarity",
        ],
        answerIndex: 3,
        explanation:
          "Elements that share visual features — here identical purple or orange colour — are perceptually grouped together via the Gestalt principle of similarity.",
        difficulty: "warmup",
        guideRef: "gestalt-and-illusions",
        hints: [
          "Students group elements because they share the same *colour*.",
        ],
        strategy: "Match visual attribute to Gestalt rule",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q09",
        question:
          "Which statement accurately describes the perceptual distortion in the **Müller-Lyer** and **Ebbinghaus (Titchener circles)** illusions?",
        options: [
          "In Müller-Lyer, the outward-fin shaft (`>—<`) looks longer than the arrowhead shaft (`<—>`); in Ebbinghaus, the central circle framed by small circles looks larger than the one framed by large circles.",
          "In Müller-Lyer, the arrowhead shaft (`<—>`) looks longer than the outward-fin shaft (`>—<`); in Ebbinghaus, the central circle framed by large circles looks larger than the one framed by small circles.",
          "In Müller-Lyer, the outward-fin shaft (`>—<`) looks longer than the arrowhead shaft (`<—>`); in Ebbinghaus, the central circle framed by large circles looks larger than the one framed by small circles.",
          "In Müller-Lyer, the arrowhead shaft (`<—>`) looks longer than the outward-fin shaft (`>—<`); in Ebbinghaus, the central circle framed by small circles looks larger than the one framed by large circles.",
        ],
        answerIndex: 0,
        explanation:
          "Both are monocular geometric size/length distortions: outward fins (`>—<`) stretch perceived shaft length in Müller-Lyer, while small surrounding inducer circles enlarge the perceived size of the central circle via relative-size contrast in Ebbinghaus.",
        difficulty: "core",
        guideRef: "gestalt-and-illusions",
        hints: [
          "Visualise `>———<` vs `<———>` — which one looks stretched outward?",
          "Does a scoop of ice cream look bigger on a tiny saucer or a giant platter?",
        ],
        strategy: "Verify direction of both distortions",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q10",
        question:
          "Why is the **Necker Cube** classified as an **ambiguous figure** rather than a geometric distortion or fiction?",
        options: [
          "Because the visual cortex invents illusory subjective borders that are not physically printed anywhere on the stimulus page.",
          "Because the wireframe lacks depth cues specifying which square face is closer, causing the brain to alternate multistably between two equally valid 3D orientations.",
          "Because misplaced size-constancy scaling stretches the upper horizontal edge so it appears physically longer than the identical lower edge.",
          "Because binocular retinal disparity forces the left and right eyes to focus on different corners, preventing any stable 3D shape from forming.",
        ],
        answerIndex: 1,
        explanation:
          "A wireframe Necker cube has zero occlusion or perspective taper to settle which square sits in front, so the visual system flips back and forth between viewing it from slightly above-right versus below-left.",
        difficulty: "core",
        guideRef: "gestalt-and-illusions",
        hints: [
          "Ask what happens when you stare at a Necker cube for 10 seconds: does a line stretch, or does the front face flip?",
          "Link multistable flipping to missing occlusion/perspective cues.",
        ],
        strategy: "Match mechanism to illusion category",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q11",
        question:
          "A photographer snaps a picture down a cobbled alleyway: near the bottom of the photo, individual cobblestones look wide and rough, whereas further up the alley they pack into a fine, smooth grey blur. Which monocular depth cue is this?",
        options: [
          "Occlusion",
          "Convergence",
          "Texture gradient",
          "Shape constancy",
        ],
        answerIndex: 2,
        explanation:
          "Texture gradient refers to the progressive transition from coarse, distinct, widely spaced surface elements nearby to fine, densely packed elements at greater distances.",
        difficulty: "warmup",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Focus on coarse vs fine surface grain across distance.",
        ],
        strategy: "Spot surface grain changes",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q12",
        question:
          "At what viewing distances are **binocular depth cues** (retinal disparity and convergence) **least** useful compared with monocular cues?",
        options: [
          "When threading a needle 25 cm from your eyes",
          "When catching a tennis ball 1.5 metres away",
          "When pouring tea into a mug at arm's length",
          "When judging which of two mountain peaks 4 kilometres away is closer",
        ],
        answerIndex: 3,
        explanation:
          "Beyond roughly 6–10 metres, our eyes point almost completely parallel (zero convergence difference) and the 6.3 cm gap between eyes produces negligible retinal disparity — so at 4 km we rely on monocular cues like occlusion, relative size, and aerial/texture gradients.",
        difficulty: "core",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Compare a 6.3 cm eye separation against 25 cm vs 4,000 metres!",
          "At huge distances, do your eyes cross inward at all?",
        ],
        strategy: "Test geometric limits of eye separation",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q13",
        question:
          "When two curved garden hoses cross each other in a pile of leaves, you effortlessly perceive two smooth intersecting hoses rather than four sharp V-shaped bends meeting at a point. Which **Gestalt principle** explains this?",
        options: [
          "Continuity (good continuation)",
          "Closure (contour completion)",
          "Proximity (spatial closeness)",
          "Similarity (shared features)",
        ],
        answerIndex: 0,
        explanation:
          "Gestalt continuity (good continuation) states that the visual system groups aligned segments into smooth, continuous curves rather than abrupt angular changes in direction.",
        difficulty: "core",
        guideRef: "gestalt-and-illusions",
        hints: [
          "Smooth unbroken trajectories vs sharp V-turns = which 'C' in F-P-S-C-C?",
          "Contrast **continuity** (smooth crossing lines) with **closure** (filling gaps in a closed shape).",
        ],
        strategy: "Distinguish Continuity vs Closure",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q14",
        question:
          "A white school shirt reflects warm orange-heavy wavelengths under tungsten bedroom bulbs at 7 a.m. and cool blue-heavy wavelengths in outdoor shade at noon — yet Vanishree perceives the shirt as **white** in both places. This illustrates:",
        options: [
          "Retinal disparity",
          "Colour constancy",
          "Gestalt proximity",
          "The Ponzo illusion",
        ],
        answerIndex: 1,
        explanation:
          "Colour constancy enables the visual cortex to discount the colour temperature of surrounding illumination so an object's perceived surface colour remains stable despite shifting reflected wavelengths.",
        difficulty: "warmup",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Wavelength sensation changed (orange vs blue tint), yet perceived surface hue stayed white!",
        ],
        strategy: "Match invariant property to constancy type",
      },
      {
        kind: "mcq",
        id: "visual-perception-m1-q15",
        question:
          "A standing lamppost 10 metres away casts a 5.0 mm vertical image on your retina. When you walk away to **50 metres**, the retinal image shrinks to **1.0 mm**, yet the lamppost still looks 4 metres tall rather than 80 cm tall because:",
        options: [
          "The eye's lens and cornea physically magnify the incoming retinal image fivefold to keep its height at 5.0 mm regardless of distance.",
          "Binocular convergence and retinal disparity increase fivefold at 50 metres, forcing extraocular muscles to double perceived height.",
          "Size constancy automatically scales the fivefold smaller retinal sensation up using monocular distance cues showing the lamppost is five times further away.",
          "Shape constancy adjusts the lamppost's geometric outline from a rectangle into a narrower vertical bar without using distance cues.",
        ],
        answerIndex: 2,
        explanation:
          "In size constancy, Perceived Size ≈ Retinal Size × Perceived Distance: shrinking the retinal image to 1/5 while monocular cues register 5× greater distance keeps perceived physical height invariant.",
        difficulty: "challenge",
        guideRef: "sensation-depth-constancy",
        hints: [
          "Does the human eye have an optical zoom lens, or does the *cortex* compensate?",
          "Check `(1/5 retinal size) × (5× perceived distance) = 1`!",
        ],
        strategy: "Apply size-constancy scaling product",
      },
    ],
  },
  {
    id: "visual-perception-m2",
    title: "MCQ Paper 2: Gibson's Direct Theory vs Gregory's Constructivist Theory",
    questions: [
      {
        kind: "mcq",
        id: "visual-perception-m2-q01",
        question:
          "Which pairing correctly matches **J. J. Gibson's Direct Theory** and **Richard Gregory's Constructivist Theory** to their processing directions and positions on the nature–nurture debate?",
        options: [
          "Gibson: top-down & nurture; Gregory: bottom-up & nature",
          "Gibson: top-down & nature; Gregory: bottom-up & nurture",
          "Gibson: bottom-up & nurture; Gregory: top-down & nature",
          "Gibson: bottom-up (data-driven) & nature; Gregory: top-down (schema-driven) & nurture",
        ],
        answerIndex: 3,
        explanation:
          "Gibson's Direct Theory is bottom-up (starting directly from rich environmental light data with innate sensitivity to affordances — nature), whereas Gregory's Constructivist Theory is top-down (using learned schemas and past experience to build perceptual hypotheses — nurture).",
        difficulty: "warmup",
        guideRef: "gibson-direct-theory",
        hints: [
          "Use the mnemonic: Gi**B**son = **B**ottom-up; Gre**G**ory = **G**uessing from schemas (Top-down).",
        ],
        strategy: "Use GiBson / GreGory mnemonic",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q02",
        question:
          "In **Gibson's Ecological / Direct Theory**, what term describes the **action possibilities** that a surface or object directly offers an organism (e.g. a flat knee-high stump *offers sitting*, a handle *offers pulling*)?",
        options: [
          "Affordances",
          "Perceptual hypotheses",
          "Subjective contours",
          "Retinal disparities",
        ],
        answerIndex: 0,
        explanation:
          "Gibson coined 'affordances' to describe functional action opportunities directly perceived in the environment without needing to categorise or label objects via stored memory schemas first.",
        difficulty: "warmup",
        guideRef: "gibson-direct-theory",
        hints: [
          "Think of the verb 'to afford' — 'a rigid horizontal floor *affords* walking'.",
        ],
        strategy: "Match ecological term to definition",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q03",
        question:
          "As a cyclist rides rapidly down a tree-lined avenue, all visual texture streams radially outward from the exact point on the horizon she is steering toward. In **Gibson's Direct Theory**, what are this streaming pattern and its stationary centre called?",
        options: [
          "Perceptual defence and Galvanic Skin Response",
          "Optic flow pattern and the focus of expansion",
          "Misplaced size-constancy scaling and vanishing apex",
          "Figure–ground reversal and closure",
        ],
        answerIndex: 1,
        explanation:
          "Gibson showed that forward movement generates a radial optic flow pattern whose motionless centre — the focus of expansion — directly specifies the observer's heading without top-down calculation.",
        difficulty: "core",
        guideRef: "gibson-direct-theory",
        hints: [
          "Texture 'flows' across the optic array outward from one stationary point ahead.",
          "Eliminate Gregory's and McGinnies's concepts.",
        ],
        strategy: "Link movement to optic flow",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q04",
        question:
          "In **Gibson & Walk's (1960)** *Visual Cliff* experiment with **36 human infants** aged 6 to 14 months, what happened among the **27 infants** who crawled off the central board?",
        options: [
          "All 27 crawled equally onto both the shallow and deep sides when called by their mothers.",
          "None of the 27 crossed onto either side because glass reflections frightened them.",
          "All 27 (100%) crawled onto the shallow side, whereas only 3 of the 27 (11%) crawled onto the deep cliff side (89% refused).",
          "24 of the 27 crawled onto the deep side after patting the solid glass.",
        ],
        answerIndex: 2,
        explanation:
          "In Gibson & Walk (1960), 9 of 36 infants stayed on the board; of the 27 who moved, 100% crossed the shallow side at least once while 24/27 (89%) refused the deep side and only 3/27 (11%) crossed onto the cliff glass.",
        difficulty: "core",
        guideRef: "gibson-direct-theory",
        hints: [
          "Remember 9 infants stayed on the board, leaving 27 mobile crawlers.",
          "Almost nine in ten crawlers refused the deep side!",
        ],
        strategy: "Quote exact 27/27 vs 3/27 figures",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q05",
        question:
          "Why was testing **day-old chicks and 1-day-old goat kids** in **Gibson & Walk (1960)** crucial for addressing a major limitation of the human infant data?",
        options: [
          "Because precocial chicks and goat kids rely solely on binocular retinal disparity, proving monocular texture gradients are unnecessary for depth perception.",
          "Because human infants could not perceive red-and-white checkerboard contrasts clearly until age two, requiring animal species with sharper colour vision.",
          "Because human infants in the study crossed the deep side 89% of the time, so Gibson & Walk needed non-human species to obtain any evidence of cliff avoidance.",
          "Because human infants could only be tested once crawling at 6–14 months (after months of visual learning), whereas day-old chicks and kids had minimal prior experience yet 0% crossed the deep side.",
        ],
        answerIndex: 3,
        explanation:
          "A nurture critic could argue 6–14-month human babies had already learned about drops during half a year of visual experience; precocial animals walking within 24 hours of birth had no chance to learn by falling, yet 100% avoided the deep side.",
        difficulty: "challenge",
        guideRef: "gibson-direct-theory",
        hints: [
          "Ask: how old were the human infants (6–14 months), and why couldn't newborns crawl?",
          "How do <24-hour-old chicks rule out postnatal trial-and-error learning?",
        ],
        strategy: "Evaluate cross-species nativist control",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q06",
        question:
          "How does **Gregory's (1970) Constructivist Theory** explain why the **upper horizontal bar** in the **Ponzo illusion** looks longer than the identical lower bar?",
        options: [
          "Misplaced size-constancy scaling: converging lines trigger a top-down 3D perspective hypothesis that the upper bar is further away, so the brain scales up its perceived length on a 2D page.",
          "Bottom-up optic flow invariants: texture streaming outward from the focus of expansion directly magnifies the upper bar without needing stored schemas or past experience.",
          "Gestalt figure–ground reversal: the converging rails alternate between foreground and background, causing the brain to flip between perceiving the upper or lower bar as longer.",
          "Perceptual defence and emotional set: anxiety triggered by converging railway tracks suppresses conscious awareness of the lower bar so it appears shortened compared with the upper bar.",
        ],
        answerIndex: 0,
        explanation:
          "Gregory explained geometric illusions via misplaced size-constancy scaling: 2D converging rails mimic 3D distance, tricking the cortex into enlarging the 'more distant' upper bar despite identical retinal length.",
        difficulty: "core",
        guideRef: "gregory-constructivist",
        hints: [
          "Look for Gregory's signature mechanism: **misplaced size-constancy scaling**.",
          "Which bar appears 'further away' between converging railway tracks?",
        ],
        strategy: "Apply misplaced size-constancy scaling",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q07",
        question:
          "According to **Gregory's 3D corner ('carpentered-world') explanation** of the **Müller-Lyer illusion**, why does the shaft with **outward-flaring fins** (`>———<`) appear longer than the shaft with **inward arrowheads** (`<———>`)?",
        options: [
          "Outward fins resemble the near outside corner of a building jutting closer (scaled up), whereas arrowheads resemble the distant inside corner of a room receding away (scaled down).",
          "Outward fins resemble the inside corner of a room receding further away (scaled up), whereas arrowheads resemble the near outside corner of a building jutting closer (scaled down).",
          "Outward fins increase binocular convergence and retinal disparity across the shaft, whereas arrowheads relax the extraocular muscles so the line appears closer and shorter.",
          "Outward fins trigger Gestalt closure that extends the shaft past the page border, whereas arrowheads trigger figure–ground segregation that isolates the shaft from its background.",
        ],
        answerIndex: 1,
        explanation:
          "In carpentered architectural environments, `>—<` matches ceiling/floor lines meeting a distant interior wall corner (scaled UP for distance), whereas `<—>` matches roof/base lines of a near exterior corner (scaled DOWN).",
        difficulty: "core",
        guideRef: "gregory-constructivist",
        hints: [
          "Match `>—<` vs `<—>` to an **inside room corner** (far) vs **outside building corner** (near).",
          "Which one gets scaled UP by size constancy?",
        ],
        strategy: "Visualise 3D room vs building corners",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q08",
        question:
          "In **Haber & Levin's (2001)** outdoor field experiments, participants judged the sizes (`n = 109`) and distances up to 100 m (`n = 9`) of **45 real objects** split into three categories. Which category yielded the **highest accuracy and lowest variability**?",
        options: [
          "15 unfamiliar black geometric cardboard cut-outs (circles, triangles, rectangles)",
          "15 familiar variant-sized objects (such as Christmas trees and teddy bears)",
          "15 familiar invariant-sized objects with standard known sizes (such as basketballs, 2-litre soda bottles, and stop signs)",
          "15 tachistoscopically flashed taboo words",
        ],
        answerIndex: 2,
        explanation:
          "Haber & Levin (2001) found that familiar invariant-sized objects (whose real size is tightly stored in long-term memory schemas) produced the most accurate size estimates (even from memory alone!) and significantly more accurate distance estimates than unfamiliar cut-outs.",
        difficulty: "core",
        guideRef: "gregory-constructivist",
        hints: [
          "Which objects have an exact, unchanging standard real-world size stored in memory?",
          "Contrast 'invariant-sized' (basketball) with 'variant-sized' (Christmas tree) and 'unfamiliar' cut-outs.",
        ],
        strategy: "Compare Haber & Levin's 3 object types",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q09",
        question:
          "Why is **Haber & Levin (2001)** especially valuable support for **Gregory's Constructivist Theory** when debating **Gibson**?",
        options: [
          "Because it tested newborn infants within 24 hours of birth on real grassy fields, ruling out the criticism that top-down schemas depend on cultural upbringing.",
          "Because it stripped away all monocular texture gradients and perspective cues inside a darkened laboratory, isolating pure stored memory schemas from environmental data.",
          "Because it demonstrated that unfamiliar geometric cardboard cut-outs were judged more accurately outdoors than familiar objects, refuting Gibson's affordance claim.",
          "Because Gibsonians often dismiss top-down effects as artificial lab tricks, yet Haber & Levin showed top-down object familiarity sharpens perception in a real 100-metre grassy field.",
        ],
        answerIndex: 3,
        explanation:
          "Gibsonians criticise Gregory's illusion evidence for lacking ecological validity (flat 2D paper in dark labs). Haber & Levin (2001) tested participants in a full-cue outdoor field up to 100 m and still demonstrated a clear top-down familiarity advantage!",
        difficulty: "challenge",
        guideRef: "gregory-constructivist",
        hints: [
          "What is Gibson's classic criticism of Gregory's illusion experiments? Low ecological validity!",
          "Where did Haber & Levin (2001) test their participants — in a dark booth or a real outdoor field?",
        ],
        strategy: "Link study setting to theoretical debate",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q10",
        question:
          "Which phenomenon poses the **greatest difficulty** for **Gibson's pure bottom-up Direct Theory** to explain without borrowing top-down concepts?",
        options: [
          "Why identical ambiguous stimuli (such as `I3` in Bruner & Minturn or the Hollow Mask) produce opposite perceptions depending on prior expectation and past experience",
          "Why pilots landing on runways use radial optic flow and the stationary focus of expansion to judge descent speed and heading directly from the moving light array",
          "Why nearby fence posts streak past a moving train window faster than distant hills, supplying dynamic motion parallax cues to relative depth without conscious calculation",
          "Why day-old chicks and goat kids avoid stepping onto the deep side of the Visual Cliff immediately after birth using texture-density jumps before any trial-and-error learning",
        ],
        answerIndex: 0,
        explanation:
          "Optic flow, motion parallax, and newborn animal cliff avoidance are core strengths of Gibson's Direct Theory. Conversely, when the exact same physical retinal array produces two different perceptions depending on prior schemas or expectations, pure bottom-up data cannot account for the shift.",
        difficulty: "core",
        guideRef: "gibson-direct-theory",
        hints: [
          "Eliminate the three phenomena that Gibson's theory explains brilliantly!",
          "If perception depends *only* on raw light data, could one unchanging image ever be seen two different ways?",
        ],
        strategy: "Spot empirical counter-evidence",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q11",
        question:
          "What is a key **population validity limitation** of **Haber & Levin (2001)**?",
        options: [
          "All participants were 6–14-month-old crawling infants recruited from local nurseries, preventing generalisation to adult perception.",
          "All participants were male American college students (androcentric and ethnocentric sample, with only n = 9 in Experiment 2).",
          "All participants were semi-nomadic rural Himba pastoralists from northern Namibia, preventing generalisation to Western urban populations.",
          "All participants were food-deprived volunteers who had fasted for 20 hours beforehand, creating a biased sample affected by physiological hunger.",
        ],
        answerIndex: 1,
        explanation:
          "Haber & Levin (2001) recruited exclusively male US university students (109 in Exp. 1; just 9 in Exp. 2) judging culturally American everyday objects (US stop signs, 2-litre bottles), limiting generalisability across genders and non-Western cultures.",
        difficulty: "core",
        guideRef: "gregory-constructivist",
        hints: [
          "Check gender, nationality, and Experiment 2's small sample size (`n = 9`).",
          "Apply CIE 0266 population generalisability terms.",
        ],
        strategy: "Audit sample size and demographics",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q12",
        question:
          "When **Campos et al. (1970)** placed **2-month-old pre-crawling infants** directly onto the deep glass side of the Visual Cliff and measured their **heart rates**, their heart rates **decelerated** (a sign of curious attention rather than fear). What nuance did this add to **Gibson & Walk (1960)**?",
        options: [
          "Infants cannot perceptually *detect* any depth cues until roughly 6 months, because heart-rate deceleration indicates total blindness to texture gradients.",
          "Fear of heights is completely innate from birth, whereas visual detection of checkerboard texture gradients only develops after months of crawling.",
          "Infants can perceptually *detect* depth very early (~2 months), whereas the *fear* of falling develops later through locomotor crawling experience.",
          "Pre-crawling 2-month-olds show intense autonomic panic over the deep side, proving that wariness of cliffs requires zero self-produced locomotion.",
        ],
        answerIndex: 2,
        explanation:
          "Heart-rate deceleration showed 2-month-olds noticed the difference between deep and shallow sides (early depth perception), whereas fearful avoidance at 6–14 months develops alongside self-produced locomotion — supporting an interaction of nature and nurture.",
        difficulty: "challenge",
        guideRef: "gibson-direct-theory",
        hints: [
          "If heart rate changed between shallow and deep at 2 months, did the babies *see* the drop?",
          "Why did curiosity at 2 months turn into fear at 7 months?",
        ],
        strategy: "Separate depth detection from learned fear",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q13",
        question:
          "As you sit in a moving MRT train looking sideways out of the window, platform pillars 2 metres away streak rapidly backwards across your visual field while HDB blocks 1 kilometre away glide slowly. In **Gibson's theory**, this monocular movement cue is called:",
        options: [
          "Binocular convergence",
          "Perceptual defence",
          "Shape constancy",
          "Motion parallax",
        ],
        answerIndex: 3,
        explanation:
          "Motion parallax is a dynamic monocular cue emphasized by Gibson: during lateral movement, closer objects traverse a much larger angular velocity across the retina than distant objects.",
        difficulty: "warmup",
        guideRef: "gibson-direct-theory",
        hints: [
          "Near objects rush past fast; far objects move slowly during observer motion.",
        ],
        strategy: "Distinguish sideways motion parallax vs forward optic flow",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q14",
        question:
          "How does **Neisser's (1976) Perceptual Cycle** resolve the clash between **Gibson's bottom-up** and **Gregory's top-down** theories?",
        options: [
          "It proposes an interactionist loop: bottom-up sensory data drives perception in clear moving scenes, while top-down schemas direct exploration and update when new input is brief or ambiguous.",
          "It replaces both theories with a purely nativist stage model, claiming infants rely on top-down schemas before birth and switch permanently to bottom-up optic flow once they start walking.",
          "It argues bottom-up processing handles only binocular depth cues such as convergence, whereas top-down schemas operate exclusively when judging 2D geometric illusions in dark laboratories.",
          "It claims stored schemas remain fixed and unchangeable after early childhood, filtering out any conflicting bottom-up environmental information rather than revising expectations.",
        ],
        answerIndex: 0,
        explanation:
          "Rather than treating perception as purely bottom-up or purely top-down, contemporary cognitive psychology views both pathways as continuous partners whose weight shifts with stimulus clarity.",
        difficulty: "core",
        guideRef: "gregory-constructivist",
        hints: [
          "Look for the balanced interactionist synthesis combining environmental data AND schemas.",
          "When do we need top-down hypotheses most? In fog, brief flashes, or far distances!",
        ],
        strategy: "Synthesise opposing theories",
      },
      {
        kind: "mcq",
        id: "visual-perception-m2-q15",
        question:
          "In **Gibson & Walk (1960)**, several infants peered through the glass on the deep side, **patted the solid glass surface firmly with their hands**, yet still refused to crawl across to their mothers. What did this specific behaviour demonstrate?",
        options: [
          "Tactile sensations of solid support consistently override conflicting visual depth cues once infants begin crawling.",
          "Visual depth cues (texture-density jump and motion parallax) overrode reassuring tactile feedback that the surface was solid.",
          "Infants relied primarily on auditory cues from their mothers' voices rather than on visual texture or touch when crossing.",
          "Infants could not detect the solid glass with their palms because tactile receptors in the hand remain immature at 6–14 months.",
        ],
        answerIndex: 1,
        explanation:
          "Hands felt solid glass, yet eyes saw a 1.2-metre drop — backing away despite patting the solid surface proved visual depth perception dominated touch ('visual capture') by crawling age.",
        difficulty: "core",
        guideRef: "gibson-direct-theory",
        hints: [
          "Compare what the baby's *hands* felt (solid glass) vs what the baby's *eyes* saw (a 1.2 m drop).",
          "Which sense won?",
        ],
        strategy: "Interpret behavioural detail in core study",
      },
    ],
  },
  {
    id: "visual-perception-m3",
    title: "MCQ Paper 3: Perceptual Set, Culture & Paper 2 Methodology",
    questions: [
      {
        kind: "mcq",
        id: "visual-perception-m3-q01",
        question:
          "What is **perceptual set** in CIE 0266 Psychology?",
        options: [
          "A bottom-up retinal mechanism that keeps an object's perceived size, shape, and colour invariant even when viewing distance, angle, or ambient illumination changes",
          "An innate ecological readiness to detect radial optic flow and direct action affordances from environmental light without involving stored memory schemas or expectations",
          "A top-down state of cognitive readiness to notice certain sensory features (selector) and interpret ambiguous input via expectation, motivation, emotion, or culture (interpreter)",
          "A Gestalt organising rule that automatically groups dots, lines, and colours by physical proximity and similarity before any personal experience or motivation acts",
        ],
        answerIndex: 2,
        explanation:
          "Allport (1955) defined perceptual set as a top-down state of perceptual readiness acting as both a selector (filtering what we notice) and an interpreter (guiding what we perceive it to be).",
        difficulty: "warmup",
        guideRef: "perceptual-set-culture",
        hints: [
          "Think of top-down mental 'readiness' shaped by M-E-E-C (Motivation, Emotion, Expectation, Culture).",
        ],
        strategy: "Define selector + interpreter roles",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q02",
        question:
          "In **Bruner & Minturn's (1955)** tachistoscope experiment (`n = 24`), participants saw an ambiguous broken figure (`I3`) after viewing either four capital letters or four two-digit numbers. What were the exact results?",
        options: [
          "50% of letter-primed participants and 50% of number-primed participants reported 'B', showing prior context had no measurable effect on ambiguous symbols.",
          "92% of both letter-primed and number-primed participants reported '13', showing numerical schemas override alphabetical context regardless of priming.",
          "92% of letter-primed participants reported '13' (drawing the gap wider), whereas 83% of number-primed participants reported 'B' (drawing the gap closed).",
          "83% of letter-primed participants reported 'B' (drawing the gap closed), whereas 92% of number-primed participants reported '13' (drawing the gap wider).",
        ],
        answerIndex: 3,
        explanation:
          "Expectation induced by preceding letters led 83% to assimilate the ambiguous shape into 'B', whereas preceding numbers led 92% to perceive '13' — even distorting their reproduction drawings to match their expectation!",
        difficulty: "core",
        guideRef: "perceptual-set-culture",
        hints: [
          "Match letter priming → 'B' and number priming → '13'.",
          "Check the high percentages: 83% and 92%!",
        ],
        strategy: "Match prime direction to exact %",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q03",
        question:
          "In **Gilchrist & Nesberg's (1952)** motivation study, **26 students who fasted for 20 hours** adjusted dimmed projector slides of meals (steak, fried chicken) **dimmer** than original baseline compared with 20 fed controls. Why did setting the projector *dimmer* show food looked *brighter* to hungry participants?",
        options: [
          "Because hunger heightened perceptual salience so the test food slide already looked extra bright, requiring less physical projector light to match their memory of the original slide.",
          "Because fasting for 20 hours dilated their pupils and hypersensitised retinal rods to all light, causing every slide—both food and non-food—to look painfully dazzling.",
          "Because perceptual defence caused hungry participants to suppress upsetting images of unavailable meals, making them lower the illumination to avoid viewing food clearly.",
          "Because the fed control group turned the projector brightness up excessively due to post-meal drowsiness, creating an artificial baseline gap against normal hungry ratings.",
        ],
        answerIndex: 0,
        explanation:
          "When hungry brains perceptually amplify the brightness of food stimuli, even a physically dimmer slide looks as bright as the original standard — so turning the dial down proves heightened perceived brightness!",
        difficulty: "challenge",
        guideRef: "perceptual-set-culture",
        hints: [
          "Imagine wearing 'food-brightening glasses': how far up would you turn a lamp before it looked normal? Less far!",
          "Connect physiological hunger drive to heightened perceptual salience.",
        ],
        strategy: "Reason carefully through psychophysical adjustment",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q04",
        question:
          "In **McGinnies's (1949)** study of emotion and **perceptual defence**, participants took longer tachistoscope exposures to verbally report **taboo words** than neutral words, despite showing elevated **Galvanic Skin Response (GSR)** beforehand. What is the main **alternative explanation (confounding bias)** critics raise?",
        options: [
          "Optic-nerve fatigue: neutral words were always presented in the second half of the session after participants' eyes had adapted to the dim tachistoscope screen.",
          "Social embarrassment / response bias: participants may have consciously recognised the rude word just as fast, but hesitated before speaking an offensive word aloud to an authority figure.",
          "Measurement invalidity: Galvanic Skin Response records voluntary extraocular muscle tension rather than autonomic arousal, so it cannot reflect emotional reactions.",
          "Food-deprivation confounding: participants had fasted for 20 hours before viewing the tachistoscope slides, which selectively slowed recognition of non-food words.",
        ],
        answerIndex: 1,
        explanation:
          "Critics point out that verbal reporting confounds *perception* with *willingness to speak*: shy 1949 students likely recognized taboo words early (explaining the GSR spike) and delayed speaking out of embarrassment until 100% certain.",
        difficulty: "core",
        guideRef: "perceptual-set-culture",
        hints: [
          "Separate *seeing* a rude word from *saying* a rude word out loud to a professor in 1949!",
          "What social bias delays verbal reporting?",
        ],
        strategy: "Distinguish perceptual threshold vs verbal response bias",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q05",
        question:
          "According to **Segall, Campbell & Herskovits's (1966) Carpentered-World Hypothesis**, why are Western urban residents significantly more susceptible to the **Müller-Lyer illusion** than traditional rural **Zulu** villagers?",
        options: [
          "Inherited genetic differences in retinal cone density cause Western urban eyes to refract angled fin lines more sharply than the eyes of rural Zulu participants.",
          "Rural Zulu villagers experience stronger binocular convergence outdoors across open savannah, which permanently prevents size constancy from operating on 2D drawings.",
          "Growing up among rectangular rooms, straight corridors, and 90-degree corners trains Western brains to read angled fins as 3D corners, whereas round rural huts lack such cues.",
          "Western urban residents rely strictly on Gibson's innate bottom-up optic flow indoors, making them unable to apply top-down learned schemas when viewing flat geometric figures.",
        ],
        answerIndex: 2,
        explanation:
          "Segall et al. (1966) showed across 15 societies that habitual exposure to rectangular ('carpentered') architecture builds learned top-down 3D-corner schemas that trigger misplaced size-constancy scaling on 2D fin drawings.",
        difficulty: "core",
        guideRef: "perceptual-set-culture",
        hints: [
          "What does 'carpentered' mean? Built by carpenters with straight 90° rectangular corners!",
          "Contrast rectangular city apartments with circular traditional Zulu huts.",
        ],
        strategy: "Connect architecture to learned depth schemas",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q06",
        question:
          "In **Bremner et al.'s (2016)** cross-cultural developmental study, which visual illusion was used to compare **traditional rural Himba** in Namibia, **urbanised Himba** in Opuwo, and **British (UK)** participants?",
        options: [
          "The Necker wireframe cube multistable orientation illusion",
          "Rubin's reversible goblet-and-faces figure–ground illusion",
          "The Müller-Lyer inward-and-outward fins length illusion",
          "The Ebbinghaus (Titchener circles) size-contrast illusion",
        ],
        answerIndex: 3,
        explanation:
          "Bremner et al. (2016) tested contextual size perception using orange target circles surrounded by rings of larger or smaller inducer circles — the Ebbinghaus (Titchener circles) illusion.",
        difficulty: "warmup",
        guideRef: "perceptual-set-culture",
        hints: [
          "Participants touched which of two orange central circles was larger while surrounded by rings of circles!",
        ],
        strategy: "Match named study to exact stimulus",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q07",
        question:
          "What was the **developmental trajectory** discovered by **Bremner et al. (2016)** across ages **3 to 10 years and adulthood** in the UK versus rural Namibia?",
        options: [
          "At ages 3–4, both UK and rural Himba children showed low susceptibility; with age, UK participants grew strongly susceptible (global processing), while rural Himba stayed largely immune (local processing).",
          "At ages 3–4, UK children already showed peak illusion susceptibility while rural Himba showed none; by adulthood, both groups converged to equally low error through visual maturation.",
          "At ages 3–4, both UK and rural Himba children showed strong susceptibility; with age, UK adults outgrew the illusion through formal schooling, while rural Himba adults grew more susceptible.",
          "At ages 3–4, rural Himba children showed stronger susceptibility than UK toddlers; across ages 5–10, both cultural groups maintained virtually identical high global-processing error into adulthood.",
        ],
        answerIndex: 0,
        explanation:
          "Young toddlers (3–4 years) in both London and rural Namibia judged central circle size accurately with minimal context interference; strong Ebbinghaus susceptibility emerged across ages 5–10 only in urbanised UK participants learning global contextual integration.",
        difficulty: "core",
        guideRef: "perceptual-set-culture",
        hints: [
          "Start at ages 3–4: did the two cultures start apart or start together?",
          "Which group stayed locally accurate into adulthood, and which group grew globally susceptible?",
        ],
        strategy: "Trace developmental divergence from age 3–4",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q08",
        question:
          "Why did **Bremner et al. (2016)** also test **urbanised Himba** adults living in the Namibian town of **Opuwo**?",
        options: [
          "To prove a genetic origin for local processing: urbanised Himba in Opuwo showed zero shift toward UK susceptibility, confirming ethnicity rather than town environment drives the effect.",
          "To separate visual environment from ethnicity: because urbanised Himba shifted significantly toward UK susceptibility, town visual experience rather than genetics drives global contextual processing.",
          "To test binocular depth perception under artificial lighting: Opuwo offered darkened laboratories with tachistoscopes that were unavailable in traditional rural compounds.",
          "To act as a longitudinal follow-up group: the same rural Himba toddlers tested at ages 3–4 were relocated to Opuwo and retested ten years later to measure individual change.",
        ],
        answerIndex: 1,
        explanation:
          "Comparing rural traditional Himba against genetically matched urban Himba in Opuwo isolated environmental experience from shared ethnicity — proving town visual clutter promotes global context processing.",
        difficulty: "challenge",
        guideRef: "perceptual-set-culture",
        hints: [
          "Rural Himba and Opuwo town Himba share the same ethnic heritage — what differs between them?",
          "Why is an urbanised same-ethnicity group a brilliant quasi-experimental control?",
        ],
        strategy: "Explain quasi-experimental control group",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q09",
        question:
          "Why is **culture** in **Bremner et al. (2016)** classified in CIE 0266 Paper 2 as a **quasi-independent (naturally occurring) variable** rather than a true experimental IV?",
        options: [
          "Because the dependent variable was collected through unstructured interviews rather than objective quantitative accuracy scores.",
          "Because participants completed the Ebbinghaus circle task in outdoor village settings rather than a standardised laboratory room.",
          "Because researchers cannot randomly allocate infants at birth to grow up as British Londoners versus rural Namibian Himba.",
          "Because the study used a repeated-measures design in which every individual participant was tested in both London and Namibia.",
        ],
        answerIndex: 2,
        explanation:
          "In a quasi/natural comparison, group membership (UK vs rural Himba vs urban Himba; age group) pre-exists naturally and cannot be randomly assigned by the experimenter, meaning unmeasured lifestyle differences could partially co-vary.",
        difficulty: "core",
        guideRef: "perceptual-set-culture",
        hints: [
          "Ask the Research Methods test for a true experiment: could Bremner randomly assign babies to cultures?",
          "Link non-random pre-existing groups to quasi-experimental design.",
        ],
        strategy: "Connect Paper 2 topic to Research Methods",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q10",
        question:
          "While hiking at dusk after listening to spooky podcasts about snakes, Arjun jumps backward when he sees a coiled brown **tree root** on the path — momentarily perceiving a **viper** with scales! Which two determinants of **perceptual set** combined here?",
        options: [
          "Physiological motivation (hunger drive from hiking) and cultural carpentered-world schemas",
          "Gibson's bottom-up optic flow invariants and innate visual-cliff avoidance reflexes",
          "Binocular retinal disparity and misplaced size-constancy scaling from converging trail edges",
          "Expectation (primed by snake podcasts) and heightened fear emotion under ambiguous dim lighting",
        ],
        answerIndex: 3,
        explanation:
          "Recent snake stories primed expectation schemas while fear emotion lowered the threshold for threat interpretations — and dusk degraded bottom-up visual clarity so top-down perceptual set dominated!",
        difficulty: "core",
        guideRef: "perceptual-set-culture",
        hints: [
          "Identify what the podcast primed (**expectation**) and what dusk anxiety added (**emotion**).",
          "Notice why dim dusk lighting made Gregory's top-down set extra powerful!",
        ],
        strategy: "Combine M-E-E-C factors + stimulus ambiguity",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q11",
        question:
          "What methodological limitation applies to laboratory **tachistoscope** studies of perceptual set such as **Bruner & Minturn (1955)** and **McGinnies (1949)**?",
        options: [
          "Flashing isolated 2D symbols through a peephole for 30–90 milliseconds lacks mundane realism and ecological validity compared with continuous, moving everyday vision.",
          "Tachistoscopes cannot standardise stimulus exposure durations across trials, resulting in weak internal validity and uncontrolled extraneous lighting variables.",
          "Tachistoscope procedures rely on naturally occurring cross-cultural groups rather than random allocation, preventing researchers from establishing cause and effect.",
          "Tachistoscope tasks require testing pre-crawling infants alongside mothers, making it impossible to obtain written informed consent or verbal debriefing afterwards.",
        ],
        answerIndex: 0,
        explanation:
          "Tachistoscopes give superb internal control over millisecond exposure times, but staring motionless at ultra-brief impoverished 2D flashes artificially inflates top-down guessing compared with rich Gibsonian real-world viewing.",
        difficulty: "core",
        guideRef: "perceptual-set-culture",
        hints: [
          "How often in real life do you view motionless symbols for 0.03 seconds through a box?",
          "Connect impoverished lab flashes to Gibson's ecological validity critique.",
        ],
        strategy: "Balance internal control vs ecological validity",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q12",
        question:
          "In **Bugelski & Alampay (1961)**, participants shown pictures of **animals** (dog, horse, bird) almost always saw an ambiguous line drawing as a **rat**, whereas participants shown **human faces** saw an **old man wearing glasses**. This directly replicates the perceptual-set mechanism of:",
        options: [
          "Gibson & Walk (1960)",
          "Bruner & Minturn (1955)",
          "Piliavin et al. (1969)",
          "Rushton et al. (1986)",
        ],
        answerIndex: 1,
        explanation:
          "Just like Bruner & Minturn's (1955) letter-vs-number priming of B/13, Bugelski & Alampay (1961) demonstrated expectation/context priming of an ambiguous figure via category schemas.",
        difficulty: "warmup",
        guideRef: "perceptual-set-culture",
        hints: [
          "Prior category context primes how an ambiguous drawing is interpreted — just like letters vs numbers!",
        ],
        strategy: "Group converging expectation studies",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q13",
        question:
          "In **Sanford (1936)**, children and students tested right **before mealtime** (4 hours since eating) interpreted ambiguous inkblots and word stems (e.g. `ME__`) as **food words** (*meat, meal*) roughly twice as often as participants tested right **after eating**. Which determinant of perceptual set was manipulated?",
        options: [
          "Carpentered urban architecture",
          "Binocular retinal disparity",
          "Physiological motivation (hunger drive)",
          "Auditory pitch perception",
        ],
        answerIndex: 2,
        explanation:
          "Alongside Gilchrist & Nesberg (1952), Sanford (1936) demonstrated that physiological motivation (time since eating / hunger) biases top-down perceptual readiness toward need-relevant food interpretations.",
        difficulty: "warmup",
        guideRef: "perceptual-set-culture",
        hints: [
          "Time since last meal = which letter of M-E-E-C?",
        ],
        strategy: "Use M-E-E-C classification",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q14",
        question:
          "Proofreaders checking their own essays routinely skim right past a typo like `THE CAT SAT ON THE THE MAT` because top-down grammar schemas predict a single `'THE'`. Which theory of perception best explains why experienced readers miss the extra word?",
        options: [
          "Gibson's Direct bottom-up theory (data-driven environmental light pickup)",
          "Gestalt figure–ground theory (automatic separation of print from paper)",
          "Perceptual constancy theory (stable size scaling across reading distance)",
          "Gregory's Constructivist top-down theory (expectation-driven hypothesis testing)",
        ],
        answerIndex: 3,
        explanation:
          "Top-down linguistic schemas supply strong expectations about familiar phrases, causing the brain's perceptual hypothesis to overlook redundant bottom-up print details (which is why reading backwards word-by-word breaks the top-down set!).",
        difficulty: "core",
        guideRef: "gregory-constructivist",
        hints: [
          "If reading were 100% bottom-up data-driven, you would spot both `THE`s immediately!",
          "Which theory explains expectation overriding raw print details?",
        ],
        strategy: "Apply top-down schema override to everyday errors",
      },
      {
        kind: "mcq",
        id: "visual-perception-m3-q15",
        question:
          "Taken together, **Gibson & Walk (1960)**, **Haber & Levin (2001)**, and **Bremner et al. (2016)** support which overarching conclusion about human visual perception?",
        options: [
          "Basic depth avoidance emerges early by locomotion onset (nature / bottom-up foundation), while object familiarity and cultural environments progressively tune size and distance perception across childhood (nurture / top-down).",
          "Visual perception is 100% innate and hard-wired at birth across all human societies, meaning neither familiarity with everyday objects nor urban versus rural visual environments alters size or depth judgements.",
          "Visual perception is 100% learned through formal schooling after age 10, meaning crawling human infants and newborn precocial animals possess zero depth perception until they acquire cultural schemas.",
          "Cultural experience dominates infancy while innate reflexes emerge in adulthood, causing traditional rural Himba adults to show much stronger Ebbinghaus illusion susceptibility than urban British adults.",
        ],
        answerIndex: 0,
        explanation:
          "All three CIE 0266 core studies fit an interactionist developmental arc: Gibson & Walk demonstrates early biological readiness for cliff avoidance, Haber & Levin proves learned object schemas sharpen adult distance/size accuracy outdoors, and Bremner et al. shows cultural visual environments sculpt global vs local context sensitivity between age 4 and adulthood.",
        difficulty: "challenge",
        guideRef: "perceptual-set-culture",
        hints: [
          "Avoid extreme 100%-nature or 100%-nurture options!",
          "Check which option accurately unites all three named CIE 0266 Paper 2 core studies.",
        ],
        strategy: "Synthesise all 3 Paper 2 core studies",
      },
    ],
  },
];
