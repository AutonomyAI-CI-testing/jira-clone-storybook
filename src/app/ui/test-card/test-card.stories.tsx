import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./test-card";

const meta: Meta<typeof TestCard> = {
  title: "UI/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#f5f5f5" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
