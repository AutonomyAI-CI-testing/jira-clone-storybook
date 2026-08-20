import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuildFeiView } from "./build-fei.view";

const meta: Meta<typeof BuildFeiView> = {
  title: "Pages/BuildFei",
  component: BuildFeiView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BuildFeiView>;

export const Default: Story = {};
