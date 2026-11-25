import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  // The panel's colours come from semantic tokens, which flip per theme; the
  // Figma frame is a dark surface, so the story renders in the dark theme.
  globals: {
    theme: "dark",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
