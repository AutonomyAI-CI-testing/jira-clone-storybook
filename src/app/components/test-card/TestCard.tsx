const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface-raised px-10 py-12 text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-lg">UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-6 w-6 items-center justify-center rounded-full text-icon-subtle"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-4 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="h-24" />

    <div className="flex items-center gap-4">
      <ChevronUpIcon />
      <span className="font-primary-bold text-lg">Add New Design</span>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor="personal-access-token" className="font-primary-bold text-sm">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-4 w-full rounded-md border-none bg-background-input p-3 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="design-url" className="font-primary-bold text-sm">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file:"
        className="mt-4 w-full rounded-md border-none bg-background-input p-3 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-8 flex justify-center gap-8">
      <button
        type="button"
        className="w-[170px] rounded-md bg-[#9c4a1e] px-4 py-3 font-primary-bold text-sm text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-md bg-[#9c4a1e] px-4 py-3 font-primary-bold text-sm text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <div className="mt-24">
      <span className="font-primary-bold text-lg">Recent Breakdowns</span>
    </div>
  </div>
);
