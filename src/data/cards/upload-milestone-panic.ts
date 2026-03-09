// Source: event-map #civil--upload-milestone-panic
// Rationale: teaches that opinion clusters react differently to the same event.
//   Upload research activates the indifferent cluster, fractures the fear cluster,
//   and gives skeptics ammunition. One scientific milestone creates an opinion earthquake.
// Dynamic: 30 years of political noise; opinion clusters shift
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "upload-milestone-panic",
    speaker: "Chief Scientist",
    text: "A Zurich team successfully uploaded a functional mouse brain simulation — 1:1 fidelity, ran 48 hours, cover of Nature. Three reactions hit simultaneously. Safety researchers: cautiously optimistic, whole-brain emulation could let researchers work millions of times faster. Religious organizations: horrified, 'they're copying souls,' threatening to withdraw political support. General public: terrified about their own brains being copied. People who never cared about AI suddenly care — but about uploading, not ASI.",
    left: {
      label: "Bring uploading under ISIA oversight",
      effects: { pol: -8, saf: 5 },
    },
    right: {
      label: "Keep focus on ASI mandate only",
      effects: { pol: -3, saf: -3 },
    },
    weight: 2,
  }];
});
