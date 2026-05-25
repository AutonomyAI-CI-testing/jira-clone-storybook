// Button styling - extracted to avoid duplication between "Awesome" and "Prepare" buttons
const ACTION_BUTTON_CLASSES =
  "flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#9d4620] active:bg-[#6d2e12]";

// Input field styling - applied consistently to both token and URL inputs
const INPUT_BASE_CLASSES =
  "w-full bg-[#272822] px-3 py-2 text-[11.5px] font-semibold";

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-[#000000] p-5">
      {/* Card Header: Title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section for previous breakdown */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - form for configuring a new design */}
      <div className="mb-8">
        {/* Section header */}
        <div className="mb-8 flex items-center gap-2">
          <ChevronUpIcon />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token input field */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={`${INPUT_BASE_CLASSES} border border-[#a5adad] text-[#737470] placeholder-[#737470]`}
            aria-label="Personal Access Token input"
          />
        </div>

        {/* Design URL input field */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={`${INPUT_BASE_CLASSES} border-2 border-[#929291] text-[#71726e] placeholder-[#71726e]`}
            aria-label="Design URL input"
          />
        </div>

        {/* Action buttons: Awesome and Prepare */}
        <div className="flex gap-4">
          <button className={ACTION_BUTTON_CLASSES} aria-label="Awesome action">
            Awesome
          </button>
          <button className={ACTION_BUTTON_CLASSES} aria-label="Prepare action">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section - displays list of past breakdowns (content not shown) */}
      <div>
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Card Footer: Copyright info */}
      <div className="mt-8 border-t border-[#d1d5db] pt-3 text-center">
        <p className="text-xs text-[#9ca3af]">© AutonomyAI</p>
      </div>
    </div>
  );
};

/**
 * Icon Components
 * Small SVG icons used throughout the card for visual indicators and interactions
 */

/**
 * ChevronUpIcon - Visual indicator for expanded/collapsible sections
 */
const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Collapse section"
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="#b2b2b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * InfoIcon - Provides context-sensitive help and information indicators
 */
const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
    <text
      x="7.5"
      y="10"
      textAnchor="middle"
      fontSize="10"
      fontWeight="bold"
      fill="#a3a3a2"
      dominantBaseline="middle"
    >
      i
    </text>
  </svg>
);

/**
 * SettingsIcon - Represents configuration and settings access
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1" fill="none" />
    <circle cx="8" cy="2.5" r="1" fill="#b5b5b5" />
    <circle cx="8" cy="13.5" r="1" fill="#b5b5b5" />
    <circle cx="2.5" cy="8" r="1" fill="#b5b5b5" />
    <circle cx="13.5" cy="8" r="1" fill="#b5b5b5" />
  </svg>
);
