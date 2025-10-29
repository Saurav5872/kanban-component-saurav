import "../src/index.css"; // ✅ Ensures Tailwind CSS is loaded
import type { Preview } from "@storybook/react";

// ✅ Add full-screen layout & background to better display Kanban UI
const preview: Preview = {
  parameters: {
    layout: "fullscreen", // ← this makes Storybook use full browser width
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f9fafb" },
        { name: "dark", value: "#1e1e1e" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
