import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigTurbo from "eslint-config-turbo";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {},
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypeScript,
    },
    rules: {
      ...eslintConfigTurbo.rules,
      ...eslintPluginTypeScript.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];
