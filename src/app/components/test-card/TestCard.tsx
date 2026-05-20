// Helper component for info icon used by form labels
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="7.5" stroke={color} strokeWidth="1.5" />
    <path
      d="M9 7.5v5M9 5v.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Helper component for collapsible section chevron icons
const ChevronIcon = ({
  width,
  height,
  viewBox,
  pathD,
  stroke,
  strokeWidth,
}: {
  width: string;
  height: string;
  viewBox: string;
  pathD: string;
  stroke: string;
  strokeWidth: string;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d={pathD}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[380px] rounded bg-[#1C1D17] p-6 font-['Inter']">
      {/* Header with agent name and settings icon */}
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-[14px] font-bold leading-[16.34px] text-[#B5B5B5]">
          UI magician Agent
        </h1>
        {/* Settings gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#B5B5B5]"
        >
          <path
            d="M8 5a3 3 0 100 6 3 3 0 000-6z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M6.5 1h3l.5 1.5 1.5.5 1.5-.5L14 4l-.5 1.5.5 1.5-.5 1.5L12 10l-1.5-.5-1.5.5-.5 1.5h-3L5 10l-1.5-.5L2 10 1 8.5l.5-1.5L1 5.5 1.5 4 4 2.5l1.5.5L7 2l-.5-1z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Collapsed section showing truncated text */}
      <div className="mb-24 flex items-center gap-3">
        <ChevronIcon
          width="10"
          height="6"
          viewBox="0 0 10 6"
          pathD="M1 5l4-4 4 4"
          stroke="#8B9291"
          strokeWidth="1.5"
        />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expanded section header for adding new design */}
      <div className="mb-10 flex items-center gap-3">
        <ChevronIcon
          width="14"
          height="9"
          viewBox="0 0 14 9"
          pathD="M1 8l6-6 6 6"
          stroke="#B2B2B1"
          strokeWidth="2"
        />
        <span className="text-[14px] font-bold leading-[16.34px] text-[#B2B2B1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-7">
        <div className="mb-4 flex items-center gap-2">
          <label className="text-[12px] font-semibold leading-[13.92px] text-[#A4A4A3]">
            Personal Access Token
          </label>
          <InfoIcon color="#A4A4A3" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="h-[42px] w-full rounded border-2 border-[#929291] bg-[#272822] px-4 text-[12px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <label className="text-[12px] font-semibold leading-[13.92px] text-[#A3A3A2]">
            Design URL
          </label>
          <InfoIcon color="#A3A3A2" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="h-[42px] w-full rounded border border-[#A5ADAD] bg-[#272822] px-4 text-[11px] font-semibold leading-[12.71px] text-[#71726E] placeholder:text-[#71726E] focus:outline-none"
        />
      </div>

      {/* Action buttons for design processing */}
      <div className="mb-20 flex gap-6">
        <button className="h-[48px] w-[110px] rounded bg-[#843A17] px-6 py-3 text-[13px] font-bold text-[#8C8078] hover:opacity-90">
          Awesome
        </button>
        <button className="h-[48px] w-[110px] rounded bg-[#843A17] px-6 py-3 text-[13px] font-bold text-[#8C8078] hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <h2 className="text-[14px] font-bold leading-[16.34px] text-[#B0B0B0]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright */}
      <div className="border-gray-300 text-gray-400 mt-6 border-t pt-3 text-center text-[12px]">
        © AutonomyAI
      </div>
    </div>
  );
};
