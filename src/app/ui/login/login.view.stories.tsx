import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";

const withRemixStub = (Story: React.ComponentType) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
      action: async () => ({ status: 200 }),
    },
  ]);
  return <RemixStub />;
};

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRemixStub],
  args: {
    users: usersMock,
  },
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Default idle state — both panels visible, form ready for input */
export const Default: Story = {};

/** Submit button in loading / signing-in state */
export const Loading: Story = {
  args: {
    forceLoading: true,
  },
};

/** Password field toggled to plaintext */
export const PasswordRevealed: Story = {
  args: {
    forcePasswordRevealed: true,
  },
};

/** Mobile viewport (≤920px) — brand panel is hidden, compact wordmark shown */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/** Form fields with validation error styling */
export const WithError: Story = {
  args: {
    showError: true,
  },
};

export const Mobile: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const SingleUser: Story = {
  args: {
    users: usersMock.slice(0, 1),
  },
};
