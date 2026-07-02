import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

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
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    const path = await import("path");
    // Use the project's full tailwind config but extend content to include src/components
    const twConfig = require(path.resolve(__dirname, "../tailwind.config.js"));
    const extendedTwConfig = {
      ...twConfig,
      content: [
        ...twConfig.content,
        "./src/components/**/*.{js,ts,jsx,tsx}",
      ],
    };
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            tailwindcss(extendedTwConfig),
            autoprefixer(),
          ],
        },
      },
    });
  },
};
export default config;
