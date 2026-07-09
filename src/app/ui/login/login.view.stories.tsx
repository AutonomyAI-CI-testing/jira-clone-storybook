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

/** Default desktop view — both panels visible */
export const Default: Story = {
  args: {
    users: usersMock,
  },
};

/** Mobile viewport — brand panel hidden, compact wordmark shown above form */
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

/** Tablet viewport */
export const TabletView: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

/** Demo mode scrolled down to show the user-select section */
export const DemoMode: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    layout: "fullscreen",
  },
};
