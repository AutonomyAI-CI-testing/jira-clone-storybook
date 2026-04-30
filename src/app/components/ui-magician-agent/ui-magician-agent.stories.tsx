import type { Meta, StoryObj } from "@storybook/react";

import { UiMagicianAgent } from "./ui-magician-agent";

const meta: Meta<typeof UiMagicianAgent> = {
  title: "Components/UiMagicianAgent",
  component: UiMagicianAgent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onAwesome: { action: "awesome clicked" },
    onPrepare: { action: "prepare clicked" },
    onSettingsClick: { action: "settings clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof UiMagicianAgent>;

export const Default: Story = {
  render: () => (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0d] p-8">
      <UiMagicianAgent />
    </div>
  ),
};

export const WithActions: Story = {
  render: (args: React.ComponentProps<typeof UiMagicianAgent>) => (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0d] p-8">
      <UiMagicianAgent {...args} />
    </div>
  ),
};
