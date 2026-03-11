# Sanctions & Export Control Evasion Mechanisms

Research compiled for card content in The Pause. Focus: mechanisms that translate into game dynamics for an ISIA Director-General enforcing a global AI development ban.

---

## 1. AI Chip Export Control Evasion (US-China)

### Scale of the Problem

CNAS estimates **10,000 to several hundred thousand** AI chips were smuggled to China in 2024, with a median estimate of ~140,000 chips. This could represent 1-30% of China's inference compute and 1-40% of its training compute acquired that year. Six independent news outlets documented large-scale smuggling operations.

The Bureau of Industry and Security (BIS) is critically understaffed: across all of Southeast Asia, it has **a single export control officer** responsible for inspections and compliance checks. The potential penalties from documented 2024 smuggling cases alone would exceed BIS's entire annual budget.

Sources: [CNAS - Countering AI Chip Smuggling](https://www.cnas.org/publications/reports/countering-ai-chip-smuggling-has-become-a-national-security-priority), [CNAS - Preventing AI Chip Smuggling](https://www.cnas.org/publications/reports/preventing-ai-chip-smuggling-to-china)

### Smuggling Methods

**Third-country routing:** Chips purchased legitimately in the US or unrestricted countries, then re-routed through Malaysia, Thailand, Singapore, and UAE to China/Hong Kong. Shipping documents falsified to misclassify GPUs and hide true destinations.

**Shell companies and straw purchasers:** Intermediaries misrepresent end customers as being in the US or unrestricted countries. In one $160M case, employees at a warehouse relabeled Nvidia GPUs with labels for a fake company ("SANDKYAN"). Alan Hao Hsu and Hao Global pleaded guilty; Chinese nationals Fanyue Gong and Benlin Yuan also charged.

**Southeast Asian front operations:** NVIDIA's biggest Southeast Asian customer (a former Chinese gaming company with Chinese government ties) exposed the limits of US export controls by serving as a conduit. The company's procurement patterns revealed systematic re-export to China.

Sources: [DOJ Press Release](https://www.justice.gov/opa/pr/us-authorities-shut-down-major-china-linked-ai-tech-smuggling-network), [CNBC - $160M Smuggling](https://www.cnbc.com/2025/12/31/160-million-export-controlled-nvidia-gpus-allegedly-smuggled-to-china.html), [Fortune - Four Accused](https://fortune.com/2025/11/20/nvidia-chips-china-smuggle-ai/), [Tom's Hardware - SE Asia Customer](https://www.tomshardware.com/pc-components/gpus/nvidias-biggest-sea-customer-exposes-the-limits-of-us-ai-export-controls)

### The "Just Below Threshold" Strategy

NVIDIA designed the **H20 chip** specifically for the Chinese market to comply with Biden-era export controls. The H20's compute power is only ~15% of the H100, with functionality stripped to stay below regulatory thresholds. Despite the reduced capability, the H20 remained highly attractive for AI inference workloads.

This created a cat-and-mouse dynamic: regulators set thresholds, manufacturers design to just below them, regulators lower thresholds, manufacturers redesign. The H20 eventually became subject to new license requirements in April 2025.

Sources: [CNBC - Nvidia Modifies H20](https://www.cnbc.com/2025/05/09/nvidia-modifies-h20-chip-for-china-to-overcome-us-export-controls.html), [AI Frontiers - H20 Analysis](https://ai-frontiers.org/articles/exporting-h20s-to-china-undermines-americas-ai-edge), [IFP - The H20 Problem](https://ifp.org/the-h20-problem/)

### Corporate Lobbying and Political Access

NVIDIA spent $1.9M in Q3 2025 alone on lobbying (~55% of its total 2025 in-house lobbying budget of $3.46M). CEO Jensen Huang attended a **$1 million-a-head dinner at Mar-a-Lago**, after which the White House paused planned restrictions on H20 sales to China. The GAIN AI Act (which would have imposed new limits) was left out of the annual defense bill — described as "handing Nvidia a major win."

Eventually, Nvidia agreed to pay a 15% export tax on H20 chips sold to China as a compromise. This illustrates how **corporate interests can directly shape enforcement regimes** through political access.

Sources: [Legis1 - NVIDIA Lobbying](https://legis1.com/news/nvidia-semiconductor-export-lobbying/), [NPR - Mar-a-Lago](https://www.npr.org/2025/04/09/nx-s1-5356480/nvidia-china-ai-h20-chips-trump), [TT News - Lobbying Pays Off](https://www.ttnews.com/articles/nvidia-ai-lobbying-pays-off), [ainvest - Political Influence](https://www.ainvest.com/news/nvidia-china-exports-political-influence-risks-navigating-regulatory-shifts-national-security-tensions-2512/)

---

## 2. Russian Sanctions Evasion (Post-2022)

### Central Asian Intermediary Networks

Kazakhstan emerged as a primary channel for sanctioned goods to reach Russia. China's exports of dual-use goods to Kazakhstan and Kyrgyzstan reached **$1.3 billion in 2023** (64% increase from 2022). Trade flows surged in microelectronics, drones, and dual-use components.

By 2024-2025, evidence suggested this was a **deliberate Chinese strategy** to test Western response thresholds and build a durable, sanctions-resistant logistics corridor — not just opportunistic profiteering by Central Asian middlemen. Kyrgyzstan's relatively unrestricted borders, lenient trade regulations, and profit-driven intermediaries made it an ideal passageway.

Sources: [KIAR - Central Asia Report](https://kiar.center/central-asias-crucial-role-in-russias-evasion-of-sanctions-in-report-2024-2025/), [Lansing Institute - Kazakhstan](https://lansinginstitute.org/2025/12/01/kazakhstans-expanding-role-in-russias-sanctions-evasion-architecture/), [The Diplomat - China-Kyrgyzstan Corridor](https://thediplomat.com/2025/06/china-kyrgyzstan-and-the-quiet-construction-of-a-sanctions-resistant-trade-corridor/), [FPRI - Central Asia Impact](https://www.fpri.org/article/2024/12/the-impact-of-russia-sanctions-on-central-asia/)

### Turkey and UAE Routing

Turkish firms (Belluga Trading, ETASIS, IDA Elevator, LSS Global) were sanctioned in 2024 for supplying machine tools, heavy industrial hardware, and logistics services to Russia. Shell companies in UAE and Turkish **free trade zones** obscured final destinations. UK/EU imposed asset freezes on specific trading houses in Istanbul and Dubai.

Sources: [Evidencity - Turkey and UAE](https://www.evidencity.com/how-russian-companies-circumvent-sanctions-through-turkey-and-the-uae)

### Cryptocurrency and Alternative Finance

Russia developed sophisticated crypto-based evasion networks:

- **Bitpapa** (peer-to-peer crypto exchange registered in UAE) sanctioned by OFAC in March 2024 for enabling Russian sanctions evasion
- **Aifory Pro** operates cash-to-crypto services in Moscow, Dubai, and Turkey, serving as a "Foreign Economic Activity Payment Agent" for international trade
- Russia-linked crypto services increasingly used for cross-border trade settlement, bypassing SWIFT and traditional banking

The EU specifically targeted Russian crypto operations linked to war financing and banned several banks from Russia, Belarus, and Central Asia involved in sanctions evasion.

Sources: [Elliptic - Russia Crypto](https://www.elliptic.co/blog/russia-linked-cryptocurrency-services-and-sanctions-evasion), [RAND - Russia Crypto Schemes](https://www.rand.org/pubs/commentary/2025/08/russias-use-of-crypto-schemes.html), [Blockmanity - Crypto Evasion 2024](https://blockmanity.com/news/how-russia-linked-crypto-services-drive-sanctions-evasion-in-2024/)

### Parallel Import System

Russia legalized "parallel imports" — importing branded goods without manufacturer authorization. This converted formerly grey-market activity into a state-sanctioned evasion mechanism, making it harder to distinguish legitimate trade from sanctions circumvention.

---

## 3. Iranian Sanctions Evasion (Decades of Experience)

### Hawala Networks

Iran's fastest and most adaptable fund-transfer mechanism. Hawala brokers settle accounts through trade or cash deliveries **without moving actual money through banking systems**. Operates on trust-based ledgers with minimal documentation. Iranian importers pay rials to a domestic broker; a counterpart abroad pays the supplier in foreign currency. Routes through UAE-based shell companies.

Source: [Australia DFAT - Iran Shadow Banking](https://www.dfat.gov.au/international-relations/security/sanctions/guidance/identifying-sanctions-risks-irans-shadow-banking-network)

### Shadow Banking Architecture

Iran built a **parallel banking system** with multiple layers:

- **Exchange houses** operating in Dubai, Istanbul, Oman, Malaysia
- **Front/intermediary companies** used to invoice and settle trades on behalf of Iranian clients
- **Shell company networks** — international web of proxy banks and money exchangers
- Settlement occurs without exposure to formal banking rails

The shadow banking system was specifically designed so that **each node has plausible deniability** — no single transaction looks illegal in isolation.

Sources: [Atlantic Council - Iran Sanctions Dashboard](https://www.atlanticcouncil.org/blogs/econographics/global-sanctions-dashboard-how-iran-evades-sanctions-and-finances-terrorist-organizations-like-hamas/), [US Treasury - Iranian Shadow Banking](https://home.treasury.gov/news/press-releases/sb0159), [Chatham House - Axis Economic Networks](https://www.chathamhouse.org/2025/03/shape-shifting-axis-resistance/03-uncovering-axiss-economic-support-networks)

### Oil Smuggling Techniques

- **Blending:** Iranian oil mixed with Iraqi oil to obscure origin
- **Ship-to-ship transfers:** Enable seamless movement across borders without port documentation
- **False-flag operations:** NIOC subsidiaries (e.g., NICO based in Switzerland) market crude under false flags
- **Private smuggler partnerships:** IRGC affiliates work with independent smuggling networks

Source: [INSS - Aircraft Under the Radar](https://www.inss.org.il/publication/aircraft-under-the-radar/)

### Aviation Sector Evasion

Iran maintains its aging aircraft fleet through systematic evasion of parts sanctions — a relevant parallel for how nations might maintain banned AI hardware despite controls.

---

## 4. North Korean Sanctions Evasion

### Cryptocurrency Theft (State-Sponsored)

North Korea's Lazarus Group represents **state-level cybercrime** as sanctions evasion:

- In 2025, >$2.7 billion stolen in crypto hacks; over half linked to North Korea
- February 2025: Lazarus Group stole **$1.5 billion** from Bybit exchange in a single operation
- Stolen funds laundered through brokers and shell companies across Russia, Hong Kong, and Cambodia
- Settlement occurs within **Chinese underground banking networks** via mirror payments, trade-based offsets, and goods transfers
- Funds are effectively washed before they touch the North Korean financial system

This represents an evolution from traditional sanctions evasion to **offensive cyber operations as a revenue source**.

Sources: [TRM Labs - NK Crypto Industrialization](https://www.trmlabs.com/resources/blog/north-korea-and-the-industrialization-of-cryptocurrency-theft), [Warren/Reed - $1.5B Heist](https://www.reed.senate.gov/news/releases/warren-reed-press-treasury-and-doj-on-north-koreas-15-billion-crypto-heist), [DL News - $6B Racket](https://www.dlnews.com/articles/markets/north-korea-crypto-crime-expanding-via-russia-hong-kong-and-cambodia/)

### Ship-to-Ship Transfers

DPRK and non-DPRK vessels meet at sea for illicit transactions — typically exchanging refined petroleum for North Korean coal. "Massive increase in illegal ship-to-ship transfers" documented by UN panels. AIS transponders disabled during transfers to avoid satellite tracking.

Source: [NBC News - UN Report](https://www.nbcnews.com/news/north-korea/u-n-report-north-korea-evading-sanctions-buying-oil-selling-n981821)

### IT Worker Deployment

North Korea deploys thousands of IT workers abroad (operating under false identities) who earn foreign currency. This is a "hidden in plain sight" approach — workers appear as normal freelancers on platforms but funnel earnings back to the regime.

Source: [US Treasury - DPRK Bankers](https://home.treasury.gov/news/press-releases/sb0302)

---

## 5. Cross-Cutting Mechanisms and Patterns

### How Evasion Networks Form and Professionalize

1. **Opportunistic phase:** Individual traders/brokers notice profit opportunities in newly sanctioned trade. Markups of 30-100%+ above market price.
2. **Network formation:** Successful intermediaries recruit trusted associates. Trust-based (often ethnic/family) networks form along existing trade routes.
3. **Professionalization:** Dedicated logistics companies, shell company factories, specialized lawyers/accountants. Standard operating procedures emerge.
4. **State capture:** When evasion becomes large enough, state actors (intelligence services, military) take direct roles. China's apparent coordination of Central Asian re-export corridors is an example.
5. **Industrialization:** North Korea's crypto theft operations show the endpoint — sanctions evasion as a professionalized state industry.

### The Role of Corruption

Corruption is the **lubricant** at every stage:

- **Customs officials:** Falsified export documents, misclassified goods, overlooked shipments. A single corrupt customs officer can enable systematic evasion at a port.
- **Banking compliance officers:** Look the other way on suspicious transaction patterns, fail to file reports, or actively facilitate transfers.
- **Government officials:** Issue false end-user certificates, provide diplomatic cover, shield intermediaries from investigation.
- **Shipping/logistics:** Falsified bills of lading, AIS transponder manipulation, port officials who don't inspect.

The UK National Crime Agency explicitly links bribery and corruption to sanctions evasion as intertwined threats — organizations facilitating evasion through bribery can themselves become sanctions targets.

Source: [NCA - Bribery and Sanctions Evasion](https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/bribery-corruption-and-sanctions-evasion)

### Network Resilience and Adaptation

- **Cell structure:** Compartmentalized networks where each node knows only its immediate contacts. A single arrest doesn't compromise the whole network.
- **Route substitution:** When one country cracks down (e.g., Kazakhstan tightens controls), traffic shifts to alternatives (Kyrgyzstan, Uzbekistan). The overall flow continues.
- **Entity rotation:** Shell companies are disposable. When one is sanctioned, a new one is created. The cost of creating a new entity is trivial compared to the profit from evasion.
- **Method evolution:** As financial controls tighten, networks shift to crypto, barter trade, or commodity-based settlement. The mechanism changes but the flow continues.
- **Layered plausible deniability:** Each step in the chain is designed to look legitimate in isolation. Only the full picture reveals the evasion — and no single enforcement agency sees the full picture.

Source: [CSIS - Export Control Enforcement Framework](https://www.csis.org/analysis/reaction-strategy-new-framework-us-export-control-enforcement)

### Detection vs. Undetected Evasion

Hard numbers are inherently unknowable (you can't count what you haven't detected), but indicators suggest **most evasion goes undetected:**

- Financial institutions report 90-95% **false positive** rates in sanctions screening, meaning compliance teams are overwhelmed by noise
- Maritime evasion becomes visible "only when historical behavior, real-time movement, ownership changes, and independent sensor data are analyzed together"
- BIS has a single export control officer for all of Southeast Asia
- The CNAS estimate of 10,000-hundreds of thousands of smuggled chips suggests enforcement catches a small fraction
- Vessels layer multiple evasion techniques to create plausible deniability at each checkpoint

The pattern: **enforcement catches the amateur and the unlucky, not the systematic and professional.**

### What Makes Controls More or Less Enforceable

**More enforceable (chokepoint controls):**
- **Extreme concentration of supply:** ASML is the sole provider of EUV lithography machines. You can't smuggle what only one company makes. This is the gold standard for enforceability.
- **Maintenance dependency:** ASML's DUV machines require specialized maintenance only the company can provide. The Dutch government declined to renew ASML's license to service machines already in China — degrading capability even without preventing initial sale.
- **Physical size/visibility:** Large equipment (lithography machines, data center racks) is harder to smuggle than chips. A GPU fits in a backpack; a lithography machine fills a cargo plane.
- **Small number of producers:** When 2-3 companies worldwide make something, you can monitor every sale. When thousands of resellers exist, you can't.

**Less enforceable (diffuse goods):**
- **Small, high-value items:** Individual GPUs are portable, concealable, and fungible. Perfect for smuggling.
- **Dual-use ambiguity:** Items with legitimate civilian uses create gray zones. Every laptop has a GPU.
- **Long reseller chains:** When goods pass through 3-4 intermediaries, tracking end-use becomes nearly impossible.
- **Threshold-based rules:** Any threshold creates a "just below" design space that manufacturers will exploit (cf. NVIDIA H20).
- **Weak multilateral coordination:** US export controls mean little if Malaysia, Singapore, or UAE don't enforce equivalent rules.
- **Understaffed enforcement:** BIS budget has barely grown despite massive expansion of responsibilities.

Sources: [Congress.gov - Semiconductor Export Controls](https://www.congress.gov/crs-product/R48642), [CNAS - Export Control Loophole](https://www.cnas.org/publications/commentary/cnas-insights-the-export-control-loophole-fueling-chinas-chip-production), [The FAI - Chipmaking Tool Loopholes](https://www.thefai.org/posts/export-control-loopholes-chipmaking-tools-and-their-subcomponents), [TNSR - CoCom Lessons](https://tnsr.org/2025/09/hard-then-harder-now-cocoms-lessons-and-the-challenge-of-crafting-effective-export-controls-against-china/)

### Legal/Semi-Legal Gray Zones

1. **Threshold gaming:** Design products to just below control thresholds (NVIDIA H20). Technically legal, functionally evasive.
2. **Parallel imports:** Russia legalized importing branded goods without manufacturer consent — converting gray market to white market by fiat.
3. **Free trade zones:** Dubai, Istanbul, and others provide jurisdictions where goods can be re-exported with minimal oversight.
4. **EAR99 classification:** The "catch-all" designation for items with potential dual-use that aren't formally controlled creates ambiguity exploitable by sophisticated actors.
5. **Subcomponent trade:** Even when finished equipment is controlled, spare parts and subcomponents often aren't — enabling maintenance and reverse engineering.
6. **Academic/research exemptions:** Technology transfers through universities and research institutions operate under different (often lighter) controls.

---

## 6. Game-Relevant Dynamics

These mechanisms suggest several card/event types for The Pause:

### Tension Pairs (Binary Choices)

| Scenario | Left (permissive) | Right (restrictive) | Bars affected |
|---|---|---|---|
| **Chip manufacturer lobbies for "safety-compliant" chips just below threshold** | Allow sales — preserves industry cooperation, but rivals gain capability | Ban all sales — industry turns hostile, lobbies against you | Trust/Funding vs Intel/Leverage |
| **Shell company network discovered in Singapore** | Quiet investigation — gather intel on full network | Public crackdown — sends message but network fragments and goes deeper | Intel vs Leverage/Trust |
| **Central Asian state becomes major transshipment hub** | Diplomatic pressure — slow but preserves alliance | Secondary sanctions — effective but pushes them toward rival bloc | Leverage vs Trust |
| **Crypto exchange facilitating banned compute purchases** | Regulate and monitor — visibility but legitimizes gray market | Shut it down — drives activity to darker channels | Intel vs Leverage |
| **Whistleblower at compliant company reports evasion** | Protect whistleblower publicly — deters evasion, angers industry | Handle quietly — maintains industry relationships | Trust vs Funding |
| **Bribed customs official discovered at key port** | Arrest and publicize — deters corruption but embarrasses ally government | Work with ally to handle internally — preserves relationship but weaker deterrent | Trust/Leverage tradeoff |
| **Nation offers to host compute monitoring in exchange for access** | Accept — better monitoring but proliferation risk | Decline — maintain control but lose visibility | Intel vs Leverage |
| **Major tech CEO attends private dinner with rival state leader** | Investigate — may reveal nothing, alienates powerful ally | Ignore — preserves relationship but may miss evasion | Intel/Trust vs Funding |

### Escalation Dynamics

1. **Early game:** Individual smugglers, opportunistic evasion, easy to catch
2. **Mid game:** Professional networks form, shell company factories, state involvement begins
3. **Late game:** Industrialized evasion, state-sponsored cyber theft of compute access, rival blocs providing systematic cover

### Key Insight for Game Design

The core lesson from real-world sanctions evasion: **enforcement is a treadmill, not a wall.** Every control creates a new evasion incentive. Every crackdown redirects rather than eliminates flow. The player can never "win" enforcement — they can only manage the rate and sophistication of evasion while keeping political coalitions intact to maintain the regime at all. This maps perfectly to the Reigns mechanic of keeping all four bars balanced while the situation constantly deteriorates.

The ratio of detected-to-undetected evasion means the player should regularly receive cards that reveal evasion they didn't know about — generating a persistent sense that reality is worse than what they can see, which is accurate to the real world.
