import cx from "classix";

/**
 * TestCard — a self-contained card built from the "UI magician Agent" Figma frame.
 * It is a smoke test: it takes no props, holds no state, and is not wired into any screen.
 */

const ChevronUpIcon = ({ size = 12 }: { size?: number }): JSX.Element => (
  <svg
    width={size}
    height={(size * 8) / 12}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M1 6.5L6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <path d="M8 4.9h.01" strokeLinecap="round" strokeWidth="1.8" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="3.1" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10.6 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const BUTTON_CLASSES =
  "h-9 w-[85px] rounded bg-[#843a17] text-2xs text-[var(--DarkNeutral600)]";

const Field = ({
  id,
  label,
  placeholder,
  thickBorder = false,
}: FieldProps): JSX.Element => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-2xs text-[var(--DarkNeutral700)]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "mt-2 h-9 w-full bg-[var(--DarkNeutral200)] px-2 text-2xs text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]",
        thickBorder
          ? "border-2 border-[var(--DarkNeutral600)]"
          : "border border-[var(--DarkNeutral600)]"
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black p-5 font-primary-bold text-xs text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-start justify-between gap-2">
      <h2 className="text-xs">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[var(--DarkNeutral700)]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 text-2xs text-[var(--DarkNeutral600)]">
      <ChevronUpIcon size={8} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon />
      <h3 className="text-xs">Add New Design</h3>
    </div>

    <Field
      id="test-card-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      thickBorder
    />

    <div className="mt-8 flex gap-4">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 text-xs">Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  thickBorder?: boolean;
}
