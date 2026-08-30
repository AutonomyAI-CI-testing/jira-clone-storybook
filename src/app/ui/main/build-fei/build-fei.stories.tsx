import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuildFeiView } from "./build-fei.view";

const meta: Meta<typeof BuildFeiView> = {
  title: "Pages/BuildFei/BuildFeiView",
  component: BuildFeiView,
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
type Story = StoryObj<typeof BuildFeiView>;

export const Default: Story = {};
