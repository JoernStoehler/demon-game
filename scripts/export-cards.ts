/**
 * Export card data for review and visualization.
 *
 * Outputs:
 *   design/cards-export.md  — flat review file grouped by source file
 *   design/cards-map.html   — D3 force graph (history chains + hidden state)
 *
 * Usage: npm run cards
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { GameState } from "../src/engine/types";
import { newGame } from "../src/engine/state";
import { ALL_CARDS } from "../src/data/cards";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(repoRoot, "design");
const cardsDir = join(repoRoot, "src/data/cards");

// Build card-id → source-file mapping
const cardFiles = readdirSync(cardsDir).filter(
  (f) => f.endsWith(".ts") && !["index.ts", "registry.ts", "examples.ts"].includes(f),
);
const idToFile: Record<string, string> = {};
for (const file of cardFiles) {
  const content = readFileSync(join(cardsDir, file), "utf-8");
  for (const match of content.matchAll(/id:\s*"([^"]+)"/g)) {
    idToFile[match[1]] = file;
  }
}

// Group cards by source file
const groups = new Map<string, typeof ALL_CARDS[number][]>();
for (const card of ALL_CARDS) {
  const file = idToFile[card.id] ?? "unknown.ts";
  if (!groups.has(file)) groups.set(file, []);
  groups.get(file)!.push(card);
}

const base = newGame(1);
const res = <T,>(v: T | ((s: GameState) => T)): T =>
  typeof v === "function" ? (v as (s: GameState) => T)(base) : v;
const fmtFx = (fx: Partial<Record<string, number>>) =>
  Object.entries(fx).filter(([, v]) => v !== 0)
    .map(([k, v]) => `${k}${v! > 0 ? "+" : ""}${v}`).join(" ") || "—";

// --- Generate .md review file ---
const md: string[] = [];
md.push(`# Card Review — ${ALL_CARDS.length} cards, ${groups.size} files`);
md.push(`Generated ${new Date().toISOString().slice(0, 10)}`);
md.push("");

for (const [file, cards] of groups) {
  md.push(`## ${file}`);
  md.push("");
  for (const card of cards) {
    md.push(`**${card.id}** — ${res(card.speaker)}`);
    md.push(`> ${res(card.text)}`);
    md.push(`← ${res(card.left.label)}: ${fmtFx(card.left.effects)}`);
    md.push(`→ ${res(card.right.label)}: ${fmtFx(card.right.effects)}`);
    if (card.down) {
      md.push(`↓ ${res(card.down.label)}: ${fmtFx(card.down.effects)}`);
    }
    md.push("");
  }
}

const mdFile = join(outDir, "cards-export.md");
writeFileSync(mdFile, md.join("\n"));
console.log(`${ALL_CARDS.length} cards → ${mdFile}`);

// --- Extract interaction data from source files ---
type GEdge = { source: string; target: string; type: string };
type GNode = { id: string; type: string; file?: string; speaker?: string; text?: string; effects?: string };

const gNodes: GNode[] = [];
const gEdges: GEdge[] = [];
const hiddenWrites: { card: string; key: string }[] = [];
const hiddenReads: { card: string; key: string }[] = [];

// Add card nodes
for (const card of ALL_CARDS) {
  const file = idToFile[card.id] ?? "unknown.ts";
  gNodes.push({
    id: card.id,
    type: "card",
    file: file.replace(".ts", ""),
    speaker: res(card.speaker),
    text: res(card.text).slice(0, 120),
    effects: `← ${fmtFx(card.left.effects)}  → ${fmtFx(card.right.effects)}`,
  });
}

// Parse source files for interactions
for (const file of cardFiles) {
  const content = readFileSync(join(cardsDir, file), "utf-8");

  // Position-based card ID tracking
  interface PosMatch { pos: number; id: string; kind: "def" | "histRef" }
  const posMatches: PosMatch[] = [];
  for (const m of content.matchAll(/id:\s*"([^"]+)"/g)) {
    posMatches.push({ pos: m.index!, id: m[1], kind: "def" });
  }
  for (const m of content.matchAll(/h\.cardId\s*===\s*"([^"]+)"/g)) {
    posMatches.push({ pos: m.index!, id: m[1], kind: "histRef" });
  }
  posMatches.sort((a, b) => a.pos - b.pos);

  let currentCard = "";
  for (const pm of posMatches) {
    if (pm.kind === "def") {
      currentCard = pm.id;
    } else if (currentCard) {
      gEdges.push({ source: pm.id, target: currentCard, type: "chain" });
    }
  }

  // Hidden state writes: hiddenEffects: { key: value }
  const defPositions = posMatches.filter((p) => p.kind === "def");
  const findOwner = (pos: number) => {
    let owner = "";
    for (const d of defPositions) {
      if (d.pos <= pos) owner = d.id;
      else break;
    }
    return owner;
  };

  for (const m of content.matchAll(/hiddenEffects:\s*\{([^}]+)\}/g)) {
    const owner = findOwner(m.index!);
    if (!owner) continue;
    for (const p of m[1].matchAll(/(\w+):/g)) {
      hiddenWrites.push({ card: owner, key: p[1] });
    }
  }

  for (const m of content.matchAll(/state\.hidden\.(\w+)/g)) {
    const owner = findOwner(m.index!);
    if (owner) hiddenReads.push({ card: owner, key: m[1] });
  }
  for (const m of content.matchAll(/state\.hidden\[["'](\w+)["']\]/g)) {
    const owner = findOwner(m.index!);
    if (owner) hiddenReads.push({ card: owner, key: m[1] });
  }
}

// Build hidden state hub nodes and edges
const hiddenKeys = new Set([
  ...hiddenWrites.map((w) => w.key),
  ...hiddenReads.map((r) => r.key),
]);
for (const key of hiddenKeys) {
  gNodes.push({ id: `hidden:${key}`, type: "hidden" });
}
for (const w of hiddenWrites) {
  gEdges.push({ source: w.card, target: `hidden:${w.key}`, type: "writes" });
}
for (const r of hiddenReads) {
  gEdges.push({ source: `hidden:${r.key}`, target: r.card, type: "reads" });
}

// Deduplicate edges
const edgeSet = new Set<string>();
const uniqueEdges = gEdges.filter((e) => {
  const key = `${e.source}→${e.target}:${e.type}`;
  if (edgeSet.has(key)) return false;
  edgeSet.add(key);
  return true;
});

// File groups for coloring
const fileGroups = [...new Set(Object.values(idToFile).map((f) => f.replace(".ts", "")))];

const graphData = JSON.stringify({ nodes: gNodes, edges: uniqueEdges, fileGroups });

const CLOSE_SCRIPT = "</scr" + "ipt>";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Card Map — ${ALL_CARDS.length} cards</title>
<script src="https://d3js.org/d3.v7.min.js">${CLOSE_SCRIPT}
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #1a1a2e; color: #e0e0e0; overflow: hidden; }
svg { display: block; width: 100vw; height: 100vh; }
#info { position: fixed; top: 12px; right: 12px; width: 320px; background: #16213e;
  border: 1px solid #334; border-radius: 8px; padding: 16px; font-size: 13px;
  max-height: 90vh; overflow-y: auto; }
#info h2 { font-size: 15px; margin-bottom: 8px; color: #e8b059; }
#info .speaker { color: #8ab4f8; font-size: 12px; margin-bottom: 6px; }
#info .text { color: #ccc; margin-bottom: 8px; line-height: 1.4; }
#info .effects { font-size: 12px; color: #aaa; }
#info .file { font-size: 11px; color: #666; margin-top: 6px; }
#legend { position: fixed; bottom: 12px; left: 12px; background: #16213e;
  border: 1px solid #334; border-radius: 8px; padding: 12px; font-size: 11px; }
#legend .row { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
#legend .swatch { width: 12px; height: 12px; border-radius: 3px; }
#header { position: fixed; top: 12px; left: 12px; pointer-events: none; }
#header h1 { font-size: 16px; color: #e8b059; }
#header p { font-size: 11px; color: #888; }
.edge-chain { stroke: #e8b059; stroke-width: 1.5; }
.edge-writes { stroke: #4a9; stroke-width: 1; stroke-dasharray: 4 2; }
.edge-reads { stroke: #4a9; stroke-width: 1; stroke-dasharray: 4 2; }
.node-hidden { fill: #4a9; }
text.label { font-size: 9px; fill: #aaa; pointer-events: none; }
</style>
</head>
<body>
<div id="header"><h1>Card Map</h1><p>${ALL_CARDS.length} cards, ${hiddenKeys.size} hidden vars, ${uniqueEdges.filter((e) => e.type === "chain").length} chains</p></div>
<div id="info"><h2>Click a node</h2><p class="text">Click any card to see details.</p></div>
<div id="legend">
  <div class="row"><svg width="12" height="12"><line x1="0" y1="6" x2="12" y2="6" stroke="#e8b059" stroke-width="2"/></svg> History chain</div>
  <div class="row"><svg width="12" height="12"><line x1="0" y1="6" x2="12" y2="6" stroke="#4a9" stroke-width="1" stroke-dasharray="3 2"/></svg> Hidden state</div>
  <div class="row"><svg width="12" height="12"><circle cx="6" cy="6" r="5" fill="#4a9"/></svg> Hidden variable</div>
</div>
<svg id="graph"></svg>
<script>
const data = ${graphData};
const colors = d3.scaleOrdinal(d3.schemeTableau10).domain(data.fileGroups);
const svg = d3.select("#graph");
const width = window.innerWidth, height = window.innerHeight;
const g = svg.append("g");

// Zoom
svg.call(d3.zoom().scaleExtent([0.1, 4]).on("zoom", (e) => g.attr("transform", e.transform)));

// Arrow marker
svg.append("defs").append("marker").attr("id","arrow").attr("viewBox","0 0 10 6")
  .attr("refX",18).attr("refY",3).attr("markerWidth",8).attr("markerHeight",6)
  .attr("orient","auto").append("path").attr("d","M0,0L10,3L0,6Z").attr("fill","#e8b059");

const sim = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.edges).id(d => d.id).distance(d => d.type === "chain" ? 80 : 60).strength(d => d.type === "chain" ? 0.8 : 0.2))
  .force("charge", d3.forceManyBody().strength(-120))
  .force("center", d3.forceCenter(width/2, height/2))
  .force("x", d3.forceX(width/2).strength(0.03))
  .force("y", d3.forceY(height/2).strength(0.03));

const link = g.selectAll("line.edge").data(data.edges).join("line")
  .attr("class", d => "edge-" + d.type)
  .attr("marker-end", d => d.type === "chain" ? "url(#arrow)" : null);

const node = g.selectAll("g.node").data(data.nodes).join("g").attr("class","node")
  .call(d3.drag().on("start", (e,d) => { if(!e.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
    .on("drag", (e,d) => { d.fx=e.x; d.fy=e.y; })
    .on("end", (e,d) => { if(!e.active) sim.alphaTarget(0); d.fx=null; d.fy=null; }));

node.each(function(d) {
  const el = d3.select(this);
  if (d.type === "hidden") {
    el.append("rect").attr("width",14).attr("height",14).attr("x",-7).attr("y",-7)
      .attr("rx",3).attr("fill","#4a9").attr("opacity",0.8);
  } else {
    el.append("circle").attr("r",6).attr("fill", colors(d.file)).attr("stroke","#fff").attr("stroke-width",0.5).attr("opacity",0.85);
  }
});

node.append("text").attr("class","label").attr("dx",10).attr("dy",3)
  .text(d => d.type === "hidden" ? d.id.replace("hidden:","") : d.id);

node.on("click", (e, d) => {
  const info = document.getElementById("info");
  if (d.type === "hidden") {
    const key = d.id.replace("hidden:", "");
    const writers = data.edges.filter(e => e.type === "writes" && e.target === d.id).map(e => e.source);
    const readers = data.edges.filter(e => e.type === "reads" && e.source === d.id).map(e => e.target);
    info.innerHTML = '<h2>' + key + '</h2>' +
      '<div class="speaker">Hidden State Variable</div>' +
      '<div class="effects">Writers: ' + (writers.join(", ") || "none") + '</div>' +
      '<div class="effects">Readers: ' + (readers.join(", ") || "none") + '</div>';
  } else {
    info.innerHTML = '<h2>' + d.id + '</h2>' +
      '<div class="speaker">' + (d.speaker||"") + '</div>' +
      '<div class="text">' + (d.text||"") + '</div>' +
      '<div class="effects">' + (d.effects||"") + '</div>' +
      '<div class="file">' + (d.file||"") + '.ts</div>';
  }
  link.attr("opacity", l => (l.source.id||l.source)===(d.id) || (l.target.id||l.target)===(d.id) ? 1 : 0.15);
  node.attr("opacity", n => {
    if (n.id === d.id) return 1;
    const connected = data.edges.some(e => {
      const s = e.source.id||e.source, t = e.target.id||e.target;
      return (s===d.id && t===n.id) || (t===d.id && s===n.id);
    });
    return connected ? 1 : 0.2;
  });
});

svg.on("click", (e) => {
  if (e.target === svg.node()) {
    link.attr("opacity", 1); node.attr("opacity", 1);
  }
});

sim.on("tick", () => {
  link.attr("x1",d=>d.source.x).attr("y1",d=>d.source.y).attr("x2",d=>d.target.x).attr("y2",d=>d.target.y);
  node.attr("transform",d=>\`translate(\${d.x},\${d.y})\`);
});
${CLOSE_SCRIPT}
</body>
</html>`;

const htmlFile = join(outDir, "cards-map.html");
writeFileSync(htmlFile, html);
console.log(`${gNodes.length} nodes, ${uniqueEdges.length} edges → ${htmlFile}`);
