# Neo UI Demo

A modern React component library built with Tailwind CSS v4 and TypeScript. Features dark mode, design tokens, and comprehensive Storybook documentation.

> ⚠️ **Requirements:** This library requires **Tailwind CSS v4** and **@tailwindcss/postcss** in your project. See installation steps below.

## 🚀 Features

- **Modern Stack**: Built with React 18+, TypeScript, and Tailwind CSS v4+
- **Design System**: Comprehensive design token system with dark mode support
- **Type Safe**: Full TypeScript support with exported types
- **Accessible**: Built with accessibility in mind
- **Tree Shakable**: Optimized bundle size with tree shaking
- **Storybook**: Comprehensive documentation and testing environment

## 📦 Installation

### Step 1: Install the library

```bash
npm install @victorfbrito/neo-ui-demo
```

### Step 2: Install Tailwind CSS v4

```bash
npm install -D tailwindcss@latest @tailwindcss/postcss
```

### Step 3: Configure PostCSS

Create `postcss.config.js` in your project root:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

### Step 4: Setup your CSS file

In your main CSS file (e.g., `src/index.css`):

```css
@import "tailwindcss";

/* 👇 Scan the component library */
@source "../node_modules/@victorfbrito/neo-ui-demo/dist";

/* 👇 Import library styles */
@import "@victorfbrito/neo-ui-demo/styles";
```

Then import this CSS in your `src/main.tsx`:

```tsx
import './index.css'
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

## Why Tailwind CSS v4 is Required

This library uses **Tailwind CSS v4** utility classes directly in components (e.g., `gap-2`, `px-4`, `hover:bg-cyan-400`). Your build tool needs Tailwind to process these classes into actual CSS.

**Note:** This library requires Tailwind v4+. If you're using Tailwind v3, please upgrade to v4.

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