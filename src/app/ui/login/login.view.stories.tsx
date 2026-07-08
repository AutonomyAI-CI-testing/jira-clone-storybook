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
  argTypes: {
    users: {
      defaultValue: usersMock,
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

/** Default two-column desktop view */
export const Default: Story = {
  args: {
    users: usersMock,
    isLoading: false,
  },
};

/** Submit button in loading/signing-in state */
export const Loading: Story = {
  args: {
    users: usersMock,
    isLoading: true,
  },
};

/** Mobile viewport — brand panel hidden, compact wordmark shown */
export const Mobile: Story = {
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
