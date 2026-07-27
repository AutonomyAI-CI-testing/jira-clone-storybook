import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
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

export const Default: Story = {};
