import type { Meta, StoryObj } from "@storybook/react-vite";

import BlanFeiRoute from "./blan-fei";

const meta: Meta<typeof BlanFeiRoute> = {
  title: "Routes/BlanFei",
  component: BlanFeiRoute,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BlanFeiRoute>;

export const Default: Story = {};
