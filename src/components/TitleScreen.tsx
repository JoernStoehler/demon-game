import { useEffect, useCallback } from "react";
import { audio } from "../hooks/useAudio";
import { MuteButton } from "./MuteButton";

interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  const handleStart = useCallback(() => {
    audio.init();
    audio.play("uiClick");
    onStart();
  }, [onStart]);

  // Enter key starts the game
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleStart();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleStart]);

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center bg-bar-dark relative" data-testid="title-screen" role="main">
      <div className="absolute top-4 right-4">
        <MuteButton />
      </div>

      {/* TODO: Replace title, subtitle, tagline for demon-game theme */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-widest text-tan mb-3">
          DEMON GAME
        </h1>
        <div className="w-16 h-1 bg-tan mx-auto mb-4 rounded-full" />
        <div className="text-text-muted text-xs font-bold uppercase tracking-widest">
          A Card-Swipe Game
        </div>
      </div>

      <p className="text-text-muted text-xs max-w-xs mb-12 leading-relaxed">
        Every decision has consequences. Keep the balance — or lose everything.
      </p>

      <button
        className="px-8 py-4 bg-tan text-text-dark rounded-lg font-bold uppercase tracking-wider text-sm active:bg-tan-light transition-colors min-h-[44px] cursor-pointer"
        onClick={handleStart}
        data-testid="start-button"
        aria-label="Start game"
      >
        Play
      </button>
    </div>
  );
}
