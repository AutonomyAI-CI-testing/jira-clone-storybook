import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = ({ isAuthenticated }: Props): JSX.Element => {
  const ctaHref = isAuthenticated ? "/projects" : "/login";
  const ctaLabel = isAuthenticated ? "Go to Projects" : "Get Started";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4">
      {/* Mascot */}
      <div className="animate-fade-in mb-8">
        <img
          src="/images/wizard-mascot.png"
          alt="Jira Clone wizard mascot"
          className="h-[280px] w-auto drop-shadow-lg"
        />
      </div>

      {/* Headline */}
      <h1 className="mb-4 text-center font-primary-black text-5xl leading-tight text-font-danger">
        Welcome to Jira Clone
      </h1>

      {/* Subheadline */}
      <p className="mb-2 max-w-[520px] text-center font-primary-light text-xl leading-relaxed text-font-subtle">
        A streamlined project management tool inspired by Jira.
        <br />
        Track issues, manage boards, and collaborate with your team.
      </p>

      <p className="mb-10 text-center font-primary-light text-sm text-font-subtlest">
        Built with Remix, React, TypeScript &amp; Tailwind CSS
      </p>

      {/* CTAs */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link to={ctaHref}>
          <Button color="primary" size="lg" className="min-w-[160px]">
            {ctaLabel}
          </Button>
        </Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            color="neutral"
            variant="subtlest"
            size="lg"
            className="min-w-[160px]"
          >
            View on GitHub
          </Button>
        </a>
      </div>

      {/* Feature pills */}
      <div className="mt-16 flex flex-wrap justify-center gap-3">
        {features.map((feature) => (
          <span
            key={feature}
            className="rounded-full bg-elevation-surface-raised px-4 py-2 font-primary text-sm text-font-subtle shadow-xs"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

interface Props {
  isAuthenticated: boolean;
}

const features = [
  "🗂️ Kanban Boards",
  "📋 Issue Tracking",
  "👥 Team Collaboration",
  "🎨 Multiple Themes",
  "💬 Comments",
  "🔒 User Sessions",
];
