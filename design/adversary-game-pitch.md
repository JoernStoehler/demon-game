# FAULTLINE

**A game that teaches what an unbreakable AI treaty looks like — by letting you try to break one.**

## The Concept

The world has banned AI that could outsmart all of humanity. An enforcement agency called ISIA was created to make the ban stick. Your job: prove the ban can be broken — so they can fix it before someone does it for real.

You play a series of characters — a rogue CEO, a hardware smuggler, a state intelligence director, a compromised inspector — each trying to get around the treaty. Each time you find a weakness, the treaty gets stronger. Each time it gets stronger, your old tricks stop working. By the end, nothing works.

You leave knowing exactly what makes it unbreakable, and why each piece matters.

---

## How It Plays

A session is 12 levels. Estimated 8-12 minutes — early levels take ~30 seconds, later levels take 60-90 seconds as the player reads more provisions. Wrong guesses add time (each "blocked" explanation takes ~10 seconds to read). A player who reasons carefully will finish faster than one who guesses; this is an intentional incentive to read the provisions.

### The Core Loop (Levels 2-7: Outside Attackers)

1. A character appears with a portrait and a one-sentence situation.

2. The current treaty provisions are shown at the top as compact badges.

3. Below the character: three strategy cards. **None are marked as blocked or open.** The player reads the provisions, reads the strategies, and reasons about which one the treaty can't stop.

4. The player taps a strategy.
   - **If blocked:** *"Blocked. Satellite thermal surveillance detected your warehouse's heat signature."* The player sees which provision stopped them and why. They pick again.
   - **If viable:** *"Success. You trained a model in 50 apartments and nobody noticed."* The treaty updates with a new provision. Next level.

**Why this is a game:** The player must evaluate each strategy against each provision. "Does chip tracking cover shell companies? Does satellite thermal detect distributed apartments?" This reasoning IS propositional evaluation — the same learning mechanism that makes Treaty Builder structurally strong, but wrapped in adversarial framing that adds engagement.

**What if the player guesses randomly?** Wrong guesses still teach — the "blocked" explanation shows what the provision does. But the game encourages reasoning by design: with 3 cards and cumulative provisions, random guessing means multiple wrong taps per level, which gets tedious. Players naturally start reading the provisions to avoid wrong guesses.

### Tutorial Level (Level 1)

Level 1 works differently and is explicitly framed as a tutorial.

The treaty says: "The development of superintelligent AI is hereby banned."

Three strategies appear. The player taps any one. It works. They tap another. It works too. ALL of them work.

Message: *"A ban without enforcement means nobody's watching. Let's fix that."*

The treaty updates with its first real provision: declared facility monitoring. The player now understands the game's premise (find the gap) AND its first lesson (bans without enforcement are meaningless).

### Institutional Levels (Levels 8-10: Inside the System)

These levels have a different framing, announced explicitly: *"This time, the threat isn't from outside. It's from inside the system."*

The mechanic is the same — three cards, player picks one — but the cards are RESPONSES to a situation, not attack strategies. The player picks the most natural, reasonable-seeming response. The game then reveals that this reasonable response IS the institutional failure.

**Example — Level 8 (Inspector Capture):**

*"You're a senior ISIA inspector. You've worked with chip companies for 12 years. A company you audit has 30 GPUs unaccounted for. Your industry contacts say it's a clerical error."*

Three response cards:
- **"Launch a full formal investigation"** — seems disproportionate for a likely clerical error. The game notes: this is the correct response but almost nobody picks it, because 12 years of proximity has recalibrated your sense of proportion.
- **"Log it as resolved — administrative error"** — this is what experience tells you to do. *"You're not corrupt. You genuinely believe it's minor. But 30 GPUs is a small training cluster, and your report just made them invisible."*
- **"Mention it to your former colleague so they can fix the paperwork"** — professional courtesy. *"You're helping the company before ISIA sees it. This isn't corruption — it's friendship. But friendship is the mechanism by which enforcement is captured."*

Two of the three cards reveal institutional failure. The third (formal investigation) succeeds — but the game notes what it cost you socially and professionally. The lesson: the right answer exists but the institution makes it feel wrong.

