import type { Meta, StoryObj } from "@storybook/react";
import { UiMagicianPanel } from "./ui-magician-panel";

const meta: Meta<typeof UiMagicianPanel> = {
  title: "Components/UiMagicianPanel",
  component: UiMagicianPanel,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UiMagicianPanel>;

export const Default: Story = {
  args: {
    onAwesome: () => {},
    onPrepare: () => {},
  },
};

export const Collapsed: Story = {
  args: {
    onAwesome: () => {},
    onPrepare: () => {},
  },
};
