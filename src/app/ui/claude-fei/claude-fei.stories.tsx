import type { Meta, StoryObj } from "@storybook/react";
import { ClaudeFeiView } from "./claude-fei.view";

const meta: Meta<typeof ClaudeFeiView> = {
  title: "Pages/ClaudeFeiView",
  component: ClaudeFeiView,
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
type Story = StoryObj<typeof ClaudeFeiView>;

export const Default: Story = {};
