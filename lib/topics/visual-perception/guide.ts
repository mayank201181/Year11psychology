import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "visual-perception",
  title: "Topic 4: Visual Perception",
  strand: "Paper 2: Perception, Development & Non-Experimental",
  icon: "👁️",
  summary:
    "How your brain turns upside-down two-dimensional light on the retina into a vivid three-dimensional world — and why illusions fool it.",
  intro:
    "Right now, the image projected onto the back of each of your eyes is **flat, upside-down, and riddled with a blind spot** — yet you effortlessly experience a stable, upright, three-dimensional room! In CIE 0266 Paper 2, you will separate raw **sensation** from cortical **perception**, master **monocular and binocular depth cues** alongside **perceptual constancies**, apply **Gestalt laws** and **visual illusions**, contrast **Gibson's Direct (bottom-up)** theory (**Gibson & Walk, 1960**) against **Gregory's Constructivist (top-down)** theory (**Haber & Levin, 2001**), and evaluate how **expectation, hunger, emotion, and culture** (**Bremner et al., 2016**) shape **perceptual set**.",
  guide: [
    {
      id: "sensation-depth-constancy",
      heading: "Sensation vs Perception, Depth Cues & Perceptual Constancy",
      discovery: {
        problem:
          "Hold your left thumb at arm's length and your right thumb halfway to your nose: both thumbs are the same physical width, yet the closer thumb covers *twice* as much space on your retina! Now close one eye and try to drop a pen cap straight onto the tip of a pen held by a friend 40 cm away. Why do you suddenly miss with one eye closed — yet a flat photograph can still look deeply 3D?",
        idea:
          "Close up (within a few metres), your brain relies heavily on **binocular depth cues** (**retinal disparity** between two eyes ~6.3 cm apart and **convergence** muscle tension), which vanish the instant you shut one eye! Beyond ~10 metres — and inside flat paintings or photos — your brain extracts 3D distance from **monocular depth cues** that work with just one eye.",
      },
      body:
        "CIE 0266 Paper 2 begins with a foundational distinction that examiners test relentlessly:\n- **Sensation**: The passive **physiological detection and transduction** of physical energy (light wavelengths) by sensory receptors (**rods and cones** in the retina) into electrochemical nerve impulses sent along the optic nerve.\n- **Perception**: The active **cortical selection, organisation, and interpretation** of sensory signals in the visual cortex to construct meaningful objects, depth, colour, and motion.\n\n**1. Monocular Depth Cues (Work with ONE eye — also called 'pictorial cues' in 2D art)**\n1. **Linear perspective**: Parallel lines (railway tracks, motorway lanes, corridor walls) appear to **converge** toward a vanishing point on the horizon as distance increases.\n2. **Relative size**: When two objects are known to be the same real-world size (two footballs or two trees), the one casting a **smaller retinal image** is perceived as further away.\n3. **Occlusion (interposition / overlap)**: When Object A partially blocks the outline of Object B, Object A is perceived as **closer** than Object B.\n4. **Height in plane**: For objects resting on the ground *below* the horizon line, objects placed **higher up in the visual field** (closer to the horizon) appear **further away** than objects lower in the visual field.\n5. **Texture gradient**: Surface elements (cobblestones, grass blades, pebbles) appear **large, coarse, and widely spaced** nearby, gradually becoming **finer, denser, and smoother** with distance.\n\n**2. Binocular Depth Cues (Require BOTH eyes working together — strongest under ~6–10 m)**\n1. **Retinal disparity (stereopsis)**: Because human eyes sit roughly **6 to 6.5 cm apart**, the left and right retinas receive slightly different horizontal angles of view. **Greater disparity** (larger difference between the two retinal images) signals a **closer** object; near-zero disparity signals a distant object.\n2. **Convergence**: Neuromuscular feedback from the **extraocular muscles** rotating both eyeballs **inwards** toward the nose to focus on a close target. Strong inward muscle tension = very near object; nearly parallel eyes = distant object.\n\n| Feature | Monocular Depth Cues | Binocular Depth Cues |\n|---|---|---|\n| **Eyes required** | Only **1 eye** needed | **Both eyes** required simultaneously |\n| **Work in 2D photos/paintings?** | **Yes** (pictorial cues) | **No** (unless 3D stereoscopic glasses used) |\n| **Effective distance range** | Near to **very far** (kilometres) | Most accurate **close up** (< 6–10 metres) |\n| **Key examples** | Linear perspective, relative size, occlusion, height in plane, texture gradient | Retinal disparity, oculomotor convergence |\n\n**3. Perceptual Constancy (Stability Despite Changing Retinal Sensation)**\nWithout constancy, the world would morph chaotically every time you moved your head:\n- **Size constancy**: Perceiving a familiar object (a 1.7 m friend walking down a corridor) as maintaining the **same real physical size** even though her retinal image shrinks to half its height when her distance doubles.\n- **Shape constancy**: Perceiving an object as keeping its **true 3D geometric shape** despite viewing-angle changes — e.g. a rectangular classroom door swinging open projects a *trapezoid* onto your retina, yet still looks rectangular.\n- **Colour (and brightness) constancy**: Perceiving a surface's true colour/lightness (e.g. a white shirt or red apple) as unchanged whether viewed in bright noon sunlight, cool shade, or warm indoor lamp light.",
      diagram: `<svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Landscape illustrating monocular depth cues alongside top-down diagram of binocular convergence and retinal disparity"><rect x="8" y="8" width="644" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="195" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Monocular Cues (1 Eye / Pictorial)</text><rect x="22" y="38" width="346" height="158" rx="8" fill="#e0f2fe" stroke="#64748b"/><rect x="22" y="96" width="346" height="100" rx="0" fill="#dcfce7"/><line x1="22" y1="96" x2="368" y2="96" stroke="#15803d" stroke-width="1.5"/><polygon points="195,96 95,196 295,196" fill="#cbd5e1" stroke="#475569"/><line x1="195" y1="96" x2="195" y2="196" stroke="#f8fafc" stroke-width="2" stroke-dasharray="6,5"/><circle cx="145" cy="182" r="4" fill="#64748b"/><circle cx="240" cy="180" r="4" fill="#64748b"/><circle cx="165" cy="150" r="2.5" fill="#64748b"/><circle cx="220" cy="148" r="2.5" fill="#64748b"/><circle cx="182" cy="120" r="1.3" fill="#64748b"/><circle cx="206" cy="121" r="1.3" fill="#64748b"/><rect x="305" y="92" width="6" height="18" fill="#78350f"/><circle cx="308" cy="88" r="10" fill="#16a34a"/><rect x="58" y="128" width="12" height="44" fill="#78350f"/><circle cx="64" cy="116" r="22" fill="#15803d" stroke="#14532d"/><rect x="74" y="144" width="28" height="22" fill="#f97316" stroke="#9a3412"/><g font-family="sans-serif" font-size="9.5" fill="#0f172a" font-weight="bold"><text x="195" y="90" text-anchor="middle">Horizon (Height in plane)</text><text x="195" y="190" text-anchor="middle">Linear perspective + Texture</text><text x="312" y="72" text-anchor="middle">Small = Far</text><text x="86" y="182" text-anchor="middle">Occlusion</text></g><line x1="386" y1="20" x2="386" y2="196" stroke="#cbd5e1" stroke-dasharray="4,4"/><text x="520" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Binocular Cues (2 Eyes, &lt;10 m)</text><g font-family="sans-serif" text-anchor="middle"><circle cx="470" cy="172" r="18" fill="#fff" stroke="#1e293b" stroke-width="2"/><circle cx="475" cy="166" r="6" fill="#2563eb"/><circle cx="570" cy="172" r="18" fill="#fff" stroke="#1e293b" stroke-width="2"/><circle cx="565" cy="166" r="6" fill="#2563eb"/><line x1="470" y1="198" x2="570" y2="198" stroke="#475569" stroke-width="1.5"/><text x="520" y="209" font-size="9.5" fill="#334155">~6.3 cm apart → Retinal Disparity</text><circle cx="520" cy="78" r="11" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/><text x="520" y="58" font-size="10" font-weight="bold" fill="#991b1b">Near Target</text><line x1="475" y1="160" x2="520" y2="78" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><line x1="565" y1="160" x2="520" y2="78" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><text x="520" y="128" font-size="10" font-weight="bold" fill="#1e3a8a">Inward Convergence</text><text x="520" y="141" font-size="9" fill="#475569">(strong muscle tension)</text></g></svg>`,
      diagramCaption:
        "Left: Five monocular pictorial depth cues operating simultaneously on a 2D scene. Right: Binocular oculomotor convergence and retinal disparity from two eyes ~6.3 cm apart.",
      workedExamples: [
        {
          title: "Retinal image scaling & size constancy",
          problem:
            "A friend standing 3 metres away casts a vertical retinal image of height 4.8 mm on the back of your eye. She walks straight down a corridor until she is 12 metres away. (a) By what factor does her retinal image height shrink, and what is its new height in mm? (b) Why doesn't she appear to shrink into a 42 cm doll?",
          steps: [
            "(a) Retinal image size is inversely proportional to viewing distance: distance increased by a factor of 12 ÷ 3 = 4.",
            "New retinal image height = 4.8 mm ÷ 4 = 1.2 mm.",
            "(b) **Size constancy**: the visual cortex automatically multiplies the 4× smaller retinal sensation by depth cues showing she is 4× further away (linear perspective of corridor walls, texture gradient, height in plane), keeping perceived size stable.",
          ],
          answer: "(a) Shrinks by factor of 4 to 1.2 mm; (b) Size constancy scales retinal size up by perceived distance.",
          yourTurn: {
            question:
              "A signpost at 5 metres casts a 6.0 mm retinal image. When you walk back to 15 metres away, what is the new retinal image height in mm?",
            answer: { type: "number", value: 2 },
            solution: "Distance tripled (15 ÷ 5 = 3), so retinal image shrinks to one-third: 6.0 ÷ 3 = 2 mm.",
          },
        },
      ],
      keyPoints: [
        "**Sensation** = retinal receptor detection & transduction of light; **perception** = cortical organisation & interpretation into meaning.",
        "**5 Monocular depth cues** (1 eye / 2D art): **linear perspective**, **relative size**, **occlusion**, **height in plane**, **texture gradient**.",
        "**2 Binocular depth cues** (both eyes, strongest <10 m): **retinal disparity** (greater image difference = closer) and **convergence** (greater inward muscle tension = closer).",
        "**Size, shape, and colour constancy** preserve stable object perception despite continuous changes in retinal sensation.",
      ],
      whyItWorks:
        "Think of **size constancy** as an automatic mental equation: `Perceived Size = Retinal Image Size × Perceived Distance`. When distance doubles (`× 2`), geometry halves the retinal image (`× 1/2`), and multiplying `(1/2) × 2 = 1` keeps perceived physical size completely invariant!",
      strategies: ["Contrast retinal sensation vs cortical perception", "Check 1-eye vs 2-eye requirement", "Link constancy to retinal change + perceptual stability"],
      thinkDeeper:
        "If you lose sight in one eye temporarily (wearing an eye patch), can you still drive or catch a ball? Which depth cues disappear immediately, and which monocular cues (plus head-movement **motion parallax**) compensate?",
    },
    {
      id: "gestalt-and-illusions",
      heading: "Gestalt Laws & Visual Illusions",
      discovery: {
        problem:
          "Look at three black 'Pac-Man' circles arranged at the corners of an imaginary triangle with their mouths facing inward. Even though there is *zero* ink drawn between the circles, your eyes see a glowing, razor-sharp white triangle floating in front of three complete black discs! Why does your brain invent edges that do not physically exist?",
        idea:
          "Early 20th-century **Gestalt psychologists** (Wertheimer, Koffka, Köhler) showed that the visual cortex follows the **Law of Prägnanz** (simplicity): rather than cataloguing messy isolated Pac-Man fragments, your brain applies **closure** and **figure–ground** organisation to construct the simplest whole shape ('*the whole is other than the sum of its parts*').",
      },
      body:
        "**1. Gestalt Principles of Perceptual Organisation**\n*Gestalt* (German for 'whole form' or 'configuration') psychology argues our brains possess innate organisational rules that group raw sensory dots and edges into coherent wholes:\n- **Figure–Ground (**Rubin's Vase**, 1915)**: We automatically divide any scene into a focal **figure** (distinct contour, seems in front) and a receding **ground** (shapeless background). In **Rubin's Vase**, because border ownership is equally balanced, perception flips back and forth between **one white goblet** and **two black facial profiles** — you can never see *both* as figure simultaneously!\n- **Proximity**: Elements positioned **close together in space** are grouped together (e.g. `••  ••  ••` looks like 3 pairs of dots rather than 6 separate dots).\n- **Similarity**: Elements sharing **visual attributes** (colour, shape, size, orientation) are grouped into rows, columns, or teams.\n- **Continuity (Good Continuation)**: When lines cross or are partially hidden, the visual system prefers **smooth, unbroken, continuous paths** rather than jagged abrupt turns.\n- **Closure (**Kanizsa Subjective Triangle**, 1955)**: The brain fills in missing gaps in incomplete contours to perceive complete, closed shapes — generating vivid **illusory (subjective) contours**.\n\n**2. Three Families of Visual Illusions**\nA **visual illusion** occurs whenever cortical **perception systematically departs from objective physical measurement** of the stimulus:\n\n| Illusion Category | Core Mechanism | Classic CIE 0266 Named Examples |\n|---|---|---|\n| **Ambiguous Figures** | Single unchanging retinal image supports **two equally plausible interpretations**; brain flips multistably between them | **Necker Cube** (1832 wireframe cube flipping front-left vs back-right face); **Rubin's Vase** |\n| **Fictions (Illusory Contours)** | Gestalt **closure** & figure–ground invent edges/surfaces absent from the physical stimulus | **Kanizsa Triangle** (phantom bright white triangle over three notched discs) |\n| **Geometric Distortions** | Surrounding context or depth cues trick the brain into **misjudging physical length or size** | **Müller-Lyer**, **Ponzo**, and **Ebbinghaus (Titchener circles)** illusions |\n\n**Mastering the Three Classic Distortion Illusions**:\n1. **Müller-Lyer Illusion (1889)**: Two shafts of **identical physical length** — the shaft with **outward-flaring feather fins** (`>———<`) looks **significantly longer** than the shaft with **inward-pointing arrowheads** (`<———>`).\n2. **Ponzo Illusion (1911)**: Two **identical horizontal bars** placed between two converging 'railway-track' lines — the **upper bar** (nearer the converging apex) looks **longer** than the **lower bar**.\n3. **Ebbinghaus (Titchener Circles) Illusion (1901)**: Two **identical central circles** — the circle surrounded by a ring of **tiny circles** looks **larger** than the identical circle surrounded by a ring of **giant circles** (due to relative-size contrast).",
      diagram: `<svg viewBox="0 0 680 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four panels showing Kanizsa closure triangle, Necker ambiguous cube, Muller-Lyer fin illusion, and Ebbinghaus circles illusion"><rect x="8" y="8" width="664" height="209" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><g font-family="sans-serif" text-anchor="middle"><rect x="20" y="22" width="150" height="180" rx="8" fill="#fff" stroke="#cbd5e1"/><text x="95" y="40" font-size="11" font-weight="bold" fill="#0f172a">Kanizsa (Closure)</text><circle cx="95" cy="74" r="18" fill="#1e293b"/><circle cx="60" cy="136" r="18" fill="#1e293b"/><circle cx="130" cy="136" r="18" fill="#1e293b"/><polygon points="95,74 60,136 130,136" fill="#fff"/><text x="95" y="176" font-size="9.5" fill="#475569">Phantom white triangle</text><text x="95" y="190" font-size="9" fill="#64748b">(Fiction + Closure)</text><rect x="184" y="22" width="150" height="180" rx="8" fill="#fff" stroke="#cbd5e1"/><text x="259" y="40" font-size="11" font-weight="bold" fill="#0f172a">Necker Cube</text><rect x="216" y="76" width="58" height="58" fill="none" stroke="#2563eb" stroke-width="2"/><rect x="242" y="56" width="58" height="58" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="216" y1="76" x2="242" y2="56" stroke="#475569" stroke-width="1.8"/><line x1="274" y1="76" x2="300" y2="56" stroke="#475569" stroke-width="1.8"/><line x1="216" y1="134" x2="242" y2="114" stroke="#475569" stroke-width="1.8"/><line x1="274" y1="134" x2="300" y2="114" stroke="#475569" stroke-width="1.8"/><text x="259" y="176" font-size="9.5" fill="#475569">3D orientation flips</text><text x="259" y="190" font-size="9" fill="#64748b">(Ambiguous figure)</text><rect x="348" y="22" width="154" height="180" rx="8" fill="#fff" stroke="#cbd5e1"/><text x="425" y="40" font-size="11" font-weight="bold" fill="#0f172a">Müller-Lyer</text><line x1="385" y1="82" x2="465" y2="82" stroke="#dc2626" stroke-width="2.5"/><polyline points="373,70 385,82 373,94" fill="none" stroke="#1e293b" stroke-width="2"/><polyline points="477,70 465,82 477,94" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="385" y1="130" x2="465" y2="130" stroke="#dc2626" stroke-width="2.5"/><polyline points="397,118 385,130 397,142" fill="none" stroke="#1e293b" stroke-width="2"/><polyline points="453,118 465,130 453,142" fill="none" stroke="#1e293b" stroke-width="2"/><line x1="385" y1="62" x2="385" y2="148" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="465" y1="62" x2="465" y2="148" stroke="#94a3b8" stroke-dasharray="3,3"/><text x="425" y="176" font-size="9.5" fill="#475569">Red shafts = 80 px both!</text><text x="425" y="190" font-size="9" fill="#64748b">(Distortion)</text><rect x="514" y="22" width="146" height="180" rx="8" fill="#fff" stroke="#cbd5e1"/><text x="587" y="40" font-size="11" font-weight="bold" fill="#0f172a">Ebbinghaus</text><circle cx="554" cy="105" r="10" fill="#f97316"/><circle cx="554" cy="84" r="4" fill="#475569"/><circle cx="575" cy="105" r="4" fill="#475569"/><circle cx="554" cy="126" r="4" fill="#475569"/><circle cx="533" cy="105" r="4" fill="#475569"/><circle cx="620" cy="105" r="10" fill="#f97316"/><circle cx="620" cy="74" r="12" fill="#475569"/><circle cx="620" cy="136" r="12" fill="#475569"/><circle cx="592" cy="92" r="11" fill="#475569"/><circle cx="648" cy="118" r="11" fill="#475569"/><text x="587" y="176" font-size="9.5" fill="#475569">Orange centres equal!</text><text x="587" y="190" font-size="9" fill="#64748b">(Size contrast)</text></g></svg>`,
      diagramCaption:
        "Four classic illusions tested in CIE 0266: Kanizsa subjective triangle (Gestalt closure), Necker ambiguous cube, Müller-Lyer length distortion, and Ebbinghaus size-contrast circles.",
      workedExamples: [
        {
          title: "Classifying Gestalt laws and illusion types in novel stimuli",
          problem:
            "A sports scoreboard displays team scores using dashed LED segments with tiny gaps, arranged so Home players' stats sit in a tight cluster on the left in blue while Away stats sit in a tight cluster on the right in yellow. Identify THREE Gestalt laws helping spectators read the board instantly.",
          steps: [
            "1. **Closure**: Spectators mentally bridge the tiny unlit gaps in dashed LED numbers to read complete closed digits.",
            "2. **Proximity**: Stats clustered tightly on the left vs right are grouped together spatially.",
            "3. **Similarity**: Identical blue vs yellow text colours group players into Home vs Away teams.",
          ],
          answer: "Closure (filling LED gaps), Proximity (spatial left/right clusters), and Similarity (matching team colours).",
          yourTurn: {
            question:
              "Which single-word Gestalt principle explains why we perceive a phantom white triangle across the missing gaps of the Kanizsa figure?",
            answer: { type: "text", accept: ["closure", "law of closure", "principle of closure"] },
            solution: "Gestalt **closure** fills in missing contour segments to perceive a complete closed triangle.",
          },
        },
      ],
      keyPoints: [
        "**5 Gestalt laws**: **figure–ground** (Rubin's vase), **proximity** (closeness), **similarity** (shared colour/shape), **continuity** (smooth paths), and **closure** (filling gaps — Kanizsa triangle).",
        "**Ambiguous figures** (**Necker cube**, **Rubin's vase**) alternate between two valid percepts from one unchanging retinal image.",
        "**Geometric distortions**: **Müller-Lyer** (`>—<` looks longer than `<—>`), **Ponzo** (top bar between converging rails looks longer), **Ebbinghaus** (circle inside small rings looks larger).",
      ],
      whyItWorks:
        "Why can't you force yourself to stop seeing the Müller-Lyer illusion even *after* measuring both shafts with a ruler? Because perceptual scaling happens automatically and unconsciously in visual association cortex ('cognitive impenetrability') before conscious logical knowledge gets a vote!",
      strategies: ["Name the exact Gestalt law + visual feature", "Separate ambiguous vs fiction vs distortion illusions", "Draw/describe fin directions carefully (`>—<` vs `<—>`)"],
      thinkDeeper:
        "Notice how military camouflage works by deliberately *breaking* Gestalt laws! Which specific Gestalt principles do mottled green-and-brown disruptive patterns sabotage so an animal or soldier dissolves into the forest?",
    },
    {
      id: "gibson-direct-theory",
      heading: "Gibson's Direct Theory of Perception (Bottom-Up)",
      discovery: {
        problem:
          "Watch a gannet plunge into the ocean at 90 km/h or a pilot land a jet on a runway: neither uses a calculator or pauses to look up 'past memories of runways', yet both fold their wings or flare the plane at the exact split-second before impact! And when a 6-month-old baby crawls to the edge of a glass-covered drop, she freezes instantly. How can brains perceive 3D space so accurately *without* slow guesswork?",
        idea:
          "James J. Gibson (1966, 1979) argued that in the **real, moving outdoor world**, light reflected off textured surfaces (**the optic array**) is already **100% rich and unambiguous**! Perception is **direct and bottom-up** (data-driven) — and as Gibson & Walk's (1960) **Visual Cliff** showed, basic depth avoidance matures very early by the onset of locomotion!",
      },
      body:
        "**J. J. Gibson's (1966, 1979) Ecological / Direct Theory of Perception** sits firmly on the **nature / bottom-up** side of perceptual theory:\n- **Bottom-up (data-driven) processing**: Sensation and perception are **one direct continuous process**. Light reaching a moving observer's eyes (**the ambient optic array**) contains **sufficient, unambiguous information** to specify 3D layout directly — requiring **zero top-down stored schemas, memories, or cognitive inference**.\n\n**Four Pillars of Gibson's Direct Theory**:\n1. **Optic Flow Patterns**: As you move forward through space, texture elements stream radially outward from a single stationary point straight ahead called the **focus of expansion** (telling you your exact heading and speed). If optic flow stops, you are stationary.\n2. **Texture Gradients & Motion Parallax**: Continuous gradients of surface density directly specify ground slant and distance; as you move, near objects zip across your retina rapidly while distant mountains barely shift (**motion parallax**).\n3. **Invariants**: Higher-order geometric ratios in the optic array (such as the **horizon-ratio invariant**, where the horizon cuts all standing poles of equal height at the same proportion) that remain constant despite observer movement.\n4. **Affordances**: The **action possibilities** an environment or object directly offers an organism relative to its body — a flat knee-high boulder *affords sitting*, a rigid floor *affords walking*, a handle *affords pulling*, and a cliff edge *affords falling* (perceived directly without needing to name the object first!).\n\n**Named Core Study — Gibson & Walk (1960): 'The Visual Cliff'**\n- **Aim**: To investigate whether **depth perception** (avoiding a perilous drop-off) is **innate / matures early** (nativist/direct view) or requires learned experience of falling.\n- **Sample**: **36 human infants** aged **6 to 14 months**, plus newborn/young animals (chicks under 24 hours old, goat kids, lambs, kittens, puppies, rats, and aquatic turtles).\n- **Apparatus & Procedure**: Controlled laboratory observation using the **Visual Cliff** — a heavy sheet of clear safety glass raised above the floor and bisected by a central wooden board:\n  - **Shallow side**: Red-and-white checkerboard cloth pressed **directly underneath** the glass.\n  - **Deep ('cliff') side**: Identical checkerboard cloth placed ~**1.2 metres (4 feet) below** the glass, creating dramatic monocular texture/pattern-density and motion-parallax cues of a drop while remaining **100% solid to touch**.\n  - Each infant was placed on the centre board; their mother stood alternately at the **deep side** and the **shallow side**, shaking a toy and calling the infant across.\n\n| Group Tested on Visual Cliff | Moved off Centre Board | Crossed **Shallow** Side | Crossed **Deep ('Cliff')** Side | Key Implication |\n|---|---|---|---|---|\n| **Human infants (6–14 m)** | **27 of 36** (75%) | **27 / 27 (100%)** | **3 / 27 (11%)** — **89% refused!** | Strong depth avoidance by crawling age |\n| **Chicks (< 24 hours old)** | All | **100%** hopped to shallow | **0%** ever stepped on deep | **Innate** depth perception at birth |\n| **Goat kids & lambs (1 day old)** | All | **100%** | **0%** (froze if placed on deep glass) | Evolved survival affordance ('cliff = fall') |\n\n- Infants often peered down through the deep glass, **patted the solid surface with their hands**, yet still backed away or cried when called from the cliff side — proving **visual depth cues overrode tactile solidity**!\n\n**Evaluation (CIE 0266 Paper 2)**:\n- **Strengths**: High **ecological relevance** to real movement (aviation runway design, sport, robotics); strong controlled experimental evidence from **Gibson & Walk (1960)** where solid glass eliminated tactile/auditory drafts while isolating visual depth cues across species.\n- **Limitations**:\n  1. **Cannot explain 2D visual illusions or perceptual set**: If perception never uses top-down inference, why do Müller-Lyer, Ponzo, and `B/13` fool healthy eyes? (Gibson argued lab illusions use artificial, static, impoverished peephole stimuli that rarely occur when moving freely outdoors — yet outdoor illusions like the Moon Illusion still occur!).\n  2. **6–14 month infant age critique**: Because human babies cannot crawl until ~6 months, Gibson & Walk's infants already had **6–14 months of visual learning**! (Though Campos et al., 1970, later placed **2-month-old pre-crawling babies** on the deep glass and found their heart rates *slowed down* — showing babies *perceive* depth by 2 months, while *fear* of heights is learned once crawling begins).",
      diagram: `<svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Gibson and Walk 1960 Visual Cliff apparatus showing shallow vs deep checkerboard sides alongside optic flow focus of expansion"><rect x="8" y="8" width="644" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="215" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Gibson &amp; Walk (1960) Visual Cliff</text><rect x="30" y="68" width="350" height="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/><text x="300" y="62" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1">Thick Solid Safety Glass</text><rect x="190" y="56" width="36" height="12" rx="2" fill="#92400e"/><circle cx="208" cy="46" r="9" fill="#fde68a" stroke="#78350f"/><text x="208" y="39" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#78350f">Infant</text><g><rect x="30" y="76" width="160" height="14" fill="#fee2e2" stroke="#dc2626"/><rect x="30" y="76" width="20" height="14" fill="#dc2626"/><rect x="70" y="76" width="20" height="14" fill="#dc2626"/><rect x="110" y="76" width="20" height="14" fill="#dc2626"/><rect x="150" y="76" width="20" height="14" fill="#dc2626"/><text x="110" y="108" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#15803d">SHALLOW SIDE</text><text x="110" y="122" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#166534">27/27 (100%) crossed</text></g><line x1="190" y1="76" x2="190" y2="178" stroke="#64748b" stroke-width="3"/><line x1="34" y1="90" x2="34" y2="192" stroke="#475569" stroke-width="4"/><line x1="376" y1="76" x2="376" y2="192" stroke="#475569" stroke-width="4"/><g><rect x="190" y="176" width="186" height="14" fill="#fee2e2" stroke="#dc2626"/><rect x="190" y="176" width="22" height="14" fill="#dc2626"/><rect x="234" y="176" width="22" height="14" fill="#dc2626"/><rect x="278" y="176" width="22" height="14" fill="#dc2626"/><rect x="322" y="176" width="22" height="14" fill="#dc2626"/><text x="284" y="118" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#b91c1c">DEEP ('CLIFF') SIDE</text><text x="284" y="133" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#991b1b">~1.2 m drop below glass</text><text x="284" y="148" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">Only 3/27 (11%) crossed!</text></g><line x1="406" y1="20" x2="406" y2="196" stroke="#cbd5e1" stroke-dasharray="4,4"/><text x="530" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Gibson's Optic Flow Array</text><rect x="424" y="42" width="212" height="132" rx="8" fill="#0f172a"/><circle cx="530" cy="108" r="5" fill="#fbbf24"/><g stroke="#38bdf8" stroke-width="1.8"><line x1="530" y1="108" x2="438" y2="54"/><line x1="530" y1="108" x2="622" y2="54"/><line x1="530" y1="108" x2="438" y2="162"/><line x1="530" y1="108" x2="622" y2="162"/><line x1="530" y1="108" x2="530" y2="48"/><line x1="530" y1="108" x2="530" y2="168"/><line x1="530" y1="108" x2="432" y2="108"/><line x1="530" y1="108" x2="628" y2="108"/></g><text x="530" y="192" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Focus of Expansion = Heading</text><text x="530" y="204" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#475569">Direct bottom-up data (no schemas needed)</text></svg>`,
      diagramCaption:
        "Left: Gibson & Walk's (1960) Visual Cliff — 89% of crawling infants refused the deep glass side despite their mothers' calls. Right: Gibson's radial optic flow radiating from the focus of expansion.",
      workedExamples: [
        {
          title: "Calculating refusal and crossing percentages in Gibson & Walk (1960)",
          problem:
            "In Gibson & Walk (1960), 36 infants aged 6–14 months were placed on the centre board; 9 stayed on the board, while 27 crawled off onto the shallow side. Of those 27 crawling infants, 24 refused to cross onto the deep side even when called by their mothers. Verify (a) the percentage of the 27 crawlers who refused the deep side and (b) the percentage who crossed onto the deep side, each to the nearest whole number.",
          steps: [
            "(a) Refusal rate among crawlers = (24 ÷ 27) × 100 = 88.89% ≈ 89%.",
            "(b) Deep-side crossing rate = ((27 − 24) ÷ 27) × 100 = (3 ÷ 27) × 100 = 11.11% ≈ 11%.",
          ],
          answer: "89% refused the deep side; only 11% (3 of 27) crossed onto the deep side.",
          yourTurn: {
            question:
              "In Gibson & Walk (1960), out of the 36 human infants tested, 27 moved off the centre board. What percentage of the total 36 infants moved off the centre board?",
            answer: { type: "number", value: 75 },
            solution: "(27 ÷ 36) × 100 = (3 ÷ 4) × 100 = 75%.",
          },
        },
      ],
      keyPoints: [
        "**Gibson's Direct Theory** is **bottom-up** and **nativist**: the **optic array** supplies rich **optic flow**, **texture gradients**, **motion parallax**, **invariants**, and **affordances** without top-down schemas.",
        "**Gibson & Walk (1960)**: **27/27 (100%)** of mobile infants (6–14 m) crossed the shallow side, while only **3/27 (11%)** crossed the deep cliff side (**89% refused**); day-old chicks and kids showed **0%** deep crossings.",
        "**Main critique**: Struggles to explain why **visual illusions** and **perceptual set** distort perception, and 6–14-month human infants already possess months of visual experience.",
      ],
      whyItWorks:
        "Why did Gibson & Walk include **day-old chicks and goat kids** alongside human babies? Precocial animals walk within hours of birth — before they have *any* opportunity to fall off ledges and learn by trial and error — providing decisive cross-species proof that basic cliff-avoidance affordances can be hard-wired by evolution!",
      strategies: ["Define bottom-up = data-driven (zero schemas)", "Quote 36 infants → 27 moved → 3/27 (11%) deep vs 27/27 (100%) shallow", "Contrast 6–14m infant experience vs <24h chicks"],
      thinkDeeper:
        "Ethical reflection: several babies in Gibson & Walk (1960) cried when their mothers stood at the deep side coaxing them across what looked like a dangerous drop! How would a modern CIE 0266 ethics committee weigh **protection from psychological distress** against the clinical benefits of discovering infant depth vision?",
    },
    {
      id: "gregory-constructivist",
      heading: "Gregory's Constructivist Theory of Perception (Top-Down)",
      discovery: {
        problem:
          "Look at a Hollow Charlie Chaplin Mask rotating slowly: the moment you view the *hollow inside* of the mask from behind, your brain refuses to see a hollow cave — instead, a 3D nose pops stubbornly *outward* toward you and appears to rotate the wrong way! Why does your brain override raw binocular cues to invent a convex face?",
        idea:
          "Every real human face you have ever seen in your life sticks *outward*! **Richard Gregory (1970)** argued that because retinal input is flat, patchy, and ambiguous, perception is an active **top-down construction**: your brain tests **perceptual hypotheses** drawn from stored **schemas and past experience** — so a lifelong 'faces are convex' schema overrules raw retinal data!",
      },
      body:
        "**Richard Gregory's (1970) Constructivist (Indirect) Theory of Perception** sits on the **nurture / top-down** side of the debate:\n- **Why perception must be indirect**: Roughly **90%** of raw light information hitting the eye is lost or compressed before reaching higher visual cortex, and retinal images are flat 2D projections full of gaps (blind spot, blinks, shadows, occlusion).\n- **Top-down (conceptually driven) hypothesis testing**: The brain combines fragmentary bottom-up sensory cues with **stored knowledge, past experience, expectations, and schemas** to generate a **perceptual hypothesis** — an educated best guess about what external object produced that retinal pattern.\n\n**How Gregory Explains Visual Illusions: Misplaced Size-Constancy Scaling**\nGregory treated illusions not as 'broken eyes', but as **intelligent perceptual hypotheses applied inappropriately to flat 2D drawings**:\n1. **Ponzo Illusion**: Normally, parallel railway lines converging upward signal 3D distance (**linear perspective**). Seeing the upper horizontal bar sitting 'further up the track', the brain unconsciously fires **size-constancy scaling** (`Perceived Size = Retinal Size × Perceived Distance`): because both bars cast *equal* retinal images, the 'further' top bar is scaled **up** and looks longer!\n2. **Müller-Lyer Illusion (3D Corner / Carpentered-World Hypothesis)**:\n   - Outward-flaring fins (`>———<`) mimic the perspective lines of an **inside corner of a room** receding *away* from the viewer → brain scales the vertical wall seam **up** → looks **longer**.\n   - Inward-pointing arrowheads (`<———>`) mimic the **outside corner of a building** jutting *toward* the viewer → brain scales the near edge **down** → looks **shorter**.\n\n**Named Core Study — Haber & Levin (2001): Object Familiarity, Size & Distance Perception**\n- **Aim**: To test whether **top-down prior knowledge (stored size schemas)** of familiar objects improves real-world judgements of **object size** and **egocentric viewing distance**.\n- **Sample & Setting**: Male US college undergraduates tested outdoors in a real grassy open field (high ecological validity!).\n- **Stimuli (45 real objects in 3 familiarity tiers)**:\n  1. **15 Familiar invariant-sized objects** (objects that always come in one standard size: e.g. a 2-litre soda bottle, regulation basketball, stop sign, adult bicycle).\n  2. **15 Familiar variant-sized objects** (known objects whose real size varies: e.g. a potted Christmas tree, suitcase, teddy bear).\n  3. **15 Unfamiliar geometric shapes** (flat black cardboard circles, triangles, and rectangles of arbitrary unknown sizes).\n- **Two Experiments**:\n  - **Experiment 1 (Size Estimation, `n = 109` students)**: Participants estimated the heights of the 45 objects viewed **near**, **far**, or **from memory alone without seeing them**.\n  - **Experiment 2 (Distance Estimation, `n = 9` students)**: Participants estimated the distance in feet/metres to the 45 objects staked across an open field up to **100 metres** away under rich vs restricted depth cues.\n- **Key Findings**:\n  - **Size estimates** were **most accurate and least variable** for **familiar invariant-sized objects** — remarkably, estimates were just as accurate *from memory alone* as when looking directly at the object, whereas **unfamiliar cardboard shapes** produced the largest errors at far distances!\n  - **Distance estimates** (Exp. 2) were significantly **more accurate for familiar invariant-sized objects** than for unfamiliar shapes (especially at long distances where binocular cues fail), proving **top-down memory schemas actively assist real-world spatial perception**!\n\n| Feature | Gibson's Direct Theory (1966) | Gregory's Constructivist Theory (1970) |\n|---|---|---|\n| **Direction of processing** | **Bottom-up** (data-driven from optic array) | **Top-down** (concept/schema-driven inference) |\n| **Role of past experience** | **Minimal / unnecessary** (innate affordances) | **Essential** (schemas build perceptual hypotheses) |\n| **Nature vs Nurture** | **Nature** (Gibson & Walk 1960 Visual Cliff) | **Nurture** (Haber & Levin 2001; cultural illusions) |\n| **Best at explaining** | Fast accurate motion outdoors (pilots, sport) | **2D illusions**, ambiguous figures, perceptual set |\n| **Weakest at explaining** | Why static illusions & expectation fool us | How newborn chicks/infants perceive depth immediately |",
      diagram: `<svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gregory misplaced size-constancy scaling in 3D room corners vs Muller-Lyer shafts and Haber and Levin 2001 familiarity accuracy bars"><rect x="8" y="8" width="644" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="205" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Gregory: Misplaced Size-Constancy</text><g stroke="#1e293b" stroke-width="1.8" fill="none"><line x1="95" y1="68" x2="95" y2="148" stroke="#dc2626" stroke-width="3"/><line x1="95" y1="68" x2="55" y2="48"/><line x1="95" y1="68" x2="135" y2="48"/><line x1="95" y1="148" x2="55" y2="168"/><line x1="95" y1="148" x2="135" y2="168"/><line x1="275" y1="68" x2="275" y2="148" stroke="#2563eb" stroke-width="3"/><line x1="275" y1="68" x2="235" y2="88"/><line x1="275" y1="68" x2="315" y2="88"/><line x1="275" y1="148" x2="235" y2="128"/><line x1="275" y1="148" x2="315" y2="128"/></g><g font-family="sans-serif" text-anchor="middle"><text x="95" y="185" font-size="10" font-weight="bold" fill="#991b1b">Inside Room Corner</text><text x="95" y="199" font-size="9" fill="#7f1d1d">'Far' → Scaled UP (longer)</text><text x="275" y="185" font-size="10" font-weight="bold" fill="#1e3a8a">Outside Building Corner</text><text x="275" y="199" font-size="9" fill="#1e40af">'Near' → Scaled DOWN (shorter)</text></g><line x1="380" y1="20" x2="380" y2="196" stroke="#cbd5e1" stroke-dasharray="4,4"/><text x="518" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Haber &amp; Levin (2001) Accuracy</text><text x="518" y="44" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#475569">45 real objects in outdoor field up to 100 m</text><g font-family="sans-serif" text-anchor="middle"><rect x="408" y="64" width="58" height="98" rx="5" fill="#16a34a"/><text x="437" y="58" font-size="9.5" font-weight="bold" fill="#14532d">Highest</text><text x="437" y="176" font-size="9" font-weight="bold" fill="#1e293b">Invariant</text><text x="437" y="188" font-size="8.5" fill="#475569">(Basketball)</text><rect x="489" y="92" width="58" height="70" rx="5" fill="#3b82f6"/><text x="518" y="86" font-size="9.5" font-weight="bold" fill="#1e3a8a">Moderate</text><text x="518" y="176" font-size="9" font-weight="bold" fill="#1e293b">Variant</text><text x="518" y="188" font-size="8.5" fill="#475569">(Xmas tree)</text><rect x="570" y="124" width="58" height="38" rx="5" fill="#f97316"/><text x="599" y="118" font-size="9.5" font-weight="bold" fill="#9a3412">Lowest</text><text x="599" y="176" font-size="9" font-weight="bold" fill="#1e293b">Unfamiliar</text><text x="599" y="188" font-size="8.5" fill="#475569">(Cut-outs)</text><line x1="396" y1="162" x2="640" y2="162" stroke="#64748b"/></g></svg>`,
      diagramCaption:
        "Left: Gregory's misplaced size-constancy scaling explains why equal vertical shafts (80 px) look different when framed as far inside vs near outside 3D corners. Right: Haber & Levin (2001) size & distance accuracy across object familiarity tiers.",
      workedExamples: [
        {
          title: "Applying Gregory's Misplaced Size-Constancy Scaling to the Ponzo Illusion",
          problem:
            "Two horizontal yellow bars on a flat poster are both exactly 6.0 cm long and cast identical retinal images, yet the top bar placed near the narrow apex of two converging diagonal lines looks roughly 7.2 cm long. Explain step by step using Gregory's theory why the top bar looks 20% longer.",
          steps: [
            "1. **Bottom-up cue**: Both 6.0 cm bars cast equal-sized retinal images, while the converging diagonal lines mimic **linear perspective** (a monocular depth cue).",
            "2. **Top-down perceptual hypothesis**: Drawing on past experience of 3D roads and corridors, the brain infers the upper bar near the apex lies **further away** in 3D depth than the lower bar.",
            "3. **Misplaced size-constancy scaling**: Applying `Perceived Size = Retinal Size × Perceived Distance` to a flat 2D poster, the brain inappropriately **scales up** the 'distant' upper bar so it looks ~20% longer!",
          ],
          answer: "Converging lines trigger a 3D linear-perspective hypothesis that the top bar is further away; misplaced size-constancy scaling enlarges its perceived length despite equal retinal size.",
          yourTurn: {
            question:
              "In Haber & Levin (2001), how many real-world objects in total (15 invariant + 15 variant + 15 unfamiliar shapes) were judged by participants?",
            answer: { type: "number", value: 45 },
            solution: "15 familiar invariant + 15 familiar variant + 15 unfamiliar geometric shapes = 45 objects.",
          },
        },
      ],
      keyPoints: [
        "**Gregory's Constructivist Theory** is **top-down** (conceptually driven): sensory input is ambiguous, so the brain generates **perceptual hypotheses** from **schemas and past experience**.",
        "**Misplaced size-constancy scaling** explains **Ponzo** and **Müller-Lyer** distortions when 3D depth cues appear on flat 2D surfaces.",
        "**Haber & Levin (2001)**: outdoors up to **100 m** (`n = 109` Exp. 1; `n = 9` Exp. 2), **familiar invariant-sized objects** yielded far more accurate size and distance judgements than unfamiliar cardboard shapes — supporting top-down schemas under ecologically valid conditions!",
      ],
      whyItWorks:
        "Notice how **Neisser's (1976) Perceptual Cycle** reconciles Gibson and Gregory cleanly: in bright, moving outdoor environments (**Gibson**), bottom-up optic flow dominates; when input is brief, foggy, far away, or ambiguous (**Gregory**), top-down stored schemas step in to disambiguate!",
      strategies: ["Use the exact phrase 'misplaced size-constancy scaling'", "Distinguish Haber & Levin's 3 object categories", "Synthesise Gibson (bottom-up) + Gregory (top-down)"],
      thinkDeeper:
        "In **Haber & Levin (2001)**, all participants were **male American college students** familiar with US stop signs and 2-litre soda bottles. What would happen if rural participants who had never seen a US basketball or stop sign judged those 'invariant' objects from 80 metres away?",
    },
    {
      id: "perceptual-set-culture",
      heading: "Perceptual Set: Motivation, Emotion, Expectation & Culture",
      discovery: {
        problem:
          "Read across quickly: **A — 12 — 13 — 14 — C**. Why did the middle symbol look unmistakably like the number **13** just now, when the *exact same ink shape* placed inside **A — B — C** looks like a slightly broken letter **B**? And why do semi-nomadic **Himba** herders in rural Namibia effortlessly ignore surrounding circles that trick British adults in the **Ebbinghaus illusion**?",
        idea:
          "Your eyes are not neutral cameras — they wear a **perceptual set** (a temporary top-down cognitive **readiness** to select and interpret sensory input in line with expectations, bodily drives, emotions, and lifelong cultural visual habits)!",
      },
      body:
        "**Perceptual Set** (Allport, 1955) is a **mental predisposition or readiness** to notice certain aspects of sensory data (**selector**) and interpret ambiguous input in a predetermined way (**interpreter**). CIE 0266 Paper 2 examines **four key factors** shaping perceptual set:\n\n**1. Expectation & Context — Bruner & Minturn (1955): 'B or 13'**\n- **Method**: Independent measures lab experiment (`n = 24` university students). Using a **tachistoscope** (flashing stimuli for 30–90 milliseconds), one group saw four **capital letters** (`L, M, Y, A`), while the second group saw four **two-digit numbers** (`16, 17, 10, 12`). Both groups then saw the **same ambiguous broken figure** (`I3`) and drew/named what they saw.\n- **Results**: **83%** of the letter-primed group perceived **`B`** (drawing the gap closed!), whereas **92%** of the number-primed group perceived **`13`** (drawing the gap wider!). *(Bugelski & Alampay, 1961, similarly showed animal pictures primed seeing a 'rat', whereas face pictures primed seeing an 'old man with glasses'.)*\n\n**2. Physiological Motivation (Hunger) — Gilchrist & Nesberg (1952)**\n- **Method**: **26 university students** volunteered to fast without food (water only) for **20 hours** (**hungry group**), compared against **20 control students** eating normal meals (**satiated group**). At regular intervals (0 h, ~4 h, 6 h, 20 h), participants viewed 4 colour slides of **meals** (steak, fried chicken, hamburgers, spaghetti) for 15 seconds; the projector was dimmed, and participants turned a dial to restore the slide to its original **perceived brightness**.\n- **Results**: While the fed control group stayed accurate all day, **food-deprived participants adjusted the slides progressively dimmer** as fasting reached 20 hours — meaning food images **looked brighter and more vivid** to their hungry brains!\n\n**3. Emotion & Perceptual Defence — McGinnies (1949)**\n- **Method**: **16 students** (8 male, 8 female) viewed **11 neutral words** (*apple, child, music, river*) mixed with **7 emotionally taboo/offensive words** (*raped, whore, bitch, belly*) flashed on a tachistoscope at rising exposure speeds while electrodes measured **Galvanic Skin Response (GSR)** sweat arousal.\n- **Results**: Participants required **significantly longer exposure durations** (higher recognition threshold) to read **taboo words** aloud than neutral words, yet showed **spiked GSR sweat responses BEFORE conscious recognition** — interpreted as unconscious **perceptual defence** shielding awareness from threatening emotion! *(Methodological critique: students may have recognised rude words early and simply hesitated out of **social embarrassment** before speaking them aloud!)*\n\n**4. Culture & Visual Environment — Carpentered World & Bremner et al. (2016)**\n- **Carpentered-World Hypothesis (Segall, Campbell & Herskovits, 1966)**: Across 15 societies, Western urban dwellers raised amid rectangular rooms, straight streets, and 90° corners showed **far stronger Müller-Lyer illusion susceptibility** than rural **Zulu** villagers in South Africa living in round huts with curved doors and circular kraals.\n\n**Named Core Study — Bremner, Doherty, Caparos, de Fockert, Linnell & Davidoff (2016): Himba vs UK Ebbinghaus Illusion**\n- **Aim**: To test how **culture** and **childhood development (age)** interact to shape **contextual size perception** (global context vs local detail focus).\n- **Sample & Cross-Cultural Design**: Quasi-experimental cross-cultural & developmental comparison of:\n  1. **Traditional rural Himba** children (aged **3–10 years**) and adults in semi-nomadic open compounds of northern **Namibia** (non-carpentered rural environment; language/culture encourages **local detail** attention).\n  2. **Urbanised Himba** adults living in the regional town of **Opuwo**.\n  3. **British (UK)** children (aged **3–10 years**) and adults in **London** (dense urban environment; **global contextual** attention).\n- **Procedure**: Participants viewed pairs of orange target circles on a screen surrounded by rings of either **smaller** or **larger** grey/white inducer circles (**Ebbinghaus / Titchener illusion**) and touched which orange centre circle was physically larger.\n\n| Group & Age Stage | Susceptibility to Ebbinghaus Illusion | Perceptual Processing Style |\n|---|---|---|\n| **3–4-year-olds (BOTH UK & rural Himba)** | **Very LOW** (judged central circles accurately!) | Early childhood **local** processing in both cultures |\n| **Older UK children (5–10 yrs) & UK adults** | **HIGH** (strongly deceived by surrounding rings) | Learned **global / contextual** integration |\n| **Older rural Himba (5–10 yrs) & adults** | **Very LOW** (rarely fooled; ~half UK error or less) | Sustained **local / detail-focused** style |\n| **Urbanised Himba in Opuwo town** | **INTERMEDIATE** (shifted significantly toward UK!) | Cluttered urban environment induces global context set |\n\n- **Landmark Conclusion**: Contextual illusions are **neither fixed at birth nor purely genetic**! Notice that urbanised ethnic Himba in Opuwo shifted toward Western illusion levels — proving **daily visual environment and cultural attention habits** sculpt top-down perception across childhood!",
      diagram: `<svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bruner and Minturn B or 13 expectation prime and Bremner et al 2016 developmental trajectory comparing UK vs Rural Himba vs Urban Himba Ebbinghaus illusion"><rect x="8" y="8" width="644" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="155" y="28" font-family="sans-serif" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#0f172a">Bruner &amp; Minturn (1955)</text><g font-family="sans-serif" text-anchor="middle"><text x="155" y="58" font-size="14" font-weight="bold" fill="#2563eb">A</text><text x="155" y="88" font-size="14" font-weight="bold" fill="#64748b">12</text><text x="95" y="122" font-size="15" font-weight="bold" fill="#64748b">12</text><line x1="146" y1="106" x2="146" y2="128" stroke="#dc2626" stroke-width="3"/><path d="M153,107 C163,107 163,116 153,117 C164,117 164,127 153,127" fill="none" stroke="#dc2626" stroke-width="3"/><text x="215" y="122" font-size="15" font-weight="bold" fill="#64748b">14</text><text x="155" y="156" font-size="14" font-weight="bold" fill="#2563eb">C</text><text x="155" y="182" font-size="9.5" font-weight="bold" fill="#1e3a8a">Letters prime: 83% saw 'B'</text><text x="155" y="196" font-size="9.5" font-weight="bold" fill="#991b1b">Numbers prime: 92% saw '13'</text></g><line x1="292" y1="20" x2="292" y2="198" stroke="#cbd5e1" stroke-dasharray="4,4"/><text x="472" y="28" font-family="sans-serif" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#0f172a">Bremner et al. (2016): Ebbinghaus by Age &amp; Culture</text><g font-family="sans-serif"><line x1="335" y1="168" x2="625" y2="168" stroke="#475569" stroke-width="1.5"/><line x1="335" y1="52" x2="335" y2="168" stroke="#475569" stroke-width="1.5"/><text x="328" y="60" font-size="8.5" text-anchor="end" fill="#475569">High</text><text x="328" y="166" font-size="8.5" text-anchor="end" fill="#475569">Low</text><polyline points="355,152 440,108 530,72 605,62" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="355" cy="152" r="4" fill="#dc2626"/><circle cx="605" cy="62" r="4" fill="#dc2626"/><text x="562" y="56" font-size="9.5" font-weight="bold" fill="#991b1b">UK (Global set)</text><circle cx="605" cy="105" r="5" fill="#d97706"/><text x="558" y="100" font-size="9" font-weight="bold" fill="#92400e">Urban Himba</text><polyline points="355,155 440,150 530,145 605,142" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="355" cy="155" r="4" fill="#16a34a"/><circle cx="605" cy="142" r="4" fill="#16a34a"/><text x="545" y="135" font-size="9.5" font-weight="bold" fill="#14532d">Rural Himba (Local set)</text><text x="355" y="184" font-size="9" text-anchor="middle" fill="#334155">3–4 yrs</text><text x="480" y="184" font-size="9" text-anchor="middle" fill="#334155">7–10 yrs</text><text x="605" y="184" font-size="9" text-anchor="middle" fill="#334155">Adults</text><text x="480" y="200" font-size="8.8" text-anchor="middle" fill="#475569">Diverges across childhood via visual environment!</text></g></svg>`,
      diagramCaption:
        "Left: Bruner & Minturn's (1955) ambiguous B/13 figure driven by expectation set. Right: Bremner et al. (2016) — UK and rural Himba toddlers start similarly accurate at age 3–4, then diverge sharply as urban Western global context habits develop.",
      workedExamples: [
        {
          title: "Evaluating Bremner et al. (2016) in CIE 0266 Paper 2",
          problem:
            "A student writes: 'Bremner et al. (2016) proved British and Namibian Himba people have genetically different eyes from birth.' Give TWO specific findings from Bremner et al. (2016) that refute this genetic claim.",
          steps: [
            "1. **Developmental baseline at age 3–4**: Young toddlers (3–4 years) in **both** the UK and rural Namibia showed similarly low susceptibility to the Ebbinghaus illusion — divergence emerged gradually across childhood (ages 5–10 to adulthood) through cultural learning.",
            "2. **Urbanised Himba control group in Opuwo**: Genetically Himba adults who moved to the cluttered town of **Opuwo** showed significantly **stronger** Ebbinghaus illusion susceptibility than rural Himba, proving **visual environment** (not genetics) drives global contextual perception!",
          ],
          answer: "(1) 3–4-year-olds in both cultures started equally accurate; (2) genetically matched urban Himba in Opuwo shifted toward UK illusion levels.",
          yourTurn: {
            question:
              "In Bruner & Minturn's (1955) perceptual set study, 92% of number-primed participants saw '13', while 83% of letter-primed participants saw 'B'. What percentage of number-primed participants did NOT report '13'?",
            answer: { type: "number", value: 8 },
            solution: "100% − 92% = 8%.",
          },
        },
      ],
      keyPoints: [
        "**Perceptual set** = top-down readiness shaped by **expectation** (**Bruner & Minturn 1955** `B/13`: 83% `B` vs 92% `13`), **motivation/hunger** (**Gilchrist & Nesberg 1952**: 20 h fast made food slides look brighter), **emotion** (**McGinnies 1949** taboo word GSR perceptual defence), and **culture**.",
        "**Carpentered-World Hypothesis** (Segall et al., 1966): rectangular urban architecture strengthens Müller-Lyer illusions compared with circular rural dwellings.",
        "**Bremner et al. (2016)**: UK vs **rural Himba** vs **urban Himba** across ages **3–10 & adults** showed Ebbinghaus context sensitivity is **minimal at age 3–4** in both cultures and grows mainly in **urbanised Western environments**.",
      ],
      whyItWorks:
        "Why did hungry students in **Gilchrist & Nesberg (1952)** turn the brightness knob **down** (dimmer) when asked to match the original food slide? Think carefully! Because hunger made the test slide *appear extra bright* in their visual cortex, they had to dim the physical projector *below* baseline until it looked normal to them!",
      strategies: ["Use MEEC mnemonic (Motivation, Emotion, Expectation, Culture)", "Cite BOTH age 3–4 baseline & urban Himba in Bremner et al.", "Critique lab tachistoscope artificiality vs response bias"],
      thinkDeeper:
        "Aviation & medical safety: A radiologist expecting a routine healthy chest X-ray glances past a faint tumour shadow (**inattentional blindness / expectation set**), or a tired pilot misreads `FL130` vs `FLB0`. How can checklists and independent double-reading break dangerous perceptual sets?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Sensation vs Perception",
        back: "**Sensation**: passive detection & transduction of physical light by retinal photoreceptors (rods/cones) into neural signals. **Perception**: active cortical selection, organisation, and interpretation of those signals into meaningful objects and depth.",
      },
      {
        front: "5 Monocular Depth Cues (work with 1 eye / 2D pictures)",
        back: "1. **Linear perspective** (parallel lines converge)\n2. **Relative size** (smaller retinal image = further)\n3. **Occlusion** (overlapping object = closer)\n4. **Height in plane** (higher toward horizon = further)\n5. **Texture gradient** (finer/denser texture = further).",
      },
      {
        front: "2 Binocular Depth Cues (require BOTH eyes, strongest <10 m)",
        back: "1. **Retinal disparity**: difference between views from two eyes ~6.3 cm apart (greater disparity = closer).\n2. **Convergence**: inward muscle tension rotating eyeballs toward nose (stronger tension = closer).",
      },
      {
        front: "Size, Shape & Colour Constancy",
        back: "Maintaining stable perception of an object's **true size** (friend walking away), **true 3D shape** (door opening into trapezoid), or **true surface colour** (apple in shade vs sun) despite changing retinal sensation.",
      },
      {
        front: "5 Gestalt Laws of Perceptual Organisation",
        back: "**Figure–ground** (Rubin's vase), **Proximity** (spatial closeness), **Similarity** (matching colour/shape), **Continuity** (smooth unbroken lines), and **Closure** (filling missing gaps — **Kanizsa triangle**).",
      },
      {
        front: "Ambiguous Figures vs Fictions vs Distortions",
        back: "**Ambiguous**: 1 image flips between 2 interpretations (**Necker cube, Rubin's vase**). **Fictions**: seeing absent contours (**Kanizsa triangle**). **Distortions**: misjudging size/length (**Müller-Lyer, Ponzo, Ebbinghaus**).",
      },
      {
        front: "Gibson's Direct Theory of Perception (1966)",
        back: "**Bottom-up** (data-driven) & **nativist**: the moving **optic array** supplies rich, unambiguous **optic flow**, **motion parallax**, **invariants**, and **affordances** — zero top-down schemas or inferences needed.",
      },
      {
        front: "Affordances (Gibson)",
        back: "Action possibilities an object/surface directly offers an organism relative to its body (e.g. a chair *affords sitting*, a cliff edge *affords falling*), perceived directly without prior naming.",
      },
      {
        front: "Gibson & Walk (1960) — Visual Cliff Core Study",
        back: "**36 human infants** (6–14 m): **27** moved off centre board — **27/27 (100%)** crossed shallow side, only **3/27 (11%)** crossed deep cliff side (**89% refused**). Day-old chicks & goat kids showed **0%** deep crossings.",
      },
      {
        front: "Gregory's Constructivist Theory of Perception (1970)",
        back: "**Top-down** (conceptually driven) & **nurture**: because retinal input is incomplete/ambiguous, the brain uses **past experience and stored schemas** to construct **perceptual hypotheses**.",
      },
      {
        front: "Misplaced Size-Constancy Scaling (Gregory)",
        back: "Applying 3D depth-scaling rules (`Perceived Size = Retinal Size × Perceived Distance`) inappropriately to **flat 2D illusions** — scaling UP 'distant' inside corners (`>—<` in Müller-Lyer) and upper rail bars (**Ponzo**).",
      },
      {
        front: "Haber & Levin (2001) — Familiarity, Size & Distance Study",
        back: "Outdoor field study up to **100 m** (`n = 109` size; `n = 9` distance) comparing **15 familiar invariant** (basketball), **15 familiar variant** (Xmas tree), and **15 unfamiliar** cardboard shapes: invariant-sized objects produced the highest size and distance accuracy!",
      },
      {
        front: "Bruner & Minturn (1955) — Expectation & Perceptual Set",
        back: "`n = 24` tachistoscope study: letter-primed group reported broken `I3` as **`B` (83%)**, whereas number-primed group reported **`13` (92%)** — proving context expectation shapes perception.",
      },
      {
        front: "Gilchrist & Nesberg (1952) — Hunger & Perceptual Set",
        back: "**26 students fasting 20 h** vs **20 fed controls** adjusted meal slides dimmer to match original brightness — showing hunger made food pictures **appear brighter** over time.",
      },
      {
        front: "McGinnies (1949) — Emotion & Perceptual Defence",
        back: "16 students took longer tachistoscope exposures to identify **taboo words** than neutral words while showing elevated **GSR** sweat responses beforehand — unconscious **perceptual defence** (or verbal embarrassment!).",
      },
      {
        front: "Bremner et al. (2016) — Himba vs UK Ebbinghaus Study",
        back: "3–4-year-olds in **both** rural Namibia (**Himba**) and **UK** had low Ebbinghaus illusion error; with age, **UK** participants grew strongly susceptible (global style), **rural Himba** stayed resistant (local style), and **urban Himba** shifted midway toward UK!",
      },
    ],
    mustKnow: [
      "Distinguish **sensation** (retinal photoreceptor transduction) from **perception** (cortical selection, organisation, and interpretation).",
      "Identify and apply all **5 monocular depth cues** (linear perspective, relative size, occlusion, height in plane, texture gradient) vs **2 binocular depth cues** (retinal disparity, convergence).",
      "Explain **size, shape, and colour constancy** using concrete examples of changing retinal images paired with stable perception.",
      "Apply the **5 Gestalt laws** (figure–ground, proximity, similarity, continuity, closure) and classify **Necker cube**, **Rubin's vase**, **Kanizsa triangle**, **Müller-Lyer**, **Ponzo**, and **Ebbinghaus** illusions.",
      "Describe and evaluate **Gibson's Direct (bottom-up)** theory (optic flow, invariants, affordances) and **Gibson & Walk's (1960)** Visual Cliff study (**36 infants; 27/27 shallow vs 3/27 [11%] deep**).",
      "Describe and evaluate **Gregory's Constructivist (top-down)** theory (perceptual hypotheses, misplaced size-constancy scaling) and **Haber & Levin (2001)** (45 objects across 3 familiarity tiers up to 100 m).",
      "Compare **Gibson vs Gregory** across processing direction (bottom-up vs top-down), nature–nurture, ecological validity, and ability to explain illusions.",
      "Explain how **expectation** (Bruner & Minturn `B/13`), **motivation/hunger** (Gilchrist & Nesberg), **emotion** (McGinnies), and **culture** (carpentered world & **Bremner et al. 2016** Himba vs UK) create **perceptual set**.",
    ],
    misconceptions: [
      {
        wrong: "Writing 'Sensation is when you feel emotions about an object, and perception is your personal opinion about it.'",
        right: "Write: '**Sensation** is the physical detection of light energy by retinal receptors (rods and cones) converted into neural impulses, whereas **perception** is the brain's organisation and interpretation of those impulses into meaningful objects and 3D space.'",
      },
      {
        wrong: "Classifying linear perspective or occlusion as 'binocular depth cues because we usually look at roads with two eyes open'.",
        right: "Write: '**Linear perspective** and **occlusion** are **monocular depth cues** because they work fully with **one eye closed** (and on flat 2D photographs). Only **retinal disparity** and **convergence** require *both* eyes.'",
      },
      {
        wrong: "Confusing bottom-up and top-down: 'Gibson's theory is top-down because pilots fly high up in the sky.'",
        right: "Write: '**Gibson's Direct Theory is bottom-up** (data-driven starting at sensory receptors from the rich optic array with zero schemas), whereas **Gregory's Constructivist Theory is top-down** (conceptually driven downward from stored brain schemas and past experience).'",
      },
      {
        wrong: "Writing 'In the Müller-Lyer illusion, the line with arrowheads `<--->` looks longer.'",
        right: "Write: 'The shaft with **outward-flaring fins (`>---<`)** looks **longer** (resembling a distant inside room corner scaled up), whereas the shaft with **inward-pointing arrowheads (`<--->`)** looks **shorter** (resembling a near outside corner scaled down).'",
      },
      {
        wrong: "Writing 'Gibson & Walk (1960) proved human depth perception is 100% innate from birth because newborn human babies refused the cliff.'",
        right: "Write: 'Gibson & Walk's **36 human infants were aged 6–14 months** (old enough to crawl), so they already had 6+ months of visual experience! Innateness at birth came strongest from **day-old chicks and goat kids** (0% deep crossings).'",
      },
      {
        wrong: "Writing 'Haber & Levin (2001) used laboratory tachistoscopes and proved Gibson right that memory never affects distance perception.'",
        right: "Write: 'Haber & Levin (2001) tested students **outdoors in a real grassy field up to 100 m** and supported **Gregory's top-down theory**: prior familiarity with standard-sized objects (e.g. basketballs, soda bottles) significantly improved both size and distance accuracy.'",
      },
      {
        wrong: "Writing 'In Gilchrist & Nesberg (1952), hungry students turned the projector UP brighter because they liked food.'",
        right: "Write: 'Food-deprived students adjusted the test projector **dimmer** than the original slide — because hunger made the slide *already appear brighter* to their perceptual system!'",
      },
      {
        wrong: "Writing 'Bremner et al. (2016) showed rural Himba people are born with genetically sharper retinas than British people.'",
        right: "Write: 'Bremner et al. (2016) showed **3–4-year-olds in BOTH UK and rural Himba cultures had low illusion error**, and **urbanised Himba** shifted toward UK susceptibility — proving **cultural and urban visual environment** (global vs local attention), not genetics, drives the difference.'",
      },
    ],
    examMistakes: [
      "Mixing up **retinal disparity** (visual cortex comparing two slightly different retinal images) with **convergence** (proprioceptive tension from eye muscles turning inward).",
      "Defining size constancy lazily as 'things stay the same size' without stating **despite the retinal image shrinking/growing as distance changes**.",
      "Naming 'Müller-Lyer' as an *ambiguous figure* instead of a **geometric distortion illusion** (Necker cube and Rubin's vase are ambiguous figures; Kanizsa triangle is a fiction!).",
      "Explaining Gregory's illusion theory without the mark-scheme phrase **'misplaced size-constancy scaling'** (applying 3D depth rules to a flat 2D surface).",
      "Quoting Gibson & Walk's deep-side crossing figure as '3 out of 36' instead of **3 out of the 27 infants who moved off the centre board (11%)** — remember 9 of the 36 infants never left the board!",
      "Forgetting to distinguish **familiar invariant-sized** objects (basketball) from **familiar variant-sized** objects (Christmas tree) and **unfamiliar shapes** in **Haber & Levin (2001)**.",
      "Evaluating McGinnies (1949) without mentioning **social embarrassment / response bias** (students hesitating to say taboo words aloud to a professor even after recognising them).",
      "Treating Gibson and Gregory as mutually exclusive instead of earning top AO3 synthesis marks by explaining *when* bottom-up cues dominate (clear motion) vs *when* top-down schemas step in (brief/ambiguous/distant viewing).",
    ],
    mnemonics: [
      {
        topic: "5 Monocular Depth Cues",
        device: "L-R-O-H-T — 'Little Rabbits Often Hop Together'",
        explanation: "**L**inear perspective, **R**elative size, **O**cclusion (overlap), **H**eight in plane, **T**exture gradient.",
      },
      {
        topic: "5 Gestalt Organisational Principles",
        device: "F-P-S-C-C — 'Five Painters Sketch Crisp Contours'",
        explanation: "**F**igure–ground, **P**roximity, **S**imilarity, **C**ontinuity, **C**losure.",
      },
      {
        topic: "Gibson vs Gregory Direction & Core Studies",
        device: "Gi**B**son = **B**ottom-up (Babies on Cliff); Gre**G**ory = **G**uessing Top-Down (Hypotheses)",
        explanation: "Gi**B**son = **B**ottom-up Direct theory + **B**abies on Visual Cliff (1960); Gre**G**ory = **G**uessing **G**aps via Top-Down schemas + Haber & Levin (2001).",
      },
      {
        topic: "4 Determinants of Perceptual Set",
        device: "M-E-E-C — 'Minds Expect Extra Context'",
        explanation: "**M**otivation (Gilchrist & Nesberg hunger), **E**motion (McGinnies taboo GSR), **E**xpectation (Bruner & Minturn `B/13`), **C**ulture (Segall carpentered world & Bremner Himba).",
      },
    ],
    realWorld: [
      {
        title: "Road Safety: Transverse 'Ponzo / Optic-Flow' Stripes on Slip Roads",
        detail: "Transport engineers paint white bars across motorway exit slip-roads at **progressively narrower intervals**! As drivers approach a roundabout, the accelerating **optic flow** creates the illusion of speeding up, nudging drivers to brake smoothly without thinking.",
        emoji: "🛣️",
      },
      {
        title: "Forced-Perspective Cinema Magic (Lord of the Rings)",
        detail: "Peter Jackson filmed Elijah Wood (Frodo) sitting **several metres behind** Ian McKellen (Gandalf) on custom-angled tables aligned to a **single camera lens** — stripping binocular cues so relative size made Frodo look Hobbit-sized with zero CGI!",
        emoji: "🎬",
      },
      {
        title: "UX & App Design: Gibson's Affordances",
        detail: "Don Norman brought Gibson's **affordances** into smartphone UI design: raised shadowed buttons *afford tapping*, scrollbars *afford dragging*, and physical 'push-plate' vs 'pull-handle' doors need zero text labels when affordances match function.",
        emoji: "📱",
      },
      {
        title: "Forced Perspective Architecture at Disneyland",
        detail: "Sleeping Beauty Castle uses shrinking upper-storey bricks and smaller top windows (**relative size + linear perspective**) so a modest 23-metre building looks like a towering majestic fortress!",
        emoji: "🏰",
      },
      {
        title: "Supermarket Packaging & Ebbinghaus Plate Tricks",
        detail: "Serving an identical meal portion on a **smaller dinner plate** (Ebbinghaus / Delboeuf context illusion) makes the food portion look ~15–20% larger, helping diners feel satisfied with healthier portions!",
        emoji: "🍽️",
      },
    ],
    videos: [
      {
        title: "Sensation & Perception, Monocular vs Binocular Cues",
        channel: "CrashCourse Psychology",
        url: "https://www.youtube.com/results?search_query=crash+course+psychology+sensation+and+perception+depth+cues",
      },
      {
        title: "Gibson & Walk (1960) Original Visual Cliff Footage & Direct Theory",
        channel: "Psychology Classics Archive",
        url: "https://www.youtube.com/results?search_query=gibson+and+walk+1960+visual+cliff+experiment+psychology",
      },
      {
        title: "Gregory's Hollow Mask & Constructivist Illusion Scaling",
        channel: "Royal Institution / Richard Gregory",
        url: "https://www.youtube.com/results?search_query=richard+gregory+hollow+mask+illusion+constructivist+perception",
      },
      {
        title: "Perceptual Set & Cultural Illusions (Himba Ebbinghaus Study)",
        channel: "Cambridge IGCSE Psychology Revision",
        url: "https://www.youtube.com/results?search_query=perceptual+set+bruner+minturn+ebbinghaus+himba+culture+psychology",
      },
    ],
    formulas: [
      {
        name: "Sensation vs Perception",
        formula: "Sensation = retinal transduction of light | Perception = cortical organisation & interpretation",
        note: "Eyes detect raw wavelengths (sensation); visual cortex constructs 3D objects (perception).",
      },
      {
        name: "Monocular vs Binocular Depth Cues",
        formula: "1 Eye: Linear perspective, Relative size, Occlusion, Height in plane, Texture | 2 Eyes: Disparity, Convergence",
        note: "Binocular cues require two eyes (~6.3 cm apart) and work best under ~6–10 m.",
      },
      {
        name: "Size Constancy Scaling Equation",
        formula: "Perceived Size = Retinal Image Size * Perceived Distance",
        note: "When viewing distance doubles ({{* 2}}), retinal image halves ({{* 1/2}}), keeping perceived size constant.",
      },
      {
        name: "Gestalt Laws of Organisation",
        formula: "Figure-Ground, Proximity, Similarity, Continuity, Closure (Law of Prägnanz)",
        note: "Rubin's vase = reversible figure–ground; Kanizsa triangle = closure + illusory fiction.",
      },
      {
        name: "Visual Illusion Taxonomy",
        formula: "Ambiguous (Necker, Rubin) | Fiction (Kanizsa) | Distortion (Müller-Lyer, Ponzo, Ebbinghaus)",
        note: "Müller-Lyer: outward fins (>—<) look longer than inward arrowheads (<—>).",
      },
      {
        name: "Gibson's Direct Theory (1966)",
        formula: "Bottom-up data: Optic Flow + Texture Gradients + Invariants + Affordances → Direct Perception",
        note: "Nativist ecological view: zero top-down schemas needed during real-world movement.",
      },
      {
        name: "Gibson & Walk (1960) Visual Cliff",
        formula: "36 infants (6–14 m) → 27 moved: {{27/27}} (100%) shallow vs {{3/27}} (11%) deep (89% refused)",
        note: "Day-old chicks & goat kids showed 0% deep crossings → innate cliff avoidance.",
      },
      {
        name: "Gregory's Constructivist Theory (1970)",
        formula: "Ambiguous retinal input + Top-down schemas/experience → Perceptual Hypothesis",
        note: "Explains Müller-Lyer & Ponzo via misplaced size-constancy scaling on flat 2D surfaces.",
      },
      {
        name: "Haber & Levin (2001) Familiarity Study",
        formula: "45 objects (15 invariant, 15 variant, 15 unfamiliar) outdoors up to 100 m (n = 109 & n = 9)",
        note: "Familiar invariant-sized objects (e.g. basketball) gave most accurate size & distance estimates.",
      },
      {
        name: "Bruner & Minturn (1955) Expectation Set",
        formula: "Ambiguous 'I3' flashed: Letter prime → 83% 'B' | Number prime → 92% '13' (n = 24)",
        note: "Demonstrates top-down context expectation acting as both selector and interpreter.",
      },
      {
        name: "Gilchrist & Nesberg (1952) & McGinnies (1949)",
        formula: "20 h hunger → food slides look brighter (n = 26 vs 20) | Taboo words → slower ID + pre-ID GSR",
        note: "Shows physiological motivation (hunger) and emotional perceptual defence shape perception.",
      },
      {
        name: "Bremner et al. (2016) Himba vs UK Study",
        formula: "Age 3–4: Low Ebbinghaus in both | Adults: High UK > Mid Urban Himba > Low Rural Himba",
        note: "Proves cultural & urban visual environments sculpt global vs local contextual perception.",
      },
    ],
  },
};
