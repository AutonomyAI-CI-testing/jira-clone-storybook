const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="7" cy="8" r="2.6" />
    <path d="M7 4.6V2.8M7 11.4v1.8M4.6 8H2.8M9.4 8h1.8M4.6 5.6 3.32 4.32M9.4 5.6l1.28-1.28M4.6 10.4l-1.28 1.28M9.4 10.4l1.28 1.28" />
  </svg>
);

const ChevronUpSmall = () => (
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
    focusable="false"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const ChevronUpLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 7v3.7" />
    <circle cx="7.5" cy="4.7" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter,sans-serif] font-semibold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">
          <GearIcon />
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[#8b9291]">
          <ChevronUpSmall />
        </span>
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[84px] flex items-center gap-2">
        <span className="text-[#b2b2b1]">
          <ChevronUpLarge />
        </span>
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <span className="text-[#a4a4a3]">
          <InfoIcon />
        </span>
      </div>
      <input
        readOnly
        name="personalAccessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <span className="text-[#a3a3a2]">
          <InfoIcon />
        </span>
      </div>
      <input
        readOnly
        name="designUrl"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-auto pt-8 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
