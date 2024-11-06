import baseConfig from "./base.config.mjs";
import eslintPluginReact from "eslint-plugin-react";

export default [
  ...baseConfig,
  {
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
