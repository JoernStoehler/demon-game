# Regulatory Capture & Institutional Corruption Mechanisms

Research for game card content. Focus: repeating mechanisms that could threaten a global AI safety agency (ISIA) over 10-30 year timescales.

---

## 1. Regulatory Capture Patterns

### 1.1 The Revolving Door

**Mechanism:** Personnel rotate between the regulator and the regulated industry. Former regulators bring insider knowledge of enforcement gaps to industry; former industry employees bring pro-industry bias into the regulator.

**How it works in practice:**
- Regulators cultivate relationships with industry contacts, knowing they may seek employment there after government service
- While still in government, they soften enforcement or grant favorable interpretations to build goodwill with future employers
- Once in industry, they use knowledge of agency procedures, personnel, and blind spots to help firms navigate or circumvent regulation
- When they return to government, they bring industry framing and assumptions

**Case evidence:**
- **SEC:** Over 400 former SEC employees filed statements between 2001 and 2010 that they intended to represent external parties before the SEC. The penalty for fraud may be determined by an SEC employee who is subsequently hired by the bank that perpetrated it. (Project On Government Oversight, 2013)
- **FAA:** Ali Bahrami led the FAA office overseeing Boeing, left in 2013 for a top post at the Aerospace Industries Association (an aviation industry lobby), then returned as the FAA's top safety official. A former FAA engineer described his approach as "abdication" to Boeing.
- **Financial regulators broadly:** Economists have documented that lax regulation is exchanged for lucrative subsequent employment.

**Timescale:** 3-10 years for individual cycles; cumulative effect over 15-30 years as institutional culture shifts.

**Confidence:** Well-established mechanism in political science. Empirically documented across multiple regulatory domains.

**Game relevance:** ISIA officials leave to join AI companies; AI company executives join ISIA bringing industry framing. Over time, the "ISIA alumni network" in industry creates a culture where enforcement feels like betraying former colleagues.

---

### 1.2 Industry Funding of the Regulator

**Mechanism:** When the regulated entity pays fees that fund its own oversight, the regulator becomes financially dependent on the industry's continued operation and goodwill.

