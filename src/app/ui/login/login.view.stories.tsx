import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => {
            return { status: 200 };
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Full two-panel desktop layout */
export const Default: Story = {
  args: {
    users: usersMock,
  },
};

/** Simulates a mobile viewport — brand panel hidden, single-column form */
export const MobileView: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