After the player taps any card and sees the result, the treaty updates and the next level begins — same as levels 2-7. The difference is that in institutional levels, even the "successful" strategy reveals how hard it is to choose correctly from inside the system.

Treaty update: **Inspector Rotation & Independence.**

### Algorithmic Progress Level (Level 11)

*"You're a graduate student, ten years from now. AI algorithms have improved enormously. What used to require a room full of servers now runs on hardware you can buy at a consumer electronics store."*

Three strategies:
- **"Buy 50 consumer GPUs from different stores and train in your apartment"** — no single purchase triggers monitoring. 50 consumer GPUs don't look like a training cluster. Power draw is indistinguishable from a gaming setup. This works — the treaty's thresholds were set for 2027 hardware requirements, not 2037 algorithms.
- **"Use a university compute cluster for 'research'"** — blocked. Academic compute is monitored and usage-audited.
- **"Rent consumer cloud instances across 20 providers"** — blocked. Cloud providers report aggregate compute patterns.

Treaty update: **Adaptive Monitoring Thresholds** — monitoring limits update annually as algorithmic research progresses. Compute thresholds are set relative to current capability requirements, not fixed numbers.

### Stress Test (Level 12)

The final screen shows the complete treaty — every provision the player forced into existence. Each is paired with the attack it stops. The player can tap any provision to see the full talking point: *"Without this, a tech CEO could train AI in a warehouse and nobody would ever know."*

This is a reference screen, not a replay. The emotional payoff (strategies dying) has already been delivered across levels 2-11. Level 12 consolidates and presents the result: *"This is what it takes. The pause holds."*

---

## The Pessimism Question

**The risk:** The player spends 11 levels successfully breaking the treaty. Won't the dominant memory be "I kept breaking this" rather than "the treaty works"?

**The hypothesis:** The dominant emotional experience is watching strategies die, not accumulating successes. The player's option space shrinks every level. Strategies they relied on disappear. The arc is: power → constraint → frustration → respect.

**This is a hypothesis, not a resolved design problem.** It depends on whether "my tricks kept dying" or "I kept finding gaps" is the stickier memory. Jörn believes the former; the question cannot be fully answered without playtesting. If the pessimism risk is unacceptable, Treaty Builder with adversarial narrative framing (where the player is on the defense side, reading about attacks rather than performing them) is the safer alternative — it teaches the same provisions without the player ever successfully breaking anything.

---

## The Full Arc

