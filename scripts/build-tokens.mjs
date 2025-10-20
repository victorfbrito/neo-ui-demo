import fs from "node:fs";

const src = JSON.parse(fs.readFileSync("src/styles/tokens.json", "utf8"));

const lines = [];
lines.push("/* AUTO-GENERATED FROM tokens.json */");
lines.push("@theme {");
// Fonts
if (src.typography?.fontDisplay) lines.push(`  --font-display: ${src.typography.fontDisplay};`);
if (src.typography?.fontBody)    lines.push(`  --font-body: ${src.typography.fontBody};`);
// Keep Tailwind's --font-sans pointing at body by default (fallbacks included)
lines.push(`  --font-sans: ${src.typography?.fontSans ?? "var(--font-body, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif)"};`);
lines.push(`  --color-brand: ${src.colors.brand.default};`);
// Radii
if (src.radii) {
  for (const [k, v] of Object.entries(src.radii)) lines.push(`  --radius-${k}: ${v};`);
}
lines.push(`  --bg: ${src.colors.bg.default};`);
lines.push(`  --surface: ${src.colors.surface.default};`);
lines.push(`  --fg: ${src.colors.fg.default};`);
lines.push(`  --muted: ${src.colors.muted.default};`);
lines.push(`  --muted-fg: ${src.colors.mutedFg.default};`);
lines.push(`  --border: ${src.colors.border.default};`);
// Optional status colors
if (src.colors.success) lines.push(`  --success: ${src.colors.success.default};`);
if (src.colors.warning) lines.push(`  --warning: ${src.colors.warning.default};`);
if (src.colors.destructive) lines.push(`  --destructive: ${src.colors.destructive.default};`);
if (src.colors.info) lines.push(`  --info: ${src.colors.info.default};`);
lines.push("}");

// Also emit defaults to :root to ensure runtime variables exist
lines.push("");
lines.push(":root {");
lines.push(`  --font-display: ${src.typography?.fontDisplay ?? ""};`);
lines.push(`  --font-body: ${src.typography?.fontBody ?? ""};`);
lines.push(`  --font-sans: ${src.typography?.fontSans ?? "var(--font-body, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif)"};`);
lines.push(`  --color-brand: ${src.colors.brand.default};`);
lines.push(`  --radius-sm: ${src.radii?.sm ?? ""};`);
lines.push(`  --radius-md: ${src.radii?.md ?? ""};`);
lines.push(`  --radius-lg: ${src.radii?.lg ?? ""};`);
lines.push(`  --radius-xl: ${src.radii?.xl ?? ""};`);
lines.push(`  --radius-2xl: ${src.radii?.["2xl"] ?? ""};`);
lines.push(`  --bg: ${src.colors.bg.default};`);
lines.push(`  --surface: ${src.colors.surface.default};`);
lines.push(`  --fg: ${src.colors.fg.default};`);
lines.push(`  --muted: ${src.colors.muted.default};`);
lines.push(`  --muted-fg: ${src.colors.mutedFg.default};`);
lines.push(`  --border: ${src.colors.border.default};`);
if (src.colors.success) lines.push(`  --success: ${src.colors.success.default};`);
if (src.colors.warning) lines.push(`  --warning: ${src.colors.warning.default};`);
if (src.colors.destructive) lines.push(`  --destructive: ${src.colors.destructive.default};`);
if (src.colors.info) lines.push(`  --info: ${src.colors.info.default};`);
lines.push("}");

if (src.colors.bg.dark) {
  lines.push("");
  lines.push(".dark {");
  lines.push("  color-scheme: dark;");
  lines.push(`  --bg: ${src.colors.bg.dark};`);
  lines.push(`  --surface: ${src.colors.surface.dark};`);
  lines.push(`  --fg: ${src.colors.fg.dark};`);
  lines.push(`  --muted: ${src.colors.muted.dark};`);
  lines.push(`  --muted-fg: ${src.colors.mutedFg.dark};`);
  lines.push(`  --border: ${src.colors.border.dark};`);
  if (src.colors.success?.dark)     lines.push(`  --success: ${src.colors.success.dark};`);
  if (src.colors.warning?.dark)     lines.push(`  --warning: ${src.colors.warning.dark};`);
  if (src.colors.destructive?.dark) lines.push(`  --destructive: ${src.colors.destructive.dark};`);
  if (src.colors.info?.dark)        lines.push(`  --info: ${src.colors.info.dark};`);
  lines.push("}");
}

if (src.shadow) {
  lines.push("");
  lines.push(":root {");
  for (const [k, v] of Object.entries(src.shadow)) lines.push(`  --shadow-${k}: ${v};`);
  lines.push("}");
}

if (src.motion) {
  lines.push("");
  lines.push(":root {");
  if (src.motion.fast) lines.push(`  --motion-fast: ${src.motion.fast};`);
  if (src.motion.base) lines.push(`  --motion-base: ${src.motion.base};`);
  if (src.motion.easingStandard) lines.push(`  --easing-standard: ${src.motion.easingStandard};`);
  lines.push("}");
}

fs.writeFileSync("src/styles/tokens.css", lines.join("\n"));
console.log("✓ wrote src/styles/tokens.css");


