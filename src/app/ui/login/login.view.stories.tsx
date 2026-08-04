import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";

// Reorder so Woody is first (usersMock index 1), followed by the rest of the Toy Story characters.
// Daniel Serrano (original index 0) is moved to the end as he's a non-character placeholder.
const toyStoryUsers = [
  usersMock[1], // Woody
  usersMock[2], // Buzz Lightyear
  usersMock[3], // Jessie
  usersMock[4], // Emperor Zurg
  usersMock[5], // Mr Potato
  usersMock[6], // Ms Potato
  usersMock[7], // Little Green Men
  usersMock[8], // T-Rex
  usersMock[9], // Andy Davis
  usersMock[0], // Daniel Serrano
];

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/**
 * Default sign-in screen with Woody as the initially selected user (first in list).
 * The dropdown lists all Toy Story characters: Woody, Buzz Lightyear, Jessie,
 * Emperor Zurg, Mr Potato, Ms Potato, Little Green Men, T-Rex, Andy Davis,
 * and Daniel Serrano.
 */
export const Default: Story = {
  render: () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        element: <LoginView users={toyStoryUsers} />,
        action: async () => ({ status: 200 }),
      },
    ]);
    return <RemixStub initialEntries={["/"]} />;
  },
};
