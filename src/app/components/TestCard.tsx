const ICON_PROPS = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = () => (
  <svg {...ICON_PROPS} aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg {...ICON_PROPS} aria-hidden="true">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg {...ICON_PROPS} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const BUTTON_CLASS =
  "rounded-lg bg-[var(--Orange800)] px-9 py-4 text-lg text-[color:var(--DarkNeutral800)]";

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-9">
    <div className="flex items-center gap-2">
      <span className="text-base text-[color:var(--DarkNeutral900)]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-4 w-full rounded border border-border-bold bg-[var(--DarkNeutral200)] px-4 py-3 text-base text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 pb-24 pt-9 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </span>
      <span className="text-[color:var(--DarkNeutral1100)]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-9 flex items-center gap-3">
      <span className="text-[color:var(--DarkNeutral700)]">
        <ChevronUpIcon />
      </span>
      <span className="truncate text-base text-[color:var(--DarkNeutral800)]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-24 flex items-center gap-3 font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
      <span className="text-[color:var(--DarkNeutral700)]">
        <ChevronUpIcon />
      </span>
      Add New Design
    </h2>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-11 flex justify-center gap-9">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
