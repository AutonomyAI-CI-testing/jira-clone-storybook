import cx from "classix";

import { Button } from "./button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] max-w-full flex-col bg-elevation-surface-overlay p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xs">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex-center rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon />
      <span className="text-2xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-xs">Add New Design</h2>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-6 flex gap-4">
      <Button color="warning" className="w-[85px]">
        Awesome
      </Button>
      <Button color="warning" className="w-[85px]">
        Prepare
      </Button>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h2>
  </div>
);

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}): JSX.Element => (
  <div className={cx(className)}>
    <div className="flex items-center gap-2 text-font-subtle">
      <span className="text-2xs">{label}</span>
      <InfoIcon />
    </div>
    <div className="mt-3 border border-border bg-elevation-surface-raised px-5 py-3 text-2xs text-font-subtlest">
      {placeholder}
    </div>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" />
    <path d="M7.5 6.6v4.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
