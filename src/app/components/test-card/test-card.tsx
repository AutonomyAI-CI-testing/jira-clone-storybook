// Gear/settings icon component
const GearIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M16.25 10C16.25 9.5 16.1 9.1 15.9 8.75L17.5 7.5L16.25 5L14.4 5.75C14 5.4 13.5 5.1 13 4.9L12.5 3H10L9.5 4.9C9 5.1 8.5 5.4 8.1 5.75L6.25 5L5 7.5L6.6 8.75C6.4 9.1 6.25 9.5 6.25 10C6.25 10.5 6.4 10.9 6.6 11.25L5 12.5L6.25 15L8.1 14.25C8.5 14.6 9 14.9 9.5 15.1L10 17H12.5L13 15.1C13.5 14.9 14 14.6 14.4 14.25L16.25 15L17.5 12.5L15.9 11.25C16.1 10.9 16.25 10.5 16.25 10Z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

// Chevron up icon component (used for collapsible sections)
const ChevronUpIcon = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 7L6 2L1 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Info icon component (used for field tooltips)
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7"
      cy="7"
      r="6"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M7 10V7M7 5H7.01"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[300px] min-h-[580px] bg-[#1C1D17] p-6 flex flex-col gap-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#b5b5b5] text-[18px] font-semibold font-sans">
          UI magician Agent
        </h1>
        <GearIcon color="#b5b5b5" />
      </div>

      {/* Collapsible section showing current task status */}
      <div className="flex items-center gap-3 mt-2">
        <ChevronUpIcon width={14} height={10} color="#8b9291" />
        <span className="text-[#8b9291] text-[14px] font-semibold font-sans">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-3 mt-12">
        <ChevronUpIcon width={16} height={12} color="#b2b2b1" />
        <h2 className="text-[#b2b2b1] text-[17px] font-semibold font-sans">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field - displays masked Figma API token */}
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex items-center gap-1.5">
          <label
            className="text-[#a4a4a3] text-[14px] font-semibold font-sans"
            htmlFor="token"
          >
            Personal Access Token
          </label>
          <InfoIcon color="#a4a4a3" />
        </div>
        <div
          className="bg-[#272822] border border-[#a5adad] px-3 py-4 text-[#737470] text-[13px] font-semibold font-sans"
          id="token"
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL Field - Figma file URL input */}
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex items-center gap-1.5">
          <label
            className="text-[#a3a3a2] text-[14px] font-semibold font-sans"
            htmlFor="url"
          >
            Design URL
          </label>
          <InfoIcon color="#a3a3a2" />
        </div>
        <div
          className="bg-[#272822] border-2 border-[#929291] px-3 py-4 text-[#71726e] text-[13px] font-semibold font-sans"
          id="url"
        >
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-8">
        <button
          type="button"
          className="bg-[#843A17] text-[#8c8078] text-[14px] font-semibold font-sans px-6 py-4"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#843A17] text-[#8c8078] text-[14px] font-semibold font-sans px-6 py-4"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-10">
        <h3 className="text-[#b0b0b0] text-[17px] font-semibold font-sans">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="pt-3 border-t border-gray-300 text-center mt-auto">
        <span className="text-[#b5b5b5] text-[12px] font-sans">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
