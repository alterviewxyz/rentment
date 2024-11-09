import React from "react";
import type { Preview } from "@storybook/react";
import "../src/App.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Optional: Add global decorators
export const decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <Story />
    </div>
  ),
];

export default preview;
