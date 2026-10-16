const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const SettingsIcon = ({ className }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const BUTTON_LABELS = ["Awesome", "Prepare"];

const CardField = ({ className, label, placeholder }: FieldProps) => (
  <label className={className}>
    <span className="flex items-center gap-3">
      <span className="font-primary-bold">{label}</span>
      <InfoIcon className="h-5 w-5 shrink-0" />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className="mt-4 w-full border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral100)] px-4 py-4 placeholder:text-[var(--DarkNeutral700)]"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-11 py-10 font-primary text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <SettingsIcon className="h-6 w-6 shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="min-w-0 truncate text-xl">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <CardField
      className="mt-10 block"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <CardField
      className="mt-8 block"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-10 flex gap-4">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="rounded-md bg-[var(--Orange800)] px-10 py-4 font-primary-bold"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

interface IconProps {
  className?: string;
}

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
}
