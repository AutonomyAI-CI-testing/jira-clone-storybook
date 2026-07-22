import type { Meta, StoryObj } from "@storybook/react";
import TestCard from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  // UI magician Agent panel
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", background: "#1C1D17" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
