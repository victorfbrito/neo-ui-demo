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

```bash
npm install @your-username/my-ui-lib
```

## 🎨 Usage

### Basic Setup

```tsx
import { Button, Input, Typo } from '@your-username/my-ui-lib';
import '@your-username/my-ui-lib/styles';

function App() {
  return (
    <div>
      <Typo variant="headline-lg">Welcome to My UI Library</Typo>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

### Dark Mode

```tsx
// Add dark mode class to your root element
document.documentElement.classList.add('dark');
```

### Tailwind CSS Setup

If you're using Tailwind CSS in your project, you can extend the library's tokens:

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