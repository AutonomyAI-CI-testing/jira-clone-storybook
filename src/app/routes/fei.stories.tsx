import type { Meta, StoryObj } from "@storybook/react";
import FeiPage from "./fei";

const meta: Meta<typeof FeiPage> = {
  title: "Routes/FeiPage",
  component: FeiPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FeiPage>;

export const Default: Story = {};
