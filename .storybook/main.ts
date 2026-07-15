import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public/avatars", "../public/fonts", "../public/images"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            require("tailwindcss")({
              content: [
                "./src/app/**/*.{js,ts,jsx,tsx}",
                "./src/components/**/*.{js,ts,jsx,tsx}",
              ],
              darkMode: "class",
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              theme: require("../tailwind.config.js").theme,
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              plugins: require("../tailwind.config.js").plugins,
            }),
            require("autoprefixer"),
          ],
        },
      },
    });
  },
};
export default config;
