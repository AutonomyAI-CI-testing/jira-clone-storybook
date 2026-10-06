const GearIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2.4" />
    <path d="M8 1.4v1.8M8 12.8v1.8M14.6 8h-1.8M3.2 8H1.4M12.7 3.3l-1.3 1.3M4.6 11.4l-1.3 1.3M12.7 12.7l-1.3-1.3M4.6 4.6L3.3 3.3" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2.5 7.5 6 4l3.5 3.5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <circle cx="7" cy="7" r="6" />
    <path d="M7 6.3v3.2" strokeLinecap="round" />
    <circle cx="7" cy="4.3" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">
          <GearIcon />
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[90px] flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="text-[13.5px] font-semibold">Add New Design</span>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-[#a4a4a3]">
          <span className="text-[11.5px]">Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 h-9 w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-2 font-mono text-[11.5px] text-[#b5b5b5] placeholder-[#737470] outline-none"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2 text-[#a3a3a2]">
          <span className="text-[11.5px]">Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-2 h-9 w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-2 font-mono text-[11.5px] text-[#b5b5b5] placeholder-[#71726e] outline-none"
        />
      </div>

      <div className="mt-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[13.5px] text-[#c9c4c0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[13.5px] text-[#c9c4c0]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[70px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
