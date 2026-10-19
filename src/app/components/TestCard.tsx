const PANEL_BG = "bg-[color:var(--DarkNeutral100)]";
const TEXT_STRONG = "text-[color:var(--DarkNeutral1100)]";
const TEXT_MUTED = "text-[color:var(--DarkNeutral900)]";
const TEXT_FAINT = "text-[color:var(--DarkNeutral700)]";
const TEXT_LABEL = "text-[color:var(--DarkNeutral1000)]";
const ICON_FAINT = "text-[color:var(--DarkNeutral800)]";

const BUTTON_CLASS =
  "h-16 flex-1 rounded-md bg-[color:var(--Orange800)] font-primary text-lg text-[color:var(--DarkNeutral900)] transition-colors hover:bg-[color:var(--Orange700)] active:bg-[color:var(--Orange900)]";

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const SettingsIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-10">
      <label htmlFor={id} className={`font-primary text-base ${TEXT_LABEL}`}>
        {label}
      </label>
      <InfoIcon className={`h-[18px] w-[18px] ${ICON_FAINT}`} />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className={`mt-3 h-14 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[color:var(--DarkNeutral200)] px-8 font-primary-light text-base ${TEXT_STRONG} placeholder:text-[color:var(--DarkNeutral700)]`}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className={`w-full max-w-[508px] ${PANEL_BG} p-10 font-primary-light`}
  >
    <div className="flex items-center justify-between">
      <h1 className={`font-primary text-xl ${TEXT_STRONG}`}>
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className={`rounded ${TEXT_MUTED} transition-colors hover:text-[color:var(--DarkNeutral1100)]`}
      >
        <SettingsIcon className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <ChevronUpIcon className={`h-5 w-5 shrink-0 ${ICON_FAINT}`} />
      <span className={`truncate text-base ${TEXT_FAINT}`}>
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <ChevronUpIcon className={`h-6 w-6 shrink-0 ${TEXT_STRONG}`} />
      <h2 className={`font-primary-bold text-2xl ${TEXT_STRONG}`}>
        Add New Design
      </h2>
    </div>

    <div className="mt-16 space-y-8">
      <Field
        id="personalAccessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-8">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-24 font-primary-bold text-xl ${TEXT_MUTED}`}>
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className: string;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
