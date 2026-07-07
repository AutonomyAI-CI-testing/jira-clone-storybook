import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#1e1e1e", minHeight: "100vh", padding: "16px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
