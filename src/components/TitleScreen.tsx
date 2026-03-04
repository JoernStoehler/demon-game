import { audio } from "../hooks/useAudio";
import { MuteButton } from "./MuteButton";

interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center bg-bar-dark relative" data-testid="title-screen" role="main">
      <div className="absolute top-4 right-4">
        <MuteButton />
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-widest text-tan mb-3">
          THE PAUSE
        </h1>
        <div className="w-16 h-1 bg-tan mx-auto mb-4 rounded-full" />
        <div className="text-text-muted text-xs font-bold uppercase tracking-widest">
          Director-General, ISIA
        </div>
      </div>

      <p className="text-text-muted text-xs max-w-xs mb-12 leading-relaxed">
        Enforce the international ban on superintelligence development.
        Every decision has consequences. Keep the balance — or lose everything.
      </p>

      <button
        className="px-8 py-4 bg-tan text-text-dark rounded-lg font-bold uppercase tracking-wider text-sm active:bg-tan-light transition-colors min-h-[44px] cursor-pointer"
        onClick={() => {
          audio.init();
          audio.play("uiClick");
          onStart();
        }}
        data-testid="start-button"
        aria-label="Start game — Take Office"
      >
        Take Office
      </button>
    </div>
  );
}
