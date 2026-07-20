import type { Meta, StoryObj } from "@storybook/react";

import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1e1e1e" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {
  render: () => (
    <div style={{ backgroundColor: "#1e1e1e", minHeight: "100vh", padding: "0" }}>
      <TestCard />
    </div>
  ),
};
