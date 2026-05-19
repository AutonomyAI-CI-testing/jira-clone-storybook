/**
 * Atomic orbit icon representing configuration or agent settings
 */
const AtomIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="text-[#A5ADAD]"
  >
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(60 8 8)"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(120 8 8)"
    />
  </svg>
);

/**
 * Chevron icon for collapsible sections
 * @param color - Stroke color for the chevron
 */
const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M9 7.5L6 4.5L3 7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Information icon for help tooltips
 * @param color - Stroke color for the icon
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" stroke={color} strokeWidth="1" fill="none" />
    <path
      d="M6 5.5V8.5M6 4V3.5"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded-md bg-[#1C1D17] p-5">
      {/* Header with agent name and settings icon */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold text-[#B5B5B5]">
          UI magician Agent
        </h2>
        <AtomIcon />
      </div>

      {/* Collapsible hint text - shows truncated description */}
      <div className="mb-4 flex items-center gap-1.5">
        <ChevronUpIcon color="#8B9291" />
        <p className="text-[11.5px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Main form section for adding new design */}
      <div className="mb-4">
        <div className="mb-3 flex items-center gap-1.5">
          <ChevronUpIcon color="#B2B2B1" />
          <h3 className="text-[13.5px] font-semibold text-[#B2B2B1]">
            Add New Design
          </h3>
        </div>

        {/* Figma personal access token input */}
        <div className="mb-3">
          <div className="mb-1.5 flex items-center gap-1">
            <label className="text-[11.5px] font-semibold text-[#A4A4A3]">
              Personal Access Token
            </label>
            <InfoIcon color="#A4A4A3" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded border border-[#A5ADAD] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] outline-none"
          />
        </div>

        {/* Figma design URL input */}
        <div className="mb-4">
          <div className="mb-1.5 flex items-center gap-1">
            <label className="text-[11.5px] font-semibold text-[#A4A4A3]">
              Design URL
            </label>
            <InfoIcon color="#A4A4A3" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] text-[#71726E] outline-none"
          />
        </div>

        {/* Primary action buttons */}
        <div className="flex gap-2">
          <button className="flex-1 rounded-sm bg-[#843A17] px-4 py-2 text-[11.5px] font-semibold text-[#8C8078]">
            Awesome
          </button>
          <button className="flex-1 rounded-sm bg-[#843A17] px-4 py-2 text-[11.5px] font-semibold text-[#8C8078]">
            Prepare
          </button>
        </div>
      </div>

      {/* Section header for recent activity */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] text-[#B0B0B0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