**How it works in practice:**
- Regulatory agencies funded by industry fees have incentives to keep regulated firms happy (they're the "customers")
- Firms can "shop" between regulators for the most permissive charter (regulatory arbitrage)
- Budget pressure makes regulators reluctant to take actions that would shrink the regulated industry
- The regulator's professional success becomes tied to industry health

**Case evidence:**
- **US financial regulators (OCC, OTS):** Several federal banking regulators receive funding from the entities they regulate. Banks can choose their charter, creating competition among regulators for "customers." The OTS was notoriously permissive and was abolished after the 2008 crisis.
- **FAA:** Funded partly by aviation user fees, creating alignment with industry growth
- **MMS (oil industry):** Had conflicting missions of promoting resource development, enforcing safety, AND maximizing revenues from offshore operations. Revenue collection from the same entities it was supposed to regulate created structural conflicts.

**Timescale:** Immediate structural vulnerability from inception; effects compound over 5-15 years.

**Confidence:** Well-established. The structural conflict is widely acknowledged in regulatory design literature.

**Game relevance:** If ISIA is funded by AI company licensing fees, the agency has incentives to keep companies operational and compliant rather than shut them down. Budget depends on having entities to regulate.

---

### 1.3 Information Asymmetry

**Mechanism:** The regulator lacks the technical expertise to independently evaluate what the regulated industry is doing. It depends on the regulated entities themselves for the information needed to regulate them.

**How it works in practice:**
- Industry possesses monopoly on technical knowledge (how AI systems actually work, what capabilities they have)
- Regulators cannot independently verify industry claims about safety or compliance
- Industry controls what information the regulator sees, how it's framed, and what context is provided
- Regulators who challenge industry claims risk looking ignorant; those who defer appear competent
- Complexity of standards increases the asymmetry, creating a self-reinforcing cycle

**Case evidence:**
- **MMS/oil industry:** The inspector general characterized MMS as "dependent on industry's greater expertise with the technology of deepwater and ultra-deepwater drilling, and thus reliant on industry's judgment of appropriate safeguards." MMS adopted voluntary industry standards rather than developing its own because it literally could not.
- **FAA/Boeing:** FAA engineers determined after the first 737 MAX crash that they "did not fully understand the automated system" (MCAS) and "had never independently assessed the risks" before approving the jet. The agency had delegated technical assessment to the very company it was certifying.
- **Financial regulators:** Banks used internal models to calculate their own capital requirements (the SEC allowed this for major investment banks pre-2008). Regulators could not independently verify the models because they lacked the quantitative expertise.

**Timescale:** Immediate vulnerability, but worsens over 10-20 years as technology advances faster than regulatory expertise.

**Confidence:** Well-established. This is arguably the most fundamental and hardest-to-solve capture mechanism.

**Game relevance:** This is the single most dangerous mechanism for ISIA. AI capabilities advance faster than ISIA's ability to understand them. ISIA depends on AI labs to explain what their systems can do. Labs can understate capabilities, obfuscate architectures, or frame dangerous capabilities as benign. ISIA inspectors become "tourists" at AI facilities, shown what companies want them to see.

---

### 1.4 Capture via Complexity

**Mechanism:** Regulations become so complex that only industry insiders can navigate them. This creates a barrier to entry for public interest advocates and makes the regulator dependent on industry for interpretation.

**How it works in practice:**
- Industry lobbies for detailed, complex rules rather than simple bright-line standards
- Complex rules create compliance costs that favor large incumbents (who can afford compliance departments)
- Only former industry employees understand the rules well enough to enforce them (reinforcing revolving door)
- Public interest groups cannot effectively participate in rulemaking because they lack technical capacity
- Regulatory complexity becomes self-justifying: complex rules need complex amendments, creating ever-more complexity

**Case evidence:**
- **Financial regulation:** Basel capital requirements became so complex that only the largest banks could model compliance. Dodd-Frank generated thousands of pages of rules. Complexity itself became a barrier to oversight.
- **Nuclear regulation:** NRC rules are so technically dense that meaningful public participation requires nuclear engineering expertise few outside the industry possess.
- **Tax code:** Complexity creates an industry of specialists (accounting firms, tax lawyers) who then lobby to maintain and increase complexity.

**Timescale:** 5-15 years to build up; once established, complexity is almost impossible to reverse.

**Confidence:** Well-established as a mechanism, though debate exists about whether complexity is intentionally weaponized or emerges organically.

**Game relevance:** AI safety standards become so technical that only AI researchers can evaluate compliance. ISIA's rulebook grows to thousands of pages. Labs argue edge cases endlessly. Simple "no ASI development" ban gets replaced by nuanced capability thresholds that labs can argue their systems fall below.

---

### 1.5 Cultural Capture

**Mechanism:** Regulators come to identify psychologically and socially with the industry they regulate. They adopt industry's worldview, goals, and framing without any explicit corruption.

**How it works in practice (per James Kwak's framework):**
- **In-group identification:** Regulators see themselves as part of the same professional community as industry. "We're all trying to make AI work safely" rather than "We're the cops and they're the suspects."
- **Deference to status:** Industry leaders are wealthy, prestigious, confident. Regulators defer to their judgment because high-status people seem more credible.
- **Relationship networks:** Regulators and industry attend the same conferences, share social circles, send kids to the same schools. Personal relationships make adversarial enforcement feel like betrayal.
- **Cognitive alignment:** A regulator who "sees her job as protecting ordinary people" can adopt the position that "AI development is good for ordinary people" to avoid cognitive dissonance when siding with industry.
- **Shared ideology:** Both regulator and industry come to believe the same theories about what's beneficial. Pre-2008, regulators genuinely believed financial innovation was good.

**Case evidence:**
- **Financial regulators pre-2008:** Kwak documents how regulators and bankers were "socially and culturally, the same people." Regulators genuinely believed that deregulation served the public interest because they'd absorbed the industry's worldview.
- **FAA:** Investigation found a "culture of coziness" between senior FAA officials and the airlines, and "a systematic breakdown" in the FAA's culture of independent oversight.
- **NRC:** Obama stated in 2007 that the NRC had become "captive of the industries that it regulates." The original Atomic Energy Commission was dissolved precisely because of this problem; the NRC was created to fix it but eventually reproduced the same dynamic.

**Timescale:** 5-15 years. Gradual and subtle; participants often don't recognize it happening.

**Confidence:** Well-established conceptually (Kwak's work is widely cited). Harder to measure empirically than material capture, but recognized as potentially more dangerous because it's invisible and doesn't require any corrupt intent.

**Game relevance:** The most insidious threat to ISIA. Staff come to see AI researchers as brilliant colleagues rather than potential threats. The "we're all on the same team" framing gradually replaces adversarial oversight. ISIA leadership attends AI industry conferences and starts seeing the world through industry's eyes. No one is bribed. No one is corrupt. Everyone genuinely believes they're doing the right thing. And the agency stops doing its job.

---

## 2. Corporate Corruption of Government Officials

### 2.1 Legal Mechanisms

**Lobbying:**
- Direct lobbying of legislators and regulators by paid professionals
- Industry spends orders of magnitude more on lobbying than public interest groups
- NVIDIA example: $1.9M in Q3 2025 alone, with a team of five lobbyists with deep Capitol Hill experience (former Congressional staffers). Successfully blocked legislation that would have limited AI chip exports to China. CEO Jensen Huang met personally with White House officials and secured loosened export controls.
- The sheer volume of lobbyist contact shapes what issues regulators think about and how they frame problems

**Campaign contributions and PACs:**
- Legal in the US; creates dependency relationships between officials and donors
- Industry-aligned PACs coordinate spending across elections
- Creates implicit expectation of favorable treatment without explicit quid pro quo

**Revolving door employment promises:**
- Not technically illegal, but creates powerful implicit incentives
- The promise of a lucrative post-government career shapes behavior while in office
- Cooling-off periods are short (1-2 years) and easily circumvented

### 2.2 Illegal Mechanisms

- Direct bribery (cash payments for specific favorable decisions)
- Insider information sharing (regulators tip off industry about upcoming enforcement)
- Gifts and hospitality beyond legal limits
- MMS scandal (2008): Inspector general found regulators sharing alcohol, using drugs, and having sexual relationships with industry representatives

### 2.3 The Gray Zone

This is where most real-world influence operates in developed democracies:

- **Speaking fees:** Former officials paid $200K+ per speech by industries they used to regulate. Not technically corruption, but creates incentive to maintain industry goodwill while in office.
- **Board seats for former officials:** Lucrative directorships offered to former regulators. Creates implicit promise: "regulate us gently now, join our board later."
- **Charitable donations:** Industry donates to causes associated with officials (pet charities, alma maters, community organizations). Builds goodwill without crossing legal lines.
- **Think tank funding:** Industry funds research organizations that produce policy-favorable analysis. Regulators then cite this "independent" research. Officials rotate between government, think tanks, and industry.
- **"Shadow lobbying":** Former officials like Newt Gingrich and Tom Daschle wielded enormous lobbying influence without ever registering as lobbyists.
- **Consulting arrangements:** Vague contracts that effectively reward past favorable decisions.

Former lobbyist Jimmy Williams argued that most lobbyists "are engaged in a system of bribery but it's the legal kind."

### 2.4 Variation Across Political Systems

| System | Primary Mechanism | Character |
|---|---|---|
| **US** | Legal lobbying, campaign finance, revolving door, think tank funding | "Influence markets" (Michael Johnston). Sophisticated, legal, systemic. |
| **Western Europe** | Similar to US but with tighter campaign finance; more emphasis on regulatory process capture | Less money, more cultural capture via elite networks |
| **China** | Guanxi (personal relationship networks), gift-giving, nepotism, access money | Deeply embedded in social norms; blurred line between legitimate relationship-building and bribery. Evolved toward "access money" since 1990s market reforms. Estimated at ~3% of GDP. |
| **Developing world** | More direct: cash bribes, extortion, nepotism, embezzlement | Lower-income officials more susceptible; weaker institutions less able to detect/punish |
| **Russia/oligarchic** | State capture by oligarchs; industry doesn't capture the regulator, it captures the state itself | Inverted dynamic: industry IS the government in many sectors |

**Key insight for ISIA:** A global agency faces ALL of these simultaneously. Member states will try to influence ISIA through whichever mechanism is normal in their political culture. US-style lobbying, Chinese guanxi, and developing-world bribery would all target the same institution.

---

## 3. Institutional Decay Over Long Timescales

### 3.1 The Prevention Paradox (Budget Erosion)

**Mechanism:** When prevention succeeds, the threat becomes invisible. Success looks like nothing happening. Leaders conclude "nothing's broken, so we don't need this level of investment."

**The decay trajectory:**
1. **Years 1-5:** Agency is well-funded, threat is fresh in memory, public supports the mission
2. **Years 5-10:** No major incidents (because the agency is working). Budget pressure begins. "Is this really necessary?"
3. **Years 10-15:** Original crisis fades from public memory. Budget cuts begin. Best staff leave for private sector (which pays more). Training and institutional knowledge transfer deteriorate.
4. **Years 15-20:** Agency is running on "momentum of previous investments." Technical debt accumulates. Incident response processes skipped. Small issues appear.
5. **Years 20-30:** Catastrophic failure becomes likely. The agency lacks capability to prevent the very event it was created to prevent.

**Case evidence:**
- **FEMA before Hurricane Katrina:** Downgraded, underfunded, leadership given to political appointees without emergency management experience
- **CDC pre-COVID:** Pandemic preparedness infrastructure eroded over two decades
- **Financial regulators pre-2008:** Regulatory capacity systematically dismantled during the "Great Moderation" era

**Confidence:** Very well-established. The prevention paradox is documented across public health, infrastructure, security, and regulation.

**Game relevance:** This is the central tension of the game. ISIA succeeds at preventing ASI for 10 years. Politicians ask: "Why are we spending billions on an agency that regulates something that hasn't happened?" Budget gets cut. Best inspectors leave. The moment ISIA is weakest is exactly when the next attempt is most likely to succeed.

---

### 3.2 Generational Turnover and Loss of Institutional Memory

**Mechanism:** The people who built the institution and understand WHY it exists retire or leave. Their replacements inherit the structure but not the motivation or the tacit knowledge.

**How it works:**
- Founding generation personally experienced the crisis that created the agency; they have emotional commitment to the mission
- Second generation learns from founders but didn't live through the crisis; commitment is professional rather than personal
- Third generation inherits procedures without understanding their purpose; starts optimizing for efficiency over effectiveness
- Tacit knowledge (judgment calls, informal norms, "how we actually decide") is lost because it was never written down
- New staff learn rules but not the reasoning behind them; they follow the letter but miss the spirit

**Timescale:** 15-30 years (one full generational cycle). Peak vulnerability is 20-25 years after founding.

**Confidence:** Well-established in organizational theory and public administration.

**Game relevance:** The ISIA's founding staff personally witnessed whatever AI crisis created the agency. By turn 20-30 (game-years 2040s-2050s), they've been replaced by career bureaucrats who see the ISIA as a job, not a mission.

---

### 3.3 Mission Drift and Empire-Building

**Mechanism:** The agency gradually expands its scope beyond its original mandate, pursuing secondary goals that dilute focus and resources.

**How it works:**
- Bureaucracies naturally seek to expand their budget and headcount (Niskanen's budget-maximizing bureaucrat theory)
- Success in the core mission creates incentive to take on adjacent missions ("we're good at X, let's also do Y")
- Staff pursue personally interesting projects rather than core enforcement
- Agency leadership builds empire to justify higher-grade positions and larger budgets
- Secondary missions crowd out primary mission; when crisis hits, the agency discovers it's no longer capable of its original function

**Related concept — bureaucratic drift:** The tendency for agencies to create policy that deviates from the original mandate. Insulated bureaucrats outlast transient elected officials, fostering drift as they prioritize institutional continuity over responsiveness.

**Case evidence:**
- **US Forest Service:** Documented steady deterioration over a generation as the agency was pulled between conservation, timber, recreation, and fire management missions (cited by Fukuyama as paradigmatic institutional decay)
- **Mission creep in military/security agencies:** NATO's expanding mandate, DHS absorbing dozens of functions
- **NRC dual role:** Accused of being both "regulator and salesman" for nuclear power

**Timescale:** 10-20 years for significant drift.

**Confidence:** Well-established in public administration literature (Fukuyama, Niskanen, Wilson).

**Game relevance:** ISIA starts as a focused AI safety enforcer. Over time it expands into AI ethics, digital rights, algorithmic fairness, cybersecurity. Each expansion is individually reasonable. Collectively, they mean the ASI enforcement team is 10% of the agency instead of 100%.

---

### 3.4 Resistance to Capture: What Works (and Doesn't)

What political science suggests actually helps:

| Safeguard | How It Works | Limitations |
|---|---|---|
| **Separation of missions** | Split promotion and regulation into different agencies (post-MMS reform, NRC creation) | Agencies can still be captured individually; coordination problems |
| **Multiple overlapping regulators** | Divides information, increases cost of collusion for industry | Creates turf wars, gaps, regulatory arbitrage |
| **Judicial review** | Courts can overturn captured decisions | Slow; judges also lack technical expertise |
| **Transparency / public comment** | Forces decisions into the open; allows public interest groups to participate | Industry dominates comment processes with volume and expertise |
| **Independent inspectors general** | Internal watchdogs with protected status | Can be fired, defunded, or politically neutralized |
| **Devil's advocate committees** | Institutionalized dissent within the agency | Requires cultural commitment; easily becomes performative |
| **Cooling-off periods** | Delays revolving door | Easily circumvented; 1-2 year periods are too short |
| **Independent funding** | Reduces budget dependency on industry or political goodwill | Hard to maintain over time; appropriations still political |
| **Rotating staff** | Prevents relationship-building with specific firms | Sacrifices expertise and institutional knowledge |
| **Whistleblower protection** | Enables internal resistance | Whistleblowers still face retaliation in practice |

**Key finding:** No single safeguard is sufficient. Capture-resistant agencies require multiple layered defenses, and even then, resistance degrades over time. The most important factor may be **organizational culture** — agencies with a strong, mission-oriented identity resist capture longer than those without. But culture is the hardest thing to build and the easiest to erode.

---

## 4. Historical Case Studies

### 4.1 MMS/BOEMRE Before Deepwater Horizon (Oil Industry)

**Timeline of capture:**
- MMS created with conflicting missions: promote drilling, enforce safety, collect revenue
- Over 15+ years, informal understanding developed: "technology has progressed so considerably that regulations were not needed"
- MMS adopted voluntary industry standards instead of developing its own regulations
- 2008: Inspector general found regulators had "inappropriate relationships with industry" including drugs, alcohol, and sexual relationships
- April 2010: Deepwater Horizon blowout kills 11, spills 4.9M barrels
- Post-disaster: MMS abolished, split into three separate agencies (BOEM, BSEE, ONRR) with separated missions

**Key mechanisms at work:** Information asymmetry (MMS couldn't keep pace with deepwater technology), cultural capture (regulators identified with industry), structural conflict of interest (revenue collection + safety enforcement in same agency), revolving door.

**Lesson for ISIA:** Combining revenue/licensing functions with enforcement in the same agency is structurally doomed.

---

### 4.2 FAA and Boeing (737 MAX)

**Timeline of capture:**
- 1956: ODA program begins — delegating some certification to manufacturers
- 2005: FAA makes critical decision to turn safety certification responsibilities over to aircraft manufacturers
- Boeing employees certify Boeing planes, report to Boeing management, results forwarded to FAA
- 2018-2019: Two 737 MAX crashes kill 346 people
- Post-crash investigation reveals FAA "handed nearly complete control to Boeing" while Boeing was "racing to finish the plane"
- FAA engineers admitted they "did not fully understand" the MCAS system and "had never independently assessed the risks"

**Key mechanisms at work:** Self-certification (industry literally doing its own oversight), revolving door (Ali Bahrami's journey between FAA and industry lobby), information asymmetry (FAA couldn't understand the systems it approved), budgetary pressure (Congress pushed delegation to reduce FAA costs), cultural capture ("culture of coziness").

**Lesson for ISIA:** Delegating technical assessment to the entities you're supposed to regulate is the fastest path to catastrophic failure. If ISIA lets AI labs self-certify their systems' capabilities, the game is already lost.

---

### 4.3 NRC and Nuclear Safety

**The recurring pattern:**
- AEC (predecessor) dissolved in 1975 because it was "unduly favoring the industry it was charged with regulating"
- NRC created specifically to fix this by separating promotion from regulation
- Within decades, NRC reproduced the same capture dynamic
- Frank von Hippel: nuclear regulation is "a textbook example of regulatory capture"
- Agency accused of being both "regulator and salesman," with approval process called a "rubber stamp"
- 2025-2026: NRC independence further eroded by executive orders bringing it under White House control

**Key mechanisms at work:** Cultural capture (regulators and industry share nuclear engineering background), structural design failure (even separation didn't prevent recapture), political pressure (energy policy goals override safety mission), revolving door.

**Lesson for ISIA:** Structural reform alone doesn't prevent recapture. The NRC was specifically designed to avoid capture and failed within a generation. Suggests that capture resistance requires ongoing active effort, not just good initial design.

---

### 4.4 Financial Regulators Pre-2008

**Timeline of capture:**
- 1990s: CFTC attempts to regulate derivatives. Fed, Treasury, and SEC actively block it, obtaining a moratorium on CFTC's ability to regulate OTC derivatives.
- OCC and OTS relax capital requirements for structured financial products
- SEC allows major investment banks to use internal models to calculate net capital (self-assessment)
- All four major bank regulatory agencies (FDIC, Fed, OCC, OTS) experienced documented capture
- 2008: Financial crisis. Trillions in losses. Global recession.
- Post-crisis: OTS abolished. Dodd-Frank reforms. But cultural capture persists.

**Key mechanisms at work:** Cultural capture (Kwak's primary example — regulators and bankers were "the same people"), complexity capture (Basel rules too complex for outsiders), information asymmetry (regulators couldn't evaluate banks' internal models), regulatory competition (banks chose most permissive regulator), revolving door, lobbying.

**The cultural capture finding (Kwak):** Regulators didn't need to be bribed. They genuinely believed deregulation was good policy. They'd absorbed the industry's worldview through social proximity, shared education (economics/finance departments), conferences, professional networks. This is capture without any corrupt intent — which makes it far harder to detect or resist.

**Lesson for ISIA:** The most dangerous form of capture is when ISIA staff genuinely believe that AI development serves humanity and that their enforcement role is an obstacle to progress. No bribes required.

---

## 5. Synthesis: Mechanisms Ranked by Relevance to ISIA

| Mechanism | Timescale | Detectability | Reversibility | ISIA Risk |
|---|---|---|---|---|
| Information asymmetry | Immediate, worsens | Low (looks like expertise gap) | Very hard (requires massive technical investment) | **Critical** |
| Cultural capture | 5-15 years | Very low (invisible) | Very hard (requires cultural revolution) | **Critical** |
| Prevention paradox / budget erosion | 10-20 years | Medium (budget data is public) | Medium (requires political will) | **High** |
| Revolving door | 3-10 year cycles | Medium (employment records) | Medium (cooling-off periods help) | **High** |
| Generational turnover | 15-30 years | Low (gradual) | Hard (can't un-retire people) | **High** |
| Mission drift | 10-20 years | Medium (mandate creep visible) | Medium (requires political will to refocus) | **Medium** |
| Industry funding dependency | Immediate structural | High (budget structure is public) | Medium (requires alternative funding) | **Medium** |
| Complexity capture | 5-15 years | Low (looks like thoroughness) | Very hard (complexity ratchet) | **Medium** |
| Self-certification delegation | Policy decision | High (obvious structural flaw) | Easy (reverse the policy) | **High if adopted** |
| Direct corruption/bribery | Anytime | Varies by system | Medium (prosecution) | **Medium** (varies by member state) |

---

## Sources

- [Regulatory Capture - Wikipedia](https://en.wikipedia.org/wiki/Regulatory_capture)
- [Revolving Doors and Corporate Capture of Federal Agencies](https://socialsci.libretexts.org/Courses/Mizzou_Academy/AP_US_Government_and_Politics/10:_Federal_Bureaucracy/10.03:_Revolving_Doors_and_Corporate_Capture_of_Federal_Agencies)
- [Revolving Doors and Regulatory Capture - CEPR](https://cepr.org/voxeu/columns/revolving-doors-and-regulatory-capture)
- [Revolving Elites: The Unexplored Risk of Capturing the SEC (Georgetown Law)](https://www.law.georgetown.edu/georgetown-law-journal/wp-content/uploads/sites/26/2019/04/2Revolving-Elites_The-Unexplored-Risk-of-Capturing-the-SEC_Cox_Thomas.pdf)
- [Regulatory Capture: Why It Occurs, How to Minimize It (UNC Law)](https://scholarship.law.unc.edu/cgi/viewcontent.cgi?article=1354&context=ncbi)
- [Preventing Regulatory Capture - Tobin Project](https://tobinproject.org/sites/default/files/assets/Introduction%20from%20Preventing%20Regulatory%20Capture.pdf)
- [Big Bank Regulators at Risk of Influence - US GAO](https://www.gao.gov/blog/2019/02/26/big-bank-regulators-at-risk-of-influence)
- [Protecting the Public Interest: Understanding the Threat of Agency Capture (Senate hearing)](https://www.govinfo.gov/content/pkg/CHRG-111shrg64724/html/CHRG-111shrg64724.htm)
- [Regulatory Capture: A Short Guide for Regulators](https://www.capturerevisited.org/wp-content/uploads/2024/03/Regulatory-capture-A-short-guide-for-practitioners.pdf)
- [How the FAA Ceded Aviation Safety Oversight to Boeing - POGO](https://www.pogo.org/analyses/how-the-faa-ceded-aviation-safety-oversight-to-boeing)
- [Corrupted Oversight: The FAA, Boeing, and the 737 Max - POGO](https://www.pogo.org/analyses/corrupted-oversight-the-faa-boeing-and-the-737-max)
- [Boeing's Self-Inspection Program Is Deeply Flawed - Jacobin](https://jacobin.com/2024/02/boeing-self-inspection-safety-oda)
- [FAA Renews Boeing's Self-Certification Powers Despite Fraud Confession](https://aviationa2z.com/index.php/2025/06/02/faa-renews-boeings-self-certification-powers-despite-fraud/)
- [Minerals Management Service - Wikipedia](https://en.wikipedia.org/wiki/Minerals_Management_Service)
- [Deepwater Horizon: Reviewing Agency and Regulatory Reforms - Harvard EELP](https://eelp.law.harvard.edu/deepwater-horizon-ten-years-later-reviewing-agency-and-regulatory-reforms/)
- [Changing Direction: How Regulatory Agencies Responded to the Deepwater Horizon Oil Spill](https://jelr.law.lsu.edu/2014/11/19/changing-direction-how-regulatory-agencies-have-responded-to-the-deepwater-horizon-oil-spill-part-i-of-ii/)
- [Cultural Capture and the Financial Crisis - James Kwak (Cambridge)](https://www.cambridge.org/core/books/abs/preventing-regulatory-capture/cultural-capture-and-the-financial-crisis/287A8A254F2704DF68C438C8C9B6B24F)
- [ProMarket Interview: James Kwak on Cultural Capture](https://www.promarket.org/2016/06/01/promarket-interview-james-kwak-on-the-causes-of-cultural-capture/)
- [Cultural Capture and the Financial Crisis - Tobin Project (PDF)](https://tobinproject.org/sites/default/files/assets/Kwak%20-%20Cultural%20Capture%20and%20the%20Financial%20Crisis.pdf)
- [The Problem of Monopolies and Corporate Public Corruption - AAAS](https://www.amacad.org/publication/daedalus/problem-monopolies-corporate-public-corruption)
- [Corruption and Lobbying: Conceptual Differentiation and Gray Areas - Springer](https://link.springer.com/article/10.1007/s10611-017-9727-x)
- [NVIDIA Spends $1.9M Lobbying on Chip Controls, AI Policy](https://legis1.com/news/nvidia-semiconductor-export-lobbying/)
- [NVIDIA's Lobbying Pays Off in AI Export Fight](https://www.ttnews.com/articles/nvidia-ai-lobbying-pays-off)
- [NVIDIA Scores Lobbying Win as Congress Rejects Chip Export Bill](https://news.bgov.com/bloomberg-government-news/nvidia-scores-lobbying-win-as-congress-rejects-chip-export-bill)
- [The Decay of American Political Institutions - Fukuyama](https://www.the-american-interest.com/2013/12/08/the-decay-of-american-political-institutions/)
- [The Prevention Paradox: Why Successful Resilience Work Becomes Its Own Enemy](https://www.resiliumlabs.com/blog/the-prevention-paradox)
- [How Institutions Decay: Towards an Endogenous Theory](https://philarchive.org/archive/HERHID)
- [Nuclear Regulatory Commission - Wikipedia](https://en.wikipedia.org/wiki/Nuclear_Regulatory_Commission)
- [How the NRC Lost Its Independence - E&E News/Politico](https://www.eenews.net/articles/how-the-nrc-lost-its-independence/)
- [The Changing Forms of Corruption in China - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8076439/)
- [Corruption or Guanxi? Differentiating Legitimate, Unethical, and Corrupt Activities](https://escholarship.org/uc/item/0p8650mm)
- [Insulating Agencies: Avoiding Capture Through Institutional Design - Barkow (SSRN)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1717037)
- [How to Prevent Regulatory Capture: A Short Guide](https://capturerevisited.org/wp-content/uploads/2024/03/How-to-prevent-regulatory-capture-A-short-guide-for-regulators.pdf)
- [Federal Banking Regulators: Agency Capture and the 2008 Financial Crisis (Wayne State)](https://digitalcommons.wayne.edu/oa_dissertations/793/)
- [Understanding Regulatory Capture - Duke Law](https://scholarship.law.duke.edu/cgi/viewcontent.cgi?article=5262&context=faculty_scholarship)
