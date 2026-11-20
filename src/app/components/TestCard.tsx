// Smoke test: reproduces a Figma frame as a single self-contained component.
// Values are read from the frame's style guide, not eyeballed; approximation is
// deliberate, so spacing and type drift by a pixel or two in places.
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#121212] px-[20px] py-[20px] font-['Inter',sans-serif] text-[11.5px] font-semibold leading-[13.92px]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="h-[16px] w-[14px] text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon className="h-[5px] w-[8px]" />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-[76px] flex items-center gap-[5px] text-[#b2b2b1]">
        <ChevronUpIcon className="h-[8px] w-[12px]" />
        <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-[20px] text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <InfoIcon className="h-[15px] w-[15px]" />
      </div>

      <div className="mt-[13px] flex h-[36px] w-full items-center border border-[#a5adad] bg-[#272822] px-[18px] text-[#737470]">
        <span>figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      <div className="mt-[10px] flex items-center gap-[20px] text-[#a3a3a2]">
        <span>Design URL</span>
        <InfoIcon className="h-[15px] w-[15px]" />
      </div>

      <div className="mt-[12px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[18px] text-[#71726e]">
        <span>https://www.figma.com/file/:</span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px] text-[#8c8078]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 15 15"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.4" />
    <path d="M7.5 6.9v3.5" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
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
