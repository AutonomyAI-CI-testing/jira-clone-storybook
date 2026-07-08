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
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div
        className="relative flex min-h-screen w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0d0221, #1a0533, #0a1628, #0d1b4b, #1b0a3b, #06103a)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 12s ease infinite",
        }}
      >
      {/* Background decorative blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#2d1b69] opacity-60 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-[#1a0f5e] opacity-80 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2b1a6b] opacity-40 blur-3xl" />
      </div>

      {/* Left panel — branding & avatar */}
      <div className="relative hidden flex-1 flex-col items-center justify-center lg:flex">
        {/* Glowing ring behind avatar */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[380px] w-[380px] animate-pulse rounded-full bg-gradient-to-br from-[#7b5ef7] via-[#a855f7] to-[#6366f1] opacity-20 blur-2xl" />
          <div className="relative z-10">
            <div
              className="overflow-hidden rounded-full"
              style={{
                width: 320,
                height: 320,
                background:
                  "linear-gradient(135deg, #4f8ef7 0%, #7c3aed 50%, #06b6d4 100%)",
                padding: 4,
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src="/images/login-avatar.png"
                  alt="Login mascot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline under avatar */}
        <p className="mt-8 text-center font-primary-bold text-2xl text-[#c7d1db]">
          Welcome back
        </p>
        <p className="mt-1 text-center font-primary-light text-sm text-[#596773]">
          Your projects are waiting for you
        </p>
      </div>

      {/* Right panel — login form */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-8">
        {/* Glass card */}
        <div
          className="w-full max-w-[400px] rounded-2xl border border-[#2c333a] p-10"
          style={{
            background: "rgba(15,10,30,0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Logo / App name */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#7c3aed]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-primary-bold text-xl text-[#dee4ea]">
              Jira Clone
            </span>
          </div>

          <h1 className="font-primary-black text-3xl text-[#dee4ea]">
            Sign in
          </h1>
          <p className="mb-8 mt-2 font-primary-light text-sm text-[#738496]">
            No password needed — select your profile and go.
          </p>

          {/* Mobile-only avatar */}
          <div className="mb-6 flex justify-center lg:hidden">
            <div
              className="overflow-hidden rounded-full"
              style={{
                width: 96,
                height: 96,
                background:
                  "linear-gradient(135deg, #4f8ef7 0%, #7c3aed 50%, #06b6d4 100%)",
                padding: 3,
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src="/images/login-avatar.png"
                  alt="Login mascot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <Form method="post" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-primary text-sm text-[#8c9bab]">
                Select your profile
              </label>
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  className="flex w-full justify-between rounded-lg border border-[#38414a] bg-[#22272b] px-3 py-2.5 text-[#dee4ea] transition-colors hover:border-[#4f8ef7] hover:bg-[#282e33]"
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

            <Button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login"
              size="lg"
              className="mt-2 w-full"
            >
              Sign in →
            </Button>
          </Form>

          <p className="mt-6 text-center font-primary-light text-xs text-[#596773]">
            You can switch users anytime from your avatar menu.
          </p>
        </div>

        {/* Bottom hint */}
        <p className="mt-6 text-center font-primary-light text-xs text-[#454f59]">
          Try different users to explore their projects and issues
        </p>
      </div>
    </div>
    </>
  );
};

interface Props {
  users: User[];
}
