/**
 * Info icon component for displaying help information.
 */
const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 4V8M7.5 10.5H7.51"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Chevron icon component for collapse/expand indicators.
 */
const ChevronIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * A settings card component for configuring a UI design agent.
 * Provides inputs for Figma access tokens and design URLs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-[#1a1a14] p-5 font-semibold">
      {/* Header with title and gear icon */}
      <div className="mb-12 flex items-start justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <path
            d="M7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7 10.5L11.5 10.5L11.3 10.8L10.7 11.9L10.5 12.2L10.8 12.4L11.9 13L12.2 13.2L12 13.5L11 15.1L10.8 15.4L10.5 15.2L9.4 14.6L9.1 14.4L8.8 14.6C8.5 14.8 8.2 15 7.9 15.1L7.6 15.2L7.5 15.5L7 16.7L6.9 17L6.6 17L4.6 17L4.3 17L4.2 16.7L3.7 15.5L3.6 15.2L3.3 15.1C3 15 2.7 14.8 2.4 14.6L2.1 14.4L1.8 14.6L0.7 15.2L0.4 15.4L0.2 15.1L-0.8 13.5L-1 13.2L-0.7 13L0.4 12.4L0.7 12.2L0.5 11.9L-0.1 10.8L-0.3 10.5L-0.6 10.5L-1.9 10.5L-2.2 10.5L-2.2 10.2L-2.2 8.2L-2.2 7.9L-1.9 7.9L-0.6 7.9L-0.3 7.9L-0.1 7.6L0.5 6.5L0.7 6.2L0.4 6L-0.7 5.4L-1 5.2L-0.8 4.9L0.2 3.3L0.4 3L0.7 3.2L1.8 3.8L2.1 4L2.4 3.8C2.7 3.6 3 3.4 3.3 3.3L3.6 3.2L3.7 2.9L4.2 1.7L4.3 1.4L4.6 1.4L6.6 1.4L6.9 1.4L7 1.7L7.5 2.9L7.6 3.2L7.9 3.3C8.2 3.4 8.5 3.6 8.8 3.8L9.1 4L9.4 3.8L10.5 3.2L10.8 3L11 3.3L12 4.9L12.2 5.2L11.9 5.4L10.8 6L10.5 6.2L10.7 6.5L11.3 7.6L11.5 7.9L11.8 7.9L13.1 7.9L13.4 7.9L13.4 8.2L13.4 10.2L13.4 10.5L13.1 10.5L11.7 10.5Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Subtitle row with chevron */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronIcon className="text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronIcon className="text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon className="text-[#a4a4a3]" />
      </div>

      {/* Token input field */}
      <div className="mb-10 h-[44px] w-[230px] border-2 border-[#a5adad] bg-[#272822] px-3 py-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon className="text-[#a3a3a2]" />
      </div>

      {/* URL input field */}
      <div className="mb-12 h-[44px] w-[230px] border-2 border-[#929291] bg-[#272822] px-3 py-3">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Action buttons */}
      <div className="mb-16 flex gap-4">
        <button className="h-[44px] w-[95px] rounded bg-[#843a17] px-4 py-3 text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="h-[44px] w-[95px] rounded bg-[#843a17] px-4 py-3 text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center text-[11.5px] text-[#a3a3a2]">
        © AutonomyAI
      </div>
    </div>
  );
};
