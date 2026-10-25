/**
 * Static reproduction of the "UI magician Agent" panel from the Figma smoke-test
 * frame. Self-contained by design: no props, no state, no data, no handlers.
 *
 * Colours come from the palette variables declared in src/app/styles/app.css
 * (DarkNeutral ramp + Orange800), so no new colour value enters the codebase.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col rounded bg-[var(--DarkNeutral100)] p-5 font-primary"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-black text-[13.5px] leading-4 text-[var(--DarkNeutral900)]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[72px] flex items-center gap-2 text-[var(--DarkNeutral900)]">
      <ChevronUpIcon />
      <span className="text-[13.5px] leading-4">Add New Design</span>
    </div>

    <div className="mt-7 flex flex-col gap-2.5">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-6 flex gap-4 pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h3 className="mt-12 text-[13.5px] leading-4 text-[var(--DarkNeutral900)]">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2.5">
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] leading-[14px] text-[var(--DarkNeutral800)]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-[37px] w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-2 text-[11.5px] leading-[14px] text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-[11.5px] leading-[14px] text-[var(--DarkNeutral1100)]"
  >
    {children}
  </button>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[var(--DarkNeutral700)]"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.2v4.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[var(--DarkNeutral800)]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface CardButtonProps {
  children: string;
}
