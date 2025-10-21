# ⚠️ IMPORTANT: Tailwind CSS Required!

## The Issue

The components render but have no styling because this library uses **Tailwind CSS utility classes** directly.

## The Solution (3 Steps)

### 1️⃣ Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 2️⃣ Configure Tailwind

#### **Using Tailwind CSS v4** (recommended)

In your `src/index.css` or `src/app.css`:

```css
@import "tailwindcss";

/* 👇 ADD THIS LINE to scan the component library */
@source "../node_modules/@victorfbrito/neo-ui-demo/dist";

/* 👇 ADD THIS LINE for library tokens and styles */
@import "@victorfbrito/neo-ui-demo/styles";
```

That's it for v4! No separate imports needed.

#### **Using Tailwind CSS v3**

Update your `tailwind.config.js`:

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

In your `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In your `src/main.tsx`:

```tsx
import '@victorfbrito/neo-ui-demo/styles';
```

## Complete Example Files

### **For Tailwind v4**

#### `src/index.css`
```css
@import "tailwindcss";
@source "../node_modules/@victorfbrito/neo-ui-demo/dist";
@import "@victorfbrito/neo-ui-demo/styles";
```

#### `src/main.tsx`
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // ← Tailwind + Library CSS
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

### **For Tailwind v3**

#### `tailwind.config.js`
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

#### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### `src/main.tsx`
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

