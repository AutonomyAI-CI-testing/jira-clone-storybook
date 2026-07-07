import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1c1d17" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ padding: "20px", background: "#1c1d17", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
