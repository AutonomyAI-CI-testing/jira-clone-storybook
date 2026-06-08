import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(
    users[0] ?? userMock1
  );

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  const hasUsers = users.length > 0;

  return (
    <div
      className={
        "flex min-h-screen items-center justify-center bg-elevation-surface-sunken"
      }
    >
      <div
        className={
          "w-[400px] rounded-md bg-elevation-surface py-10 px-8 shadow-overlay"
        }
      >
        {/* Header: Logo + App name */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            width={32}
            height={32}
            alt="Jira Clone Logo"
          />
          <span className="font-primary-bold text-base text-font">
            Jira Clone
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 font-primary-black text-2xl text-font">
          Sign in to your account
        </h1>

        {/* Subtitle */}
        <p className="mt-2 mb-6 font-primary-light text-sm text-font-subtle">
          There is no authentication involved. Pick any user and sign in! Keep
          in mind you can only access the projects the user is a member of. Try
          creating issues and comments with different users. You can sign out
          via the user avatar.
        </p>

        {/* Form */}
        <Form method="post">
          <label className="mb-1 block font-primary-bold text-xs text-font-subtle">
            Select user
          </label>
          <Select.Root
            name="user"
            defaultValue={hasUsers ? users[0].id : undefined}
            onValueChange={onValueChange}
          >
            <Select.Trigger
              className="flex w-full justify-between"
              aria-label="Open user select"
            >
              <div className="flex items-center gap-2">
                <UserAvatar {...selectedValue} size={20} />
                <Select.Value />
              </div>
              <Select.TriggerIcon />
            </Select.Trigger>
            <Select.Content>
              <Select.ScrollUpButton />
              <Select.Viewport>
                {users.map((user, index) => (
                  <Select.Item key={index} value={user.id}>
                    <Select.ItemIndicator />
                    <UserAvatar {...user} size={20} />
                    <Select.ItemText>{user.name}</Select.ItemText>
                  </Select.Item>
                ))}
                <Select.Separator />
              </Select.Viewport>
              <Select.ScrollDownButton />
            </Select.Content>
          </Select.Root>

          {!hasUsers && (
            <p className="mt-2 text-xs text-font-subtle">
              No users available.
            </p>
          )}

          <Button
            type="submit"
            name="_action"
            value="setUser"
            aria-label="Sign in"
            className="mt-4 w-full"
            disabled={!hasUsers}
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
