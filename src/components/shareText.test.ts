import { describe, it, expect } from "vitest";
import type { DeathInfo, HistoryEntry } from "../engine/types";
import { generateShareText } from "./shareText";

function makeDeath(resource: DeathInfo["resource"], extreme: DeathInfo["extreme"]): DeathInfo {
  return { resource, extreme, message: "test" };
}

describe("generateShareText", () => {
  it("includes failure phrase for each resource × extreme", () => {
    const cases: [DeathInfo["resource"], DeathInfo["extreme"], string][] = [
      ["pol", "depleted", "Political support collapsed"],
      ["pol", "overloaded", "Unchecked institutional power"],
      ["int", "depleted", "I was flying blind"],
      ["int", "overloaded", "Total surveillance drove threats underground"],
      ["saf", "depleted", "lethal threshold shrank"],
      ["saf", "overloaded", "Safety research produced"],
      ["alg", "depleted", "Algorithmic stagnation"],
      ["alg", "overloaded", "Consumer hardware became sufficient"],
    ];
    for (const [resource, extreme, phrase] of cases) {
      const text = generateShareText(makeDeath(resource, extreme), 10, []);
      expect(text).toContain(phrase);
    }
  });

  it("uses year-based time framing", () => {
    expect(generateShareText(makeDeath("pol", "depleted"), 5, [])).toContain("in my first year");
    expect(generateShareText(makeDeath("pol", "depleted"), 12, [])).toContain("after a year in office");
    expect(generateShareText(makeDeath("pol", "depleted"), 36, [])).toContain("after 3 years in office");
  });

  it("includes notable card mention when present in history", () => {
    const history: HistoryEntry[] = [
      { turn: 0, cardId: "some-card", choice: "left" },
      { turn: 1, cardId: "whistleblower", choice: "right" },
    ];
    const text = generateShareText(makeDeath("pol", "depleted"), 10, history);
    expect(text).toContain("A whistleblower came to me for protection");
  });

  it("uses first notable card only", () => {
    const history: HistoryEntry[] = [
      { turn: 0, cardId: "whistleblower", choice: "left" },
      { turn: 1, cardId: "treaty-threat", choice: "right" },
    ];
    const text = generateShareText(makeDeath("pol", "depleted"), 10, history);
    expect(text).toContain("whistleblower");
    expect(text).not.toContain("threatened to leave");
  });

  it("omits notable line when no notable cards in history", () => {
    const text = generateShareText(makeDeath("int", "overloaded"), 24, []);
    // Should go straight from "AI pause." to the failure phrase
    expect(text).toMatch(/AI pause\. Total surveillance/);
  });

  it("always ends with the game URL", () => {
    const text = generateShareText(makeDeath("pol", "depleted"), 5, []);
    expect(text).toContain("global-pause.pages.dev");
  });
});
