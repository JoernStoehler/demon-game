// TODO: Replace tutorial for demon-game theme. Current text references ISIA/Director-General.
import type { TutorialCard } from "../engine/types";

export const TUTORIAL_CARDS: TutorialCard[] = [
  {
    id: "tutorial-welcome",
    speaker: "Advisor",
    text: "Welcome. You're in charge now. Every decision has consequences — and there's no going back.",
    leftLabel: "I'm ready",
    rightLabel: "Tell me more",
  },
  {
    id: "tutorial-resources",
    speaker: "Advisor",
    text: "Keep an eye on your four resource bars at the top. Let any one hit zero or max out — and you're finished.",
    leftLabel: "Understood",
    rightLabel: "Go on",
    highlightResources: true,
  },
  {
    id: "tutorial-mechanics",
    speaker: "Advisor",
    text: "Each card presents a choice. Swipe the portrait left or right — or use arrow keys. Watch how each option affects your resources before you commit.",
    leftLabel: "Got it",
    rightLabel: "Let's begin",
  },
];
