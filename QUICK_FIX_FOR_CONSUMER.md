# ⚠️ IMPORTANT: Tailwind CSS Required!

## The Issue

The components render but have no styling because this library uses **Tailwind CSS utility classes** directly.

## The Solution (3 Steps)

### 1️⃣ Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 2️⃣ Configure `tailwind.config.js`

Add the library to the `content` array so Tailwind scans it:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 ADD THIS LINE
    "./node_modules/@victorfbrito/neo-ui-demo/dist/**/*.{js,mjs,cjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3️⃣ Import Tailwind in your CSS

In your `src/index.css` or `src/App.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4️⃣ Import the library CSS

In your `src/main.tsx` or `src/App.tsx`:

```tsx
import '@victorfbrito/neo-ui-demo/styles';
```

## Example Files

### `tailwind.config.js`
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@victorfbrito/neo-ui-demo/dist/**/*.{js,mjs,cjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `src/main.tsx`
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // ← Tailwind directives
import '@victorfbrito/neo-ui-demo/styles'  // ← Library tokens
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `src/App.tsx`
```tsx
import { Button, Input, Typo } from '@victorfbrito/neo-ui-demo'

function App() {
  return (
    <div className="p-8">
      <Typo variant="headline-lg">It Works! 🎉</Typo>
      <Input placeholder="Enter something..." />
      <Button variant="primary">Click Me</Button>
    </div>
  )
}

export default App
```

## ✅ That's It!

After these changes, restart your dev server:

```bash
npm run dev
```

Your components should now be fully styled! 🎨

