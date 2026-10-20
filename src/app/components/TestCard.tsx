const GearIcon = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 7 6 2l5 5" />
  </svg>
);

const InfoIcon = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 7v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#000000] px-5 py-5 font-primary text-xs text-[#b5b5b5]"
    >
      <div className="flex h-4 items-center justify-between">
        <span className="font-primary-bold">UI magician Agent</span>
        <GearIcon className="h-[16px] w-[14px] text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex h-4 items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="truncate text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex h-4 items-center gap-1 pl-1">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-[28px]">
        <div className="flex h-4 items-center gap-2">
          <label htmlFor="testCardToken" className="text-2xs text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          id="testCardToken"
          readOnly
          value="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[10px] h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-2xs text-[#737470]"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex h-4 items-center gap-2">
          <label htmlFor="testCardDesignUrl" className="text-2xs text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          id="testCardDesignUrl"
          readOnly
          value="https://www.figma.com/file/:"
          className="mt-[9px] h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-2xs text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex gap-4 pl-1">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <p className="mt-[48px] font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};

interface GlyphProps {
  className?: string;
}
