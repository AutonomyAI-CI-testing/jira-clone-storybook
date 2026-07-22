import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-16">
      {/* Hero Section */}
      <div className="flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Logo + Brand */}
          <div className="mb-6 flex items-center gap-3">
            <img
              src="/images/logo.png"
              width={36}
              height={36}
              alt="Jira Clone Logo"
            />
            <span className="font-primary-bold text-xl text-font-brand">
              Jira Clone
            </span>
          </div>

          <h1 className="mb-4 font-primary-black text-5xl leading-tight text-font lg:text-6xl">
            <span className="text-red-500">Your projects,</span>
            <br />
            <span className="text-font-brand">beautifully managed.</span>
          </h1>

          <p className="mb-8 max-w-[480px] font-primary-light text-lg text-font-subtle">
            A streamlined project management tool inspired by Jira — track
            issues, manage boards, and collaborate with your team. No enterprise
            bloat, just the features that matter.
          </p>

          {/* Feature pills */}
          <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            {features.map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full bg-background-brand-subtlest px-4 py-2 font-primary text-sm text-font-brand"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href="/login">
              <Button size="lg" color="primary">
                Get started
              </Button>
            </a>
            <a
              href="https://github.com/daniserrano7/jira-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" color="neutral" variant="subtlest">
                View on GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Wizard mascot */}
        <div className="flex flex-shrink-0 animate-fade-in-up flex-col items-center [animation-delay:200ms]">
          <div className="relative">
            {/* Glow / decorative circle behind mascot */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background-brand-subtlest opacity-60" />
            <img
              src="/images/wizard-mascot.png"
              alt="Friendly wizard mascot"
              className="relative z-10 h-80 w-80 animate-mascot-float object-contain drop-shadow-xl [animation-delay:800ms]"
            />
          </div>
          <p className="mt-3 font-primary-light text-sm text-font-subtlest">
            ✨ Your friendly project guide
          </p>
        </div>
      </div>

      {/* Feature cards row */}
      <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {featureCards.map(({ title, description, emoji }) => (
          <div
            key={title}
            className="rounded-lg bg-elevation-surface-raised p-6 shadow-sm"
          >
            <div className="mb-3 text-3xl">{emoji}</div>
            <h3 className="mb-2 font-primary-bold text-base text-font">
              {title}
            </h3>
            <p className="font-primary-light text-sm text-font-subtle">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 font-primary-light text-sm text-font-subtlest">
        Built with Remix, React & TypeScript ·{" "}
        <a
          href="https://github.com/daniserrano7/jira-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-font-brand hover:underline"
        >
          Open source
        </a>
      </footer>
    </div>
  );
};

const features = [
  { icon: "📋", label: "Kanban boards" },
  { icon: "🐛", label: "Issue tracking" },
  { icon: "👥", label: "Team management" },
  { icon: "💬", label: "Comments" },
];

const featureCards = [
  {
    emoji: "🗂️",
    title: "Kanban Boards",
    description:
      "Visualise your workflow with drag-friendly boards. Move issues through TODO, IN PROGRESS, and DONE in a glance.",
  },
  {
    emoji: "🔍",
    title: "Issue Tracking",
    description:
      "Create, assign, and prioritise issues. Add descriptions, comments, and watch progress across your whole project.",
  },
  {
    emoji: "🎨",
    title: "Five Themes",
    description:
      "Switch between Light, Dark, Lava, Lime, and Barbie themes. The app adapts to your style and system preferences.",
  },
];
