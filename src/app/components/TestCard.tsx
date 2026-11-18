const SettingsIcon = () => (
  <svg
    viewBox="0 0 14 16"
    className="h-[16px] w-[14px] shrink-0 text-[#B5B5B5]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="2.6" />
    <path
      d="M7 1.2v1.7M7 13.1v1.7M1.6 8h1.7M10.7 8h1.7M3.2 4.2l1.2 1.2M9.6 10.6l1.2 1.2M3.2 11.8l1.2-1.2M9.6 5.4l1.2-1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    className="h-[15px] w-[15px] shrink-0 text-[#B5B5B5]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.8v3.9" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1C1D17] px-[20px] pt-[20px] pb-[20px] font-[Inter,sans-serif] text-[13.5px] leading-[16.34px] font-semibold text-[#B5B5B5]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
        UI magician Agent
      </span>
      <SettingsIcon />
    </div>

    {/* Collapsed section row */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon className="ml-[3px] h-[5px] w-[8px] shrink-0 text-[#B5B5B5]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8B9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUpIcon className="ml-[6px] h-[8px] w-[12px] shrink-0 text-[#B5B5B5]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[31px] flex items-center gap-[16px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#A4A4A3]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-[211px] border border-[#A5ADAD] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] font-semibold text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-[12px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#A3A3A2]">
        Design URL
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[12.71px] font-semibold text-[#71726E] placeholder:text-[#71726E]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] text-[11.5px] leading-[13.92px] font-semibold text-[#8C8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] text-[11.5px] leading-[13.92px] font-semibold text-[#8C8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
