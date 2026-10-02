const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-2xs text-[var(--DarkNeutral1100)]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full border border-[var(--DarkNeutral1100)] bg-transparent px-2 py-2 font-primary text-2xs text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[var(--DarkNeutral-100)] px-5 pb-8 pt-5 font-primary text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-primary-bold text-xs text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      <div className="mt-7 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate font-primary text-2xs text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-14 flex items-center gap-2">
        <ChevronUpIcon />
        <h3 className="font-primary-bold text-xs text-[var(--DarkNeutral1100)]">
          Add New Design
        </h3>
      </div>

      <div className="mt-9">
        <Field
          id="testElemToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <Field
          id="testElemUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-6 py-2 font-primary-bold text-2xs text-[var(--DarkNeutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-6 py-2 font-primary-bold text-2xs text-[var(--DarkNeutral600)]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-14 font-primary-bold text-xs text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[var(--DarkNeutral1100)]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="h-3 w-3 shrink-0 text-[var(--DarkNeutral1100)]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 10l5-5 5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="h-3.5 w-3.5 shrink-0 text-[var(--DarkNeutral1100)]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 7.4v3.8" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
