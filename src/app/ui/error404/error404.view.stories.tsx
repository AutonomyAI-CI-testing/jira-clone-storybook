import type { Meta, StoryObj } from "@storybook/react";

import { Error404View } from "./error404.view";

const meta: Meta<typeof Error404View> = {
  title: "Pages/Error404",
  component: Error404View,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Error404View>;

export const Default: Story = {};
