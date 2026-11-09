/**
 * TestCard
 *
 * A self-contained, static reproduction of a cropped Figma frame: a dark
 * settings panel ("UI magician Agent") with a collapsible row, a section of
 * labelled fields and a pair of actions.
 *
 * This is a smoke test of the design-to-component path, not a product
 * surface: it takes no props, holds no state and is wired to nothing. Nothing
 * here is interactive, and the design's exported assets were not available, so
 * the glyphs are drawn inline.
 *
 * Colours are the raw palette variables declared in `src/app/styles/app.css`
 * used as arbitrary values: no semantic role describes a rust-orange action on
 * a neutral-black panel, and Tailwind's colour theme is a full override, so
 * stock colour utilities would compile to nothing.
 */

const iconClassName = "shrink-0";

const SettingsIcon = () => (
  <svg
    aria-hidden="true"
    className={iconClassName}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className={iconClassName}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="20"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className={iconClassName}
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="18"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-4 text-base">
      {label}
      <InfoIcon />
    </span>
    <input
      className="h-[52px] rounded border border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral200)] px-7 text-base text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)] focus:outline-none"
      placeholder={placeholder}
      readOnly
      type="text"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-[color:var(--DarkNeutral-100)] px-10 pt-10 pb-20 font-primary text-[color:var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-primary-bold text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <SettingsIcon />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="text-lg font-primary-bold text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-12 flex flex-col gap-6">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex items-center gap-8">
      <button
        className="h-[62px] w-[168px] rounded-md bg-[color:var(--Orange800)] font-primary text-base text-[color:var(--DarkNeutral1000)]"
        type="button"
      >
        Awesome
      </button>
      <button
        className="h-[62px] w-[168px] rounded-md bg-[color:var(--Orange800)] font-primary text-base text-[color:var(--DarkNeutral1000)]"
        type="button"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 text-xl font-primary-bold text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
