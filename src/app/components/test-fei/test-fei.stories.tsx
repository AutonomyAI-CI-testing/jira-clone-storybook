import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestFei } from "./test-fei";

const meta: Meta<typeof TestFei> = {
  title: "Components/TestFei",
  component: TestFei,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TestFei>;

export const Default: Story = {};
