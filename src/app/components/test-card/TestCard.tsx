const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
  >
    <path d="M1 7L6 1.5L11 7" />
  </svg>
);

const InfoIcon = () => (
  <svg aria-hidden="true" className="h-[15px] w-[15px]" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="5" r="1" fill="currentColor" />
    <rect x="7.3" y="7" width="1.4" height="5" rx="0.7" fill="currentColor" />
  </svg>
);

export const TestCard = () => (
  <div id="testElem" className="dark w-[254px] bg-elevation-surface-sunken p-5 text-font">
    {/* Title row */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-sm">UI magician Agent</span>
      <span className="text-font">
        <GearIcon />
      </span>
    </div>

    {/* Collapsed description row */}
    <div className="mt-4 flex items-center gap-2 text-font-subtlest">
      <ChevronUpIcon className="h-[5px] w-2" />
      <span className="font-primary-bold text-2xs">From entire frame to a singl...</span>
    </div>

    {/* Section header */}
    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3" />
      <span className="font-primary-bold text-sm">Add New Design</span>
    </div>

    {/* Personal access token field */}
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-2xs text-font-subtle">Personal Access Token</span>
        <span className="text-font">
          <InfoIcon />
        </span>
      </div>
      <div className="mt-3 flex h-9 w-full items-center rounded-none border border-border-bold bg-background-input px-3">
        <span className="font-primary-bold text-2xs text-font-subtlest">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    {/* Design URL field */}
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-2xs text-font-subtle">Design URL</span>
        <span className="text-font">
          <InfoIcon />
        </span>
      </div>
      <div className="mt-3 flex h-9 w-full items-center rounded-none border-2 border-border-bold bg-background-input px-3">
        <span className="font-primary-bold text-2xs text-font-subtlest">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    {/* Actions */}
    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font"
      >
        Prepare
      </button>
    </div>

    {/* Recent breakdowns */}
    <div className="mt-12 font-primary-bold text-sm">Recent Breakdowns</div>
  </div>
);
