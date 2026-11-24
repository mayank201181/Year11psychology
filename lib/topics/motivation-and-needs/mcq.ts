import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Core Concepts, Studies & Definitions
  // =========================================================================
  {
    id: "motivation-and-needs-m1",
    title: "Motivation & Needs — MCQ Paper 1 (Core Theories & Studies)",
    questions: [
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q01",
        question:
          "Which of the following best demonstrates **intrinsic motivation**?",
        options: [
          "Practising piano chords every evening because discovering harmonies feels personally absorbing",
          "Completing maths homework on time solely to avoid an after-school detention",
          "Working weekend shifts at a café solely to save cash for concert tickets",
          "Answering lecture questions solely to collect extra-credit wooden chips",
        ],
        answerIndex: 0,
        explanation:
          "Intrinsic motivation comes from inherent enjoyment, curiosity or mastery inside the activity itself (playing piano for love of harmony). Avoiding detention, earning cash and collecting extra-credit chips all involve separable external consequences, making them extrinsic.",
        difficulty: "warmup",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Ask whether the reward is inside the activity itself or a separate prize/penalty afterwards.",
          "Eliminate any example driven by detention, money or extra-credit points.",
        ],
        strategy: "Locate locus of causality",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q02",
        question:
          "In a classroom **token economy**, what psychological role do the plastic stars or wooden chips themselves play?",
        options: [
          "Unconditioned primary reinforcers",
          "Secondary reinforcers exchanged later for backup reinforcers",
          "Growth (being) needs at the apex of self-actualisation",
          "Innate homeostatic biological drives",
        ],
        answerIndex: 1,
        explanation:
          "Tokens have no innate biological survival value on their own; they are **secondary reinforcers** that gain motivating power because learners can exchange them later for valued **backup reinforcers** (such as extra credit or privileges).",
        difficulty: "warmup",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Can you eat or drink a wooden token to survive?",
          "In operant conditioning, learned tokens are paired with valued backup rewards.",
        ],
        strategy: "Precise CIE terminology",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q03",
        question:
          "What experimental design did **Boniecki & Moore (2003)** use to test their university classroom token economy, and what happened in the final phase?",
        options: [
          "Independent-measures lab experiment; token students stayed higher forever",
          "Cross-sectional postal survey; older students ignored the tokens",
          "Single-group A-B-A reversal design; participation returned to baseline once tokens were withdrawn",
          "Matched-pairs twin study; identical twins raised their hands equally often",
        ],
        answerIndex: 2,
        explanation:
          "Boniecki & Moore (2003) tracked 63 undergraduates across an **A-B-A reversal field design** (Baseline A1 → Token Phase B → Withdrawal A2). Participation doubled and response latency fell during Phase B, then **reverted to baseline** in A2 once tokens stopped.",
        difficulty: "core",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Recall the three 8-session phases: no tokens, wooden tokens, then tokens removed.",
          "What happens to operantly reinforced behaviour when external rewards stop?",
        ],
        strategy: "Match named study design & findings",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q04",
        question:
          "Under which exact condition is the **overjustification effect** most likely to occur?",
        options: [
          "Giving sincere, unexpected verbal praise after someone masters a difficult new skill",
          "Promising an expected tangible prize for an activity a child already enjoys intrinsically, then removing the prize",
          "Offering temporary tokens to help bored students start a tedious admin chore they previously avoided",
          "Allowing learners to choose their own essay topic from three equally challenging prompts",
        ],
        answerIndex: 1,
        explanation:
          "The overjustification effect occurs specifically when an **expected, tangible extrinsic reward** is introduced for an **already intrinsically enjoyable** task, shifting perceived causality outward so interest drops below baseline after withdrawal. Unexpected praise and task choice support intrinsic motivation.",
        difficulty: "core",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Did the learner already love the task before any prize was offered?",
          "Expected tangible rewards crowd out internal interest; unexpected verbal praise does not.",
        ],
        strategy: "Check boundary conditions",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q05",
        question:
          "What is the correct bottom-to-top sequence of **Maslow's five-tier Hierarchy of Needs**?",
        options: [
          "Safety → Physiological → Esteem → Love & Belonging → Self-Actualisation",
          "Physiological → Love & Belonging → Safety → Esteem → Self-Actualisation",
          "Physiological → Safety → Esteem → Love & Belonging → Self-Actualisation",
          "Physiological → Safety → Love & Belonging → Esteem → Self-Actualisation",
        ],
        answerIndex: 3,
        explanation:
          "Maslow's hierarchy progresses upward from survival **Physiological** needs (Tier 1) → **Safety** (Tier 2) → **Love & Belonging** (Tier 3) → **Esteem** (Tier 4) → **Self-Actualisation** (Tier 5). Mixing up Love/Belonging and Esteem is one of the commonest CIE exam slips.",
        difficulty: "warmup",
        guideRef: "maslow-hierarchy",
        hints: [
          "Use the mnemonic: Please Stop Leaving Every Saturday.",
          "Friendship and belonging (Tier 3) come before status and esteem (Tier 4).",
        ],
        strategy: "Use ordered mnemonic",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q06",
        question:
          "How does Maslow distinguish **deficiency (D) needs** from a **growth / being (B) need**?",
        options: [
          "Deficiency needs arise from deprivation and subside once satisfied, whereas growth motivation continues or strengthens as potential is fulfilled",
          "Deficiency needs are only found in collectivist cultures, whereas growth needs are strictly biological reflexes",
          "Deficiency needs sit at the very top of the pyramid, whereas growth needs are food, water and sleep",
          "Deficiency needs require operant tokens, whereas growth needs depend on classical conditioning",
        ],
        answerIndex: 0,
        explanation:
          "Tiers 1–4 are **deficiency needs (D-needs)** (hunger, insecurity, loneliness, low esteem) whose tension fades once met. Tier 5 (**self-actualisation**) is a **growth need (B-need)** driven by realising personal potential rather than repairing a lack, so engaging in it sustains motivation.",
        difficulty: "core",
        guideRef: "maslow-hierarchy",
        hints: [
          "What happens to hunger motivation right after you eat a large meal?",
          "Contrast 'fixing a lack' (Tiers 1–4) with 'continuing to grow' (Tier 5).",
        ],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q07",
        question:
          "Which three innate psychological needs form the core of **Deci & Ryan's Self-Determination Theory (SDT)**?",
        options: [
          "Homeostasis, Incentives and Unconscious Nostalgia",
          "Physiological survival, Financial safety and Social status",
          "Autonomy, Competence and Relatedness",
          "Specificity, Measurability and Time-boundedness",
        ],
        answerIndex: 2,
        explanation:
          "Deci & Ryan's Self-Determination Theory identifies **Autonomy** (volitional choice), **Competence** (effective mastery of optimal challenges) and **Relatedness** (warm social connection) — remembered via the mnemonic **ARC**.",
        difficulty: "warmup",
        guideRef: "self-determination-theory",
        hints: [
          "Recall the three-letter mnemonic ARC.",
          "Think of choice, mastery and belonging.",
        ],
        strategy: "Use acronym recall",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q08",
        question:
          "In **Calvo et al. (2010)**, what profile distinguished adolescent football players who **dropped out** one year later from those who persisted?",
        options: [
          "Higher intrinsic joy and higher relatedness, but excessive physical height",
          "Lower perceived autonomy and relatedness alongside higher amotivation and external regulation",
          "Identical autonomy and relatedness scores, differing only in hourly match pay",
          "Higher self-actualisation scores caused by authoritarian coaching commands",
        ],
        answerIndex: 1,
        explanation:
          "Tracking 492 teenage male Spanish footballers over one season, **Calvo et al. (2010)** found that dropouts reported significantly **lower satisfaction of autonomy and relatedness** (and lower intrinsic motivation) plus **higher external regulation and amotivation** than persisters.",
        difficulty: "core",
        guideRef: "self-determination-theory",
        hints: [
          "Did players who quit feel supported in choice and belonging, or controlled and amotivated?",
          "Connect unsatisfied SDT needs to the lowest end of the motivation continuum (amotivation).",
        ],
        strategy: "Link study variables to outcome",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q09",
        question:
          "According to **Clark Hull's (1943) Biological Drive-Reduction Theory**, what is the precise difference between a **need** and a **drive**?",
        options: [
          "A need is the unpleasant psychological tension (such as feeling thirsty), whereas a drive is the objective cellular deficit (such as low body water) detected in tissue",
          "A need is an external environmental reward (such as a warm pastry or cash bonus), whereas a drive is a conscious SMART target set to organise future workplace effort",
          "A need is a higher-order humanistic growth desire (such as self-actualisation), whereas a drive is an operantly conditioned secondary token exchanged for backup prizes",
          "A need is the objective physiological deficit (such as cellular dehydration), whereas a drive is the unpleasant psychological tension (such as thirst) pushing action",
        ],
        answerIndex: 3,
        explanation:
          "In Hull's homeostatic sequence, a **need** is a biological tissue/physiological deficit (low water or blood glucose), which generates a **drive** — an aversive internal state of psychological arousal/tension (thirst or hunger) that energises behaviour to restore **homeostasis**.",
        difficulty: "core",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Separate the bodily/cellular deficit from the felt psychological tension state.",
          "Dehydration in cells = need; feeling thirsty = drive.",
        ],
        strategy: "Distinguish paired terms",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q10",
        question:
          "Under Hull's classification, working extra hours to earn **money** or **promotion points** is driven by a:",
        options: [
          "Primary (innate) biological drive wired for immediate cellular survival",
          "Secondary (acquired) drive learned through association with primary needs",
          "Homeostatic physiological deficit triggered by tissue fluid imbalance",
          "Humanistic growth need operating independently of external reinforcement",
        ],
        answerIndex: 1,
        explanation:
          "Infants are not born craving currency or job titles; **money** and **grades** are **secondary (acquired) drives** because their motivating value is learned via association with securing **primary** survival needs such as food, water and warmth.",
        difficulty: "warmup",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Primary = unlearned biological survival; Secondary = learned via association.",
          "Can banknotes directly hydrate your cells without buying water?",
        ],
        strategy: "Classify innate vs learned",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q11",
        question:
          "Which everyday human behaviour poses the sharpest empirical challenge to **Hull's Drive-Reduction Theory**?",
        options: [
          "Drinking cold water immediately after running a marathon in hot weather",
          "Putting on a thick fleece jacket when room temperature drops to 8 °C",
          "Paying to skydive out of an aeroplane when well-fed, rested and physically safe",
          "Sleeping deeply after staying awake for twenty hours",
        ],
        answerIndex: 2,
        explanation:
          "Drinking when dehydrated, dressing warmly when cold, and sleeping when exhausted all **reduce** physiological deficits to restore homeostasis. **Skydiving** deliberately **increases** physiological arousal and adrenaline when no biological deficit exists, contradicting tension reduction.",
        difficulty: "warmup",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Hull predicts we always act to *lower* arousal/tension.",
          "Which behaviour intentionally *spikes* heart rate and adrenaline?",
        ],
        strategy: "Spot the counter-example",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q12",
        question:
          "What did **Merchant, LaTour, Ford & LaTour (2013, Study 3)** discover when comparing nostalgic versus non-nostalgic charity print advertisements?",
        options: [
          "Nostalgic adverts confused viewers and cut charitable donations in half",
          "Nostalgic adverts only worked when paired with a classroom token economy",
          "Non-nostalgic spreadsheets triggered stronger unconscious psychodynamic attachment than childhood memories",
          "Nostalgic adverts evoked warm personal memories, increased emotional engagement, and strengthened charitable donation intentions",
        ],
        answerIndex: 3,
        explanation:
          "Merchant et al. (2013, Study 3) found that charity adverts evoking **personal nostalgia** awakened warm emotional bonds to the past (and buffered negative thoughts), elevating **empathy/emotional engagement** and increasing **intentions to donate**.",
        difficulty: "core",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Think about how warm childhood memories affect empathy toward a charity appeal.",
          "Did nostalgia help or hinder willingness to donate?",
        ],
        strategy: "Recall compulsory named study",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q13",
        question:
          "According to the **Yerkes-Dodson Law**, how does physiological arousal relate to task performance?",
        options: [
          "Performance follows a downward linear slope, peaking near sleep-like calm and deteriorating steadily whenever physiological arousal rises",
          "Performance follows an upward linear slope, climbing indefinitely as adrenaline and physiological arousal increase with no choking threshold",
          "Performance follows an inverted-U curve, peaking at a moderate optimal level of arousal and declining at very low or excessive arousal",
          "Performance follows a U-shaped curve, peaking at both extreme drowsiness and intense panic while collapsing during moderate calm alertness",
        ],
        answerIndex: 2,
        explanation:
          "The **Yerkes-Dodson Law** describes an **inverted-U** relationship: under-arousal causes sluggishness/boredom, moderate **optimal arousal** maximises focus and execution, and extreme over-arousal triggers anxiety and performance choking.",
        difficulty: "warmup",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Picture the shape of the Yerkes-Dodson graph.",
          "What happens if you are half-asleep vs panicking in an exam hall?",
        ],
        strategy: "Visualise the curve",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q14",
        question:
          "In **Locke & Latham's Goal-Setting Theory**, what kind of goal consistently leads to higher performance than telling someone to *'do your best'*?",
        options: [
          "Secret goals hidden from the learner so they feel zero pressure",
          "Specific, moderately challenging goals accompanied by regular feedback and commitment",
          "Effortlessly easy goals that every participant completes in thirty seconds",
          "Impossible targets set ten times beyond anyone's physical capability",
        ],
        answerIndex: 1,
        explanation:
          "Locke & Latham (1990) showed that **specific and challenging (yet attainable) goals**, supported by **timely feedback** and **goal commitment**, focus attention and sustain effort far better than vague *'do your best'* instructions or trivial goals.",
        difficulty: "warmup",
        guideRef: "goal-setting-applications",
        hints: [
          "Why does 'do your best' fail to regulate effort?",
          "Balance clarity and stretch without making the target impossible.",
        ],
        strategy: "Eliminate extremes",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m1-q15",
        question:
          "A swimmer writes: *'Cut my 50 m freestyle time from 31.0 s to 29.8 s before the November championships.'* What does the **29.8 s** figure primarily provide inside the **SMART** framework?",
        options: [
          "Unconscious nostalgic displacement",
          "Homeostatic primary drive reduction",
          "A Measurable quantitative benchmark to track progress objectively",
          "Relatedness with spectators in the grandstand",
        ],
        answerIndex: 2,
        explanation:
          "Specifying **29.8 s** (down from 31.0 s) makes the goal **Measurable** (quantified with a stopwatch to 0.1 s), allowing the swimmer and coach to verify objectively whether progress is on track.",
        difficulty: "warmup",
        guideRef: "goal-setting-applications",
        hints: [
          "Match the exact stopwatch number (29.8 s) to one of S-M-A-R-T.",
          "Which letter requires a quantifiable metric or number?",
        ],
        strategy: "Map stem detail to SMART letter",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: CIE 0266 Novel Scenarios & Application
  // =========================================================================
  {
    id: "motivation-and-needs-m2",
    title: "Motivation & Needs — MCQ Paper 2 (Scenario Application)",
    questions: [
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q01",
        question:
          "Leo loves sketching comic strips every weekend for fun. His uncle starts paying him $5 per page for a month, then stops paying. Two months later, Leo never sketches at all. Which cognitive shift explains Leo's behaviour?",
        options: [
          "His innate biological drive for creative sketching reached permanent homeostatic equilibrium once he completed enough pages to satisfy it",
          "The expected cash payment shifted his attribution from internal enjoyment to external reward, producing the overjustification effect",
          "The regular financial feedback satisfied his competence and autonomy needs under SDT, making further weekend practice unnecessary",
          "Paying $5 per page raised his physiological arousal past the Yerkes-Dodson peak, permanently triggering anxiety whenever he held a pencil",
        ],
        answerIndex: 1,
        explanation:
          "Paying expected cash for a hobby Leo already loved shifted his perceived locus of causality from **intrinsic** joy to **extrinsic** payment; once the $5 stopped, his intrinsic motivation had been crowded out (**overjustification effect**).",
        difficulty: "core",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Check Leo's baseline: he *already* loved sketching before money entered.",
          "What happens to internal attribution when expected cash is introduced and then removed?",
        ],
        strategy: "Trace attribution shift",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q02",
        question:
          "Ms Tan wants her quiet Year 11 seminar group to volunteer answers immediately, just like in **Boniecki & Moore (2003)**. Which classroom change most closely replicates their successful Phase B procedure?",
        options: [
          "Waiting until the end of the term to email a general thank-you newsletter to the whole school",
          "Deducting 5 marks from every student whenever a silence lasts longer than three seconds",
          "Dimming the classroom lights to evoke nostalgic primary-school memories",
          "Handing an immediate token worth 1 house/credit point to the first student who raises a hand to answer each teacher question",
        ],
        answerIndex: 3,
        explanation:
          "Boniecki & Moore (2003) used **immediate positive reinforcement**: handing a wooden token (secondary reinforcer redeemable for 1 extra-credit backup point) right after a student volunteered an answer. Delayed newsletters lack immediacy, and mark deductions are punishment/response cost.",
        difficulty: "core",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Operant token economies rely on *immediate positive reinforcement*, not punishment or delayed group emails.",
          "Match Boniecki & Moore's exact contingency for answering a directed question.",
        ],
        strategy: "Apply study procedure to stem",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q03",
        question:
          "Which teacher feedback statement is **least** likely to trigger the overjustification effect and **most** likely to nurture intrinsic motivation?",
        options: [
          "'If you finish this painting today, I will give you a $10 shopping voucher.'",
          "'You will lose break time unless you colour every corner neatly.'",
          "'Your shading technique on those clouds shows real control of light and shadow — look how much depth you created!'",
          "'Only the student who wins the cash prize was truly worth watching today.'",
        ],
        answerIndex: 2,
        explanation:
          "Specific, sincere **informational verbal praise** highlighting controllable technique and mastery satisfies **competence** without making behaviour feel externally bribed or coerced, thereby protecting and enhancing intrinsic motivation.",
        difficulty: "core",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Distinguish controlling bribes/threats from informational mastery feedback.",
          "Which comment builds perceived competence without attaching a tangible prize?",
        ],
        strategy: "Spot informational vs controlling feedback",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q04",
        question:
          "Priya has nutritious meals, a safe home and a loving circle of close friends, yet she feels deeply insecure because her manager never acknowledges her engineering solutions and dismisses her ideas in meetings. Which tier of **Maslow's hierarchy** is directly thwarted?",
        options: [
          "Physiological needs (Tier 1)",
          "Safety needs (Tier 2)",
          "Love and belonging needs (Tier 3)",
          "Esteem needs (Tier 4)",
        ],
        answerIndex: 3,
        explanation:
          "Priya's physiological (meals), safety (safe home) and love/belonging (close friends) tiers are satisfied. Feeling unappreciated and lacking recognition/respect for competence directly thwarts **Tier 4: Esteem needs**.",
        difficulty: "core",
        guideRef: "maslow-hierarchy",
        hints: [
          "Tick off Tiers 1, 2 and 3 using the clues in the stem.",
          "Recognition, respect and confidence in mastery belong to Tier 4.",
        ],
        strategy: "Tick met tiers from bottom up",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q05",
        question:
          "During a warzone blackout with scarce food and constant air-raid sirens, a poet stays up by candlelight writing verses to express her deepest human values. How would a CIE 0266 student use this case to evaluate **Maslow's Hierarchy of Needs**?",
        options: [
          "It confirms Maslow's strict bottom-up rule by showing Tier 1 physiological hunger and Tier 2 safety deficits automatically trigger Tier 5 creativity",
          "It provides a non-sequential exception showing people can pursue Tier 5 self-actualisation even when Tier 1 and Tier 2 deficiency needs are severely unmet",
          "It demonstrates that artistic poetry functions as a Tier 1 primary physiological drive controlled by hypothalamic homeostasis rather than a growth need",
          "It proves that Maslow's hierarchy suffers from androcentric bias because only men were historically studied as self-actualised artists in warzones",
        ],
        answerIndex: 1,
        explanation:
          "Maslow's strict sequential claim predicts lower survival/safety deficits block Tier 5 creativity; real-world cases of artists or activists pursuing **self-actualisation** amid hunger and danger challenge rigid bottom-up progression (consistent with Tay & Diener 2011).",
        difficulty: "core",
        guideRef: "maslow-hierarchy",
        hints: [
          "Are the poet's physiological and safety tiers satisfied?",
          "Use this mismatch to critique Maslow's strict bottom-up sequence.",
        ],
        strategy: "Apply theoretical evaluation",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q06",
        question:
          "In **Self-Determination Theory**, a student works closely in a pair with her best friend on a chemistry investigation that **both** girls freely chose from five lab options. Which statement accurately describes her **autonomy** and **relatedness**?",
        options: [
          "Low autonomy because she is not working alone, and high relatedness",
          "High autonomy because she freely endorsed and chose the task, AND high relatedness because she collaborates warmly with her friend",
          "High autonomy, but zero relatedness because science labs only measure competence",
          "Zero autonomy and zero relatedness because teachers provided five options instead of infinite options",
        ],
        answerIndex: 1,
        explanation:
          "A classic CIE mark-scheme trap is equating **autonomy** with *working alone*. In SDT, **autonomy** means **volitional choice and personal endorsement**, so collaborating warmly on a self-chosen project satisfies **both high autonomy and high relatedness** simultaneously!",
        difficulty: "challenge",
        guideRef: "self-determination-theory",
        hints: [
          "Beware the exam trap: does autonomy mean isolation, or volitional choice?",
          "Can you feel both free in your choice AND connected to a partner?",
        ],
        strategy: "Avoid the 'autonomy = alone' trap",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q07",
        question:
          "Coach Lim notices three junior badminton players thinking of quitting. Applying **Calvo et al. (2010)** and **Self-Determination Theory**, which coaching reform will best prevent dropout?",
        options: [
          "Threatening benching for every unforced error while banning casual chat during warm-ups",
          "Paying players $2 per rally won during training then cancelling payments mid-season",
          "Involving players in choosing tactical drills, giving specific progress feedback, and running inclusive team-bonding games",
          "Posting a public ranking board shaming the bottom three players every Monday",
        ],
        answerIndex: 2,
        explanation:
          "Calvo et al. (2010) showed dropout stems from thwarted **autonomy** and **relatedness** (plus low competence support). Letting players co-select drills (**autonomy**), giving mastery feedback (**competence**), and building team warmth (**relatedness**) fosters autonomous persistence.",
        difficulty: "core",
        guideRef: "self-determination-theory",
        hints: [
          "Which three SDT needs protected young athletes against quitting in Calvo et al. (2010)?",
          "Match drill choice → autonomy, progress feedback → competence, team bonding → relatedness.",
        ],
        strategy: "Map intervention to all 3 ARC needs",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q08",
        question:
          "After finishing a huge buffet dinner until her stomach feels completely full, Amira walks past a patisserie window displaying glossy chocolate éclairs and immediately buys one. Which theory **best** accounts for Amira's purchase?",
        options: [
          "Hull's Biological Drive-Reduction Theory, because severe cellular hypoglycaemia pushed her to survive",
          "Token extinction in an A-B-A reversal design",
          "Maslow's safety tier, because pastries provide physical shelter",
          "Cognitive Incentive Theory ('pull'), because the appealing sight and aroma of an external stimulus attracted behaviour despite zero biological hunger",
        ],
        answerIndex: 3,
        explanation:
          "Because Amira is physiologically sated (homeostasis already met, no biological hunger deficit), **Hull's 'push' model** cannot explain her eating. **Cognitive Incentive Theory** explains how an attractive external cue (**'pull'**) motivates behaviour in the absence of internal deprivation.",
        difficulty: "core",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Is Amira biologically hungry after a huge buffet?",
          "Contrast internal biological 'push' with external stimulus 'pull'.",
        ],
        strategy: "Contrast push vs pull",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q09",
        question:
          "Two golfers face a tricky 3-metre putt: Golfer A is a seasoned tour professional doing a routine tap-in; Golfer B is a nervous beginner learning a brand-new grip. According to task-complexity extensions of the **Yerkes-Dodson Law**, who benefits from a **lower** arousal zone?",
        options: [
          "Golfer A, because experts fall asleep whenever spectators watch",
          "Golfer B, because complex or unfamiliar tasks peak at lower-to-moderate arousal before anxiety disrupts fine motor coordination",
          "Both golfers peak only at maximum panic-level arousal",
          "Neither golfer is affected because arousal only influences memory recall, never motor tasks",
        ],
        answerIndex: 1,
        explanation:
          "Under the Yerkes-Dodson Law, **complex, fine-motor or unmastered tasks** have a **lower optimal arousal threshold** (high arousal easily causes choking/errors), whereas simple, well-learned skills tolerate higher arousal.",
        difficulty: "challenge",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Compare optimal arousal for a novel, complex skill versus an automatic habit.",
          "High adrenaline disrupts delicate, unpractised coordination much sooner.",
        ],
        strategy: "Apply task-complexity shift on inverted-U",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q10",
        question:
          "A children's hospital charity designs two fundraising posters: Poster 1 lists hospital budget figures in a table; Poster 2 shows a sepia photograph of children riding bicycles at sunset with the caption *'Remember the summers that shaped who you are?'* Based on **Merchant et al. (2013)**, what psychological sequence will Poster 2 trigger?",
        options: [
          "Personal nostalgia → warm positive emotion & reduced counter-arguing → heightened emotional engagement/empathy → stronger donation intentions",
          "Personal nostalgia → painful grief over lost youth → defensive psychological withdrawal & avoidance → sharply reduced donation intentions",
          "Extrinsic social guilt → controlled external regulation under SDT → overjustification crowding out sympathy → lower donation intentions",
          "Rational budget scrutiny → conscious SMART goal setting → lowered emotional involvement with the imagery → strictly analytical giving",
        ],
        answerIndex: 0,
        explanation:
          "Merchant et al. (2013, Study 3) demonstrated that nostalgic charity cues evoke warm personal memories of the past, soften negative thoughts, heighten **emotional engagement/empathy** with the cause, and significantly increase **donation intentions**.",
        difficulty: "core",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Trace the mediating steps in Merchant et al. (2013) Study 3.",
          "Nostalgia evokes warm emotion and empathy, lifting willingness to donate.",
        ],
        strategy: "Trace causal mediation chain",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q11",
        question:
          "Kieran writes his IGCSE Psychology goal: *'Complete 3 past-paper data-response questions every Wednesday by 6 pm for the next 6 weeks, scoring at least 85%.'* Which **SMART** element is demonstrated by checking that 3 questions per week fits sensibly alongside his school timetable and current 75% mock average?",
        options: [
          "Achievable and Realistic",
          "Amotivated and Retroactive",
          "Autonomic and Reflexive",
          "Ambiguous and Random",
        ],
        answerIndex: 0,
        explanation:
          "Stepping up from 75% to 85% via 3 questions a week alongside existing commitments ensures the target is **Achievable** (stretching yet within current capability) and **Realistic** (workable in real life).",
        difficulty: "warmup",
        guideRef: "goal-setting-applications",
        hints: [
          "Look at the 'A' and 'R' inside S-M-A-R-T.",
          "Why check his current 75% mock score and weekly timetable?",
        ],
        strategy: "Audit SMART letters",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q12",
        question:
          "A call-centre manager imposes a strict target: *'Close 40 sales calls per day by 5 pm or face disciplinary warning'*, while forbidding staff from customising scripts or chatting with colleagues. Productivity rises in Week 1, but staff turnover triples by Month 3. Which **combined** theoretical analysis best explains why?",
        options: [
          "Although the target was Specific, Measurable and Time-bound, coercion and isolation thwarted SDT autonomy and relatedness, causing controlled burnout and dropout",
          "Because the target was too vague and unmeasurable under Locke & Latham's theory, workers lacked clear feedback in Week 1 and gradually lost arousal from boredom",
          "Although script bans boosted SDT autonomy and competence, offering daily cash bonuses triggered the overjustification effect and reduced intrinsic sales enjoyment",
          "Although isolating staff satisfied Maslow's Tier 2 safety needs, failing to lower physiological hunger drives under Hull's model prevented steady call output",
        ],
        answerIndex: 0,
        explanation:
          "Externally imposed numerical quotas satisfy parts of **SMART** (S, M, T), driving short-term output, but threats and script bans crush **SDT autonomy** and **relatedness**, shifting staff into anxious controlled regulation and eventual quitting.",
        difficulty: "challenge",
        guideRef: "goal-setting-applications",
        hints: [
          "Why did output rise in Week 1 (Locke & Latham) yet staff quit by Month 3 (Deci & Ryan)?",
          "Check what script bans and threats do to autonomy and relatedness.",
        ],
        strategy: "Synthesise cognitive + SDT lenses",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q13",
        question:
          "In a follow-up classroom study, baseline participation in Week 1 is **15 comments per lesson**. During a token economy in Week 2 it rises to **36 comments per lesson**. What is the **percentage increase** in comments from Week 1 to Week 2?",
        options: [
          "21%",
          "41.7%",
          "140%",
          "240%",
        ],
        answerIndex: 2,
        explanation:
          "Increase = 36 − 15 = 21 comments. Percentage increase = (21 ÷ 15) × 100 = **140%**. (21% is the raw difference; 240% divides 36 by 15 without subtracting baseline first.)",
        difficulty: "core",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "First find the change: new value minus baseline (36 − 15).",
          "Divide the change by the *original* Week 1 baseline (15), then multiply by 100.",
        ],
        strategy: "Percentage change = (change ÷ original) × 100",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q14",
        question:
          "A youth tennis player sets the goal *'Win the national trophy in June'*, panics whenever an opponent plays brilliantly, and chokes on second serves. Why do sport psychologists recommend replacing pure **outcome goals** with **process/performance SMART goals**?",
        options: [
          "Opponents' brilliance is uncontrollable, spiking anxiety past optimal arousal; controllable process goals (like 75% first-serve placement) sustain SDT competence",
          "Process goals eliminate objective metrics and coach feedback altogether, keeping athletes permanently in a low-arousal state where performance cannot be evaluated",
          "Outcome goals like winning a trophy produce under-arousal and boredom on the Yerkes-Dodson curve, whereas vague 'do your best' prompts maximise serve focus",
          "Locke & Latham's Goal-Setting Theory showed that time-bound targets only work in office typing tasks and consistently impair fine motor coordination in sport",
        ],
        answerIndex: 0,
        explanation:
          "You cannot control how well a rival plays in a tournament (**outcome goal**), which threatens perceived control, spikes anxiety past the **Yerkes-Dodson** peak, and damages **SDT competence**. **Process/performance SMART goals** focus on self-controllable execution.",
        difficulty: "challenge",
        guideRef: "goal-setting-applications",
        hints: [
          "Can you control how well your opponent serves?",
          "Link controllability to both Yerkes-Dodson anxiety and SDT competence.",
        ],
        strategy: "Connect controllability to arousal & competence",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m2-q15",
        question:
          "A multinational company transfers employees from an individualist Western office to a collectivist East Asian branch and finds that 'Employee of the Month' solo spotlight awards embarrass winners rather than motivating them. Which critique of **Maslow's hierarchy** does this illustrate?",
        options: [
          "Biological reductionism: Maslow explains workplace recognition solely through hypothalamic cellular deficits rather than conscious social aspirations",
          "Cultural bias / ethnocentrism: individualist status & solo self-actualisation are not universally prized above group harmony and collective belonging",
          "Overjustification via operant extinction: public trophies automatically abolish all belonging needs once employees earn a monthly financial salary",
          "Androcentric sampling bias: Western offices only employed male managers, proving women never experience Tier 4 esteem or Tier 5 growth motivation",
        ],
        answerIndex: 1,
        explanation:
          "Maslow's model reflects Western **individualist** assumptions (individual status and solo self-actualisation). In **collectivist** cultures (Nevis 1983), group harmony, modesty and collective belonging outweigh singling out one individual above peers.",
        difficulty: "core",
        guideRef: "maslow-hierarchy",
        hints: [
          "Compare individualist spotlight recognition with collectivist group harmony.",
          "What methodological/cultural evaluation term describes assuming Western norms are universal?",
        ],
        strategy: "Apply cultural relativism",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Research Methods, Data & Critical Evaluation in Motivation
  // =========================================================================
  {
    id: "motivation-and-needs-m3",
    title: "Motivation & Needs — MCQ Paper 3 (Evaluation, Methods & Data)",
    questions: [
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q01",
        question:
          "Why is **Boniecki & Moore (2003)** classified as having **high ecological validity** compared with an artificial laboratory button-pressing task?",
        options: [
          "It randomly selected thousands of adult workers from multiple countries and industries, ensuring strong cross-cultural population generalisability",
          "It took place in a real, scheduled university psychology class studying genuine course content with natural student-instructor interaction",
          "It isolated individual students inside a soundproofed laboratory booth with standardised light cues, eliminating extraneous classroom distractions",
          "It replaced all quantitative participation tallies with unstructured biographical interviews, avoiding reductionist numerical measurement of behaviour",
        ],
        answerIndex: 1,
        explanation:
          "Boniecki & Moore (2003) conducted their A-B-A intervention inside an authentic university classroom during normal lectures (**real-world setting and mundane realism**), giving the findings strong **ecological validity** for educational settings.",
        difficulty: "core",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Ecological validity asks whether the study setting reflects real everyday life.",
          "Where were the 63 undergraduates when they earned wooden tokens?",
        ],
        strategy: "Evaluate GRAVE validity",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q02",
        question:
          "What is a valid methodological **limitation** of **Boniecki & Moore's (2003)** single-group A-B-A design?",
        options: [
          "Without a separate simultaneous unrewarded control class, time-related variables (such as exam proximity or mid-semester topic interest) could partially covary with Phase B",
          "Because tokens were never withdrawn in a final baseline phase, the researchers could not observe whether heightened participation persisted after external rewards stopped",
          "Because participation was assessed purely through anonymous end-of-term self-report ratings rather than timed behavioural observation, response latency was never measured",
          "Because the study took place in an artificial laboratory cubicle with unfamiliar computer buttons, its mundane realism was lower than typical classroom field experiments",
        ],
        answerIndex: 0,
        explanation:
          "Although reverting to baseline in Phase A2 strongly argues that tokens caused the surge, a single-group A-B-A design across 8 weeks lacks a **parallel control group** taught identical topics at the exact same point in the semester.",
        difficulty: "challenge",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Think about what changes naturally across Weeks 1–8 of a university semester.",
          "Why might a parallel unrewarded class strengthen internal validity even further?",
        ],
        strategy: "Spot time-confounds in reversal designs",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q03",
        question:
          "In **Boniecki & Moore (2003)**, two trained observers independently timed student hand-raising latency and counted participation to ensure consistency. Which type of reliability does comparing two independent observers check?",
        options: [
          "Split-half questionnaire reliability",
          "Inter-observer (inter-rater) reliability",
          "Population validity",
          "Retroactive interference",
        ],
        answerIndex: 1,
        explanation:
          "Having two or more observers independently record the same classroom behaviours using operationalised categories and checking agreement establishes **inter-observer (inter-rater) reliability**.",
        difficulty: "warmup",
        guideRef: "intrinsic-extrinsic-reinforcement",
        hints: [
          "Two observers watching the same lecture = comparing ratings between observers.",
          "Recall the CIE 0266 reliability term for observer consistency.",
        ],
        strategy: "Link method to reliability type",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q04",
        question:
          "Why can **Calvo et al. (2010)** NOT claim 100% definitive **cause-and-effect** proof that low autonomy *alone* caused athletes to quit football?",
        options: [
          "Because longitudinal questionnaire studies are non-experimental: third variables (such as injury, academic exam load or family relocation) were not experimentally randomised",
          "Because the researchers randomly assigned half the boys to hostile authoritarian coaches, creating severe demand characteristics that confounded next-season dropout rates",
          "Because the study used a cross-sectional snapshot on a single afternoon rather than tracking players into the next season, so actual dropout behaviour was never recorded",
          "Because the sample contained only 12 teenage players from a single local village club, making it impossible to run any statistical comparisons between persisters and dropouts",
        ],
        answerIndex: 0,
        explanation:
          "Calvo et al. (2010) used a **prospective longitudinal correlational/self-report design** rather than randomly assigning teenagers to 'bad coaches'. Uncontrolled **extraneous third variables** (injuries, school pressure) mean relationships remain predictive rather than strictly causal.",
        difficulty: "challenge",
        guideRef: "self-determination-theory",
        hints: [
          "Did Calvo et al. manipulate an IV randomly, or measure natural perceptions via questionnaires?",
          "Non-experimental designs cannot rule out all unmeasured third variables.",
        ],
        strategy: "Distinguish longitudinal prediction vs experimental causation",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q05",
        question:
          "Which **population generalisability** critique applies directly to **Calvo et al. (2010)**?",
        options: [
          "The sample comprised 63 American university psychology undergraduates in one introductory lecture class, so findings may not generalise to youth sports or non-student adults",
          "The sample comprised solely non-student American adult consumers rating charity print adverts, so findings may not generalise to teenage athletes or competitive sport clubs",
          "The sample comprised a tiny biographical list of elite Western historical figures such as Lincoln and Einstein, so findings cannot generalise to everyday adolescent athletes",
          "The sample comprised 492 male Spanish adolescent footballers (aged 13–17), so findings may not generalise identically to female athletes, individual sports or other cultures",
        ],
        answerIndex: 3,
        explanation:
          "Because all 492 participants in Calvo et al. (2010) were **Spanish teenage boys playing competitive team football**, **androcentric / gender and sport-specific sample limits** mean caution is needed before generalising to girls, non-competitive exercise or individual sports.",
        difficulty: "core",
        guideRef: "self-determination-theory",
        hints: [
          "Who were the 492 participants in Calvo et al. (2010): gender, age, country, sport?",
          "Ask who was left out of that sample.",
        ],
        strategy: "Check sample demographics (GRAVE)",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q06",
        question:
          "Self-report questionnaires in **Calvo et al. (2010)** asked teenage players to rate statements about their motivation and feelings toward their team. What validity threat can distort self-report motivation scales?",
        options: [
          "Social desirability bias — players claiming high team dedication to look loyal even if their coach might never see individual forms",
          "Practice and fatigue order effects — players becoming exhausted from repeating identical physical fitness drills across counterbalanced lab trials",
          "Inter-observer disagreement — two sideline observers misinterpreting hand-raising counts during fast-paced live classroom token lectures",
          "Perceptual constancy errors — players misjudging the physical size of football pitches from memory because of binocular retinal disparity",
        ],
        answerIndex: 0,
        explanation:
          "Whenever participants rate their own attitudes, effort or loyalty on Likert scales, **social desirability bias** (presenting oneself favourably) or acquiescence bias can reduce **internal validity**.",
        difficulty: "core",
        guideRef: "self-determination-theory",
        hints: [
          "What classic CIE self-report bias occurs when athletes want to look committed?",
          "Eliminate terms belonging to memory/perception/language topics.",
        ],
        strategy: "Apply self-report evaluation",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q07",
        question:
          "Why did **Merchant et al. (2013, Study 3)** deliberately recruit **non-student adult consumers** rather than relying solely on 19-year-old psychology undergraduates?",
        options: [
          "Psychology undergraduates are strictly prohibited by BPS ethical guidelines from completing Likert scales about charitable donations or personal childhood memories",
          "Adult consumers have longer life histories for nostalgic reflection and real disposable income for charitable giving, improving population and mundane validity",
          "Older adult consumers experience stronger biological hunger drives under Hull's model, making them easier to motivate with food-themed charity print advertisements",
          "Recruiting adult consumers eliminated the intention-behaviour gap entirely by guaranteeing that every participant donated real cash immediately after reading the advert",
        ],
        answerIndex: 1,
        explanation:
          "Testing real adult donors/consumers rather than only young students strengthens **generalisability (population validity)** to actual charity fundraising targets who earn incomes and hold decades of personal nostalgic memories.",
        difficulty: "core",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Who actually donates money to charity mail/print campaigns and has decades of childhood memories?",
          "Why are non-student adult samples prized in consumer psychology?",
        ],
        strategy: "Evaluate sample representativeness",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q08",
        question:
          "In **Merchant et al. (2013, Study 3)**, one limitation of measuring **donation intentions** on a rating scale right after viewing the advert is that:",
        options: [
          "Stated intentions do not always translate 1:1 into actual cash handed over in real life (the intention-behaviour gap)",
          "Independent-measures designs suffer from severe practice order effects between Advert 1 and Advert 2",
          "Print adverts cannot control wording across participants",
          "Quantitative Likert data cannot be summarised with a mean",
        ],
        answerIndex: 0,
        explanation:
          "Rating *how likely* you are to donate costs nothing financially, whereas parting with real cash involves real cost — so self-reported **donation intentions** may overestimate real-world giving (**ecological / predictive validity limit**).",
        difficulty: "challenge",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Compare ticking '7 = very likely to donate' on a survey versus opening your wallet.",
          "Why didn't independent measures suffer from order effects?",
        ],
        strategy: "Critique operationalisation of DV",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q09",
        question:
          "Which major scientific criticism targets **Maslow's humanistic methodology** for defining **self-actualisation**?",
        options: [
          "Maslow extrapolated human self-actualisation exclusively from animal experiments with hungry laboratory rats in Skinner boxes, ignoring conscious human meaning and values",
          "Maslow relied strictly on invasive physiological blood-glucose and hormone assays inside darkened hospital labs, reducing self-actualisation to mechanistic cellular homeostasis",
          "Maslow hand-picked a tiny biographical sample of mostly Western figures he personally admired (such as Lincoln and Einstein), creating subjective researcher bias and low falsifiability",
          "Maslow based his hierarchy solely on large quantitative Likert surveys across 123 countries, omitting qualitative case detail about individual emotional growth and belonging",
        ],
        answerIndex: 2,
        explanation:
          "Maslow derived the traits of self-actualised people via qualitative biographical analysis of a small, subjective, mostly Western male elite — introducing **investigator bias**, **cultural/gender bias**, and **low falsifiability**.",
        difficulty: "challenge",
        guideRef: "maslow-hierarchy",
        hints: [
          "How did Maslow originally choose his examples of 'self-actualised' people?",
          "Consider subjectivity, small biographical sample and Western bias.",
        ],
        strategy: "Critique humanistic evidence base",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q10",
        question:
          "Large cross-national survey data by **Tay & Diener (2011)** across **123 countries** modified Maslow's theory by showing that:",
        options: [
          "Maslow's need categories are uniquely Western constructs that failed to correlate with life satisfaction anywhere outside North America and Western Europe",
          "Human needs are universal, but people gain psychological wellbeing from social love and mastery in parallel even before lower survival/safety needs are 100% fulfilled",
          "Maslow's strict bottom-up sequence holds rigidly across all 123 nations, with zero wellbeing benefit from friendships or respect until food and shelter are 100% secure",
          "Only extrinsic financial income and operant workplace tokens predicted life satisfaction worldwide, whereas social belonging and autonomy showed no measurable impact",
        ],
        answerIndex: 1,
        explanation:
          "Tay & Diener (2011) confirmed Maslow's list of universal needs holds globally, **but** refuted strict sequential gating: social belonging, respect and autonomy boost life satisfaction **simultaneously/in parallel** even when basic needs remain partially unmet.",
        difficulty: "core",
        guideRef: "maslow-hierarchy",
        hints: [
          "Did Tay & Diener scrap Maslow's needs entirely, or challenge their strict one-at-a-time order?",
          "Think 'overlapping waves in parallel' vs 'locked staircase'.",
        ],
        strategy: "Use modern cross-cultural evidence",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q11",
        question:
          "A researcher tests **Locke & Latham's Goal-Setting Theory** by randomly assigning 40 typists to **Group 1** (*'Type at least 65 words per minute with under 3 errors in 10 minutes'*) or **Group 2** (*'Do your absolute best for 10 minutes'*). What are the **operationalised IV and DV**?",
        options: [
          "IV: Words typed per minute and error count in 10 minutes; DV: Goal condition (specific SMART target vs vague 'do your best' instruction)",
          "IV: Total sample size of 40 typists allocated to the lab; DV: Self-reported intrinsic enjoyment rated on a seven-point Likert questionnaire",
          "IV: Standardised 10-minute session length across both groups; DV: Random assignment of typists into Group 1 versus Group 2",
          "IV: Goal condition (specific SMART target vs vague 'do your best' instruction); DV: Words typed per minute and error count in 10 minutes",
        ],
        answerIndex: 3,
        explanation:
          "The manipulated **Independent Variable (IV)** is the goal instruction condition (**SMART specific target vs 'do your best'**), and the measured **Dependent Variable (DV)** is objective typing performance (**words per minute / errors in 10 minutes**).",
        difficulty: "core",
        guideRef: "goal-setting-applications",
        hints: [
          "IV = what the experimenter manipulates between Group 1 and Group 2.",
          "DV = the quantitative typing score measured at the end.",
        ],
        strategy: "Operationalise IV vs DV",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q12",
        question:
          "In a youth sport academy of **250 players**, **45 players** with controlling coaches drop out by season's end. What **percentage** of the academy persisted into the next season?",
        options: [
          "18%",
          "45%",
          "82%",
          "205%",
        ],
        answerIndex: 2,
        explanation:
          "Dropout count = 45, so **persisters** = 250 − 45 = **205 players**. Percentage persisting = (205 ÷ 250) × 100 = **82%**. (18% is the dropout percentage — read the stem carefully!)",
        difficulty: "core",
        guideRef: "self-determination-theory",
        hints: [
          "Careful: the question asks for the percentage who *persisted*, not who dropped out!",
          "Subtract 45 from 250 first, then divide by 250 and multiply by 100.",
        ],
        strategy: "Read target subgroup carefully",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q13",
        question:
          "Why is **Hull's Drive-Reduction Theory** often criticised as **biologically reductionist** when applied to complex human ambitions?",
        options: [
          "It focuses exclusively on holistic self-actualisation, personal meaning and cultural values while ignoring bodily survival needs such as hunger, thirst and homeostasis",
          "It reduces rich cognitive, cultural and value-driven human strivings (like studying medicine or campaigning for justice) down to mechanistic tissue-deficit tension loops",
          "It relies exclusively on subjective biographical case studies and unstructured dream interviews, preventing researchers from testing hypotheses under lab conditions",
          "It attributes all human behaviour strictly to conscious SMART goal-setting and verbal classroom tokens, denying that biological tissues or hormones affect motivation",
        ],
        answerIndex: 1,
        explanation:
          "Explaining human motivation purely via cellular deficits and tension-reduction reflexes (**biological reductionism**) overlooks conscious future planning (**SMART goals**), intrinsic curiosity (**SDT**) and humanistic meaning (**Maslow**).",
        difficulty: "core",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "What does 'biological reductionism' mean in CIE Psychology?",
          "Contrast cellular tissue deficits with conscious long-term human values.",
        ],
        strategy: "Apply reductionism vs holism debate",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q14",
        question:
          "An ethical psychologist designing a school motivation study wants to test token reinforcement **without** harming keen learners via the overjustification effect. Which safeguard is most appropriate?",
        options: [
          "Offer large expected cash prizes to the keenest readers for every chapter they finish for a month, then withdraw all rewards abruptly without debriefing to test extinction",
          "Attach token reinforcement strictly to students' favourite voluntary art hobbies while withholding verbal feedback, ensuring external rewards completely replace internal interest",
          "Display named students' weekly token rankings publicly on the classroom noticeboard and remove break-time privileges from the lowest scorers to maintain strong extrinsic pressure",
          "Apply token contingencies only to an initially low-interest routine task, pair with sincere competence praise, fade tokens gradually toward self-chosen SMART goals, and debrief fully",
        ],
        answerIndex: 3,
        explanation:
          "Protection from psychological/educational harm requires avoiding crowding out existing intrinsic passion: using tokens only on unappealing baseline habits, pairing with informational competence feedback, **gradually fading** external tokens into autonomous SMART goals, and debriefing ethically.",
        difficulty: "challenge",
        guideRef: "goal-setting-applications",
        hints: [
          "Remember CIE ethics: **protection from harm** means not damaging students' long-term love of learning!",
          "How do applied psychologists transition smoothly from tokens to internal self-regulation?",
        ],
        strategy: "Combine ethics with fading strategy",
      },
      {
        kind: "mcq",
        id: "motivation-and-needs-m3-q15",
        question:
          "Which statement accurately compares **psychodynamic motivation** (Merchant et al. 2013) with **cognitive goal-setting** (Locke & Latham 1990)?",
        options: [
          "Psychodynamic motivation emphasises partly unconscious emotional memories and nostalgia, whereas cognitive goal-setting emphasises conscious, explicit SMART targets and rational self-monitoring",
          "Psychodynamic motivation relies on explicit written SMART checklists and stopwatch progress tracking, whereas cognitive goal-setting explores unconscious childhood nostalgia and emotional longing",
          "Both theories are strictly biologically reductionist models claiming human action is driven solely by cellular tissue deficits and hypothalamic homeostasis with zero cognitive or emotional role",
          "Psychodynamic motivation applies only to classroom token economies with wooden chips, whereas cognitive goal-setting applies solely to clinical dream analysis and cannot be used in workplaces",
        ],
        answerIndex: 0,
        explanation:
          "Psychodynamic/nostalgic approaches (**Merchant et al. 2013**) highlight **implicit emotional longing and unconscious anxiety-buffering**, whereas **Locke & Latham's Goal-Setting Theory** focuses on **explicit, conscious target-setting (SMART)**, attention and feedback.",
        difficulty: "core",
        guideRef: "drive-incentive-psychodynamic",
        hints: [
          "Contrast conscious explicit planning (Locke & Latham) with emotional/unconscious past longing (Merchant et al.).",
          "Check which theory uses SMART targets versus nostalgic charity imagery.",
        ],
        strategy: "Compare conscious vs unconscious approaches",
      },
    ],
  },
];
