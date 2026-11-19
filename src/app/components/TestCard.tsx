const GearIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.1 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03Z" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.6h.01" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 15 7-7 7 7" />
  </svg>
);

/**
 * Static reproduction of the "UI magician Agent" panel from the supplied Figma frame.
 *
 * Smoke test: presentational only — no props, no state and no behaviour.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#131416] px-[42px] pb-[64px] pt-[40px] font-primary text-[#e8e8e8]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[19px] leading-none">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#9a9a9a] transition-colors hover:text-[#e8e8e8]"
      >
        <GearIcon className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-[24px] flex items-center gap-3">
      <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#8a8a8a]" />
      <span className="truncate text-[15px] text-[#b8b8b8]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <h2 className="font-primary-bold text-[20px] leading-none">
        Add New Design
      </h2>
    </div>

    <div className="mt-[52px]">
      <label
        htmlFor="testcard-token"
        className="flex items-center gap-2 text-[16px] text-[#c4c4c4]"
      >
        Personal Access Token
        <InfoIcon className="h-[22px] w-[22px] shrink-0" />
      </label>
      <input
        id="testcard-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-[18px] h-[60px] w-full rounded-md border-2 border-[#6e6e6e] bg-transparent px-4 text-[17px] text-[#e8e8e8] placeholder:text-[#6e6e6e]"
      />
    </div>

    <div className="mt-[28px]">
      <label
        htmlFor="testcard-url"
        className="flex items-center gap-2 text-[16px] text-[#c4c4c4]"
      >
        Design URL
        <InfoIcon className="h-[22px] w-[22px] shrink-0" />
      </label>
      <input
        id="testcard-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[18px] h-[60px] w-full rounded-md border-2 border-[#6e6e6e] bg-transparent px-4 text-[17px] text-[#e8e8e8] placeholder:text-[#6e6e6e]"
      />
    </div>

    <div className="mt-[60px] flex items-center justify-center gap-[33px]">
      <button
        type="button"
        className="h-[60px] w-[172px] rounded-lg bg-[#a3441d] font-primary-bold text-[18px] text-[#b08a72]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[60px] w-[172px] rounded-lg bg-[#a3441d] font-primary-bold text-[18px] text-[#b08a72]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[86px] font-primary-bold text-[20px] leading-none">
      Recent Breakdowns
    </h2>
  </div>
);
