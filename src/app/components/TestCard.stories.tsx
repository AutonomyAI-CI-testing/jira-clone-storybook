import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neutral",
      values: [{ name: "neutral", value: "#f0f0f0" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#f0f0f0", padding: "2rem", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
