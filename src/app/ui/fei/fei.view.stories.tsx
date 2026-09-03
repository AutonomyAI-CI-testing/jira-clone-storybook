import type { Meta, StoryObj } from "@storybook/react";

import { FeiView } from "./fei.view";

const meta: Meta<typeof FeiView> = {
  title: "Views/FeiView",
  component: FeiView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FeiView>;

export const Default: Story = {};
