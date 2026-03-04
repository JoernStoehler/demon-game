import { useState } from "react";
import { audio } from "../hooks/useAudio";

export function MuteButton() {
  const [muted, setMuted] = useState(audio.isMuted);

  return (
    <button
      className="text-text-muted hover:text-text-light transition-colors p-1 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
      onClick={() => {
        const next = !muted;
        audio.setMuted(next);
        setMuted(next);
        if (!next) {
          audio.play("uiClick");
        }
      }}
      data-testid="mute-button"
      aria-label={muted ? "Unmute sound" : "Mute sound"}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {muted ? (
          <>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </>
        ) : (
          <>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </>
        )}
      </svg>
    </button>
  );
}
