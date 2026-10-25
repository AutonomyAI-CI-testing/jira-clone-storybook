import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

/**
 * The frame is a dark panel, so the story renders the card inside the app's
 * `dark` theme scope instead of the preview's default light one.
 */
export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        className="dark flex w-full items-start justify-center bg-elevation-surface p-8"
        style={{ minHeight: "100vh" }}
      >
        <Story />
      </div>
    ),
  ],
};
