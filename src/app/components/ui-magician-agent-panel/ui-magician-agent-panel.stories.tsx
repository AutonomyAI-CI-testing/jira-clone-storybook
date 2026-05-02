import type { Meta, StoryObj } from "@storybook/react";
import { UIMagicianAgentPanel } from "./ui-magician-agent-panel";

const meta: Meta<typeof UIMagicianAgentPanel> = {
  title: "Components/UIMagicianAgentPanel",
  component: UIMagicianAgentPanel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onAwesome: { action: "onAwesome" },
    onPrepare: { action: "onPrepare" },
    onSettingsClick: { action: "onSettingsClick" },
  },
};

export default meta;
type Story = StoryObj<typeof UIMagicianAgentPanel>;

export const Default: Story = {
  args: {
    defaultToken: "",
    defaultUrl: "",
  },
};

export const WithDefaultValues: Story = {
  args: {
    defaultToken: "figd_xxxxxxxxxxxxx",
    defaultUrl: "https://www.figma.com/file/abc123/My-Design",
  },
};
