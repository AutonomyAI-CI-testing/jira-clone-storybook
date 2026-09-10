import type { Meta, StoryObj } from "@storybook/react";
import { PlanFeiView } from "./plan-fei.view";

const meta: Meta<typeof PlanFeiView> = {
  title: "Pages/PlanFei",
  component: PlanFeiView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PlanFeiView>;

export const Default: Story = {};
