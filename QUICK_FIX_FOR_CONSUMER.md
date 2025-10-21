# ⚠️ IMPORTANT: Tailwind CSS v4 Required!

## The Issue

The components render but have no styling because this library uses **Tailwind CSS v4 utility classes** directly.

## The Solution (3 Steps)

### 1️⃣ Install Tailwind CSS v4

```bash
npm install -D tailwindcss@latest @tailwindcss/postcss
```

### 2️⃣ Configure PostCSS

Create `postcss.config.js` in your project root:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

### 3️⃣ Setup your CSS file

In your `src/index.css`:

```css
@import "tailwindcss";

/* 👇 Scan the component library */
@source "../node_modules/@victorfbrito/neo-ui-demo/dist";

/* 👇 Import library styles */
@import "@victorfbrito/neo-ui-demo/styles";
```

Then import this CSS in `src/main.tsx`:

```tsx
import './index.css'
```

## Complete Example Files

### `postcss.config.js`
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

### `src/index.css`
```css
@import "tailwindcss";
@source "../node_modules/@victorfbrito/neo-ui-demo/dist";
@import "@victorfbrito/neo-ui-demo/styles";
```

### `src/main.tsx`
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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

