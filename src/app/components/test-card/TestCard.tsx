// SVG icon components for reusability and clarity
const SettingsIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Settings"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m0-6h6m-6 0H6" opacity="0" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 16, color = "#8b9291" }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7.5L6 4.5L9 7.5" />
  </svg>
);

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 14"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    aria-label="Information"
  >
    <circle cx="7" cy="7" r="6" />
    <path d="M7 6.5v3.5" strokeLinecap="round" />
    <circle cx="7" cy="4.5" r="0.5" fill={color} />
  </svg>
);

interface TestCardProps {
  showFooter?: boolean;
}

/**
 * TestCard component displays a UI magician agent configuration card.
 * Includes collapsible sections for design setup and access token management.
 */
export const TestCard = ({ showFooter = true }: TestCardProps): JSX.Element => {
  return (
    <div className="w-[508px] rounded bg-[#1e1e1a] p-10 pb-14 font-sans text-xs">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[22px] font-semibold leading-[26.63px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle - indicates expandable description section */}
      <div className="mb-16 flex items-center gap-3">
        <ChevronUpIcon size={16} color="#8b9291" />
        <span className="text-[17px] font-semibold leading-[20.57px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible section header for new design workflow */}
      <div className="mb-10 flex items-center gap-3">
        <ChevronUpIcon size={20} color="#b2b2b1" />
        <h2 className="text-[22px] font-semibold leading-[26.63px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Figma API token input - required for design file access */}
      <div className="mb-6">
        <div className="mb-4 flex items-center gap-2">
          <label className="text-[17px] font-semibold leading-[20.57px] text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon color="#a4a4a3" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-4 py-5">
          <span className="text-[16px] font-semibold leading-[19.36px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Figma file URL input - specifies which design to process */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <label className="text-[17px] font-semibold leading-[20.57px] text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon color="#a3a3a2" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-4 py-5">
          <span className="text-[16px] font-semibold leading-[19.36px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mb-20 flex gap-6">
        <button className="rounded bg-[#843a17] px-8 py-[18px] text-[19px] font-semibold leading-[22.99px] text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-8 py-[18px] text-[19px] font-semibold leading-[22.99px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h3 className="text-[21px] font-semibold leading-[25.41px] text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Optional footer with branding */}
      {showFooter && (
        <div className="mt-12 border-t border-gray-300 pt-3 text-center">
          <p className="text-sm text-gray-400">© AutonomyAI</p>
        </div>
      )}
    </div>
  );
};
