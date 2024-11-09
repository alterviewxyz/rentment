/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@rentment/eslint-config/web.config.mjs",
    "plugin:storybook/recommended",
  ],
};
