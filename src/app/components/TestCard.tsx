export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 py-5 font-sans text-[11.5px] font-semibold leading-[13.92px]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsed description row */}
    <div className="mt-6 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design section */}
    <div className="mt-[56px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
      <ChevronUp />
      <span>Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-6">
      <div className="flex items-center gap-2 text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <InfoIcon />
      </div>
      <div className="mt-2 flex h-[37px] items-center border border-[#a5adad] bg-[#272822] px-4 text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>
    </div>

    {/* Design URL */}
    <div className="mt-4">
      <div className="flex items-center gap-2 text-[#a3a3a2]">
        <span>Design URL</span>
        <InfoIcon />
      </div>
      <div className="mt-2 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>
    </div>

    {/* Actions */}
    <div className="mt-8 flex justify-center gap-[15px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[64px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const ChevronUp = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" />
    <path d="M7.5 6.5v4" stroke="currentColor" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.75" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="7" cy="8" r="2.25" stroke="currentColor" />
    <path
      d="M7 1.5v1.6M7 12.9v1.6M12.5 8h-1.6M3.1 8H1.5M11 4l-1.2 1.2M4.2 10.8 3 12M11 12l-1.2-1.2M4.2 5.2 3 4"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
