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
          Component: () => (
            <div style={{ paddingTop: "24px", paddingLeft: "24px" }}>
              <Story />
            </div>
          ),
          action: async () => {
            return {
              status: 200,
            };
          },
        },
      ]);

      return <RemixStub initialEntries={["/"]} />;
    },
  ],
  argTypes: {
    users: {
      defaultValue: usersMock,
      control: {
        type: "object",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};
