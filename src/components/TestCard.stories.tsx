import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#111110" }],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ padding: "20px", background: "#111110", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "540px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
