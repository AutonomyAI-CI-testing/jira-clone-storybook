/**
 * Smoke-test component laid out from the "Test Page - Simple" Figma frame.
 *
 * Colours come from the semantic tokens so the card themes with the app. The
 * two rust buttons are the only literal values here: the palette has no rust
 * token, and the frame's button colour has no semantic equivalent.
 */

const BUTTON_LABELS = ["Awesome", "Prepare"];

const GearIcon = (): JSX.Element => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
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
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75v.5" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-sm text-font">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="rounded border border-border-bold bg-background-input px-4 py-5 text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

const RustButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="h-11 w-[170px] rounded bg-[#8C3B1C] text-sm text-[#C08560] transition-colors hover:bg-[#7A3318]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate text-sm">From entire frame to a singl…</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-10 flex flex-col gap-6">
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

    <div className="mt-10 flex gap-10">
      {BUTTON_LABELS.map((label) => (
        <RustButton key={label} label={label} />
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-xl text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
