import type { Meta, StoryObj } from "@storybook/react";

import { WelcomePage } from "./welcome-page";

const meta: Meta<typeof WelcomePage> = {
  title: "Components/WelcomePage",
  component: WelcomePage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WelcomePage>;

export const Default: Story = {};
