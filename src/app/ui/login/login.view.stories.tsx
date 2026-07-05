import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
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
  title: "Pages/LoginView",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRemixStub],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Idle / default state — two-panel desktop layout */
export const Default: Story = {
  args: {
    users: [],
    isLoading: false,
  },
};

/** Submit button in loading / "Signing in…" state */
export const FormLoading: Story = {
  args: {
    users: [],
    isLoading: true,
  },
};

/** Single-column mobile layout at 480 px viewport */
export const MobileLayout: Story = {
  args: {
    users: [],
    isLoading: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    chromatic: { viewports: [480] },
  },
};
