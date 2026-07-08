import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";
// Import CSS directly — Remix links() doesn't run in Storybook
import "./login.view.css";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    users: {
      control: { type: "object" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
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
type Story = StoryObj<typeof LoginView>;

/** Default desktop two-panel layout */
export const Default: Story = {
  args: {
    users: usersMock,
    isLoading: false,
  },
};

/** Mobile view — brand panel hidden, compact wordmark shown */
export const MobileView: Story = {
  args: {
    users: usersMock,
    isLoading: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/** Loading state — spinner active, button disabled */
export const LoadingState: Story = {
  args: {
    users: usersMock,
    isLoading: true,
  },
};
