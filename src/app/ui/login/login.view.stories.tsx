import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { LoginView } from "./login.view";

const mockUsers = [
  { id: "user-1", name: "Alice Johnson", email: "alice@autonomyai.io", avatarUrl: "" },
  { id: "user-2", name: "Bob Smith", email: "bob@autonomyai.io", avatarUrl: "" },
];

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
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Full desktop two-panel layout */
export const Default: Story = {
  args: {
    users: mockUsers,
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

/** Single-panel mobile view — brand panel hidden, auth card centered */
export const MobileView: Story = {
  args: {
    users: mockUsers,
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};

/** Submit button in spinner/disabled loading state */
export const LoadingState: Story = {
  args: {
    users: mockUsers,
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => {
            // Short delay so screenshot captures spinner, then resolves
            await new Promise((r) => setTimeout(r, 700));
            return { status: 200 };
          },
        },
      ]);
      return <RemixStub initialEntries={["/"]} />;
    },
  ],
};
