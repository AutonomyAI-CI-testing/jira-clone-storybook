import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1a1a1a" }],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px" }}>
        <div style={{ transform: "scale(2)", transformOrigin: "top center", marginBottom: "254px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
