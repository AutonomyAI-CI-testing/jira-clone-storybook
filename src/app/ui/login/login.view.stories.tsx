import type { Meta, StoryObj } from "@storybook/react";
import { usersMock, userMock1 } from "@domain/user";
import { withRemixStub } from "@app/stories/utils";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login/LoginView",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(<Story />)],
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
