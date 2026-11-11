/**
 * Smoke-test component: a static rendering of the "UI magician Agent" settings
 * panel from the attached Figma frame.
 *
 * Self-contained on purpose — it takes no props, holds no state and reads no
 * data, so it can be dropped anywhere and rendered as-is.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[color:var(--DarkNeutral1000)]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[26px] leading-none">
          UI magician Agent
        </h1>
        <span className="text-[color:var(--DarkNeutral800)]">
          <CogIcon />
        </span>
      </div>

      <div className="mt-7 flex items-center gap-3 text-[color:var(--DarkNeutral800)]">
        <ChevronUpIcon className="h-4 w-4 shrink-0" />
        <span className="truncate text-[19px]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-[150px] flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0" />
        <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
      </div>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-14"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
        className="mt-9"
      />

      <div className="mt-14 flex gap-8">
        <button
          type="button"
          className="h-[68px] flex-1 rounded-lg bg-[var(--Orange800)] text-[20px] text-[color:var(--DarkNeutral700)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[68px] flex-1 rounded-lg bg-[var(--Orange800)] text-[20px] text-[color:var(--DarkNeutral700)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-[22px]">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({
  id,
  label,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  placeholder: string;
  className: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-2 text-[color:var(--DarkNeutral800)]">
        <label htmlFor={id} className="text-[18px]">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="h-[57px] w-full rounded border border-[color:var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-4 text-[17px] text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>
  );
};

const CogIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.11a1.7 1.7 0 0 0 1.56-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.11a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.11a1.7 1.7 0 0 0-1.49 1.03z" />
    </svg>
  );
};

const ChevronUpIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
};
