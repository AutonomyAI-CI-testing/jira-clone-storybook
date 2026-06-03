// Helper component for info icons that appear next to labels
const InfoIcon = ({ color }: { color: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1" />
    <text
      x="7"
      y="10"
      textAnchor="middle"
      fontSize="10"
      fill={color}
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

// Helper component for collapsible section chevron icons
const ChevronIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M3 7.5L6 4.5L9 7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="flex items-center justify-center p-8">
      {/* Main card with dark theme styling matching the UI magician agent interface */}
      <div className="font-sans w-[254px] rounded-lg bg-[#1a1a17] p-5">
        {/* Header with agent name and settings icon */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
            UI magician Agent
          </h1>
          {/* Settings icon with 5-dot compass pattern */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#b5b5b5]"
          >
            <circle
              cx="12"
              cy="12"
              r="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="4" r="1.5" fill="currentColor" />
            <circle cx="12" cy="20" r="1.5" fill="currentColor" />
            <circle cx="4" cy="12" r="1.5" fill="currentColor" />
            <circle cx="20" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Collapsible section showing truncated description */}
        <div className="mb-10 flex items-center gap-2">
          <ChevronIcon color="#8b9291" />
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section with chevron indicator */}
        <div className="mb-6 flex items-center gap-2">
          <ChevronIcon color="#b2b2b1" />
          <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token input field with info icon for tooltips */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-1.5">
            <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
              Personal Access Token
            </label>
            <InfoIcon color="#a4a4a3" />
          </div>
          <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
            <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL input field with info icon */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-1.5">
            <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
              Design URL
            </label>
            <InfoIcon color="#a3a3a2" />
          </div>
          <div className="rounded border border-[#929291] bg-[#272822] px-3 py-2.5">
            <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons with equal width distribution */}
        <div className="mb-10 flex gap-3">
          <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
            Prepare
          </button>
        </div>

        {/* Section header for recent activity */}
        <div>
          <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
