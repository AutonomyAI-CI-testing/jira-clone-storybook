/**
 * Settings gear icon for the header
 */
const SettingsIcon = ({ className }: { className: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 10a2 2 0 100-4 2 2 0 000 4z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M14 8a6 6 0 01-.343 2l1.207.698a7.5 7.5 0 000-5.396L13.657 6A6 6 0 0114 8zM6 13.657a6 6 0 01-2-.343l-.698 1.207a7.5 7.5 0 005.396 0L8 13.314A6 6 0 016 13.657zM2 8a6 6 0 01.343-2l-1.207-.698a7.5 7.5 0 000 5.396L2.343 10A6 6 0 012 8zM10 2.343a6 6 0 01-2 .343l-.698-1.207a7.5 7.5 0 015.396 0L10 2.686A6 6 0 0110 2.343z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

/**
 * Chevron up icon for collapsible sections
 */
const ChevronUpIcon = ({
  className,
  width,
  height,
  viewBox,
  path,
}: {
  className: string;
  width: string;
  height: string;
  viewBox: string;
  path: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d={path}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon for field labels
 */
const InfoIcon = ({ className }: { className: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7.5 6.5v4M7.5 4.5h.01"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 py-5 font-sans text-[11.5px] font-semibold">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
          UI magician Agent
        </span>
        <SettingsIcon className="text-[#B5B5B5]" />
      </div>

      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon
          className="text-[#8B9291]"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          path="M1 7l5-5 5 5"
        />
        <span className="leading-[13.92px] text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon
          className="text-[#B2B2B1]"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          path="M1 5l4-4 4 4"
        />
        <span className="text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
          Add New Design
        </span>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[12.5px] leading-[15px] text-[#A4A4A3]">Personal Access Token</span>
          <InfoIcon className="text-[#A4A4A3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-[42px] w-full rounded border border-[#A5ADAD] bg-[#272822] px-3 leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[12.5px] leading-[15px] text-[#A3A3A2]">Design URL</span>
          <InfoIcon className="text-[#A3A3A2]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="h-[43px] w-full rounded border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#71726E] placeholder:text-[#71726E]"
        />
      </div>

      <div className="mb-16 flex gap-3">
        <button className="h-[43px] w-[92px] rounded bg-[#843A17] text-[12px] leading-[14.5px] text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[43px] w-[92px] rounded bg-[#843A17] text-[12px] leading-[14.5px] text-[#8C8078]">
          Prepare
        </button>
      </div>

      <div>
        <span className="text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
          Recent Breakdowns
        </span>
      </div>

      <div className="mt-auto border-t border-gray-300 pt-3 text-center">
        <span className="text-[11.5px] text-[#B5B5B5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
