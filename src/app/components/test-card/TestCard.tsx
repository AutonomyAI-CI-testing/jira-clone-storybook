// Icon components extracted for clarity and reusability
const SettingsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#B5B5B5]"
    aria-label="Settings"
  >
    <path
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M9.5 2h5l.5 2 2 .5 1.5-1.5 3.5 3.5-1.5 1.5.5 2 2 .5v5l-2 .5-.5 2 1.5 1.5-3.5 3.5-1.5-1.5-2 .5-.5 2h-5l-.5-2-2-.5-1.5 1.5-3.5-3.5 1.5-1.5-.5-2-2-.5v-5l2-.5.5-2-1.5-1.5 3.5-3.5 1.5 1.5 2-.5.5-2z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1.5 6.5l4.5-4.5 4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpLargeIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M2 7.5l5-5 5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="More information"
  >
    <circle
      cx="8"
      cy="8"
      r="7"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8 11v-3M8 6h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component displays a Figma design import configuration panel.
 * 
 * This is a static UI card showing:
 * - Agent configuration header with settings
 * - Collapsible sections for designs
 * - Token and URL input fields
 * - Action buttons (Awesome, Prepare)
 * - Recent breakdowns section
 * 
 * Design notes:
 * - Dark theme with specific brand colors (#1C1D17 background)
 * - Inter font with semibold weight throughout
 * - Fixed width (270px) for consistent card sizing
 * - Vertical spacing uses specific margin values for visual hierarchy
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[270px] rounded bg-[#1C1D17] p-5 font-['Inter'] font-semibold">
      {/* Header with agent name and settings access */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible hint text - shows truncated description */}
      <div className="mb-20 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8B9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design collapsible section */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpLargeIcon className="text-[#B2B2B1]" />
        <h3 className="text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field with info tooltip */}
      <div className="mb-2 flex items-center gap-2">
        <label className="text-[11.5px] leading-[13.92px] text-[#A4A4A3]">
          Personal Access Token
        </label>
        <InfoIcon className="text-[#A4A4A3]" />
      </div>

      {/* Token input displaying masked placeholder */}
      <div className="mb-6 rounded border border-[#A5ADAD] bg-[#272822] px-5 py-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL field with info tooltip */}
      <div className="mb-2 flex items-center gap-2">
        <label className="text-[11.5px] leading-[13.92px] text-[#A3A3A2]">
          Design URL
        </label>
        <InfoIcon className="text-[#A3A3A2]" />
      </div>

      {/* URL input with Figma URL placeholder */}
      <div className="mb-10 rounded border-2 border-[#929291] bg-[#272822] px-5 py-3">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726E]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Action buttons - likely disabled state based on muted colors */}
      <div className="mb-20 flex gap-5">
        <div className="flex h-[40px] w-[85px] items-center justify-center rounded-md bg-[#843A17]">
          <span className="text-[11.5px] leading-[13.92px] text-[#8C8078]">
            Awesome
          </span>
        </div>
        <div className="flex h-[40px] w-[85px] items-center justify-center rounded-md bg-[#843A17]">
          <span className="text-[11.5px] leading-[13.92px] text-[#8C8078]">
            Prepare
          </span>
        </div>
      </div>

      {/* Recent Breakdowns section header */}
      <h3 className="text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="text-[11.5px] leading-[13.92px] text-[#B5B5B5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
