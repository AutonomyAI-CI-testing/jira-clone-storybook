// Smoke test component: a static reproduction of the "UI magician Agent" Figma
// frame. Self-contained, no props, no state, no behaviour. The frame's hex
// values are inlined deliberately for this test and are not repo design tokens.
export const TestCard = () => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-black font-primary">
    <div className="h-[9px] w-full" />

    <div className="px-5">
      <div className="mt-[11px] flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] font-primary-bold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-1">
        <ChevronUpIcon className="h-[5px] w-[8px]" />
        <span className="truncate text-[11.5px] leading-[13.92px] font-primary-bold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-1.5">
        <ChevronUpIcon className="h-[8px] w-[12px]" />
        <span className="text-[13.5px] leading-[16.34px] font-primary-bold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] font-primary-bold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] leading-[13.92px] font-primary-bold text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] font-primary-bold text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-2 text-[11.5px] leading-[13.92px] font-primary-bold text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          tabIndex={-1}
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-primary-bold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-primary-bold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] text-[13.5px] leading-[16.34px] font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-[14px] text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 16 16"
    className={`h-[15px] w-[15px] ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.4v4" strokeLinecap="round" />
    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
