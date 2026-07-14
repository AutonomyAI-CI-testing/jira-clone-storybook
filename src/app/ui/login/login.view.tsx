import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex min-h-screen lg:grid lg:grid-cols-[1.05fr_0.95fr]">
      {/* ===================== LEFT BRAND PANEL ===================== */}
      <section className="hidden flex-col border-r border-border bg-elevation-surface-sunken p-10 lg:flex xl:p-16">
        {/* Top wordmark */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" width={28} height={28} alt="Jira Clone logo" />
          <span className="font-primary-bold text-base text-font">Jira Clone</span>
          <span className="h-[18px] w-px bg-border-bold" aria-hidden="true" />
          <span className="font-primary text-2xs text-font-subtlest">
            Project Management
          </span>
        </div>

        {/* Middle hero content */}
        <div className="my-auto max-w-[440px] py-12">
          <p className="mb-5 font-primary text-2xs uppercase text-font-brand">
            Project Management
          </p>
          <h1
            className="font-primary-black text-5xl text-font"
            style={{ lineHeight: 1.05 }}
          >
            Your issues,
            <br />
            <span className="text-font-brand">organized.</span>
          </h1>
          <p className="mt-5 max-w-[360px] font-primary-light text-base text-font-subtle leading-6">
            Create and track issues, collaborate with your team, and ship faster
            with a Jira-like experience powered by Remix.
          </p>

          {/* Feature highlight rows — adapted from reference pipeline pattern */}
          <div className="mt-8 flex flex-col">
            {/* Row 1 — blue dot */}
            <div className="flex items-center gap-3 py-3">
              <span
                className="h-2 w-2 flex-shrink-0 rounded-full bg-background-info-bold"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-0.5">
                <span className="font-primary-bold text-sm text-font">
                  Create &amp; track issues
                </span>
                <span className="font-primary text-2xs text-font-subtlest">
                  Create, assign, and prioritize
                </span>
              </div>
            </div>
            {/* Row 2 — amber dot */}
            <div className="flex items-center gap-3 py-3">
              <span
                className="h-2 w-2 flex-shrink-0 rounded-full bg-background-warning-bold"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-0.5">
                <span className="font-primary-bold text-sm text-font">
                  Collaborate with your team
                </span>
                <span className="font-primary text-2xs text-font-subtlest">
                  Comments, assignments, avatars
                </span>
              </div>
            </div>
            {/* Row 3 — green dot */}
            <div className="flex items-center gap-3 py-3">
              <span
                className="h-2 w-2 flex-shrink-0 rounded-full bg-background-success-bold"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-0.5">
                <span className="font-primary-bold text-sm text-font">
                  Real-time project board
                </span>
                <span className="font-primary text-2xs text-font-subtlest">
                  Drag and drop Kanban workflow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tech stack footer */}
        <div className="flex items-center gap-2 font-primary text-2xs text-font-subtlest">
          <span>Remix</span>
          <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
          <span>Prisma</span>
          <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
          <span>Radix UI</span>
          <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
          <span>TypeScript</span>
        </div>
      </section>

      {/* ===================== RIGHT AUTH PANEL ===================== */}
      <section className="flex flex-1 items-center justify-center bg-elevation-surface p-8">
        <div className="w-full max-w-[380px]">
          {/* Mobile-only wordmark */}
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <img src="/images/logo.png" width={24} height={24} alt="Jira Clone logo" />
            <span className="font-primary-bold text-base text-font">Jira Clone</span>
          </div>

          {/* Header */}
          <p className="mb-2 font-primary-bold text-2xs uppercase text-font-subtlest">
            Sign in
          </p>
          <h2 className="mb-2 font-primary-black text-3xl text-font-danger">
            Welcome back
          </h2>
          <p className="mb-6 font-primary-light text-sm text-font-subtle leading-6">
            There is no authentication involved. You can login with any user you
            want! Keep in mind you can only access the projects the user is
            member of. Try to create issues and comments with different users to
            see how it reflects in the UI and database. You can logout on the
            user avatar.
          </p>

          {/* Form */}
          <Form method="post" className="flex flex-col gap-3">
            <Select.Root
              name="user"
              defaultValue={userMock1.id}
              onValueChange={onValueChange}
            >
              <Select.Trigger
                className="flex w-full justify-between"
                aria-label="Open user select"
              >
                <div className="flex items-center gap-2">
                  <UserAvatar {...selectedValue} />
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
                      <UserAvatar {...user} />
                      <Select.ItemText>{user.name}</Select.ItemText>
                    </Select.Item>
                  ))}
                  <Select.Separator />
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select.Root>
            <Button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login"
              className="mt-1 w-full"
            >
              Login
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

interface Props {
  users: User[];
}
