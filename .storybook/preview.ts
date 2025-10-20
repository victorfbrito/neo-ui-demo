import "../src/styles/tailwind.css";
import type { Preview } from "@storybook/react";
import type { Decorator } from "@storybook/react";
import React from "react";

// Toolbar theme toggle (light/dark)
export const globalTypes = {
  theme: {
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      title: "Theme",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" }
      ],
      dynamicTitle: true
    }
  }
};

const withTheme: Decorator = (Story, context) => {
  const mode = context.globals.theme;
  
  // Create a wrapper that only affects the story content
  const StoryWrapper = () => {
    const [isDark, setIsDark] = React.useState(mode === "dark");
    
    React.useEffect(() => {
      setIsDark(mode === "dark");
    }, [mode]);
    
    return React.createElement(
      "div",
      {
        className: isDark ? "dark" : "",
        style: {
          backgroundColor: isDark ? "var(--bg)" : "var(--surface)",
          color: "var(--fg)",
          minHeight: "auto",
          padding: "1rem",
          borderRadius: "8px",
          overflow: "visible"
        }
      },
      React.createElement(Story)
    );
  };
  
  return React.createElement(StoryWrapper);
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true }
  },
  decorators: [withTheme]
};

export default preview;
