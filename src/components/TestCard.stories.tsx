import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "neutral", value: "#3a3a3a" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
