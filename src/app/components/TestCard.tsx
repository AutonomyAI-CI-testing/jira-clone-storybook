const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10 12 2l10 8" />
    </svg>
  );
};

const GearIcon = (): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      className="h-[32px] w-[28px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#b5b5b5"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
};

const InfoIcon = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <path d="M12 7.6h.01" />
    </svg>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-black px-[40px] pb-[40px] pt-[40px] font-primary"
    >
      <div className="flex h-[36px] items-center justify-between">
        <span className="font-primary-bold text-[27px] leading-none text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[32px] flex items-center gap-[18px] pl-[6px]">
        <ChevronUpIcon className="h-[10px] w-[16px] text-[#8b9291]" />
        <span className="text-[23px] leading-none text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[162px] flex items-center gap-[10px] pl-[12px]">
        <ChevronUpIcon className="h-[16px] w-[24px] text-[#b2b2b1]" />
        <span className="font-primary-bold text-[27px] leading-none text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[56px] flex items-center gap-[16px]">
        <span className="text-[23px] leading-none text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon className="h-[30px] w-[30px] text-[#a4a4a3]" />
      </div>

      <input
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-[28px] h-[72px] w-full border border-[#a5adad] bg-[#272822] px-[38px] text-[23px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <div className="mt-[22px] flex items-center gap-[16px]">
        <span className="text-[23px] leading-none text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon className="h-[30px] w-[30px] text-[#a3a3a2]" />
      </div>

      <input
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[22px] h-[82px] w-full border-2 border-[#929291] bg-[#272822] px-[38px] text-[21px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[38px] flex gap-[30px]">
        <button
          type="button"
          className="flex h-[80px] w-[174px] items-center justify-center rounded bg-[#843a17] text-[23px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[80px] w-[174px] items-center justify-center rounded bg-[#843a17] text-[23px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[90px] font-primary-bold text-[27px] leading-none text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
