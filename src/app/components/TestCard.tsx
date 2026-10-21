/**
 * TestCard
 *
 * Smoke-test component: a self-contained reproduction of the "UI magician Agent"
 * settings panel from the Figma frame. Takes no props and holds no state.
 *
 * Styling follows the repo's semantic-token design system (no literal colours);
 * the frame's near-black panel and rust buttons are approximated with the nearest
 * existing tokens.
 */

import { Button } from "@app/components/button";

const iconProps = {
  "aria-hidden": true,
  focusable: false,
} as const;

const GearIcon = (): JSX.Element => (
  <svg
    {...iconProps}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    {...iconProps}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} viewBox="0 0 16 16" fill="none" className="h-4 w-4">
    <circle cx="8" cy="8" r="6.9" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.2v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

const FieldLabel = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <div className="flex items-center gap-2">
    <span className="font-primary-bold text-2xs text-font-subtlest">
      {children}
    </span>
    <span className="text-icon-subtle">
      <InfoIcon />
    </span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-64 rounded bg-elevation-surface-sunken px-5 py-5 font-primary-light text-font-subtle"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-xs text-font-subtle">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer text-icon-subtle hover:text-icon"
      >
        <GearIcon />
      </button>
    </div>

    {/* Collapsed summary row */}
    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-2 shrink-0 text-icon-subtle" />
      <span className="truncate text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon className="h-3 w-3 shrink-0 text-icon" />
      <span className="font-primary-bold text-xs text-font-subtle">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-6">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-border-bold bg-background-input px-3 py-2 text-2xs text-font-subtle outline-none placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
      />
    </div>

    {/* Design URL */}
    <div className="mt-4">
      <FieldLabel>Design URL</FieldLabel>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-border-bold bg-background-input px-3 py-2 text-2xs text-font-subtle outline-none placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
      />
    </div>

    {/* Actions */}
    <div className="mt-5 flex gap-4 pl-6">
      <Button
        color="danger"
        variant="contained"
        className="h-[37px] w-[85px] text-2xs"
      >
        Awesome
      </Button>
      <Button
        color="danger"
        variant="contained"
        className="h-[37px] w-[85px] text-2xs"
      >
        Prepare
      </Button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-12 font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);
