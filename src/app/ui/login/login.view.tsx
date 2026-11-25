import { useState } from "react";
import { Form, useNavigation } from "react-router";
import cx from "classix";
import { User, UserId } from "@domain/user/user";
import { userMock1 } from "@domain/user/user.mock";
import { UserAvatar } from "@app/components/user-avatar/user-avatar";
import * as Select from "@app/components/select/select";

/**
 * The page is a port of a supplied design, so it is painted from that design's
 * own palette — declared once in `app.css` under `.aai-signin` and read here
 * through `var(--cd-*)`, so no literal colour lands in a className.
 */
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

  return (
    <div className="aai-signin grid min-h-screen grid-cols-[1.05fr_0.95fr] bg-[color:var(--cd-ink-950)] font-primary-light text-[color:var(--cd-fg)] max-[920px]:grid-cols-1">
      <section className="aai-brand relative flex flex-col overflow-hidden border-r border-[color:var(--cd-ink-400)] bg-[color:var(--cd-ink-900)] p-[clamp(36px,4.5vw,64px)] max-[920px]:hidden">
        <Wordmark className="relative z-10" />

        <div className="relative z-10 my-auto max-w-[480px] py-12">
          <p className="mb-[22px] font-primary-bold text-[12px] uppercase tracking-[0.16em] text-[color:var(--cd-orange)]">
            Autonomous incident response
          </p>
          <h1 className="text-balance font-primary-black text-[length:clamp(32px,3.6vw,48px)] leading-[1.05] tracking-[-0.02em]">
            Your on-call engineer that{" "}
            <span className="bg-gradient-to-r from-[color:var(--cd-orange)] to-[color:var(--cd-orange-peach)] bg-clip-text text-transparent">
              never sleeps.
            </span>
          </h1>
          <p className="mt-[22px] max-w-[420px] text-[18px] leading-[1.55] text-[color:var(--cd-fg-muted)]">
            From first alert to merged fix — the agent triages, investigates,
            and ships the patch while your team stays asleep.
          </p>

          <div className="mt-10 flex flex-col">
            {pipeline.map((step) => (
              <div
                key={step.time}
                className="relative flex items-center gap-[14px] py-[11px] before:absolute before:bottom-[-1px] before:left-[5px] before:top-[22px] before:w-px before:bg-[color:var(--cd-ink-400)] before:content-[''] last:before:hidden"
              >
                <span
                  className={cx(
                    "relative z-10 h-[11px] w-[11px] flex-none rounded-full",
                    step.dot
                  )}
                />
                <span className="text-[12.5px] tracking-[0.02em] text-[color:var(--cd-fg-muted)]">
                  <b className="font-primary-bold text-[color:var(--cd-fg)]">
                    {step.title}
                  </b>{" "}
                  — {step.detail}
                </span>
                <span className="ml-auto text-[11px] text-[color:var(--cd-fg-faint)]">
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-[18px] text-[11px] tracking-[0.04em] text-[color:var(--cd-fg-faint)]">
          {brandFoot.map((item, index) => (
            <span key={item} className="flex items-center gap-[18px]">
              {index > 0 && (
                <span
                  className="h-1 w-1 rounded-full bg-[color:var(--cd-ink-300)]"
                  aria-hidden="true"
                />
              )}
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center bg-[color:var(--cd-ink-900)] p-[clamp(28px,5vw,64px)]">
        <div className="w-full max-w-[392px]">
          <Wordmark className="mb-[30px] hidden max-[920px]:flex" compact />

          <div className="mb-[30px]">
            <p className="mb-[14px] font-primary-bold text-[12px] uppercase tracking-[0.16em] text-[color:var(--cd-fg-faint)]">
              Sign in
            </p>
            <h2 className="font-primary-black text-[30px] leading-[1.1] tracking-[-0.02em]">
              Welcome back
            </h2>
            <p className="mt-[9px] text-[15px] leading-[1.5] text-[color:var(--cd-fg-muted)]">
              Pick up where the agent left off.
            </p>
          </div>

          <Form method="post" className="flex flex-col gap-4">
            <div>
              <span
                id="login-user-label"
                className="mb-[7px] block font-primary-bold text-[13px] text-[color:var(--cd-fg-muted)]"
              >
                Sign in as
              </span>
              <div className="rounded-lg border border-[color:var(--cd-ink-400)] bg-[color:var(--cd-ink-500)] transition-colors focus-within:border-[color:var(--cd-orange)]">
                <Select.Root
                  name="user"
                  defaultValue={userMock1.id}
                  onValueChange={onValueChange}
                >
                  <Select.Trigger
                    aria-labelledby="login-user-label"
                    className="w-full justify-between !bg-transparent px-[14px] py-3 text-[15px] !text-[color:var(--cd-fg)]"
                  >
                    <span className="flex items-center gap-2">
                      <UserAvatar {...selectedValue} size={24} />
                      <Select.Value />
                    </span>
                    <Select.TriggerIcon />
                  </Select.Trigger>
                  <Select.Content className="aai-signin rounded-lg border border-[color:var(--cd-ink-400)] !bg-[color:var(--cd-ink-700)] py-1 shadow-md">
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {users.map((user) => (
                        <Select.Item
                          key={user.id}
                          value={user.id}
                          className="!text-[color:var(--cd-fg)] hover:!bg-[color:var(--cd-ink-600)] focus:!bg-[color:var(--cd-ink-600)] active:!bg-[color:var(--cd-ink-700)]"
                        >
                          <Select.ItemIndicator />
                          <UserAvatar {...user} size={24} />
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

            <button
              type="submit"
              name="_action"
              value="setUser"
              disabled={isSubmitting}
              className="mt-1 flex w-full items-center justify-center gap-[9px] rounded-lg bg-[color:var(--cd-orange)] px-4 py-[13px] font-primary-bold text-[15px] text-white shadow-[var(--cd-glow)] transition hover:-translate-y-px hover:bg-[color:var(--cd-orange-bright)] active:translate-y-0 active:bg-[color:var(--cd-orange-deep)] disabled:cursor-wait disabled:bg-[color:var(--cd-orange-deep)]"
            >
              {isSubmitting && (
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-[rgba(255,255,255,0.4)] border-r-white"
                  aria-hidden="true"
                />
              )}
              <span className={cx(isSubmitting && "opacity-85")}>
                {isSubmitting ? "Signing in…" : "Sign in"}
              </span>
            </button>
          </Form>

          <p className="mt-[26px] text-center text-[13.5px] text-[color:var(--cd-fg-muted)]">
            There is no authentication involved. You can log in with any user
            you want, and you will only see the projects that user is a member
            of.
          </p>
        </div>
      </section>
    </div>
  );
};

const Wordmark = ({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) => (
  <div
    className={cx(
      "flex items-center gap-[11px] font-primary-black text-[19px] tracking-[-0.01em]",
      className
    )}
  >
    <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--cd-orange)] to-[color:var(--cd-orange-peach)] shadow-[var(--cd-glyph-glow)]">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="#fff"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    </span>
    <span>
      Autonomy<span className="text-[color:var(--cd-orange)]">AI</span>
    </span>
    {!compact && (
      <>
        <span
          className="mx-[3px] h-[18px] w-px bg-[color:var(--cd-ink-400)]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[14px] tracking-normal text-[color:var(--cd-fg-muted)]">
          On-Call Agent
        </span>
      </>
    )}
  </div>
);

const pipeline = [
  {
    title: "Alert received",
    detail: "latency spike, checkout-svc",
    time: "00:00",
    dot: "bg-[color:var(--cd-blue)] shadow-[0_0_0_4px_var(--cd-blue-ring)]",
  },
  {
    title: "Triaged & root-caused",
    detail: "connection pool exhausted",
    time: "00:02",
    dot: "bg-[color:var(--cd-warn)] shadow-[0_0_0_4px_var(--cd-warn-ring)]",
  },
  {
    title: "Fix merged",
    detail: "PR #1408, verified in staging",
    time: "00:09",
    dot: "bg-[color:var(--cd-ok)] shadow-[0_0_0_4px_var(--cd-ok-ring)]",
  },
];

const brandFoot = ["SOC 2 Type II", "Runs in your infra", "150+ teams on-call"];

interface Props {
  users: User[];
}
