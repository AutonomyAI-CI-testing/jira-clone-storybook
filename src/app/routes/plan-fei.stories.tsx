import type { Meta, StoryObj } from "@storybook/react";

import PlanFeiRoute from "./plan-fei";

const meta: Meta<typeof PlanFeiRoute> = {
  title: "Routes/PlanFei",
  component: PlanFeiRoute,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PlanFeiRoute>;

export const Default: Story = {};
