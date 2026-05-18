// Icon components extracted for reusability and clarity
const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="#B5B5B5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M13.5 8C13.5 8.3 13.4 8.6 13.3 8.9L14.8 10C14.9 10.1 15 10.3 14.9 10.5L13.4 13.1C13.3 13.3 13.1 13.3 12.9 13.3L11.1 12.6C10.7 12.9 10.3 13.1 9.8 13.3L9.5 15.2C9.5 15.4 9.3 15.5 9.1 15.5H6.1C5.9 15.5 5.7 15.4 5.7 15.2L5.4 13.3C5 13.1 4.5 12.9 4.1 12.6L2.3 13.3C2.1 13.4 1.9 13.3 1.8 13.1L0.3 10.5C0.2 10.3 0.3 10.1 0.4 10L1.9 8.9C1.8 8.6 1.7 8.3 1.7 8C1.7 7.7 1.8 7.4 1.9 7.1L0.4 6C0.3 5.9 0.2 5.7 0.3 5.5L1.8 2.9C1.9 2.7 2.1 2.7 2.3 2.7L4.1 3.4C4.5 3.1 4.9 2.9 5.4 2.7L5.7 0.8C5.7 0.6 5.9 0.5 6.1 0.5H9.1C9.3 0.5 9.5 0.6 9.5 0.8L9.8 2.7C10.3 2.9 10.7 3.1 11.1 3.4L12.9 2.7C13.1 2.6 13.3 2.7 13.4 2.9L14.9 5.5C15 5.7 14.9 5.9 14.8 6L13.3 7.1C13.4 7.4 13.5 7.7 13.5 8Z"
      stroke="#B5B5B5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
  viewBox,
  path,
  stroke,
  strokeWidth,
}: {
  width: number;
  height: number;
  viewBox: string;
  path: string;
  stroke: string;
  strokeWidth: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={path}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <path
      d="M7.5 10.5V7.5M7.5 4.5H7.506"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="min-h-[508px] w-[254px] bg-[#1C1D17] p-5 font-['Inter']">
      {/* Header with agent name and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsible section showing truncated description */}
      <div className="mt-[34px] flex items-center gap-2">
        <ChevronUpIcon
          width={8}
          height={5}
          viewBox="0 0 8 5"
          path="M1 4L4 1L7 4"
          stroke="#8B9291"
          strokeWidth={1.5}
        />
        <p className="truncate text-[11.5px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="mt-[76px] flex items-center gap-2">
        <ChevronUpIcon
          width={12}
          height={8}
          viewBox="0 0 12 8"
          path="M2 7L6 2L10 7"
          stroke="#B2B2B1"
          strokeWidth={2}
        />
        <h2 className="text-[13.5px] font-semibold text-[#B2B2B1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#A4A4A3]">
            Personal Access Token
          </label>
          <InfoIcon color="#A4A4A3" />
        </div>
        <div className="flex h-[36px] w-[211px] items-center border border-[#A5ADAD] bg-[#272822] px-3">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#A3A3A2]">
            Design URL
          </label>
          <InfoIcon color="#A3A3A2" />
        </div>
        <div className="flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-3">
          <span className="text-[10.5px] font-semibold text-[#71726E]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons for submitting the form */}
      <div className="mt-6 flex gap-4">
        <button className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <h3 className="mt-10 text-[13.5px] font-semibold text-[#B0B0B0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-4 border-t pt-3 text-center">
        <p className="text-[11.5px] text-[#B0B0B0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
