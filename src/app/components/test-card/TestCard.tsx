/**
 * TestCard Component
 * 
 * A card interface for the UI magician agent that displays configuration fields
 * for design tokens and URLs. Features a dark theme with precise spacing and
 * typography matching the design specification.
 */

// Info icon SVG component - reused across multiple form fields
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fontWeight="600"
      textAnchor="middle"
      fill={color}
    >
      i
    </text>
  </svg>
);

// Triangle icon SVG component - used as visual indicators
const TriangleIcon = ({ width, height, fill }: { width: number; height: number; fill: string }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M${width / 2} 0L${width} ${height}H0L${width / 2} 0Z`}
      fill={fill}
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div className="flex w-[254px] min-h-[508px] flex-col bg-black p-5 text-white">
      {/* Header Section - Agent title with settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Settings"
        >
          <path
            d="M7 10C8.1 10 9 9.1 9 8C9 6.9 8.1 6 7 6C5.9 6 5 6.9 5 8C5 9.1 5.9 10 7 10ZM13 8C13 7.5 13.4 7 13.9 6.9L14 6.8C14 6.3 13.9 5.8 13.8 5.3L13.7 5.2C13.3 5.1 12.9 4.7 12.9 4.2C12.9 3.9 13 3.6 13.2 3.4L13.3 3.2C13.1 2.8 12.8 2.4 12.5 2.1L12.3 2.2C12.1 2.4 11.8 2.5 11.5 2.5C11 2.5 10.6 2.1 10.5 1.7L10.4 1.6C9.9 1.5 9.4 1.4 8.9 1.4L8.8 1.5C8.7 2 8.3 2.4 7.8 2.4C7.5 2.4 7.2 2.3 7 2.1L6.8 2C6.4 2.2 6 2.5 5.7 2.8L5.8 3C6 3.2 6.1 3.5 6.1 3.8C6.1 4.3 5.7 4.7 5.3 4.8L5.2 4.9C5.1 5.4 5 5.9 5 6.4L5.1 6.5C5.6 6.6 6 7 6 7.5C6 7.8 5.9 8.1 5.7 8.3L5.6 8.5C5.8 8.9 6.1 9.3 6.4 9.6L6.6 9.5C6.8 9.3 7.1 9.2 7.4 9.2C7.9 9.2 8.3 9.6 8.4 10L8.5 10.1C9 10.2 9.5 10.3 10 10.3L10.1 10.2C10.2 9.7 10.6 9.3 11.1 9.3C11.4 9.3 11.7 9.4 11.9 9.6L12.1 9.7C12.3 9.3 12.6 8.9 12.9 8.6L12.8 8.4C12.6 8.2 12.5 7.9 12.5 7.6C12.5 7.1 12.9 6.7 13.3 6.6L13.4 6.5C13.5 6.9 13.5 7.4 13.5 7.9C13.5 8 13.5 8 13.5 8.1C13 8.1 12.6 8.5 12.6 9C12.6 9.3 12.7 9.6 12.9 9.8L13 10C12.8 10.4 12.5 10.8 12.2 11.1L12 11C11.8 10.8 11.5 10.7 11.2 10.7C10.7 10.7 10.3 11.1 10.2 11.5L10.1 11.6C9.6 11.7 9.1 11.8 8.6 11.8L8.5 11.7C8.4 11.2 8 10.8 7.5 10.8C7.2 10.8 6.9 10.9 6.7 11.1L6.5 11.2C6.1 11 5.7 10.7 5.4 10.4L5.5 10.2C5.7 10 5.8 9.7 5.8 9.4C5.8 8.9 5.4 8.5 5 8.4L4.9 8.3C4.8 7.8 4.7 7.3 4.7 6.8L4.8 6.7C5.3 6.6 5.7 6.2 5.7 5.7C5.7 5.4 5.6 5.1 5.4 4.9L5.3 4.7C5.5 4.3 5.8 3.9 6.1 3.6L6.3 3.7C6.5 3.9 6.8 4 7.1 4C7.6 4 8 3.6 8.1 3.2L8.2 3.1C8.7 3 9.2 2.9 9.7 2.9L9.8 3C9.9 3.5 10.3 3.9 10.8 3.9C11.1 3.9 11.4 3.8 11.6 3.6L11.8 3.5C12 3.9 12.3 4.3 12.6 4.6L12.5 4.8C12.3 5 12.2 5.3 12.2 5.6C12.2 6.1 12.6 6.5 13 6.6L13.1 6.7C13 7.1 13 7.6 13 8Z"
            fill="#b5b5b5"
          />
        </svg>
      </div>

      {/* Subtitle Row - Truncated description */}
      <div className="mt-4 flex items-center gap-2">
        <TriangleIcon width={8} height={5} fill="#8b9291" />
        <p className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section - Primary action heading */}
      <div className="mt-12 flex items-center gap-2">
        <TriangleIcon width={12} height={8} fill="#b2b2b1" />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field - Figma API authentication */}
      <div className="mt-10">
        <div className="flex items-center gap-1">
          <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon color="#a4a4a3" />
        </div>
        <div className="mt-2 flex h-[36px] items-center rounded border border-[#a5adad] bg-[#272822] px-4">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL Field - Figma file URL input */}
      <div className="mt-5">
        <div className="flex items-center gap-1">
          <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon color="#a3a3a2" />
        </div>
        <div className="mt-2 flex h-[37px] items-center rounded border-2 border-[#929291] bg-[#272822] px-4">
          <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-12">
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer Section - Copyright notice, uses mt-auto to push to bottom */}
      <div className="mt-auto border-t border-gray-300 pt-3">
        <p className="text-center text-xs text-gray-400">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
