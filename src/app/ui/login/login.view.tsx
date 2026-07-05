import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";
import { FormSection } from "@app/components/form-section";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const [isLoading, setIsLoading] = useState(false);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-stretch">
      {/* Brand Panel - Hidden on mobile */}
      <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 p-12 lg:flex">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
              ◆
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-orange-500">AutonomyAI</span>
              <span className="text-xs text-font-subtlest">On-Call Agent</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-wider text-font-subtlest font-semibold">
              Intelligent On-Call Management
            </p>
            <h1 className="text-4xl font-bold text-font leading-tight">
              Your AI-powered
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                on-call assistant
              </span>
            </h1>
            <p className="text-font-subtle text-base leading-relaxed">
              Streamline incident management, automate escalations, and keep your
              team connected with intelligent routing and real-time updates.
            </p>
          </div>
        </div>

        {/* Pipeline Visualization */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-font-subtlest font-semibold">
            Status Pipeline
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-font">Active incidents: 2</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-font">Alerts waiting: 5</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-font">Team members: 12</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-font-subtlest">
          <p>Trusted by leading teams worldwide</p>
        </div>
      </div>

      {/* Auth Panel */}
      <div className="flex w-full flex-col items-center justify-center p-6 lg:w-1/2">
        {/* Mobile Logo */}
        <div className="mb-12 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
              ◆
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-orange-500">AutonomyAI</span>
              <span className="text-xs text-font-subtlest">On-Call Agent</span>
            </div>
          </div>
        </div>

        <FormSection className="w-full max-w-md">
          <div className="space-y-8">
            {/* Sign In Heading */}
            <div>
              <h2 className="text-2xl font-bold text-font">Sign in</h2>
              <p className="mt-2 text-sm text-font-subtle">
                Choose a user to continue (demo mode)
              </p>
            </div>

            {/* Form */}
            <Form method="post" className="space-y-6">
              {/* User Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-font">User</label>
                <Select.Root
                  name="user"
                  defaultValue={userMock1.id}
                  onValueChange={onValueChange}
                >
                  <Select.Trigger
                    className="flex w-full justify-between rounded px-4 py-3 bg-slate-800 border border-slate-700 hover:bg-slate-800/80 transition-colors"
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

              {/* Sign In Button */}
              <Button
                type="submit"
                name="_action"
                value="setUser"
                color="primary"
                variant="contained"
                size="lg"
                isLoading={isLoading}
                className="w-full"
                onMouseDown={() => setTimeout(() => setIsLoading(false), 1500)}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </Form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-900 px-2 text-font-subtlest">or</span>
              </div>
            </div>

            {/* New User Link */}
            <div className="text-center">
              <p className="text-sm text-font-subtle">
                No account yet?{" "}
                <a href="#" className="text-orange-500 hover:text-orange-400 font-medium transition-colors">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </FormSection>

        {/* Security Badge */}
        <div className="mt-8 flex items-center gap-2 text-xs text-font-subtlest">
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Your data is encrypted and secure</span>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
