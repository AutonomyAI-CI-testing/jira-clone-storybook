/**
 * Chevron Up Icon - used for collapsed/expanded states
 */
const ChevronUpIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={color}
  >
    <path d="M2 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/**
 * Settings/Gear Icon - used in the header for configuration options
 */
const GearIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
  </svg>
);

/**
 * Info Icon - used as a tooltip indicator for form labels
 */
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={color}
  >
    <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2" />
    <text
      x="10"
      y="13"
      textAnchor="middle"
      fontSize="12"
      fill="currentColor"
      fontWeight="700"
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="bg-black text-[#b5b5b5] p-6 w-full max-w-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed Section - shows a truncated previous design */}
      <div className="mb-24">
        <div className="flex items-center gap-2">
          <ChevronUpIcon color="text-[#8b9291]" />
          <span className="text-[11.5px] font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design Section - expandable section for new design input */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <ChevronUpIcon color="text-[#b2b2b1]" />
          <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-[11.5px] font-bold text-[#a4a4a3] mb-3">
          Personal Access Token
          <InfoIcon color="text-[#a4a4a3]" />
        </label>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-4 py-5 bg-[#1a1a1a] border-[1.5px] border-[#555550] rounded text-[10.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none focus:border-[#8b8b88]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-12">
        <label className="flex items-center gap-2 text-[11.5px] font-bold text-[#a3a3a2] mb-3">
          Design URL
          <InfoIcon color="text-[#a3a3a2]" />
        </label>
        <input
          type="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full px-4 py-5 bg-[#1a1a1a] border-[1.5px] border-[#555550] rounded text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none focus:border-[#8b8b88]"
        />
      </div>

      {/* Action Buttons - allows user to submit the form or prepare the design */}
      <div className="flex gap-6 mb-32">
        <button className="flex-1 px-6 py-3 bg-[#7B3F00] text-[#a08970] text-[11.5px] font-semibold rounded hover:bg-[#6a3700] active:bg-[#5a2f00] transition-colors">
          Awesome
        </button>
        <button className="flex-1 px-6 py-3 bg-[#7B3F00] text-[#a08970] text-[11.5px] font-semibold rounded hover:bg-[#6a3700] active:bg-[#5a2f00] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-20">
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-300 pt-3 text-center text-[11.5px] font-semibold text-[#b5b5b5]">
        © AutonomyAI
      </div>
    </div>
  );
};
