const GearIcon = () => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={3} />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 11v6" strokeLinecap="round" />
    <circle cx={12} cy={7.5} r={1.2} fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1a1a1a] px-[20px] py-[20px] font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="flex text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <span className="ml-[3px] flex text-[#8b9291]">
        <ChevronUpIcon width={8} height={5} />
      </span>
      <span className="min-w-0 truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <span className="ml-[6px] flex text-[#b2b2b1]">
        <ChevronUpIcon width={12} height={8} />
      </span>
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label className="mt-[28px] block">
      <span className="flex items-center gap-[10px] text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
        <InfoIcon />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />
    </label>

    <label className="mt-[11px] block">
      <span className="flex items-center gap-[10px] text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
        Design URL
        <InfoIcon />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </label>

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
