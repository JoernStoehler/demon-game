/**
 * Audio system for The Pause — synthesized sounds via Web Audio API.
 *
 * All sounds are generated programmatically (no audio files needed).
 * AudioContext is created lazily on first user gesture to comply with
 * browser autoplay policy. Mute preference persisted in localStorage.
 */

const MUTE_KEY = "global-pause-muted";

type SoundName =
  | "cardFlip"
  | "whoosh"
  | "springBack"
  | "death"
  | "uiClick";

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let ambientNodes: { source: OscillatorNode; gain: GainNode } | null = null;
let muted = false;

// Restore mute preference
try {
  muted = localStorage.getItem(MUTE_KEY) === "1";
} catch {
  // ignore
}

function getContext(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
    masterGain = ctx.createGain();
    masterGain.gain.value = muted ? 0 : 1;
    masterGain.connect(ctx.destination);
  }
  if (ctx.state === "suspended") {
    ctx.resume();
  }
  return ctx;
}

function getMaster(): GainNode {
  getContext();
  return masterGain!;
}

/**
 * Play a synthesized sound effect.
 */
function playSound(name: SoundName): void {
  if (muted) return;
  const ac = getContext();
  const master = getMaster();

  switch (name) {
    case "cardFlip": {
      // Short percussive snap — filtered noise burst
      const dur = 0.08;
      const bufferSize = ac.sampleRate * dur;
      const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }
      const src = ac.createBufferSource();
      src.buffer = buffer;
      const filter = ac.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 2000;
      const gain = ac.createGain();
      gain.gain.setValueAtTime(0.15, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      src.connect(filter).connect(gain).connect(master);
      src.start();
      break;
    }
    case "whoosh": {
      // Filtered noise sweep — pitch drops over ~300ms
      const dur = 0.3;
      const bufferSize = ac.sampleRate * dur;
      const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) ** 2;
      }
      const src = ac.createBufferSource();
      src.buffer = buffer;
      const filter = ac.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(3000, ac.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, ac.currentTime + dur);
      filter.Q.value = 2;
      const gain = ac.createGain();
      gain.gain.setValueAtTime(0.2, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      src.connect(filter).connect(gain).connect(master);
      src.start();
      break;
    }
    case "springBack": {
      // Soft boing — sine oscillator with pitch drop
      const osc = ac.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(400, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ac.currentTime + 0.15);
      const gain = ac.createGain();
      gain.gain.setValueAtTime(0.1, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.2);
      osc.connect(gain).connect(master);
      osc.start();
      osc.stop(ac.currentTime + 0.2);
      break;
    }
    case "death": {
      // Low rumble + descending tone — ominous
      const dur = 1.2;
      // Noise rumble
      const bufferSize = ac.sampleRate * dur;
      const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) ** 0.5;
      }
      const noiseSrc = ac.createBufferSource();
      noiseSrc.buffer = buffer;
      const lpf = ac.createBiquadFilter();
      lpf.type = "lowpass";
      lpf.frequency.value = 300;
      const noiseGain = ac.createGain();
      noiseGain.gain.setValueAtTime(0.15, ac.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      noiseSrc.connect(lpf).connect(noiseGain).connect(master);
      noiseSrc.start();
      // Descending tone
      const osc = ac.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(200, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ac.currentTime + dur);
      const oscGain = ac.createGain();
      oscGain.gain.setValueAtTime(0.08, ac.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      osc.connect(oscGain).connect(master);
      osc.start();
      osc.stop(ac.currentTime + dur);
      break;
    }
    case "uiClick": {
      // Tiny tick — very short sine ping
      const osc = ac.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 800;
      const gain = ac.createGain();
      gain.gain.setValueAtTime(0.08, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.04);
      osc.connect(gain).connect(master);
      osc.start();
      osc.stop(ac.currentTime + 0.04);
      break;
    }
  }
}

/**
 * Start ambient background drone — dark filtered noise loop.
 */
function startAmbient(): void {
  if (ambientNodes) return;
  const ac = getContext();
  const master = getMaster();

  // Low-frequency oscillator as base drone
  const osc = ac.createOscillator();
  osc.type = "sawtooth";
  osc.frequency.value = 55; // Low A

  const filter = ac.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 200;
  filter.Q.value = 5;

  // Slow LFO modulating filter cutoff for movement
  const lfo = ac.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 0.1; // Very slow
  const lfoGain = ac.createGain();
  lfoGain.gain.value = 80;
  lfo.connect(lfoGain).connect(filter.frequency);
  lfo.start();

  const gain = ac.createGain();
  gain.gain.value = muted ? 0 : 0.04; // Very quiet — background presence

  osc.connect(filter).connect(gain).connect(master);
  osc.start();

  ambientNodes = { source: osc, gain };
}

function stopAmbient(): void {
  if (!ambientNodes) return;
  const ac = getContext();
  ambientNodes.gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.5);
  const nodes = ambientNodes;
  ambientNodes = null;
  setTimeout(() => {
    try { nodes.source.stop(); } catch { /* already stopped */ }
  }, 600);
}

function setMuted(value: boolean): void {
  muted = value;
  try {
    localStorage.setItem(MUTE_KEY, value ? "1" : "0");
  } catch {
    // ignore
  }
  if (masterGain) {
    masterGain.gain.value = value ? 0 : 1;
  }
  if (ambientNodes) {
    ambientNodes.gain.gain.value = value ? 0 : 0.04;
  }
}

function isMuted(): boolean {
  return muted;
}

/**
 * Initialize audio on user gesture. Call this from the first interactive
 * button click (e.g., "Take Office") to comply with autoplay policy.
 */
function initAudio(): void {
  getContext();
  startAmbient();
}

export const audio = {
  init: initAudio,
  play: playSound,
  startAmbient,
  stopAmbient,
  setMuted,
  isMuted,
} as const;
