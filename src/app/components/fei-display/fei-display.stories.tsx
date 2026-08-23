import type { Meta, StoryObj } from "@storybook/react";
import { FeiDisplay } from "./fei-display";

const meta: Meta<typeof FeiDisplay> = {
  title: "Components/FeiDisplay",
  component: FeiDisplay,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#ffffff" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeiDisplay>;

export const Default: Story = {};
