import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";
import { LoginBrandPanel } from "./login-brand-panel";
import { LoginFormPanel } from "./login-form-panel";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
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
  args: {
    users: usersMock,
  },
};

export const BrandPanel: Story = {
  render: () => (
    <div style={{ background: "#121211", minHeight: "100vh", display: "flex" }}>
      <LoginBrandPanel />
    </div>
  ),
};

export const FormPanel: Story = {
  render: () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        element: (
          <div
            style={{
              background: "#121211",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoginFormPanel users={usersMock} />
          </div>
        ),
        action: async () => ({ status: 200 }),
      },
    ]);
    return <RemixStub />;
  },
  parameters: {
    layout: "fullscreen",
  },
};
