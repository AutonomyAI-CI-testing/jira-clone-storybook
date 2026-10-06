const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#e0e0e0]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#d0d0d0]"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 16.5v-5" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-3">
      <ChevronUpIcon className="text-[#b0b0b0]" />
      <span className="truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[85px] flex items-center gap-3">
      <ChevronUpIcon className="text-[#b5b5b5]" />
      <span className="text-[13.5px] font-primary-bold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[30px] flex items-center gap-4">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
      className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-5 flex items-center gap-4">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/"
      aria-label="Design URL"
      className="mt-3 h-[36px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[23px] flex justify-end gap-[18px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[50px] text-[13.5px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
