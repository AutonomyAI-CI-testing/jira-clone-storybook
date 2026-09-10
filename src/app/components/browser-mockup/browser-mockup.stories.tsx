import type { Meta, StoryObj } from "@storybook/react";
import { BrowserMockup } from "./browser-mockup";

const meta: Meta<typeof BrowserMockup> = {
  title: "Components/BrowserMockup",
  component: BrowserMockup,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BrowserMockup>;

export const Default: Story = {};
