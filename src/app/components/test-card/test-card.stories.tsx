import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./test-card";

const meta = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