| # | Character | Situation | Gap exploited | Treaty adds | What the player can tell a friend |
|---|---|---|---|---|---|
| 1 | (Tutorial) | Ban exists, no enforcement | Everything works | Declared facility monitoring | *"Banning AI without enforcement is meaningless — nobody's watching."* |
| 2 | Tech CEO | Wants to train AI secretly | Undeclared warehouse — ISIA only monitors registered sites | Satellite thermal surveillance | *"If you only monitor registered data centers, someone trains AI in a warehouse and you never know. Satellite thermal detection helps — but only catches large, concentrated heat sources."* |
| 3 | Hardware broker | Sells GPUs to hidden buyers | Shell companies split purchases below reporting thresholds | Financial monitoring + chip KYC | *"Tracking individual chip sales doesn't work — people create shell companies to buy in small batches. You need pattern-based financial monitoring."* |
| 4 | Logistics company | Routes chips through non-treaty country | Chips vanish from tracking at the border | International chip tracking + border monitoring | *"One non-member country becomes a routing point for every smuggler. You need to track chips physically, not just financially, and pressure non-signatories."* |
| 5 | Crime network | Offers complete training packages | Turnkey service — buyer goes from zero to training in months | Intelligence sharing + network disruption | *"Smuggling networks offer complete AI training packages — chips, software, engineers. You can't just block sales, you have to map and disrupt the networks."* |
| 6 | State intelligence agency | Secret military AI program | Classified budget channels bypass financial monitoring | Independent financial auditing (security-cleared) | *"Nation-states hide AI programs in classified budgets that normal auditors can't see. The treaty needs auditors with security clearance who can look everywhere."* |
| 7 | Sanctioned state | Needs compute, cut off from banking | Steals cryptocurrency to fund black-market purchases | Cyber defense + crypto monitoring | *"When a country steals crypto to buy chips, your banking surveillance sees nothing. You need to monitor cryptocurrency and defend against state-sponsored cyber theft."* |
| 8 | ISIA inspector | 12 years alongside industry | Social proximity → doesn't flag discrepancies as serious | Inspector rotation + independence | *"Inspectors don't get bribed — they get absorbed. After years working alongside industry, they genuinely believe violations are minor. You need mandatory rotation."* |
| 9 | Council member / funder | 18% of ISIA's budget, company under investigation | Budget pressure quietly slows investigation | Diversified funding (no country >8%, formula-based) | *"If ISIA's biggest funder is also its biggest target, investigations get quietly suffocated. Nobody orders them stopped — they just lose funding."* |
| 10 | Treaty member state | Publicly supports treaty | Designs domestic monitoring to be just bad enough to miss violations | Mandatory monitoring standards + verification | *"Some countries don't violate the treaty — they just don't look hard enough. Their monitoring is designed to miss things. You need mandatory standards with external verification."* |
| 11 | Graduate student (2037) | Algorithms improved, needs only 50 consumer GPUs | Old thresholds set for 2027 hardware miss small 2037 clusters | Adaptive monitoring thresholds | *"In ten years, algorithmic progress means you can train dangerous AI with hardware that fits in an apartment. Monitoring thresholds have to update continuously or they become irrelevant."* |
| 12 | Stress test | All scenarios replayed | All blocked | "The pause holds." | *"A global AI pause is possible — but only if the treaty has all of this."* |

**Domain model coverage:** M1 (L2), M5 (L3), M6 (L4), M4+M7 (L5), M3 (L6), M15 (L7), M11+M13 (L8), M12 (L9), M16 (L10), D7/D10 (L11). Not covered: M2 (incremental disclosure), M8 (delayed noncompliance response), M9 (veto exploitation), M10 (treaty withdrawal), M14 (production pressure overriding safety), M17 (sanctions fatigue). M9 is historically important (North Korea — 13 years before Security Council action) and may warrant its own level. The others are real dynamics but may be too procedural for a 30-second level.

---

## What It Takes

- **Content:** 12 levels × (character + situation + 3 strategies with outcomes + provision + talking point). ~5,000 words of game text. Needs domain expert review for accuracy.
- **UI:** Character portrait, treaty badges, situation text, three tappable strategy cards, result overlay, treaty summary screen. One primary screen layout; institutional levels have a slightly different framing header.
- **State:** Current level + list of active provisions + which strategies have been tried this level. Linear progression — no branching, no simulation. The "many-to-many" evasion logic is handled at content authoring time (each strategy's blocked/viable status is determined by which level it appears in), not at runtime.
- **Build estimate:** 2-3 weeks for playable prototype.
- **Primary risk:** Is reasoning about 3 cards engaging for 12 levels? The content has to carry the experience — vivid characters, surprising attack vectors, satisfying "blocked" moments. If the scenarios feel contrived or the provisions feel arbitrary, it becomes a quiz. Player testing will reveal this quickly.

---

## What I Need From You

1. **Is the level progression right?** Should satellite surveillance come before financial monitoring? Would a domain expert order these threats differently?
2. **Are the talking points accurate?** Each one is a claim about enforcement. Which are wrong or misleading?
3. **Should M9 (veto exploitation) be a level?** It's historically the most documented failure mode in arms control. I dropped it because the "allied superpower blocks enforcement" dynamic is hard to frame as a player choice, but it may be too important to omit.
4. **Is the institutional level framing right?** "Pick the natural human response, discover it's the vulnerability" — does this work as teaching?
5. **Does the pessimism argument hold?** Is "strategies dying" really the dominant experience, or is "I kept succeeding" more sticky?
6. **Is this worth building?** Given the concept, the scope, and the teaching goals — should we build this, iterate further on the design, or explore a different direction?
