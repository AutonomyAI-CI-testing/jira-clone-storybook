import type { ReactNode } from "react";

const FIELD_INPUT_CLASS =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-4 text-base text-font placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASS =
  "min-w-[170px] rounded bg-[var(--Orange800)] px-6 py-4 text-base text-white hover:bg-[var(--Orange700)]";

const GearIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87a.48.48 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const ChevronUpIcon = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="shrink-0 text-font-subtle"
    aria-hidden="true"
  >
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
  </svg>
);

const SectionHeading = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className="flex items-center gap-3">
    <ChevronUpIcon className="text-font" />
    <span className="font-primary-bold text-xl text-font">{children}</span>
  </div>
);

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}): JSX.Element => (
  <div className="flex items-center gap-3">
    <label htmlFor={htmlFor} className="text-base text-font">
      {children}
    </label>
    <InfoIcon />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button type="button" className={ACTION_BUTTON_CLASS}>
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[480px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-2xl text-font">
        UI magician Agent
      </span>
      <span className="text-font-subtle" aria-hidden="true">
        <GearIcon />
      </span>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate text-base">From entire frame to a singl…</span>
    </div>

    <div className="mt-20">
      <SectionHeading>Add New Design</SectionHeading>
    </div>

    <div className="mt-12">
      <FieldLabel htmlFor="test-card-access-token">
        Personal Access Token
      </FieldLabel>
      <input
        id="test-card-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-8">
      <FieldLabel htmlFor="test-card-design-url">Design URL</FieldLabel>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-12 flex gap-6 pl-12">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <div className="mt-24">
      <span className="font-primary-bold text-xl text-font">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
