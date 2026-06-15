import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./test-card";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-[#1a1a1a] p-8">
      <div className="mx-auto w-full max-w-2xl">
        <TestCard />
      </div>
    </div>
  ),
};
