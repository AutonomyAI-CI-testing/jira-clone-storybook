import type { ReactNode } from "react";

/**
 * TestCard — a static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: no props, no state, no behaviour. The frame is a fixed dark
 * panel, so its colours come from the raw palette declared in `app.css` rather
 * than the theme-aware semantic tokens, which would re-skin the panel per theme.
 */

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[30px] w-[30px]"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-14">
    <div className="flex items-center gap-8 text-[var(--DarkNeutral1100)]">
      <label htmlFor={id} className="font-primary text-lg">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[62px] w-full rounded-md border border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-9 font-primary-light text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="h-[72px] w-[168px] rounded-md bg-[var(--Orange700)] font-primary-bold text-xl text-[var(--DarkNeutral1000)]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-[42px] pb-24 pt-10 font-primary-light"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[var(--DarkNeutral1100)]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-4 text-[var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="truncate text-xl">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-40 flex items-center gap-4 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      <ChevronUpIcon />
      Add New Design
    </h2>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-14 flex gap-9">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-28 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
