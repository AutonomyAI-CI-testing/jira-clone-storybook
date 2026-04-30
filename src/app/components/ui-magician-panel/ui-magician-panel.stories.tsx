import type { Meta, StoryObj } from "@storybook/react";

import { UiMagicianPanel } from "./ui-magician-panel";

const meta: Meta<typeof UiMagicianPanel> = {
  title: "Components/UiMagicianPanel",
  component: UiMagicianPanel,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#0f0f0f",
        },
      ],
    },
  },
  argTypes: {
    onAwesome: { action: "awesome clicked" },
    onPrepare: { action: "prepare clicked" },
    className: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UiMagicianPanel>;

export const Default: Story = {
  args: {},
};

export const WithHandlers: Story = {
  args: {
    onAwesome: () => console.log("Awesome clicked"),
    onPrepare: () => console.log("Prepare clicked"),
  },
};
