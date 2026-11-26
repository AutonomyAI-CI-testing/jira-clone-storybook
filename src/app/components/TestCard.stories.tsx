import type { Meta, StoryObj } from "@storybook/react-vite";

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

/**
 * The Figma frame is a dark panel, so the story wraps the card in the repo's
 * `dark` theme class. TestCard itself only reads semantic tokens and stays
 * theme-agnostic.
 */
export const Default: Story = {
  render: () => (
    <div className="dark bg-elevation-surface p-6">
      <TestCard />
    </div>
  ),
};
