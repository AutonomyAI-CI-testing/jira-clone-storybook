import type { Meta, StoryObj } from "@storybook/react";

import McpRoute from "./mcp";

const meta: Meta<typeof McpRoute> = {
  title: "Routes/McpRoute",
  component: McpRoute,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof McpRoute>;

export const Default: Story = {};
