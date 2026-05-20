// Icon components extracted for better readability and potential reuse
const SparkleIcon = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M7 0L8.5 1.5L7 3L5.5 1.5L7 0ZM13 7L14.5 8.5L13 10L11.5 8.5L13 7ZM1 7L2.5 8.5L1 10L-0.5 8.5L1 7ZM7 13L8.5 14.5L7 16L5.5 14.5L7 13Z"
      fill="#b5b5b5"
    />
    <circle cx="7" cy="8" r="2.5" fill="#b5b5b5" />
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M4 0L8 5H0L4 0Z" fill={color} />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Information"
  >
    <circle cx="9" cy="9" r="7.5" stroke={color} strokeWidth="1" />
    <text
      x="9"
      y="13"
      fontSize="12"
      fill={color}
      textAnchor="middle"
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[270px] rounded-lg bg-[#1a1a17] p-6 font-sans">
      {/* Header with agent title and icon */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-semibold text-[#b5b5b5]">UI magician Agent</h2>
        <SparkleIcon />
      </div>

      {/* Subtitle showing truncated description */}
      <div className="mb-6 flex items-center gap-1">
        <ChevronUpIcon color="#8b9291" />
        <span className="truncate text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section title for design input form */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon color="#b2b2b1" />
        <h3 className="font-semibold text-[#b2b2b1]">Add New Design</h3>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-1.5">
          <label className="text-sm font-semibold text-[#a3a3a2]">
            Personal Access Token
          </label>
          <InfoIcon color="#a3a3a2" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-3 text-sm text-[#737470]">
          figd_xxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL input field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-1.5">
          <label className="text-sm font-semibold text-[#a4a4a3]">
            Design URL
          </label>
          <InfoIcon color="#a4a4a3" />
        </div>
        <div className="rounded border border-[#929291] bg-[#272822] px-3 py-3 text-sm text-[#71726e]">
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Primary action buttons */}
      <div className="mb-8 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-3 text-sm font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-3 text-sm font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section title for breakdown history */}
      <div>
        <h3 className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-gray-600">© AutonomyAI</p>
      </div>
    </div>
  );
};
