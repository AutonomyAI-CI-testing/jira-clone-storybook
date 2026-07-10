import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "375px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
