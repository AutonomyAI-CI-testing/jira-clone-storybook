import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock, userMock1 } from "@domain/user";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    users: {
      defaultValue: usersMock,
      control: {
        type: "object",
      },
    },
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => {
            return {
              status: 200,
            };
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};

export const SingleUser: Story = {
  args: {
    users: [userMock1],
  },
};

export const AvatarFallbackUsers: Story = {
  args: {
    users: usersMock.filter((u) => !u.image),
  },
};

export const ManyUsers: Story = {
  args: {
    users: [
      ...usersMock,
      ...usersMock.map((u) => ({ ...u, id: u.id + "-2", name: u.name + " 2" })),
    ],
  },
};
