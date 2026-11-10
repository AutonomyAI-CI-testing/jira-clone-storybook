import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

/**
 * Smoke-test story for the self-contained `TestCard` reproduction of the
 * "UI magician Agent" Figma panel. The panel paints its own dark ground, so it
 * is shown on a neutral surrounding background with no theme-specific styling.
 */
const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neutral",
      values: [{ name: "neutral", value: "#3a3a3a" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
