import type { Meta, StoryObj } from "@storybook/react";
import type { FC } from "react";

import BuildFeiRoute from "./build-fei";

const meta: Meta<typeof BuildFeiRoute> = {
  title: "Routes/BuildFei",
  component: BuildFeiRoute,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: FC) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BuildFeiRoute>;

export const Default: Story = {};
