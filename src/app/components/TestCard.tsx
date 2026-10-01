const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5l1.4 2.2 2.5-.6.3 2.6 2.4 1-1.2 2.3 1.2 2.3-2.4 1-.3 2.6-2.5-.6L12 21.5l-1.4-2.2-2.5.6-.3-2.6-2.4-1 1.2-2.3-1.2-2.3 2.4-1 .3-2.6 2.5.6z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 16 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 7L8 1L15 7" />
  </svg>
);

const buttonClassName =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7v4.2" strokeLinecap="round" />
    <path d="M8 4.6v.4" strokeLinecap="round" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] max-w-full bg-[#0d0d0d] px-5 py-5 text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[34px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[91px] flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mb-[10px] mt-[28px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className="h-[39px] w-[211px] max-w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <div className="mb-[10px] mt-[28px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file:"
        className="h-[41px] w-[214px] max-w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[23px] flex gap-[17px]">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
