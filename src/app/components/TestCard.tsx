export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#000000] px-[20px] py-[20px] text-left font-[Inter,sans-serif]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-[16px] w-[14px] text-[#b5b5b5]"
          fill="currentColor"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </div>

      <div className="mt-[18px] flex items-center gap-[8px]">
        <ChevronUp />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-[8px]">
        <ChevronUp className="h-[12px] w-[12px] text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[8px]">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        aria-label="Personal Access Token"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[12px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[12px] flex items-center gap-[8px]">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        aria-label="Design URL"
        className="mt-[12px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[12px] text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex items-center gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

const ChevronUp = ({ className = "h-[14px] w-[14px] text-[#8b9291]" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3.5 10.5 8 6l4.5 4.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-[14px] w-[14px] text-[#a4a4a3]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.4v3.8" />
    <path d="M8 5.1v.1" strokeWidth="1.6" />
  </svg>
);

export default TestCard;
