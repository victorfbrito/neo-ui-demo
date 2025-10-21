# Neo UI Demo

A modern React component library built with Tailwind CSS v4+ and TypeScript. Features dark mode, design tokens, and comprehensive Storybook documentation.

## 🚀 Features

- **Modern Stack**: Built with React 18+, TypeScript, and Tailwind CSS v4+
- **Design System**: Comprehensive design token system with dark mode support
- **Type Safe**: Full TypeScript support with exported types
- **Accessible**: Built with accessibility in mind
- **Tree Shakable**: Optimized bundle size with tree shaking
- **Storybook**: Comprehensive documentation and testing environment

## 📦 Installation

⚠️ **Important**: This library requires **Tailwind CSS** in your project.

### Step 1: Install the library

```bash
npm install @victorfbrito/neo-ui-demo
```

### Step 2: Install Tailwind CSS (if not already installed)

```bash
npm install -D tailwindcss@latest
```

### Step 3: Configure Tailwind to scan the library

<details>
<summary><strong>For Tailwind CSS v4</strong> (recommended)</summary>

In your main CSS file (e.g., `src/index.css` or `src/app.css`):

```css
@import "tailwindcss";

/* 👇 Add this to scan the component library */
@source "../node_modules/@victorfbrito/neo-ui-demo/dist";

/* Your other imports */
@import "@victorfbrito/neo-ui-demo/styles";
```

</details>

<details>
<summary><strong>For Tailwind CSS v3</strong></summary>

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 Required: Scan the component library
    "./node_modules/@victorfbrito/neo-ui-demo/dist/**/*.{js,mjs,cjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In your main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then import the library CSS in your main entry file:

```tsx
import '@victorfbrito/neo-ui-demo/styles';
```

</details>

### Step 4: Import the library CSS

**For Tailwind v4:** Already included in Step 3 above

**For Tailwind v3:** In your main entry file (`src/main.tsx`):

```tsx
import '@victorfbrito/neo-ui-demo/styles';
```

## 🎨 Usage

### Basic Example

```tsx
import { Button, Input, Typo } from '@victorfbrito/neo-ui-demo';

function App() {
  return (
    <div className="p-8">
      <Typo variant="headline-lg">Welcome to My UI Library</Typo>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

### Dark Mode

```tsx
// Enable dark mode
document.documentElement.classList.add('dark');

// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

## Why Tailwind CSS is Required

This library uses Tailwind utility classes directly in components (e.g., `gap-2`, `px-4`, `hover:bg-cyan-400`). Your build tool needs Tailwind to process these classes into actual CSS.

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-username/my-ui-lib/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        // ... other design tokens
      }
    }
  }
}
```

## 🧩 Components

### Button
```tsx
import { Button } from '@your-username/my-ui-lib';

<Button variant="primary" size="md">
  Click me
</Button>
```

### Input
```tsx
import { Input } from '@your-username/my-ui-lib';

<Input placeholder="Enter text" size="md" />
```

### Typography
```tsx
import { Typo } from '@your-username/my-ui-lib';

<Typo variant="headline-lg" bold="semibold">
  Heading Text
</Typo>
```

### Avatar
```tsx
import { Avatar, AvatarGroup } from '@your-username/my-ui-lib';

<AvatarGroup max={3}>
  <Avatar name="John Doe" src="/avatar.jpg" />
  <Avatar name="Jane Smith" />
</AvatarGroup>
```

### Autocomplete
```tsx
import { Autocomplete } from '@your-username/my-ui-lib';

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" }
];

<Autocomplete
  title="Select Option"
  options={options}
  selectedOption={selected}
  onSelect={setSelected}
/>
```

## 🎨 Design Tokens

The library uses a comprehensive design token system:

- **Colors**: Brand, semantic colors with dark mode support
- **Typography**: Poppins for headings, Roboto for body text
- **Spacing**: Consistent spacing scale
- **Border Radius**: Configurable border radius values
- **Shadows**: Subtle shadow system
- **Motion**: Consistent animation timing

## 📚 Documentation

Visit our [Storybook documentation](https://your-username.github.io/my-ui-lib) for:
- Interactive component playground
- Design system guidelines
- Usage examples
- Accessibility information

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Documented with [Storybook](https://storybook.js.org/)
- Bundled with [tsup](https://tsup.egoist.sh/)