const settingsIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const infoIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const chevronSm = (
  <svg
    aria-hidden="true"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[5px] w-[8px] shrink-0 text-[#8b9291]"
  >
    <path d="M0.5 4.5 4 1l3.5 3.5" />
  </svg>
);

const chevronLg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[8px] w-[12px] shrink-0 text-[#b2b2b1]"
  >
    <path d="M1 7l5-5 5 5" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-[20px] pb-[62px] pt-[20px] font-primary text-[#b5b5b5]"
    >
      <div className="flex h-4 items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </span>
        {settingsIcon}
      </div>

      <div className="mt-[18px] flex h-[14px] items-center gap-[9px]">
        {chevronSm}
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex h-4 items-center gap-[5px]">
        {chevronLg}
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex h-[15px] items-center gap-[6px]">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        {infoIcon}
      </div>
      <input
        id="test-card-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-[12px] block h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[14px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex h-[15px] items-center gap-[6px]">
        <label
          htmlFor="test-card-url"
          className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        {infoIcon}
      </div>
      <input
        id="test-card-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] block h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[13px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
