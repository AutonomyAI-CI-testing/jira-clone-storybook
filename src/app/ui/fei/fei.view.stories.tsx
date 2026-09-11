import type { Meta, StoryObj } from "@storybook/react";
import { FeiView } from "./fei.view";

const meta: Meta<typeof FeiView> = {
  title: "Pages/Fei",
  component: FeiView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeiView>;

export const Default: Story = {};
