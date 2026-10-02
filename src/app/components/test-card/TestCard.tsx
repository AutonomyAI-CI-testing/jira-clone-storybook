export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 pb-24 pt-12 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-[20px] leading-tight">
        UI magician Agent
      </h1>
      <GearIcon className="h-6 w-6 shrink-0 text-[var(--DarkNeutral800)]" />
    </div>

    <div className="mt-8 flex min-w-0 items-center gap-3">
      <ChevronUpIcon className="h-4 w-4 shrink-0 text-[var(--DarkNeutral800)]" />
      <p className="truncate text-[16px] text-[var(--DarkNeutral700)]">
        From entire frame to a single component
      </p>
    </div>

    <h2 className="mt-24 flex items-center gap-3 font-primary-bold text-[22px]">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      Add New Design
    </h2>

    <LabelledInput
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
    />

    <LabelledInput
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex flex-wrap gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="w-[170px] rounded-sm bg-[var(--Red800)] px-6 py-5 text-[17px] text-[var(--DarkNeutral1100)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);

export default TestCard;

const LabelledInput = ({ id, label, placeholder }: LabelledInputProps) => (
  <div className="mt-8 flex flex-col">
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-[17px] text-[var(--DarkNeutral900)]">
        {label}
      </label>
      <InfoIcon className="h-5 w-5 shrink-0 text-[var(--DarkNeutral800)]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-sm border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral-100)] px-6 py-5 text-[17px] text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <path d="M12 7.75h.01" strokeLinecap="round" />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface LabelledInputProps {
  id: string;
  label: string;
  placeholder: string;
}

interface IconProps {
  className?: string;
}
