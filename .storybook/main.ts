import type { StorybookConfig } from "@storybook/react-vite";
import type { UserConfig } from "vite";

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
  async viteFinal(config: UserConfig) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            require("tailwindcss"),
            require("autoprefixer"),
          ],
        },
      },
    });
  },
};
export default config;
