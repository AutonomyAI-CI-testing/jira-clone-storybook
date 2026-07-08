import { useState } from "react";
import { Form, useNavigation } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

interface AuthPanelProps {
  users: User[];
}

export const AuthPanel = ({ users }: AuthPanelProps) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  return (
    <section
      className="flex items-center justify-center"
      style={{
        background: "#121211",
        padding: "clamp(28px, 5vw, 64px)",
      }}
    >
      <div className="w-full max-w-[392px]">
        {/* Mobile wordmark — shown only on small screens */}
        <div
          className="mb-[30px] flex items-center gap-[11px] lg:hidden"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "-0.01em",
          }}
        >
          <span
            className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px]"
            style={{
              background: "linear-gradient(150deg, #F25730, #F69874)",
              boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width={16} height={16} stroke="#fff" fill="none" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </span>
          <span style={{ color: "#FFFFFF" }}>
            Jira<span style={{ color: "#F25730" }}>Clone</span>
          </span>
        </div>

        {/* Auth header */}
        <div className="mb-[30px]">
          <p
            className="m-0 mb-[14px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7C7A75",
            }}
          >
            Sign in
          </p>
          <h2
            className="m-0"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 30,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Welcome back
          </h2>
          <p
            className="mt-[9px]"
            style={{
              fontSize: 15,
              lineHeight: 1.5,
              color: "#B4B1AC",
              margin: "9px 0 0",
            }}
          >
            Pick a user to continue to your workspace.
          </p>
        </div>

        {/* SSO Buttons */}
        <div className="mb-[22px] flex flex-col gap-[10px]">
          <SsoButton
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17} aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
              </svg>
            }
            label="Continue with GitHub"
          />
          <SsoButton
            icon={
              <svg viewBox="0 0 48 48" width={17} height={17} aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
                <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z"/>
              </svg>
            }
            label="Continue with Google"
          />
        </div>

        {/* Divider */}
        <div
          className="mb-[22px] flex items-center gap-[14px]"
          style={{ color: "#7C7A75" }}
        >
          <span className="h-px flex-1" style={{ background: "#3C3B39" }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            or
          </span>
          <span className="h-px flex-1" style={{ background: "#3C3B39" }} />
        </div>

        {/* Login Form */}
        <Form method="post" className="flex flex-col gap-[16px]">
          {/* User select field */}
          <div>
            <label
              className="mb-[7px] block"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#B4B1AC",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Select user
            </label>
            <Select.Root
              name="user"
              defaultValue={userMock1.id}
              onValueChange={onValueChange}
            >
              <Select.Trigger
                className="flex w-full justify-between"
                style={{
                  background: "#333333",
                  border: "1px solid #3C3B39",
                  borderRadius: 8,
                  padding: "12px 14px",
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontFamily: "Poppins, sans-serif",
                  outline: "none",
                  width: "100%",
                }}
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
          </div>

          {/* Submit button */}
          <button
            type="submit"
            name="_action"
            value="setUser"
            aria-label="Login"
            disabled={isSubmitting}
            className="group mt-1 flex w-full cursor-pointer items-center justify-center gap-[9px] rounded-[8px] border-0 py-[13px] px-[16px] font-semibold transition-all duration-150"
            style={{
              background: "#F25730",
              color: "#FFFFFF",
              fontFamily: "Poppins, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22)",
              cursor: isSubmitting ? "wait" : "pointer",
              opacity: isSubmitting ? 0.85 : 1,
            }}
          >
            {isSubmitting && (
              <span
                className="h-4 w-4 rounded-full border-2 border-white/40 border-r-white"
                style={{ animation: "spin 0.65s linear infinite" }}
                aria-hidden="true"
              />
            )}
            <span>{isSubmitting ? "Signing in…" : "Sign in"}</span>
          </button>
        </Form>

        {/* Footer */}
        <div
          className="mt-7 flex items-center justify-center gap-2"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.05em",
            color: "#7C7A75",
          }}
        >
          <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          Demo mode &mdash; no real authentication
        </div>
      </div>

      {/* Keyframe for spinner */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

interface SsoButtonProps {
  icon: React.ReactNode;
  label: string;
}

const SsoButton = ({ icon, label }: SsoButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[8px] border py-[12px] px-[16px] font-semibold transition-all duration-[180ms]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        background: hovered ? "#2A2A28" : "#212120",
        color: "#FFFFFF",
        borderColor: hovered ? "#4A4946" : "#3C3B39",
      }}
    >
      {icon}
      {label}
    </button>
  );
};
