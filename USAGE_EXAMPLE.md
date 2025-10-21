# Usage Example

## How Others Will Use Your Library

### Installation
```bash
npm install @victorfbrito/neo-ui-demo
```

### Basic Usage
```tsx
import { Button, Input, Typo, Avatar } from '@victorfbrito/neo-ui-demo';
import '@victorfbrito/neo-ui-demo/styles';

function App() {
  return (
    <div>
      <Typo variant="headline-lg">Welcome to My App</Typo>
      
      <Input 
        placeholder="Enter your email" 
        type="email" 
      />
      
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Get Started
      </Button>
      
      <Avatar name="John Doe" />
    </div>
  );
}
```

### With Dark Mode
```tsx
// Add this to enable dark mode
document.documentElement.classList.add('dark');

// Or toggle it
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};
```

### Advanced Example
```tsx
import { 
  Search, 
  Autocomplete, 
  Avatar, 
  AvatarGroup, 
  Chip 
} from '@victorfbrito/neo-ui-demo';
import '@victorfbrito/neo-ui-demo/styles';

function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="p-8">
      <Search
        options={users}
        onSearch={(query) => console.log(query)}
        onSelect={(user) => setSearchQuery(user.label)}
      />
      
      <AvatarGroup max={5}>
        <Avatar name="Alice" src="/alice.jpg" />
        <Avatar name="Bob" src="/bob.jpg" />
        <Avatar name="Charlie" />
        <Avatar name="David" />
        <Avatar name="Eve" />
        <Avatar name="Frank" />
      </AvatarGroup>
      
      <div className="flex gap-2">
        <Chip variant="success" icon="check" label="Active" />
        <Chip variant="warning" icon="schedule" label="Pending" />
        <Chip variant="error" icon="error" label="Failed" />
      </div>
    </div>
  );
}
```

## Test It Yourself!

Create a new React app and try it:

```bash
npx create-react-app my-test-app
cd my-test-app
npm install @victorfbrito/neo-ui-demo
```

Then edit `src/App.js`:
```jsx
import { Button, Typo } from '@victorfbrito/neo-ui-demo';
import '@victorfbrito/neo-ui-demo/styles';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Typo variant="headline-lg">It Works! 🎉</Typo>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;
```

Run it:
```bash
npm start
```

