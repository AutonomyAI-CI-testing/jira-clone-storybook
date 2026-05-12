// Unused import removed - no conditional class logic needed

// Info icon used for help tooltips throughout the card
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.2" fill="none" />
    <text
      x="8"
      y="11.5"
      fontSize="10"
      fill={color}
      textAnchor="middle"
      fontFamily="Inter"
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

// Atom/electron icon for settings button
const SettingsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="1.5" fill="#b5b5b5" />
    {/* Three orbits at 60° intervals create the atom visual */}
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="#b5b5b5"
      strokeWidth="0.8"
      fill="none"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="#b5b5b5"
      strokeWidth="0.8"
      fill="none"
      transform="rotate(60 8 8)"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="#b5b5b5"
      strokeWidth="0.8"
      fill="none"
      transform="rotate(120 8 8)"
    />
  </svg>
);

// Up chevron for collapsed sections
const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 5L4 1L7 5" stroke={color} strokeWidth="1.5" fill="none" />
  </svg>
);

// Down chevron for expandable sections
const ChevronDownIcon = ({ color }: { color: string }) => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke={color} strokeWidth="1.5" fill="none" />
  </svg>
);

export const TestCard = () => {
  return (
    <div className="border-gray-300 w-[470px] border bg-[#2b2b2b] p-0 font-primary text-font">
      {/* Header Section */}
      <div className="flex items-center justify-between px-5 py-6">
        <h1 className="text-[18px] font-bold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          className="flex h-[24px] w-[24px] items-center justify-center"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="px-5 pb-8 pt-4">
        {/* Collapsed section showing truncated text - clicking would expand */}
        <button className="flex items-center gap-1.5 text-[11.5px] font-semibold text-[#8b9291]">
          <ChevronUpIcon color="#8b9291" />
          <span>From entire frame to a singl...</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="px-[2px] pb-10">
        {/* Expandable accordion section for adding new designs */}
        <button className="flex items-center gap-2 px-5 py-4 text-[16px] font-semibold text-[#b2b2b1]">
          <ChevronDownIcon color="#b2b2b1" />
          <span>Add New Design</span>
        </button>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 pb-7">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <button
            aria-label="Info"
            className="flex h-[16px] w-[16px] items-center justify-center"
          >
            <InfoIcon color="#a4a4a3" />
          </button>
        </div>
        {/* Display field showing masked token format - actual input would be separate */}
        <div className="w-full rounded-[3px] border-2 border-[#929291] bg-transparent px-4 py-3 text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 pb-10">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <button
            aria-label="Info"
            className="flex h-[16px] w-[16px] items-center justify-center"
          >
            <InfoIcon color="#a3a3a2" />
          </button>
        </div>
        {/* Display field showing URL placeholder format */}
        <div className="w-full rounded-[3px] border-2 border-[#929291] bg-transparent px-4 py-3 text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Primary action buttons with hover and active states */}
      <div className="flex gap-3 px-5 pb-20">
        <button className="flex-1 rounded-[4px] bg-[#843a17] px-6 py-[17px] text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#9a4319] active:bg-[#6e3214]">
          Awesome
        </button>
        <button className="flex-1 rounded-[4px] bg-[#843a17] px-6 py-[17px] text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#9a4319] active:bg-[#6e3214]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
