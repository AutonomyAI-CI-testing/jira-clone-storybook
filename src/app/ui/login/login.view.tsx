import { useState } from "react";
import { Form, useNavigation } from "react-router";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { User, UserId } from "@domain/user/user";
import { userMock1 } from "@domain/user/user.mock";
import { Button } from "@app/components/button/button";
import { UserAvatar } from "@app/components/user-avatar/user-avatar";
import * as Select from "@app/components/select/select";
import { BrandPanel, Wordmark } from "./brand-panel";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  // Sign-up and single sign-on are outside this demo, and the app says so
  // rather than leaving a control that silently does nothing.
  const onUnavailable = () =>
    toast.info("This section is not available yet.", {
      // A toast is portalled to <body>, outside this surface, so its palette
      // travels with the toast element itself.
      className: "login-surface login-surface-toast",
    });

  return (
    <div className="login-surface login-surface-grain relative grid min-h-screen grid-cols-1 bg-[var(--Ink950)] text-font lg:grid-cols-[1.05fr_0.95fr]">
      <BrandPanel />

      <section className="flex items-center justify-center bg-[var(--Ink900)] p-[clamp(28px,5vw,64px)]">
        <div className="w-full max-w-[392px]">
          <div className="mb-[30px] lg:hidden">
            <Wordmark compact />
          </div>

          <div className="mb-[30px]">
            <p className="mb-3.5 font-primary-light text-xs uppercase tracking-[0.16em] text-font-subtlest">
              Sign in
            </p>
            <h1 className="font-primary-black text-[30px] leading-[1.1] tracking-[-0.02em] text-font-danger">
              Select login user
            </h1>
            <p className="mt-[9px] font-primary-light text-[15px] leading-[1.5] text-font-subtle">
              There is no authentication involved — pick any user to continue.
              You only see the projects they are a member of, and you can
              switch later from the avatar menu.
            </p>
          </div>

          <div className="mb-[22px] flex flex-col gap-2.5">
            <SsoButton
              label="Continue with GitHub"
              icon={<FaGithub size={17} />}
              onClick={onUnavailable}
            />
            <SsoButton
              label="Continue with Google"
              icon={<FcGoogle size={17} />}
              onClick={onUnavailable}
            />
          </div>

          <div className="mb-[22px] flex items-center gap-3.5 text-font-subtlest">
            <span className="h-px flex-1 bg-border" />
            <span className="font-primary-light text-[11px] uppercase tracking-[0.14em]">
              or
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <Form method="post" className="flex flex-col gap-4">
            <div>
              <span
                id="login-user-label"
                className="mb-[7px] block font-primary text-[13px] text-font-subtle"
              >
                User
              </span>
              <div className="flex items-center rounded-[8px] border border-border bg-[var(--Ink500)] px-[14px] py-3 focus-within:border-border-brand focus-within:ring-[3px] focus-within:ring-[color:var(--AaiOrangeHaloA)]">
                <Select.Root
                  name="user"
                  defaultValue={userMock1.id}
                  onValueChange={onValueChange}
                >
                  <Select.Trigger
                    className="w-full justify-between px-[0px] py-[0px]"
                    aria-labelledby="login-user-label"
                  >
                    <div className="flex items-center gap-2 font-primary">
                      <UserAvatar {...selectedValue} />
                      <Select.Value />
                    </div>
                    <Select.TriggerIcon />
                  </Select.Trigger>
                  <Select.Content className="login-surface">
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
              </div>
            </div>

            <label className="relative mt-0.5 flex cursor-pointer select-none items-center gap-[9px] font-primary-light text-[13.5px] text-font-subtle">
              <input
                type="checkbox"
                name="remember"
                value="true"
                defaultChecked
                className="peer absolute size-0 opacity-0"
              />
              <span className="flex size-[17px] shrink-0 items-center justify-center rounded-[5px] border border-[var(--Ink300)] bg-[var(--Ink500)] text-transparent transition-colors peer-checked:border-[var(--AaiOrange)] peer-checked:bg-[var(--AaiOrange)] peer-checked:text-[var(--Neutral0)] peer-focus-visible:ring-[3px] peer-focus-visible:ring-[color:var(--AaiOrangeHaloA)]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-[11px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5 10 17l9-10" />
                </svg>
              </span>
              Keep me signed in
            </label>

            <Button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login"
              disabled={isSubmitting}
              className="mt-1 w-full rounded-[8px] px-[16px] py-[13px] font-primary-bold text-[15px] shadow-[var(--AaiOrangeGlow)] transition-transform hover:-translate-y-px active:translate-y-0"
            >
              {isSubmitting ? "Signing in…" : "Login"}
            </Button>
          </Form>

          <p className="mt-[26px] text-center font-primary-light text-[13.5px] text-font-subtle">
            New to the On-Call Agent?{" "}
            <button
              type="button"
              onClick={onUnavailable}
              className="cursor-pointer font-primary text-[var(--AaiOrange)] hover:underline"
            >
              Request access
            </button>
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 font-primary-light text-[11px] tracking-[0.05em] text-font-subtlest">
            <svg
              viewBox="0 0 24 24"
              className="size-[13px]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            <span>Encrypted &amp; SSO-ready</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const SsoButton = ({ label, icon, onClick }: SsoButtonProps): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[8px] border border-border bg-[var(--Ink700)] px-4 py-3 font-primary-bold text-sm text-font transition-colors hover:border-[var(--Ink300)] hover:bg-[var(--Ink600)]"
  >
    {icon}
    {label}
  </button>
);

interface Props {
  users: User[];
}

interface SsoButtonProps {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}
