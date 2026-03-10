# Domain Model: How a Pause Plays Out

Jorn's expert model of the principal component axes of a global AI pause. This is the conceptual foundation underneath the game's card content.

## Core message

"A pause is hard to get right and relies on a lot of luck and crisis management."

"The pause is not relaxed waiting but frantic effort to finish the safety homework before the deadline approaches."

"The pause is markedly about keeping at bay a superexponential process that is aligned with lots of short-horizon incentives and utterly against any long-term incentive any human ever had (i.e. extinction is pretty much not what anybody wants)."

## How the model maps to the game

The 10 dimensions below are the real-world problem space. The game compresses them into four visible resource bars, hidden state variables, card pool dynamics, and win/loss conditions.

| Bar | Code | What it compresses | Behavior |
|---|---|---|---|
| Political Power | `pol` | Mandate (D1), public sentiment (D4), decision-maker support | Standard: dies at 0 or 100 |
| Intelligence | `int` | Enforcement resources (D2), surveillance infrastructure, cat-and-mouse know-how (D8) | Standard: dies at 0 or 100 |
| Safety Progress | `saf` | Safety knowledge stock (D5), adjacent knowledge stocks (D6) | Monotone accumulator (only goes up). Win condition gated on saf >= 75 |
| Algorithmic Progress | `alg` | Capability knowledge (D7), compute-centric model (D10) | Monotone accumulator (only goes up). Loss condition when alg hits 100 |

Hidden state variables mediate card interactions without pairwise history checks: `treaty_erosion`, `narrative_damage`, `enforcement_visibility`, `missed_threats`, `civil_liberties_pressure`, `politicization`, `diplomatic_infrastructure`, `military_dependency`, `mentoring_cut`.

The content pipeline: Literature (real-world sources) -> Domain model (this document) -> Card concepts (design) -> TypeScript card declarations -> Playtesting. Currently 144 cards across 38 files.

## Dimensions of the model

### 1. Mandate

How much control governments grant the pause agency over what is traditionally their domain.

- **High:** "You hand them a draft law, and they pass it within a day per emergency vote."
- **Medium:** "They let you fight and struggle even for your important laws" -- the player must prioritize where to invest capital and wait a long time for votes.
- **Low:** "The government forwards your proposals to the spam folder. They talk about what other people say."

Mandate abstracts over carefully accumulated social interconnectedness and social learning among policy makers, company heads, celebrities, and news owners. ("How many ISIA members do you know, senator? How much do you agree with their mission? How much do you consider yourself to owe these members/the organization?")

Mandate also predicts how the government enforces the pause and with how many resources. A competent director will not set enforcement below the maximum the government will agree with. Adversaries try to steer mandate: AI CEOs who don't get the danger but get the benefits, some leftists who think AI will vanish again, and other special interest groups.

### 2. Resources directed toward maintaining the pause

How many policemen search for GPUs, how many satellites look for heat signatures of small compute clusters with inadequate cooling, etc. Predicted by mandate, but also includes accumulated enforcement infrastructure that is not instantaneous to produce:

- How much police has been trained in searching for GPUs in a house
- How much infrastructure has been redesigned to detect unexplained power draw or heat signatures
- How much the inspectors are tied into chip factories (including: do they know whom to talk to in order to learn how many kg silicon were entering the factory and how much waste was exiting it)

### 3. Resources directed toward safety progress

How many researchers do philosophy of what an agent is mathematically, how many startups try to find a way to do gene editing in human adults, etc. This is the input side -- the resources devoted to the safety research effort. The accumulated results are tracked separately in D5.

### 4. Public sentiment and social learning

"Weird, not 1-dimensional necessarily." Three sub-dimensions:

