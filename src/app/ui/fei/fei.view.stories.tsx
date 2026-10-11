import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeiView } from "./fei.view";

const meta: Meta<typeof FeiView> = {
  title: "Pages/Fei",
  component: FeiView,
  parameters: {
    layout: "fullscreen",
  },
  // The view is a full-page surface (`h-full` on its root element). Storybook's
  // iframe root has no intrinsic height, so give it one here to reproduce the
  // full-page context the `/fei` route provides in the app.
  decorators: [
    (Story) => (
      <div className="h-screen w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeiView>;

export const Default: Story = {};
