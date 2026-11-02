const GearIcon = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
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
    <polyline points="18 15 12 9 6 15" />
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
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const FIELD_CLASSNAME =
  "mt-3 w-full rounded-md border border-border-input bg-background-input px-3 py-3 text-base text-font placeholder:text-font-subtlest";

const ACTION_CLASSNAME =
  "min-w-[170px] rounded-md bg-[#a04a28] px-6 py-4 font-primary-bold text-base text-[#c3b1a7] hover:bg-[#8f4022]";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-12 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-icon hover:bg-background-neutral-hovered"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-base">
          Personal Access Token
        </span>
        <span className="text-font-subtle">
          <InfoIcon />
        </span>
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASSNAME}
      />
    </div>

    <div className="mt-5">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-base">Design URL</span>
        <span className="text-font-subtle">
          <InfoIcon />
        </span>
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file:"
        className={FIELD_CLASSNAME}
      />
    </div>

    <div className="mt-8 flex gap-8">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={ACTION_CLASSNAME}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
