import cx from "classix";

// The panel is pinned to the dark theme so it renders the same way whatever
// theme the app (or Storybook) currently has on <html>.
const rootClass =
  "dark w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font";

const sectionHeadingClass = "font-primary-black text-xl text-font";

const labelClass = "font-primary text-sm text-font";

const inputClass =
  "w-full rounded-md border border-border-bold bg-background-input px-3 py-2 font-primary-light text-sm text-font outline-none placeholder:text-font-subtlest";

const actionButtonClass =
  "w-[170px] rounded bg-[var(--Orange800)] px-8 py-2 font-primary text-sm text-[var(--Orange200)] hover:bg-[var(--Orange700)]";

const iconButtonClass =
  "flex-center rounded-full p-1 text-icon hover:bg-background-brand-subtlest";

const ChevronUpIcon = ({ size = 16 }: { size?: number }): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const GearIcon = ({ size = 20 }: { size?: number }): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ size = 18 }: { size?: number }): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="11" x2="12" y2="16.5" />
    <circle cx="12" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={cx(rootClass)}>
    <div className="flex items-center justify-between">
      <h1 className={sectionHeadingClass}>UI magician Agent</h1>
      <button type="button" aria-label="Settings" className={iconButtonClass}>
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon size={20} />
      <h2 className={sectionHeadingClass}>Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="figma-access-token" className={labelClass}>
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="figma-access-token"
        name="figma-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />
    </div>

    <div className="mt-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="figma-design-url" className={labelClass}>
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="figma-design-url"
        name="figma-design-url"
        placeholder="https://www.figma.com/file/"
        className={inputClass}
      />
    </div>

    <div className="mt-8 flex justify-center gap-8">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className={cx("mt-24", sectionHeadingClass)}>Recent Breakdowns</h2>
  </div>
);
