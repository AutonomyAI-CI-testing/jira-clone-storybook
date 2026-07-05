/* eslint-disable @typescript-eslint/no-var-requires */
// Storybook-specific Tailwind config: extends the project config
// and re-adds standard gray colors (needed by TestCard)
const path = require("path");
const baseConfig = require("../tailwind.config");
const colors = require("tailwindcss/colors");
const root = path.resolve(__dirname, "..");

module.exports = {
  ...baseConfig,
  content: [
    path.join(root, "src/app/**/*.{js,ts,jsx,tsx}"),
    path.join(root, "src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    ...baseConfig.theme,
    colors: {
      ...baseConfig.theme.colors,
      gray: colors.gray,
      white: "white",
      transparent: "transparent",
    },
    extend: {
      ...(baseConfig.theme.extend || {}),
    },
  },
};
