const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 text-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 7"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="1,6 6,1 11,6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    className="h-[15px] w-[15px] shrink-0 text-icon-subtle"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.8" />
    <path d="M8 7.4v4" />
    <path d="M8 4.8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface px-5 pb-16 pt-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <ChevronUp className="h-1.5 w-2.5 text-icon-subtle" />
      <span className="font-primary-bold text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-1.5">
      <ChevronUp className="h-2 w-3.5 text-icon" />
      <h3 className="font-primary-bold text-xs">Add New Design</h3>
    </div>

    <div className="mt-9">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-2xs text-font-subtle"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded border border-border-bold bg-background-input px-4 font-primary text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="font-primary-bold text-2xs text-font-subtle"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full rounded border border-border-bold bg-background-input px-4 font-primary text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-6 flex justify-end gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-font-subtle"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-font-subtle"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h3>
  </div>
);
