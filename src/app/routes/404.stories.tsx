import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import NotFound404Route from "./404";

const meta: Meta<typeof NotFound404Route> = {
  title: "Pages/404 Not Found",
  component: NotFound404Route,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => ({ status: 200 }),
        },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof NotFound404Route>;

export const Default: Story = {};
