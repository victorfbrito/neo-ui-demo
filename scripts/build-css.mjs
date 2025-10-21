import fs from "node:fs";

/**
 * Build the distributable CSS file with tokens and base styles
 * 
 * Note: This library uses Tailwind utility classes directly in components.
 * Consumers MUST have Tailwind CSS configured in their project.
 */

// Read tokens
const tokensCSS = fs.readFileSync("src/styles/tokens.css", "utf8");

// Create a minimal CSS file with just tokens and fonts
const distCSS = `/**
 * @victorfbrito/neo-ui-demo - Design Tokens & Base Styles
 * 
 * This file contains CSS custom properties (tokens) and font definitions.
 * 
 * ⚠️  IMPORTANT: This library requires Tailwind CSS in your project.
 * The components use Tailwind utility classes that must be processed by your build tool.
 * 
 * Setup for Tailwind v4 (recommended):
 * In your CSS file:
 *   @import "tailwindcss";
 *   @source "../node_modules/@victorfbrito/neo-ui-demo/dist";
 *   @import "@victorfbrito/neo-ui-demo/styles";
 * 
 * Setup for Tailwind v3:
 *   1. Add to tailwind.config.js content array:
 *      "./node_modules/@victorfbrito/neo-ui-demo/dist/**/*.{js,mjs,cjs}"
 *   2. Import in your app: import '@victorfbrito/neo-ui-demo/styles'
 * 
 * See: https://github.com/victorfbrito/neo-ui-demo#installation
 */

${tokensCSS}

/* Material Symbols Font */
@font-face {
  font-family: 'Material Symbols Rounded';
  font-style: normal;
  font-weight: 100 700;
  src: url(https://fonts.gstatic.com/s/materialsymbolsrounded/v272/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjzaqkNCeE.woff2) format('woff2');
  font-display: swap;
}

.material-symbols-rounded {
  font-family: 'Material Symbols Rounded';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  color: inherit;
}
`;

// Ensure dist directory exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}

// Write the final CSS
fs.writeFileSync("dist/styles.css", distCSS);

console.log("✓ built dist/styles.css (tokens + base styles)");

