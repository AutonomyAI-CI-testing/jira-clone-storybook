import type { Meta, StoryObj } from "@storybook/react";

import BuildFeiRoute from "./build-fei";

const meta: Meta<typeof BuildFeiRoute> = {
  title: "Routes/BuildFei",
  component: BuildFeiRoute,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BuildFeiRoute>;

export const Default: Story = {};
