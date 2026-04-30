import type { Meta, StoryObj } from "@storybook/react";
import { UiMagicianPanel } from "./ui-magician-panel";

const meta: Meta<typeof UiMagicianPanel> = {
  title: "Components/UiMagicianPanel",
  component: UiMagicianPanel,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0d0d0c" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof UiMagicianPanel>;

/**
 * Default state with both sections expanded.
 * Shows the full UI Magician panel with form inputs visible.
 */
export const Default: Story = {
  args: {},
};

/**
 * Story demonstrating the component with callbacks.
 * Sections collapse on toggle but start expanded by default.
 */
export const WithCallbacks: Story = {
  args: {
    onAwesome: () => {},
    onPrepare: () => {},
  },
};