**Salience:** How much people have socially learned the importance of preventing extinction from AI. Similar to a poll: "Do you believe that acting against superintelligent AI is only doable right now, or can it be procrastinated, or is it irrelevant anyway because godlike AI isn't a real concept?" (Many current polls don't properly define godlike AI -- they measure whether people know what A, S, I stand for.)

**Valence:** Coarse "AI pause good" or "AI pause bad" primitive attitudes. Not something that directly spreads self-sustainingly, but something is going on with social learning theory that makes this a good abstraction. There's a weak tie between valence and whether an AI pause actually will prevent extinction. Maybe the weak tie comes from low salience of x-risk.

**Categorical data:** Whether AI x-risk has become a bipartisan or polarized political issue in the US, for example.

Salience and valence influence mandate, and mandate influences salience and valence. Mandate predicts resources, and resources can be reinvested into salience, valence, mandate, and research directly.

### 5. Safety knowledge stock

A monotone sigmoid. Currently at the low end. As results of cognitive labor accumulate, progress goes through the unknown tech tree until hitting some unknown end goal (or one of the speculative known end goals: value alignment and corrigibility).

Key properties:
- Only after significant progress can one estimate how big the remaining gaps actually are
- Research in new fields is very hard to predict (even PhD theses in old fields are hard to get right in amount)
- Estimated >10k philosopher-years needed based on past progress rates
- Stepping-on-toes is notable: parallelization is hard (redundancy when working in isolation is big since the same hard fundamental problems appear in many places)
- So only after some amount of progress is revealed how "difficult" the world actually is

In the game, this maps to the `saf` bar. The win condition (victory card) fires when `saf >= 75` and `turn >= 20`: the Chief Scientist presents a formal proof of corrigibility, and the player decides whether to approve deployment.

### 6. Adjacent knowledge stocks (also monotone)

Genetic engineering of humans to accelerate research, uploading humans to accelerate research, using unsafe AI for research without being sabotaged (known as AI control), building powerful AI with limited resources.

These are accelerators for safety knowledge -- alternative paths that might speed up the "finish the safety homework" effort. Realized in-game as progression through different safety event cards, with some gated behind other cards having spawned plus total safety knowledge crossing thresholds.

### 7. ASI creation threshold (the loss condition)

General model: ASI is created once `<resources spent on the attempt> x <accumulated knowledge>` exceeds some unknown threshold.

There is accumulation in the knowledge component: earlier models can produce synthetic data or serve as early checkpoints. Stepping-on-toes/not-useful-anymore effect applies.

For the pause regime, approximate as: `GPUs x time x knowledge` -- but these belong to different actors:
- **GPUs and time:** what a specific rogue actor has (determined by enforcement gaps)
- **Knowledge:** accumulated capability knowledge, which is mostly public (public knowledge predicts private knowledge well, except for very long-running somehow-airgapped research groups)

Example: a group that has 8 H100 GPUs, can work for 5 years, while a lot of researchers have openly published insights into how to make more capable AI over 10 years -- may be enough to trigger the ending.

In the game, the `alg` bar is a monotone accumulator representing capability knowledge. When it hits 100, the lethal compute threshold has dropped below what enforcement can monitor: consumer hardware becomes sufficient.

### 8. Best practice cat-and-mouse

Criminals become better at smuggling GPUs in banal ways (they sit in an armchair and think up heist schemes). Enforcement becomes better at reactively catching them or proactively preventing smuggling (they sit in an armchair and think up anti-heist schemes). Both sides accumulate know-how over time.

In the game, this is modeled through card chains where enforcement and evasion techniques escalate, mediated by hidden state variables like `enforcement_visibility` and `missed_threats`.

### 9. AI behavioral properties

Deviations from a "generic/random" boundedly rational agent to the AIs we actually have. This is about the AIs that exist during the pause, not about ASI:

- Humans have tiredness; AIs may not
- Humans have negative news bias; AIs may use more accurate heuristics
- Whether unregulated AIs are sycophantic vs. whether they all push consistently for an AI pause because they acquired some facsimile of concern for human survival

These are flavor for narrative events. Can be mutually exclusive within a run for basic narrative consistency, but a lot is random/chaotic.

### 10. Compute-centric model of AI capabilities

"More training compute and more inference compute leads to more labor output." AI has a ragged capability frontier with respect to how much labor of different specialized professions it produces, but there's a big correlated principal component axis known as "general intelligence." Basic optimization theory/economics tells us that most labor is a mixture of specialized labor -- i.e., an AI that codes super well is perhaps limited by producing creative novel ideas at far lower rate than a human.

This matters for the pause because it shapes the loss condition threshold (D7) and determines what enforcement should monitor. It also bounds how much AI tools can accelerate safety research (D3/D5).

## Key causal links

- Salience + valence -> mandate
- Mandate -> salience and valence (feedback loop)
- Mandate -> predicts enforcement level and resources
- Resources can be reinvested into salience, valence, mandate, and research directly
- Enforcement infrastructure is slow to build (not instantaneous)
- Safety research reveals its own difficulty as it progresses
- The loss condition depends on enforcement gaps (rogue actor's compute x time) combined with accumulated capability knowledge

The core tension from the core message: capability knowledge grows as researchers publish and AI tools improve, and short-horizon incentives (profit, competitive pressure) push actors to break the pause. The player is keeping at bay a superexponential process while racing to finish the safety homework.

---

## Appendix: Jorn's verbatim messages

Recovered from the session transcript (2025). These are Jorn's exact words, unedited. The main sections above are paraphrased from these messages.

### Core message and dynamics

> "a pause is hard to get right and relies on a lot of luck and crisis management" "the pause is not relaxed waiting but frantic effort to finish the safety homework before the deadline approaches" "the pause is markedly about keeping at bay a superexponential process that is aligned with lots of short-horizon incentives and utterly against any long-term incentive any human ever had (i.e. extinction is pretty much not what anybody wants)" "concrete dynamics inform how to carry out a pause:"

> "how decentral vs central is capability progress? do we have to go around and search for 8 unregistered H100 gpus stuffed into a private garage? or do we have to just monitor all data centers and chip factories and keep the black market trades capped?"

> "how fast is safety progress - what do we do if super speculative research ideas turn out to take not 1y but 10y or just fail and require other ideas"

> "how does public support evolve - do people act strategically about an extinction event htat is e.g. a only very imprecisely known amount of time away (e.g.e xperts that say things like 1-10 years or within our lifetime) ; does expert consens/disagreement affect the public? does the public care too much about short-term incentives e.g. economic gains from current or from better ai?"

> "how does decision maker support evolve - what if somebdoy does not understand the long-term/unusual danger but sees the short-term incentives - how does their propaganda and sabotage affect a pause?"

> "how do Ai diffusion processes continue as the pause progresses ? e.g. current automation progress with GPT-5.-level modesl and social learning about x-risk / non-x risks / utility from AI? diffusion into e.g. ai-assisted crime or medical research?"

> "what are research lines that are promising to pursue? On a meta level: Genetic engineering of humans to accelerate research, uploading humans to accelerate research, ais to accelerate research, better governance to control whether good/bad research is carried out. On a object level: agent foundation theory, mathematical learning theory, prosaic alignment schemes, brand safety training, capability research. On a guard level: control research, chip monitoring research, political and social and economic science for changes in world governance."

> "what actions are promising to take? E.g. what political change to realize? What hardware to produce/not to produce? What surveillance software to legalize? Whether to send the police? Air-gapped research institutes? Volunteers for lethal gene-editing research? What tax proposal will exploit biases in policy maker & interest groups to get passed with a low expenditure in own capital?"

### Full expert model

> Mandate is sth that's visible somewhat in what events happen and who-talks-to-whom and predicts what government actions occur, and, indirectly via planning, how adversaries (e.g. people who don't get the danger but get the benefits (ai ceos rn are a good example), people who don't get the danger and do not get the benefits (a lot of leftists say since 5 years ai is gonna vanish again), other special groups), try to steer the whole system.

> Resources directed on this planet towards maintainaing a pause and towards making safety progress are two other axes. E.g. how many policemen search for gpus, how many satellites look for heat signatures of small compute clusters with inadequate cooling, how many researchers do philosophy of what an agent is mathematically, how many startups try to find a way to do gene editing in human adults, ...

> Public sentiment and social learning is... weird, not 1-dim necessarily, but another "thing one can aggregate very well". There's some categorical data in here such as whether Ai x-risk has become a bipartisan or a polarized political issue in the social population of the US.

> There's two also monotone knowledge stocks:
> - knowledge about safety, i.e. how to ensure tha a superintelligence is safey ; this is a sigmoid, we are rn at the low end, and as ~results of cognitive labor accumulates we go through the unknown tech tree until we hit some unknown end goal (or one of the ~speculative known end goals: value alignment and corrigibility).
> - similarly: genetic engineering, uploading, using unsafe ai for research without being sabotaged (known as ai control), building powerful ai with limited resources

> Compute centric model of ai capabilities has been moderately successful, and says basically
> "more training compute, and more inference compute, leads to more labor output"
> "ai has a ragged capability frontier wrt how much labor of different specialized professions it produces, but there's a big correlated principal component axis known as 'general intelligence'"
> "basic optimization theory / economics tells us that most labor is a mixture of specialized labor i.e. an ai that codes super well is perhaps then limited by producing creative novel ideas at far lower rate than a human"

> Then there's the "weird" axes about ai behavior i.e the deviation from a "generic/random" boundedly rational agent to the ais we have -- e.g. humans have a concept such as tiredness, while ais may not have tiredness. humans have a negative news bias, while ais may consider information weighted using more accurate heuristics instead of the lizard-brain humans cannot turn off without much effort

### First guess at game state mapping

> My first guess (low effort) for the main components of the state would be
>
> - mandate [abstracts over the carefully accumulated social interconnectedness and the social learning done among policy makers and company heads and celebrities and news owners (sort of a "how many IASA members do you know, senator? how much do you agree with their mission? how much do you consider yourself to owe these members/the organization in-as-so-far as you have honor at all?"]
> - mandate also predicts well how the government enforces the pause, and with how many resources ; a competent director will not set the level of enforcemnet below the maximum that he can get the governments to agree with -- unsure whether we will let the player learn how to be competent in this regard, and/or how much we automate this
>
> - safety research stock - sort of a timer that ticks up with an initially imprecise/unknown end goal ; only if one has a lot of progress can one guess at how big the gaps actually are -- research in new fields is very hard to predict, even PhD theses in old fields are hard to get right in amount!, while established engineering topics have good base rates basically ; so only after some amount of progress is made is revealed how "difficult" the world actually is - I rn expect one needs >10k philosopher-years based on past progress rates, and I expect that stepping-on-toes is notable so parallelization is hard (redundancy when working in isolation is big since the same hard fundamental problems appear in many places). But that end target is highly uncertain, just as I don't even know rn how much progress is made each year - i can loosely judge when somebody wrote sth interesting that deconfuses some philosophical questions and turns them into math, or when sth tackles some math successfully.
> - capability knowledge stock - the second timer to the creation of superintelligence ; this is not just "ASI is being built step by step" but more like a latent potential -- basically ASI is created once
> \<resources spent on the attempt\> times \<accumualted knowledge\> exceeds some unknown threshold.
> There is some accumulation i.e. earlier models can produce synthetic data or serve as early check points. So it's a stepping-on-toes/not-usefull-anymore effect . Since this game only deals with a pause regime, we can approximate however as
> "gpus x time x knowledge" of the largest attempt at ASI that slipped between the pause agency's surveillance/enforcement gaps. So a group that has 8 H100 gpus, but can work for 5 years, while a lot of researchers have openly published insights into how to make more capable AI over 10 years, may be enough to trigger the ending.
>
> The Ai behavior can be (mutually exclusive in some basic narrative consistency manenr, but a lot is just random / chaotic) part of narrative events. E.g. whether unregulated AIs are sycophantic vs whether they all push consistently for an AI pause because they acquired some facsimile of concern for human survival.
>
> Safety knowledge + adjacent knowledge stocks can be realized as just some "progression" of different safety events - it is random whether genetic engeineering or uploading has more events and what path happens. Maybe the state tracks which "research ideas" from every path has been tried - and some cards are gated behind other cards having spawned + total safety knowledge having crossed some threshold.
>
> unsure how to do public sentiment: main dimensions imo are
> - salience: how much have people socially learned the importance of preventing extinction from Ai ; this is similar to a poll "do you believe that acting against superintelligent Ai is only doable right now or can it be procrastinated or is it irrelvant anyway bc godlike AI isn't a real concept" (note that many polls rn do not properly define godlike AI and instead measure whether people know what the letters A, S, I stand for and what their imagination allows them to think the S stands for -.-)
> - valence: heavily coarse grained sentiment: "AI pause good" or "AI pause bad" style primitive attitudes ; this is not sth that directly spreads self-sustainingly, but something is going on with social learning theory that makes this a good abstraction that behaves as if there was only a weak tie between valence and whether an AI pause actually will prevent extinction or not. ; maybe the "weak tie" comes from low salience of x-risk?
> - salience and valence influence mandate, and mandate influences salience and valence
> - as said mandate kinda predicts resources, and resources can be reinvested into salience and valence and mandate and research directly
> - there's also accumulated enforcement resources that are not instantaneous to produce - think how much police has been trained in searching for GPUs in a house, how much infrastructure has been redesigned to allow the search for unexplained power draw or heat signatures, how much the inspectors are tied into the chip factories (including things like: do they know whom to talk to in order to e.g. even learn how many kg silicon were entering the factory and how much waste was exiting it).
> - another axis not mentioned are banal best practice learnings: criminals become better at smuggling gpus in banale ways (e.g. they sit in an armchair and think up heist schemes) and enfrocement becomes better at reactively catching them or proactively preventing smuggling (e.g. they sit in an armchair and think up anti-heist schemes).

### Mandate levels

> Yeah, there's some sort of "how much control do governments grant you over what is traditionally their domain" ; highest level of control would be "you hand them a draft law, and they pass it within a day per emergency vote"

> Medium level is "they let you fight and struggle even for your important laws => player should prioritize where to invest capital and has to wait a long time for the resulting vote to happen/go through"
> Low level is "the government forwards your proposals to the spam folder. they talk about what other people say"

### Methodological correction (step conflation)

> Tbc you are now doing several things at once:
> - you identify prinicipal component axes of the expert model of how a pause would happen and be carried out
> - you immediately claim it as a game resource bar
> - you immediately design endings for 0 and 100
>
> I suggest we do not conflate those three things!

### Corrections on ASI creation formula

> \> Approximated as GPUs x time x knowledge of the largest attempt that slipped through enforcement.
> That is not what I said. Was I grammatically unclear?

> you even fucked up more than that? You claimed there was some accumulation of gpu x time x knowledge into some variable you called knowledge again

> knowledge can be private

> but like, public knowledge predicts private knowledge well, except for very long-running somehow-airgapped research groups

### Reigns mechanic observation

> The Reigns mechanic is low-friction for "try out a huge binary decision tree" with card pool offering "sparse interactions between decisions" and "randomness"
