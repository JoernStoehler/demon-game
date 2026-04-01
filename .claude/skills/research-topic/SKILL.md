---
name: research-topic
description: Research a topic from expert literature and compress it into game-ready design material. Use when the domain model needs new content grounded in real sources.
---

# Research Topic Pipeline

Four-step process for turning a knowledge gap into card-ready design material. Each step produces a distinct artifact. Do NOT skip steps or combine artifacts.

## When to use

When card content needs real-world expertise that isn't in `literature/` yet — e.g. "how does regulatory capture actually work?" or "what are the mechanisms of sanctions evasion?"

## Step 1: Guided Literature Search

**Goal:** Find and download expert-written source documents relevant to the topic.
**Output:** Files in `literature/` (flat, no subfolders).

Rules:
- Search for specific known documents (reports, papers, government post-mortems), not general web summaries
- Download actual source text via WebFetch. Save with a header: title, authors, date, URL
- Prioritize freely available full-text documents (think tank reports, government documents, open-access papers)
- Filter for relevance DURING search, not after — don't download everything and sort later
- Agent-downloaded text is acceptable in `literature/` (it's mechanical conversion, not creative writing)
- Agent-written summaries are NOT acceptable in `literature/` — those go in `design/`
- Verify coverage: do the sources cover the topic from multiple angles? Flag gaps.

**Quality check:** Can you point to a specific passage in a specific file for every important claim? If not, search more.

## Step 2: Expert Model Extraction

**Goal:** Compress the source documents into transferable mechanisms/patterns.
**Output:** `design/<topic>-synthesis.md`

Rules:
- Every claim must cite a specific source file and ideally a specific passage/section
- Extract MECHANISMS (how something works, what drives it, what timescale) not just examples
- Flag where sources disagree or where evidence is weak
- Do NOT include mechanisms unsupported by the source documents, even if they seem obvious
- Keep under 3000 words — this is a reference document, not a thesis
- Number everything so Jorn can reference items unambiguously

**Quality check:** Would an expert in the field recognize these mechanisms as accurate and well-sourced? Flag uncertainty honestly.

## Step 3: ISIA Scenario Specialization

**Goal:** Translate generic mechanisms into concrete ISIA pause scenarios.
**Output:** New file `design/<topic>-scenarios.md`

Rules:
- For each mechanism from step 2, describe how it specifically plays out for a global AI pause agency over 30 years
- Include the player-facing tension: what choice does this create? What are the tradeoffs?
- Identify which game state it affects (resource bars, hidden state variables, card pool dynamics)
- Note timescale in game terms (early/mid/late game, or continuous)
- Reference the synthesis document for sourcing — don't repeat citations inline
- Write for an agent reader who knows the game mechanics but not political science

**Quality check:** Could a card-writing agent read this section and immediately generate a card concept? If not, it's too abstract.

## Step 4: Card-Writing Reference

**Goal:** Produce material a card-writing agent can directly use.
**Output:** New file `design/<topic>-card-ideas.md` (idea lines with no card IDs yet)

Rules:
- Each idea line should be a concrete scenario with a player choice implied
- Mark new ideas clearly (e.g. `NEW` tag or separate sub-section) so Jorn can review before implementation
- Note which mechanism from step 3 each idea derives from
- Do NOT write TypeScript cards yet — Jorn reviews concepts first

**Quality check:** Does each idea line make the player feel a real tension? "Choose A (costs X) or B (costs Y)" — not just "bad thing happens."

## Anti-patterns

- **Writing the conclusion first, then finding literature to support it.** The literature search must be genuine discovery, not confirmation.
- **Agent summaries masquerading as literature.** Agent-written analysis goes in `design/`, never `literature/`.
- **Skipping the scenario layer.** Mechanisms extracted from political science don't directly translate to card concepts — the ISIA specialization step is required.
- **Giant literature dumps.** Download what you'll actually read and cite. 5 well-chosen sources beat 30 unread PDFs.
- **Combining steps into one document.** Each step has a different audience and purpose. Keep them separate.

## Existing examples

- **Geopolitics research (2026-03-11):**
  - Step 1: ~30 source documents in `literature/` (IAEA reports, Kwak, Boeing 737 MAX report, CNAS chip smuggling, etc.)
  - Steps 2-4: Not yet completed
