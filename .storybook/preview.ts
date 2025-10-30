import "../src/index.css"; // ✅ TailwindCSS import
import type { Preview } from "@storybook/react";
import "../src/App.css"

const preview: Preview = {
  parameters: {
    layout: "fullscreen", // ✅ makes Storybook fill the full canvas width
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
