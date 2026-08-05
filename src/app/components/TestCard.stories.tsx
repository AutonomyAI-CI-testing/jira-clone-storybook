import type { Meta, StoryObj } from "@storybook/react";

import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "padded",
    backgrounds: { default: "overlay" },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
