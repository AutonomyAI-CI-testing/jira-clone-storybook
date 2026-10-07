import type { Meta, StoryObj } from "@storybook/react";

import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 360, padding: 16 }}>
      <TestCard />
    </div>
  ),
};
