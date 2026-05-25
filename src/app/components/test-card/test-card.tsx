import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-md bg-black p-6 text-[#d1d5db]">
      {/* Header Section */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-base font-semibold text-[#f3f4f6]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section */}
      <div className="mb-12 flex items-center gap-3">
        <ChevronUpIcon />
        <p className="text-sm text-[#d1d5db]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-10 flex items-center gap-3">
        <ChevronDownIcon />
        <h2 className="text-base font-semibold text-[#f3f4f6]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#d1d5db]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            "w-full bg-[#111827] text-[#e5e7eb]",
            "rounded border border-[#374151] px-3 py-2",
            "focus:border-[#6b7280] focus:outline-none",
            "text-sm font-semibold",
            "placeholder:text-[#4b5563]"
          )}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#d1d5db]">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={cx(
            "w-full bg-[#111827] text-[#e5e7eb]",
            "rounded border border-[#374151] px-3 py-2",
            "focus:border-[#6b7280] focus:outline-none",
            "text-sm font-semibold",
            "placeholder:text-[#4b5563]"
          )}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-12 flex gap-4">
        <button
          className={cx(
            "flex-1 rounded px-4 py-2.5",
            "text-center text-sm font-semibold",
            "transition-colors",
            "bg-[#A0603B] text-[#e5e7eb] hover:bg-[#8B5436] active:bg-[#7a4a30]"
          )}
        >
          Awesome
        </button>
        <button
          className={cx(
            "flex-1 rounded px-4 py-2.5",
            "text-center text-sm font-semibold",
            "transition-colors",
            "bg-[#A0603B] text-[#e5e7eb] hover:bg-[#8B5436] active:bg-[#7a4a30]"
          )}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-gray-300 mb-12 border-t pt-3">
        <h3 className="text-base font-semibold text-[#f3f4f6]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-sm text-[#d1d5db]">© AutonomyAI</p>
      </div>
    </div>
  );
};

/**
 * Settings/Gear Icon Component
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#9ca3af]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6m-3.78-7.78l4.24 4.24m-8.48 0l4.24-4.24" />
  </svg>
);

/**
 * Chevron Up Icon Component
 */
const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#9ca3af]"
  >
    <polyline points="1 7 6 2 11 7" />
  </svg>
);

/**
 * Chevron Down Icon Component
 */
const ChevronDownIcon = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#9ca3af]"
  >
    <polyline points="1 1 6 6 11 1" />
  </svg>
);

/**
 * Info Icon Component
 */
const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#6b7280]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
