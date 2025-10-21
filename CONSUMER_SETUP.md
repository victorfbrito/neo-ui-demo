# Consumer Setup Guide

## ⚠️ Important: Tailwind CSS Required

This component library uses **Tailwind CSS utility classes** directly in the components. Your project **MUST** have Tailwind CSS configured to use this library.

---

## 📦 Installation

### Step 1: Install the library

```bash
npm install @victorfbrito/neo-ui-demo
```

### Step 2: Install Tailwind CSS (if not already installed)

```bash
npm install -D tailwindcss@latest postcss autoprefixer
npx tailwindcss init
```

### Step 3: Configure Tailwind to scan the library

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 Add this line to scan the component library
    "./node_modules/@victorfbrito/neo-ui-demo/dist/**/*.{js,mjs,cjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4: Import the library CSS

In your main CSS file (e.g., `src/index.css` or `src/App.css`):

```css
@import '@victorfbrito/neo-ui-demo/styles';
```

Or in your main JS/TS file:

```tsx
import '@victorfbrito/neo-ui-demo/styles';
```

### Step 5: Use the components!

```tsx
import { Button, Input, Typo } from '@victorfbrito/neo-ui-demo';

function App() {
  return (
    <div className="p-8">
      <Typo variant="headline-lg">Welcome!</Typo>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

---

## 🌙 Dark Mode

Toggle dark mode by adding/removing the `dark` class to your root element:

```tsx
// Enable dark mode
document.documentElement.classList.add('dark');

// Disable dark mode
document.documentElement.classList.remove('dark');

// Toggle
document.documentElement.classList.toggle('dark');
```

---

## 🎨 Available Components

- `Button` - Interactive buttons with variants
- `Input` - Text input fields  
- `Typo` - Typography with design tokens
- `Avatar` & `AvatarGroup` - User avatars
- `Autocomplete` - Autocomplete input
- `Search` - Search with debouncing
- `Icon` - Material Symbols icons
- `Chip` - Tags and labels
- `Modal` - Dialog modals
- `Skeleton` - Loading placeholders

---

## 🐛 Troubleshooting

### Components have no styling

**Problem:** Components render but look unstyled.

**Solution:** Make sure you:
1. ✅ Imported the library CSS: `import '@victorfbrito/neo-ui-demo/styles'`
2. ✅ Added the library path to `tailwind.config.js` content array
3. ✅ Have Tailwind CSS installed and configured

### CSS custom properties not working

**Problem:** Colors/spacing look wrong.

**Solution:** Make sure the library CSS is imported **before** your app styles so the CSS custom properties are defined.

---

## 📚 Full Documentation

Visit the [Storybook documentation](https://victorfbrito.github.io/neo-ui-demo/) for interactive examples and API documentation.

