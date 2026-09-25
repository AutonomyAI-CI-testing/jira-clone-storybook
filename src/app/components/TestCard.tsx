const ChevronUpIcon = ({
  width,
  height,
  className = "",
}: {
  width: number;
  height: number;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5M12 8h.01" />
  </svg>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#0b0b0b] px-5 pt-5 pb-[62px] font-['Inter',sans-serif]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <svg
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
        </svg>
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon width={8} height={5} className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[75px] flex items-center gap-[5px]">
        <ChevronUpIcon width={12} height={8} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[11px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
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

      {/* Recent Breakdowns */}
      <span className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}

export default TestCard;
