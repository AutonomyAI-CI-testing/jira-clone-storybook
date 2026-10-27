const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ChevronIcon = (): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const SectionChevronIcon = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
    <circle
      cx="8"
      cy="8"
      r="6.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
    <rect x="7.2" y="7" width="1.6" height="4.2" rx="0.8" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1C1D17] px-5 pt-5 pb-[61px]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center text-[#b5b5b5]"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <ChevronIcon />
        <span className="truncate text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[78px] flex items-center gap-2 text-[#b2b2b1]">
        <SectionChevronIcon />
        <span className="font-primary-bold text-[13.5px] leading-4">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-2 text-[#a4a4a3]">
        <span className="text-[11.5px]">Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-2 text-[#a3a3a2]">
        <span className="text-[11.5px]">Design URL</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-4 pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
