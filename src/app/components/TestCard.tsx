const FIELD_CLASS =
  "mt-3 w-full rounded-md border border-border bg-elevation-surface-sunken p-4 text-[18px] text-font placeholder:text-font-subtlest";

const ACTION_CLASS =
  "rounded-md bg-[var(--Orange700)] px-12 py-3 text-[20px] text-font hover:bg-[var(--Orange800)]";

const ACTIONS = ["Awesome", "Prepare"];

/**
 * Reproduces the "UI magician Agent" panel from the reference frame.
 * Self-contained: takes no props and renders the same thing every time.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[22px] leading-none">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      <div className="mt-6 flex items-center gap-3 text-font-subtle">
        <ChevronUpIcon />
        <span className="text-[18px]">From entire frame to a singl…</span>
      </div>

      <section className="mt-[120px]">
        <div className="flex items-center gap-3">
          <ChevronUpIcon />
          <h2 className="font-primary-bold text-[22px] leading-none">
            Add New Design
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          <Field
            id="personal-access-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <Field
            id="design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-16 flex justify-center gap-9">
          {ACTIONS.map((label) => (
            <button key={label} type="button" className={ACTION_CLASS}>
              {label}
            </button>
          ))}
        </div>
      </section>

      <h2 className="mt-28 font-primary-bold text-[22px] leading-none">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-3 text-[18px] text-font"
      >
        {label}
        <InfoIcon />
      </label>
      <input
        id={id}
        readOnly
        placeholder={placeholder}
        className={FIELD_CLASS}
      />
    </div>
  );
};

const SettingsIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-8 w-8 shrink-0 text-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6h.08A1.7 1.7 0 0 0 10.1 3.04V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.08a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03Z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 20 20"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="8" />
    <path d="M10 9.25v4.5" strokeLinecap="round" />
    <circle cx="10" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
