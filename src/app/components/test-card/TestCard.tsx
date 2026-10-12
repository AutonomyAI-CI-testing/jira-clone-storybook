/**
 * Smoke test: a static reproduction of a dark Figma-plugin settings panel.
 *
 * It takes no props and holds no state — every value below is fixed content.
 *
 * Note on colour: this panel draws its own dark surface from the primitive
 * `--DarkNeutral*` / `--Orange*` tokens instead of the app's themed semantic
 * tokens, because it reproduces a third-party dark UI rather than a screen of
 * this app. Deliberate for this smoke test; not the pattern to follow for a
 * themed screen.
 */

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="mb-3 flex items-center gap-4">
      <span className="font-primary-bold text-[17px] text-[color:var(--DarkNeutral1000)]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      aria-label={label}
      placeholder={placeholder}
      className="h-[68px] w-full rounded border border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral100)] px-10 font-[family-name:monospace] text-[17px] text-[color:var(--DarkNeutral700)] outline-none placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const actionButtonClass =
  "h-[68px] rounded bg-[color:var(--Orange800)] font-primary-bold text-[19px] text-[color:var(--Orange1000)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[color:var(--DarkNeutral0)] px-10 py-8"
  >
    <div className="flex items-center justify-between text-[color:var(--DarkNeutral1100)]">
      <h1 className="font-primary-bold text-[20px]">UI magician Agent</h1>
      <SettingsIcon />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[color:var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="truncate text-[17px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[120px]" />

    <div className="flex items-center gap-3 text-[color:var(--DarkNeutral1000)]">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    <div className="mt-9 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-10 grid grid-cols-2 gap-5">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[20px] text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
