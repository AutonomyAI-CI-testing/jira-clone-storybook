import type { Meta, StoryObj } from "@storybook/react";

import { TestCard } from "./test-card";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    // Center the card in the viewport for isolated component viewing
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {
  render: () => <TestCard />,
};
