import type { ReactNode } from "react";

/**
 * TestCard — a static, self-contained reproduction of the "UI magician Agent /
 * Add New Design" Figma frame. Smoke test only: no props, no state, no handlers.
 *
 * The frame is dark while the app's default theme is light, so the root element
 * carries the repo's `dark` theme class. The theme classes are declared as CSS
 * custom properties scoped to the class, so this resolves every semantic token
 * below to its dark value without a single hardcoded colour.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-full max-w-[508px] bg-elevation-surface px-10 py-10 text-font"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-black text-2xl leading-tight">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-font hover:text-font-subtle"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronUpIcon className="h-3.5 w-3.5 shrink-0 text-font-subtle" />
        <span className="truncate font-primary-light text-base text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-32">
        <div className="flex items-center gap-2">
          <ChevronUpIcon className="h-5 w-5 shrink-0 text-font" />
          <h2 className="font-primary-black text-xl">Add New Design</h2>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <label
              htmlFor="personal-access-token"
              className="font-primary-light text-base"
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            id="personal-access-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded-md border border-border-bold bg-background-input px-4 py-4 font-primary-light text-base placeholder:text-font-subtlest"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-3">
            <label htmlFor="design-url" className="font-primary-light text-base">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className="mt-2 w-full rounded-md border border-border-bold bg-background-input px-4 py-4 font-primary-light text-base placeholder:text-font-subtlest"
          />
        </div>

        <div className="mt-6 flex gap-4">
          <Button>Awesome</Button>
          <Button>Prepare</Button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const Button = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="rounded-lg bg-background-danger-bold px-8 py-4 font-primary-bold text-base text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed"
  >
    {children}
  </button>
);

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "aria-hidden": true,
} as const;

const SettingsIcon = (): JSX.Element => (
  <svg
    {...iconProps}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    {...iconProps}
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} strokeWidth={1.8} className="h-5 w-5 shrink-0 text-font">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
