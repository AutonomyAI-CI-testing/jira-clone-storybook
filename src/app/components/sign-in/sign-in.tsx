import React, { useState } from "react";
import { Form } from "@remix-run/react";
import * as Select from "@app/components/select";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";
import { User, usersMock } from "@domain/user";

interface Props {
  users: User[];
}

export const SignIn = ({ users = usersMock }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User>(users[0] || usersMock[0]);

  return (
    <div className="mx-auto max-w-[400px] flex flex-col items-center pt-[10vh]">
      <img src="/images/logo.png" alt="Jira Clone Logo" className="w-[48px] mb-6" />
      <h1 className="font-primary-black text-3xl text-font mb-2 text-center">
        Select login user
      </h1>
      <p className="font-primary-light text-sm text-font-subtle text-center mb-8">
        There is no authentication involved. You can login with any user you want!
        Keep in mind you can only access the projects the user is member of.
      </p>
      <Form method="post" className="w-full">
        <Select.Root
          name="user"
          defaultValue={selectedUser.id}
          onValueChange={(value: string) => {
            const user = users.find((u) => u.id === value);
            if (user) {
              setSelectedUser(user);
            }
          }}
        >
          <Select.Trigger
            className="flex w-full justify-between"
            aria-label="Open user select"
          >
            <div className="flex items-center gap-2">
              <UserAvatar {...selectedUser} />
              <Select.Value />
            </div>
            <Select.TriggerIcon />
          </Select.Trigger>
          <Select.Content>
            <Select.Viewport>
              {users.map((user, index) => (
                <Select.Item key={index} value={user.id}>
                  <Select.ItemIndicator />
                  <UserAvatar {...user} />
                  <Select.ItemText>{user.name}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
        <Button
          type="submit"
          name="_action"
          value="setUser"
          className="w-full mt-4"
          aria-label="Login"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
