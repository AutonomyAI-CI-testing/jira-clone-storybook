import type { Meta, StoryObj } from "@storybook/react";
import { FeiLanding } from "./fei-landing.view";

const meta: Meta<typeof FeiLanding> = {
  title: "Pages/FeiLanding",
  component: FeiLanding,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FeiLanding>;

export const Default: Story = {};
