import type { Meta, StoryObj } from "@storybook/react-vite";
import TestCard from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
