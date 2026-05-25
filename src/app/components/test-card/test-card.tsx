import cx from "classix";

// Icon Components
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-gray-400"
  >
    {/* Center circle */}
    <circle cx="12" cy="12" r="2" />
    {/* Orbiting dots and lines - atom style */}
    <circle cx="12" cy="12" r="7" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// Input field styling base classes
const INPUT_BASE_STYLES =
  "w-full border bg-[#272822] px-4 py-3 text-sm font-semibold text-[#737470] placeholder-[#737470] focus:outline-none";
const INPUT_FOCUS_STYLES = "focus:border-[#929291]";

// Button styling constants
const BUTTON_BASE_STYLES =
  "flex-1 rounded-[4px] border-0 bg-[#843a17] px-4 py-3 text-center text-sm font-semibold text-[#8c8078] transition-colors";
const BUTTON_HOVER_ACTIVE_STYLES =
  "hover:bg-[#9a4620] active:bg-[#6e2f11]";

export const TestCard = (): JSX.Element => {

  return (
    <div className="w-full max-w-xs rounded-lg bg-[#252525] p-5">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="flex items-center justify-center rounded-full p-1 text-gray-400 hover:bg-gray-800">
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Info Section */}
      <div className="mb-12 flex items-center gap-3 py-2">
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-300">
          <ChevronUpIcon />
        </button>
        <span className="truncate text-sm font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <div className="mb-6 flex items-center gap-3">
          <button className="flex items-center justify-center text-gray-400 hover:text-gray-300">
            <ChevronUpIcon />
          </button>
          <span className="text-base font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Form Section */}
        <div className="space-y-8">
          {/* Personal Access Token Input */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <label className="text-sm font-semibold text-[#a4a4a3]">
                Personal Access Token
              </label>
              <button className="flex items-center justify-center text-gray-400 hover:text-gray-300">
                <InfoIcon />
              </button>
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={cx(
                INPUT_BASE_STYLES,
                "border-[#a5adad]",
                INPUT_FOCUS_STYLES
              )}
            />
          </div>

          {/* Design URL Input */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <label className="text-sm font-semibold text-[#a3a3a2]">
                Design URL
              </label>
              <button className="flex items-center justify-center text-gray-400 hover:text-gray-300">
                <InfoIcon />
              </button>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className={cx(
                INPUT_BASE_STYLES,
                "border-[#929291]",
                INPUT_FOCUS_STYLES
              )}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button className={cx(BUTTON_BASE_STYLES, BUTTON_HOVER_ACTIVE_STYLES)}>
              Awesome
            </button>
            <button className={cx(BUTTON_BASE_STYLES, BUTTON_HOVER_ACTIVE_STYLES)}>
              Prepare
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-700 pt-8">
        <h2 className="text-base font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-gray-400">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
