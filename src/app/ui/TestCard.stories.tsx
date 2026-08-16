import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta = {
  title: "UI/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
