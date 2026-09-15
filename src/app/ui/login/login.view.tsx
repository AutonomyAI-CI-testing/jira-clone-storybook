import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import * as Select from "@app/components/select";
import { UserAvatar } from "@app/components/user-avatar";
import cx from "classix";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const isDisabled = !email.trim() || !password.trim();

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-elevation-surface-sunken">
      {/* Card */}
      <div className="w-full max-w-[420px] rounded-lg border border-border bg-elevation-surface p-10 shadow-sm">
        {/* Logo */}
        <div className="mb-7 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-background-brand-bold">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 1.5L14.196 4.5V10.5L9 13.5L3.804 10.5V4.5L9 1.5Z"
                fill="white"
                fillOpacity="0.95"
              />
              <path
                d="M9 6L11.598 7.5V10.5L9 12L6.402 10.5V7.5L9 6Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <span className="font-primary-bold text-lg text-font">
            Jira Clone
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-primary-bold text-2xl text-font">
          Sign in to your account
        </h1>
        <p className="mb-7 mt-1.5 font-primary-light text-sm text-font-subtle">
          Welcome back — pick up where you left off.
        </p>

        <Form method="post">
          {/* User select (hidden field for actual auth) */}
          <Select.Root
            name="user"
            defaultValue={userMock1.id}
            onValueChange={onValueChange}
          >
            <input type="hidden" name="user" value={selectedValue.id} />
          </Select.Root>

          {/* Email field */}
          <div className="mb-3.5">
            <label
              htmlFor="login-email"
              className="mb-1 block text-xs font-medium text-font"
            >
              Email address
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cx(
                "block w-full rounded bg-background-input px-2.5 py-2 text-[0.9375rem] text-font",
                "outline outline-2 outline-border-input",
                "placeholder:font-primary-light placeholder:text-font-subtlest",
                "hover:bg-background-input-hovered",
                "focus:bg-background-input-pressed focus:outline-border-focused focus:shadow-blue",
                "transition-[outline-color,background-color] duration-100"
              )}
            />
          </div>

          {/* Password field */}
          <div className="mb-5">
            <div className="mb-1 flex items-baseline justify-between">
              <label
                htmlFor="login-password"
                className="text-xs font-medium text-font"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-link hover:text-link-pressed hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Forgot password?
              </a>
            </div>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={cx(
                "block w-full rounded bg-background-input px-2.5 py-2 text-[0.9375rem] text-font",
                "outline outline-2 outline-border-input",
                "placeholder:font-primary-light placeholder:text-font-subtlest",
                "hover:bg-background-input-hovered",
                "focus:bg-background-input-pressed focus:outline-border-focused focus:shadow-blue",
                "transition-[outline-color,background-color] duration-100"
              )}
            />
          </div>

          {/* Remember me */}
          <div className="mb-5 flex items-center gap-2">
            <button
              type="button"
              role="checkbox"
              aria-checked={rememberMe}
              id="login-remember"
              onClick={() => setRememberMe((v) => !v)}
              className={cx(
                "relative flex h-4 w-4 flex-shrink-0 cursor-pointer items-center justify-center rounded-sm border transition-colors duration-100",
                rememberMe
                  ? "border-background-brand-bold bg-background-brand-bold"
                  : "border-border-input bg-background-input hover:bg-background-input-hovered"
              )}
              aria-label="Remember me for 30 days"
            >
              {rememberMe && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <label
              htmlFor="login-remember"
              className="cursor-pointer select-none text-xs text-font-subtle"
              onClick={() => setRememberMe((v) => !v)}
            >
              Remember me for 30 days
            </label>
          </div>

          {/* Sign in button — enabled */}
          <Button
            type="submit"
            name="_action"
            value="setUser"
            aria-label="Sign in"
            disabled={isDisabled}
            className="w-full"
          >
            Sign in
          </Button>
        </Form>

        {/* Divider */}
        <div className="my-5 border-t border-border" />

        {/* Demo note */}
        <p className="text-center font-primary-light text-2xs text-font-subtlest">
          No real auth — select any user to explore the board.
        </p>
        <div className="mt-3">
          <Form method="post">
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
              color="neutral"
              variant="subtlest"
              className="mt-2 w-full"
            >
              Continue as selected user
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
