const fieldInputClass =
  "w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-4 py-4 text-base text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--DarkNeutral700)]";

const actionButtonClass =
  "rounded bg-[var(--Orange800)] px-7 py-3 text-base text-[var(--DarkNeutral1100)]";

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="mb-3 flex items-center gap-3">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input id={id} placeholder={placeholder} className={fieldInputClass} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-9 text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[var(--DarkNeutral700)] hover:text-[var(--DarkNeutral1100)]"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-9 flex items-center gap-3 text-[var(--DarkNeutral700)]">
        <ChevronUpIcon />
        <span className="truncate text-lg">From entire frame to a singl...</span>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="text-xl font-semibold">Add New Design</h2>
      </div>

      <div className="mt-6 space-y-6">
        <Field
          id="testElem-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-14 text-xl font-semibold">Recent Breakdowns</h2>
    </div>
  );
};
