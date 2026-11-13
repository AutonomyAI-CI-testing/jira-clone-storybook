import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "surface" },
  },
  globals: {
    theme: "dark",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
