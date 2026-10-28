const ICON_BASE = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral-100)] p-6 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-2xl">UI magicien Agent</h2>
      <SettingsIcon />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="min-w-0 truncate text-lg">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <Field
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" value="https://www.figma.com/file/" />

    <div className="mt-10 flex gap-4">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="rounded-md bg-[var(--Orange800)] px-10 py-4 text-lg text-[var(--DarkNeutral800)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ label, value }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <span className="text-lg text-[var(--DarkNeutral800)]">{label}</span>
      <InfoIcon />
    </div>
    <div className="mt-3 rounded border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-4 py-3 text-lg text-[var(--DarkNeutral700)]">
      {value}
    </div>
  </div>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    {...ICON_BASE}
    className="shrink-0 text-[var(--DarkNeutral900)]"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    {...ICON_BASE}
    className="shrink-0 text-[var(--DarkNeutral900)]"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    {...ICON_BASE}
    width={20}
    height={20}
    className="shrink-0 text-[var(--DarkNeutral800)]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  value: string;
}
