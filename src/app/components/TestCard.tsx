import cx from "classix";

const ChevronUp = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoMark = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const SettingsMark = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[var(--DarkNeutral800)]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  label: string;
  value: string;
  strong?: boolean;
  className?: string;
}

const Field = ({
  label,
  value,
  strong = false,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <span className="text-2xs">{label}</span>
      <InfoMark />
    </div>
    <div
      className={cx(
        "mt-3 flex h-9 items-center bg-[var(--DarkNeutral200)] px-5",
        strong
          ? "border-2 border-[color:var(--DarkNeutral700)]"
          : "border border-[color:var(--DarkNeutral700)]"
      )}
    >
      <span className="min-w-0 truncate text-2xs text-[var(--DarkNeutral600)]">
        {value}
      </span>
    </div>
  </div>
);

const actionClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral700)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[var(--DarkNeutral0)] px-5 py-5 font-primary text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <SettingsMark />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <ChevronUp className="h-2.5 w-2.5" />
      <span className="min-w-0 truncate text-2xs">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <ChevronUp className="h-3.5 w-3.5" />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-3"
      label="Design URL"
      value="https://www.figma.com/file/:"
      strong
    />

    <div className="mt-5 flex justify-center gap-4">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={actionClass}>
          {label}
        </button>
      ))}
    </div>

    <p className="mt-12 font-primary-bold text-xs">Recent Breakdowns</p>
  </div>
);
