import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Test Card",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  // The panel is a dark surface and the preview defaults to the light theme.
  globals: {
    theme: "dark",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
