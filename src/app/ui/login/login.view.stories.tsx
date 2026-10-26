import type { Meta, StoryObj } from "@storybook/react-vite";
import { createRoutesStub } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { usersMock } from "@domain/user/user.mock";
import { Theme } from "@app/store/theme.store";
import { Toast } from "@app/components/toast/toast";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      // The sign-in surface is a full page rather than a centred block, so it
      // gets a desktop-sized viewport of its own instead of the story canvas.
      const RoutesStub = createRoutesStub([
        {
          path: "/",
          Component: () => (
            <div className="min-h-screen w-full min-w-[1024px]">
              <Story />
              <Toast theme={Theme.DARK} />
            </div>
          ),
          action: async () => ({ status: 200 }),
        },
      ]);

      return <RoutesStub />;
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
