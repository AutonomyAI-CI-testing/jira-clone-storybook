/**
 * Settings icon - gear/cog with center circle
 */
const SettingsIcon = ({ color = "#b5b5b5" }: { color?: string }) => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M12 7L13 9L11 10L11.5 12L9.5 12.5L8.5 14.5L7 13.5L5.5 14.5L4.5 12.5L2.5 12L3 10L1 9L2 7L1 5L3 4L2.5 2L4.5 1.5L5.5 -0.5L7 0.5L8.5 -0.5L9.5 1.5L11.5 2L11 4L13 5L12 7Z"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

/**
 * Chevron icon - pointing up to indicate collapsed state
 */
const ChevronUpIcon = ({ color = "#75817f" }: { color?: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M1 4L4 1L7 4" stroke={color} strokeWidth="1.5" />
  </svg>
);

/**
 * Chevron down icon - pointing down to indicate expandable section
 */
const ChevronDownIcon = ({ color = "#b2b2b1" }: { color?: string }) => (
  <svg
    width="16"
    height="11"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M2 7L6 3L10 7" stroke={color} strokeWidth="1.5" />
  </svg>
);

/**
 * Info icon - circle with "i" mark for help/tooltip
 */
const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" fill="none" />
    <path
      d="M7.5 4.5V5.5M7.5 7V10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component - Dark-themed configuration card for UI magician agent
 * Includes input fields for Figma personal access token and design URL,
 * collapsible sections, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-sm bg-[#1a1a17] p-5 font-sans">
      {/* Header with title and settings button */}
      <div className="mb-8 flex items-start justify-between">
        <h1
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </h1>
        <button aria-label="Settings" className="-mt-1 mr-0 flex items-center justify-center">
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsed section showing preview text */}
      <div className="mb-16 flex items-center gap-2">
        <ChevronUpIcon color="#75817f" />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#75817f" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable "Add New Design" section header */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronDownIcon color="#b2b2b1" />
        <span
          className="text-[13.5px] font-bold leading-[16.34px]"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input with info tooltip */}
      <div className="mb-3 flex items-center gap-1.5">
        <label
          htmlFor="personal-token"
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#a4a4a3" }}
        >
          Personal Access Token
        </label>
        <InfoIcon color="#a4a4a3" />
      </div>
      <input
        id="personal-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-10 w-full rounded border px-3 py-3.5 text-[11.5px] font-semibold leading-[13.92px] outline-none"
        style={{
          backgroundColor: "#272822",
          borderColor: "#a5adad",
          borderWidth: "2px",
          color: "#737470",
        }}
      />

      {/* Design URL input with info tooltip */}
      <div className="mb-3 flex items-center gap-1.5">
        <label
          htmlFor="design-url"
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#a3a3a2" }}
        >
          Design URL
        </label>
        <InfoIcon color="#a3a3a2" />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-12 w-full rounded px-3 py-3.5 text-[11.5px] font-semibold leading-[13.92px] outline-none"
        style={{
          backgroundColor: "#272822",
          borderColor: "#929291",
          borderWidth: "2px",
          color: "#71726e",
        }}
      />

      {/* Action buttons for processing the design */}
      <div className="mb-20 flex gap-6">
        <button
          className="flex-1 rounded px-4 py-4 text-[13px] font-semibold leading-[15.73px]"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-4 text-[13px] font-semibold leading-[15.73px]"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Section title for historical data */}
      <h2
        className="text-[13.5px] font-semibold leading-[16.34px]"
        style={{ color: "#b0b0b0" }}
      >
        Recent Breakdowns
      </h2>

      {/* Footer with copyright */}
      <div className="mt-4 border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-gray-500">© AutonomyAI</p>
      </div>
    </div>
  );
};

