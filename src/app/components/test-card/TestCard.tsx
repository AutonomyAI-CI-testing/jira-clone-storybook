// Icon Components
// Extracted for reusability and to reduce JSX clutter in the main component

const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8b9291]"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 7L13 7M1 7L2 7M7 1L7 2M7 12L7 13M10.5 3.5L9.5 4.5M4.5 9.5L3.5 10.5M10.5 10.5L9.5 9.5M4.5 4.5L3.5 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8b9291]"
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

const ChevronUpLargeIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b2b2b1]"
  >
    <path
      d="M2 7L6 3L10 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8b9291]"
  >
    <circle
      cx="7"
      cy="7"
      r="6"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M7 4.5V7M7 9.5V9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-[#1e1e1a] p-5">
      {/* Header with agent name and settings access */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle with collapsed indicator */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon />
        <p className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpLargeIcon />
        <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-1.5">
          <label className="text-[11px] text-[#b5b5b5]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] text-[#8b9291] placeholder-[#8b9291] focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
          readOnly
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-1.5">
          <label className="text-[11px] text-[#b5b5b5]">Design URL</label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] text-[#8b9291] placeholder-[#8b9291] focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[13px] font-medium text-[#fdd6b8] hover:bg-[#963f1a]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[13px] font-medium text-[#fdd6b8] hover:bg-[#963f1a]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11px] text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};
