import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { withRemixStub } from "@app/stories/utils";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story: () => JSX.Element) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};

export const FewUsers: Story = {
  args: {
    users: usersMock.slice(0, 4),
  },
};
