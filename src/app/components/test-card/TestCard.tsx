const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0 text-[color:var(--DarkNeutral1000)]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.64 9.4a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
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
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-5 w-5 shrink-0 text-[color:var(--DarkNeutral800)]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[color:var(--DarkNeutral800)]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-8 h-14 w-full rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral100)] px-4 text-base text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral500)]"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[508px] bg-[var(--DarkNeutral-100)] px-10 pt-12 pb-16 font-primary text-base text-[color:var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[color:var(--DarkNeutral800)]" />
        <span className="truncate text-[color:var(--DarkNeutral800)]">
          From entire frame to a single screen
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0 text-[color:var(--DarkNeutral1000)]" />
        <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-12"
      />

      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-10"
      />

      <div className="mt-10 flex justify-center gap-8">
        <button
          type="button"
          className="h-14 w-[170px] rounded-lg bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral900)] transition-colors hover:bg-[var(--Orange900)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-14 w-[170px] rounded-lg bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral900)] transition-colors hover:bg-[var(--Orange900)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-2xl text-[color:var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
