import type { ReactNode } from "react";

/**
 * Standalone replica of the "UI magician Agent" frame.
 * Self-contained by design: no props, no state, no data.
 */

const inputClass =
  "rounded-md bg-background-neutral p-3 text-base text-font outline outline-2 outline-border-input placeholder:text-font-disabled";

const actionButtonClass =
  "flex-1 rounded bg-background-brand-bold px-4 py-2 font-primary text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) => (
  <label
    htmlFor={htmlFor}
    className="flex items-center gap-2 font-primary text-base text-font-subtle"
  >
    {children}
    <InfoIcon />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface px-8 pb-10 pt-7 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtlest">
      <ChevronUp />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUp className="text-font" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-7 flex flex-col gap-3">
      <FieldLabel htmlFor="testElem-token">Personal Access Token</FieldLabel>
      <input
        id="testElem-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />
    </div>

    <div className="mt-5 flex flex-col gap-3">
      <FieldLabel htmlFor="testElem-design-url">Design URL</FieldLabel>
      <input
        id="testElem-design-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={inputClass}
      />
    </div>

    <div className="mt-7 flex gap-6">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
