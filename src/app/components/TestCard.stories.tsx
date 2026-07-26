import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {
  render: () => (
    <div className="bg-[#1a1c18] p-6">
      <TestCard />
    </div>
  ),
};
