import type { Meta, StoryObj } from "@storybook/react";
import FeiRoute from "./fei";

const meta: Meta<typeof FeiRoute> = {
  title: "Routes/FeiRoute",
  component: FeiRoute,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FeiRoute>;

export const Default: Story = {};
