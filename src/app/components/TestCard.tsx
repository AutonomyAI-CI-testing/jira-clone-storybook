const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GearIcon = (): JSX.Element => (
  <svg {...iconProps} strokeWidth={1.5} className="h-6 w-6">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg {...iconProps} strokeWidth={2} className={className}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} strokeWidth={1.5} className="h-5 w-5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <span className="font-primary text-base">{label}</span>
      <span className="text-[var(--DarkNeutral700)]">
        <InfoIcon />
      </span>
    </div>
    <input
      readOnly
      placeholder={placeholder}
      aria-label={label}
      className="mt-3 w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-5 py-3 font-primary-light text-sm placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral100)] p-10 font-primary text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
        <span className="mt-1 text-[var(--DarkNeutral800)]">
          <GearIcon />
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3 text-[var(--DarkNeutral600)]">
        <ChevronUpIcon className="h-5 w-5 shrink-0" />
        <span className="truncate font-primary-light">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-28" />

      <div className="flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />

      <div className="mt-10 flex gap-9 pl-12">
        <button
          type="button"
          className="w-[170px] rounded-md bg-[var(--Orange800)] py-3 font-primary text-[var(--DarkNeutral900)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-md bg-[var(--Orange800)] py-3 font-primary text-[var(--DarkNeutral900)]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};
