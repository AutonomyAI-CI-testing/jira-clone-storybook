import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "neutral",
      values: [{ name: "neutral", value: "#e5e5e5" }],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ background: "#e5e5e5", padding: "24px", display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
