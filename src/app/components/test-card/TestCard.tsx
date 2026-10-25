const CARD_FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const CARD_ACTIONS = ["Awesome", "Prepare"];

/**
 * Static card reproducing the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no state, no data. The frame is a dark
 * panel, so its own subtree is pinned to the dark theme and every token inside
 * resolves to its dark value whichever theme the app is in.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 pb-12 pt-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer rounded p-1 text-icon hover:bg-background-neutral"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="min-w-0 truncate text-lg">
        From entire frame to a single page
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <div className="mt-14 space-y-6">
      {CARD_FIELDS.map((field) => (
        <div key={field.label}>
          <div className="flex items-center gap-2 text-font-subtle">
            <span className="text-lg">{field.label}</span>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            aria-label={field.label}
            placeholder={field.placeholder}
            className="mt-6 h-[70px] w-full rounded-md border border-border-bold bg-elevation-surface-raised px-6 text-lg placeholder:text-font-subtlest"
          />
        </div>
      ))}
    </div>

    <div className="mt-12 flex gap-9 pl-12">
      {CARD_ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          // No semantic token covers the frame's rust fill, so this uses the
          // nearest value the palette declares.
          className="h-[70px] w-[170px] cursor-pointer rounded-md bg-[var(--Orange800)] text-xl text-font hover:bg-[var(--Orange700)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
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
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5V17" />
    <path d="M12 7.5h.01" />
  </svg>
);
