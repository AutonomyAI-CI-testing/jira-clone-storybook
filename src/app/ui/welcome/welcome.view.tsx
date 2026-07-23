import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4">
      <div className="flex max-w-lg flex-col items-center text-center">
        {/* Wizard Mascot */}
        <div className="relative mb-6 animate-fade-in">
          <img
            src="/images/wizard-mascot.png"
            alt="Jira Clone Wizard Mascot"
            className="h-64 w-64 object-contain drop-shadow-lg"
          />
        </div>

        {/* Headline */}
        <h1 className="font-primary-black text-5xl leading-tight text-font">
          <span className="text-red-500">Welcome</span> to{" "}
          <span className="text-font-brand">Jira Clone</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 font-primary-light text-lg leading-relaxed text-font-subtle">
          A streamlined project management tool inspired by Jira. Manage issues,
          collaborate with your team, and track progress — without the enterprise
          complexity.
        </p>

        {/* Feature highlights */}
        <div className="mt-8 flex w-full flex-col gap-3 text-left">
          <FeatureItem
            icon="🗂️"
            title="Project Boards"
            description="Organize work in visual kanban-style boards"
          />
          <FeatureItem
            icon="✅"
            title="Issue Tracking"
            description="Create, assign, and prioritize issues with ease"
          />
          <FeatureItem
            icon="💬"
            title="Team Collaboration"
            description="Comment on issues and stay in sync with your team"
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/login" className="w-full sm:w-auto">
            <Button size="lg" color="primary" className="w-full sm:w-auto px-10">
              Get Started
            </Button>
          </Link>
          <Link to="/projects" className="w-full sm:w-auto">
            <Button size="lg" color="neutral" variant="subtlest" className="w-full sm:w-auto px-10">
              View Projects
            </Button>
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-8 font-primary-light text-sm text-font-subtlest">
          No account required — just pick a user and start exploring ✨
        </p>
      </div>
    </div>
  );
};

const FeatureItem = ({
  icon,
  title,
  description,
}: FeatureItemProps) => {
  return (
    <div className="flex items-start gap-4 rounded-md bg-elevation-surface-raised p-4 shadow-xs">
      <span className="text-2xl" role="img" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="font-primary-bold text-sm text-font">{title}</p>
        <p className="font-primary-light text-sm text-font-subtle">
          {description}
        </p>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}
