import type { Meta, StoryObj } from "@storybook/react-vite";

import { LandingView } from "./landing.view";

const meta: Meta<typeof LandingView> = {
  title: "Landing/LandingView",
  component: LandingView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LandingView>;

export const Default: Story = {};
