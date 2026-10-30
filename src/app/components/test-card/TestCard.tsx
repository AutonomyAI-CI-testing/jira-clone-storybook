import cx from "classix";

/**
 * The two action buttons in the frame use a rust accent that has no token in
 * this palette, so it is kept as a single literal shared by both buttons.
 */
const ACTION_BUTTON =
  "rounded bg-[#8f3d1c] px-8 py-3 font-primary text-white hover:bg-[#7a3418] active:bg-[#652b14]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-elevation-surface-sunken p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-font hover:bg-background-neutral"
      >
        <SettingsIcon />
      </button>
    </div>

    <CollapsibleRow label="From entire frame to a singl..." />

    <CollapsibleRow label="Add New Design" emphasis />

    <div className="flex flex-col gap-5">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />
    </div>

    <div className="flex gap-4">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const CollapsibleRow = ({
  label,
  emphasis,
}: CollapsibleRowProps): JSX.Element => (
  <div
    className={cx(
      "flex items-center gap-2",
      emphasis
        ? "font-primary-bold text-xl text-font"
        : "font-primary-light text-base text-font-subtlest"
    )}
  >
    <ChevronUpIcon />
    <span className="truncate">{label}</span>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 font-primary-light text-sm">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border-none bg-background-input p-3 font-primary-light placeholder:text-font-subtlest outline outline-2 outline-border-input focus:outline-border-brand"
    />
  </label>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className="h-4 w-4 shrink-0 text-font-subtlest"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75h.01" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

interface CollapsibleRowProps {
  label: string;
  emphasis?: boolean;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
