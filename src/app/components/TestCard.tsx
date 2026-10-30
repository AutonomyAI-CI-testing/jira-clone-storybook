/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately standalone: no props, no state, no data. It exists to prove that a
 * Figma frame can be rendered as a React component, so spacing, colour and type are
 * close approximations of the reference rather than the design's declared tokens.
 *
 * The panel is drawn always-dark, so it names the raw palette variables from
 * src/app/styles/app.css instead of the theme-swapping semantic aliases.
 */

const ICON_SIZE = 24;

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5l1.4 2.6 2.9-.7.4 2.9 2.8 1-1.4 2.6 2 2.1-2.3 1.8.7 2.9-2.9.4-1 2.8-2.6-1.4-2.6 1.4-1-2.8-2.9-.4.7-2.9-2.3-1.8 2-2.1-1.4-2.6 2.8-1 .4-2.9 2.9.7z" />
  </svg>
);

const InfoIcon = ({ label }: { label: string }): JSX.Element => (
  <svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label={label}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 7.75v.5" />
  </svg>
);

const Field = ({
  label,
  hint,
  placeholder,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={`flex flex-col ${className}`}>
    <div className="flex items-center gap-4">
      <span className="text-xl">{label}</span>
      <InfoIcon label={hint} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-5 h-[72px] w-full rounded-none border-2 border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-6 text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="w-[165px] rounded bg-[var(--Orange700)] px-10 py-5 text-xl text-[var(--DarkNeutral1100)]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 pb-10 pt-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl leading-none">
        UI magician Agent
      </h1>
      <SettingsIcon />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="truncate text-lg">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-2xl leading-none">Add New Design</h2>
    </div>

    <Field
      className="mt-14"
      label="Personal Access Token"
      hint="About personal access tokens"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-8"
      label="Design URL"
      hint="About the design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-3 flex items-center gap-10 pl-12">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl leading-none">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  hint: string;
  placeholder: string;
  className?: string;
}
