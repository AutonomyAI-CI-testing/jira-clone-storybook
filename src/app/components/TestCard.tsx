import cx from "classix";

// The design's dark ground, grey borders and rust button fill have no semantic role in this
// repo's token set, so the palette variables declared in app.css are referenced directly.
// Class names are written out in full: Tailwind only sees literal strings in the source.
const LABEL_CLASSES = "flex items-center gap-2 text-lg";
const INPUT_CLASSES =
  "mt-3 h-14 w-full border-2 border-[var(--DarkNeutral400)] px-8 text-lg text-[var(--DarkNeutral800)] outline-none placeholder:text-[var(--DarkNeutral600)]";
const BUTTON_CLASSES =
  "h-[52px] w-[172px] rounded-md bg-[var(--Orange700)] font-primary-bold text-xl text-[var(--DarkNeutral800)]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const GEAR_TEETH_ANGLES = [0, 60, 120, 180, 240, 300];

const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-7 w-7"
  >
    <circle cx="12" cy="12" r="3.2" />
    <circle cx="12" cy="12" r="6.4" />
    {GEAR_TEETH_ANGLES.map((angle) => (
      <rect
        key={angle}
        x="10.6"
        y="2.1"
        width="2.8"
        height="4.8"
        rx="1.4"
        transform={`rotate(${angle} 12 12)`}
      />
    ))}
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-10 pt-9 pb-10 font-primary text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Open settings">
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="truncate text-lg">From entire frame to a single component</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
        Add New Design
      </h2>
    </div>

    <label htmlFor="test-card-token" className={cx(LABEL_CLASSES, "mt-10")}>
      Personal Access Token
      <InfoIcon />
    </label>
    <input
      id="test-card-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={cx(INPUT_CLASSES, "bg-transparent")}
    />

    <label htmlFor="test-card-url" className={cx(LABEL_CLASSES, "mt-8")}>
      Design URL
      <InfoIcon />
    </label>
    <input
      id="test-card-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={cx(INPUT_CLASSES, "bg-[var(--DarkNeutral100)]")}
    />

    <div className="mt-11 flex gap-8">
      {BUTTON_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-20 font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);
