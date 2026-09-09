import type { Meta, StoryObj } from "@storybook/react";

import { IdealSpaceHero } from "./ideal-space-hero";

const meta: Meta<typeof IdealSpaceHero> = {
  title: "Components/IdealSpaceHero",
  component: IdealSpaceHero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof IdealSpaceHero>;

export const Default: Story = {};
