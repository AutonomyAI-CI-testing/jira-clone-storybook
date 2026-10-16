import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  // The card is drawn for a dark surface (bg-elevation-surface and friends),
  // so pin the theme to `dark` rather than relying on the toolbar default.
  globals: {
    theme: "dark",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
