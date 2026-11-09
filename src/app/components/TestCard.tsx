/**
 * TestCard — a self-contained reproduction of the Figma "UI magician Agent" panel.
 *
 * Smoke test only: no props, no state, no behaviour. The chevrons and buttons are
 * static and the two inputs are uncontrolled, so the card renders the design and
 * nothing else. Colours are pinned to raw palette variables because the frame is a
 * dark panel and the preview opens in the light theme.
 */
const BUTTON_CLASSES =
  "h-[70px] w-[170px] rounded-md bg-[var(--Orange700)] font-primary text-lg text-[color:var(--DarkNeutral1100)]";

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 shrink-0"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5V11" />
    <path d="M12 7.5h.01" />
  </svg>
);

const Field = ({ className, label, placeholder }: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="mb-3 flex items-center justify-between">
      <span className="text-base text-[color:var(--DarkNeutral800)]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="h-14 w-full rounded border border-[color:var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-4 font-primary text-base text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <span className="text-[color:var(--DarkNeutral1000)]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3 text-[color:var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <span className="text-[color:var(--DarkNeutral1000)]">
        <ChevronUpIcon />
      </span>
      <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-20"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-12"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex justify-end gap-8">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  className: string;
  label: string;
  placeholder: string;
}
