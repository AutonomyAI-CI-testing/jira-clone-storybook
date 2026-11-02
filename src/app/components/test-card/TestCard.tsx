import cx from "classix";

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-5 w-5 shrink-0", className)}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-6 w-6 shrink-0", className)}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-5 w-5 shrink-0", className)}
  >
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11.5v4.5" />
    <path d="M12 8.25h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-base text-font-subtle">{label}</span>
      <InfoIcon className="text-font-subtle" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border border-border-bold bg-background-input px-4 py-4 text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex-1 rounded-md bg-[var(--Orange800)] px-6 py-5 font-primary-bold text-lg text-font"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl leading-8">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Agent settings"
          className="flex h-6 w-6 items-center justify-center rounded-full text-font-subtle"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <ChevronUpIcon className="text-font-subtle" />
        <span className="truncate text-base text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-24 flex items-center gap-3 font-primary-bold text-xl">
        <ChevronUpIcon />
        Add New Design
      </h2>

      <div className="mt-16 flex flex-col gap-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file:"
        />
      </div>

      <div className="mt-8 flex gap-5">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

interface IconProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: string;
}
