import fs from "node:fs";
import path from "node:path";

/**
 * Build the distributable CSS file by resolving @import statements
 * This ensures consumers get a single, self-contained CSS file
 */

// Read the source files
const tokensCSS = fs.readFileSync("src/styles/tokens.css", "utf8");
const libraryCSS = fs.readFileSync("src/styles/library.css", "utf8");

// Replace the @import statement with the actual tokens content
const resolvedCSS = libraryCSS.replace(
  '@import "./tokens.css";',
  `/* Tokens (inlined from tokens.css) */\n${tokensCSS}\n`
);

// Ensure dist directory exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}

// Write the final CSS file
fs.writeFileSync("dist/styles.css", resolvedCSS);

console.log("✓ built dist/styles.css (with inlined tokens)");

