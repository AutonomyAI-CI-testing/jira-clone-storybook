import type { StorybookConfig } from "@storybook/react-vite";

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
    // Stub out server-only modules so Prisma doesn't get bundled into the browser build
    config.plugins = [
      ...(config.plugins ?? []),
      {
        name: "stub-prisma",
        enforce: "pre" as const,
        resolveId(id: string) {
          if (
            id === "@prisma/client" ||
            id === "@infrastructure/db/db.server" ||
            id === "src/infrastructure/db/db.server"
          ) {
            return "\0stub-prisma";
          }
        },
        load(id: string) {
          if (id === "\0stub-prisma") {
            return "export const PrismaClient = class {}; export default {};";
          }
        },
      },
    ];
    return config;
  },
};

export default config;
