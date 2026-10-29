const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const DoubleChevronUpIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 9"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#b2b2b1]"
  >
    <path d="M1 4.5 6 1l5 3.5" />
    <path d="M1 8 6 4.5 11 8" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#d0d0d0]"
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7.5 6.9v3.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.7" r="0.8" fill="currentColor" />
  </svg>
);

/**
 * A static panel reproduced from a Figma frame. Self-contained: it takes no
 * props, holds no state and nothing in it is wired up.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1a1a1a] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon />
      <span className="text-2xs text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <DoubleChevronUpIcon />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-2xs text-[#a4a4a3]">Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-[3px] border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-2xs text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-2">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-2xs text-[#a3a3a2]">Design URL</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded-[3px] border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-2xs text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-5 flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-10 font-primary-bold text-xs text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
