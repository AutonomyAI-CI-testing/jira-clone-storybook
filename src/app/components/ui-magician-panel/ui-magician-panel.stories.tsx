import type { Meta, StoryObj } from "@storybook/react-vite";
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
    onAwesome: () => console.log("Awesome clicked"),
    onPrepare: () => console.log("Prepare clicked"),
  },
};

export const Collapsed: Story = {
  args: {
    onAwesome: () => console.log("Awesome clicked"),
    onPrepare: () => console.log("Prepare clicked"),
  },
};
