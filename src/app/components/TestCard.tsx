import type { ReactNode } from "react";

/**
 * TestCard
 *
 * A static, self-contained panel mirroring a Figma frame — a smoke test for the
 * path from a design frame to a rendered component. It accepts no props and
 * holds no state, so it can be mounted anywhere and rendered on its own.
 *
 * Colours and type resolve through the repo's semantic tokens, so the card
 * follows whichever theme it renders in. Sizes approximate the frame.
 */

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-3.5 shrink-0 text-font-subtle"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 8 5"
    className={`shrink-0 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4L4 1L7 4" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="text-xs text-font-subtle">{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-2 text-xs text-font placeholder:text-font-subtlest"
    />
  </div>
);

const CardButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-9 w-[85px] rounded bg-background-danger-bold text-xs text-font-inverse"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col gap-3 bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-sm">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 text-font-subtlest" />
      <span className="text-xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3" />
      <span className="font-primary-bold text-sm">Add New Design</span>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/:" />

    <div className="mt-2 flex justify-center gap-4">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <div className="mt-6">
      <span className="font-primary-bold text-sm text-font-subtle">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
