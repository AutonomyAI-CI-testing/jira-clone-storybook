const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M8 1.7l1.02 1.8a4.9 4.9 0 0 1 1.45.6l2-.7 1.38 2.38-1.47 1.55c.08.49.08 1 0 1.48l1.47 1.55-1.38 2.38-2-.7a4.9 4.9 0 0 1-1.45.6L8 14.44l-1.02-1.8a4.9 4.9 0 0 1-1.45-.6l-2 .7-1.38-2.38 1.47-1.55a5.1 5.1 0 0 1 0-1.48L2.15 5.78 3.53 3.4l2 .7a4.9 4.9 0 0 1 1.45-.6L8 1.7z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8.05" r="2" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const ChevronUpSmall = () => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
    <path
      d="M1 4l3-3 3 3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpLarge = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path
      d="M1 6.5l5-5 5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.9v3.9"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pb-[62px] pt-5 text-[13.5px] font-semibold leading-[16.34px] [font-family:Inter,ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[#b5b5b5]">UI magician Agent</span>
        <button
          type="button"
          aria-label="Agent settings"
          className="text-[#b5b5b5]"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <span className="text-[#8b9291]">
          <ChevronUpSmall />
        </span>
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
        <ChevronUpLarge />
        <span>Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-1.5 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        <label htmlFor="personal-access-token">Personal Access Token</label>
        <span className="text-[#a3a3a2]">
          <InfoIcon />
        </span>
      </div>
      <input
        id="personal-access-token"
        name="personalAccessToken"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] w-full border border-[#a5adad] bg-[#272822] px-[18px] py-[10px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-1.5 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        <label htmlFor="design-url">Design URL</label>
        <span>
          <InfoIcon />
        </span>
      </div>
      <input
        id="design-url"
        name="designUrl"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] py-[10px] text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};
