import type { Meta, StoryObj } from "@storybook/react";

import { TestCard } from "./test-card";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 320, minHeight: "100vh" }}>
      <TestCard />
    </div>
  ),
};
