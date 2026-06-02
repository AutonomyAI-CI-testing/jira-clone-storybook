// Three-dot menu icon (vertical dots)
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="3" r="1" fill="currentColor" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
    <circle cx="8" cy="13" r="1" fill="currentColor" />
  </svg>
);

// Chevron down icon for expandable sections
const ChevronDownIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 3.5L5 6.5L8 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

// Info icon
const InfoIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="6"
      cy="6"
      r="5"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <text
      x="6"
      y="7"
      textAnchor="middle"
      fontSize="8"
      fill="currentColor"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

export const TestCard = () => {
  return (
    <div
      className="flex w-[254px] flex-col gap-4 bg-black p-5"
      style={{ height: "508px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-gray-400 text-sm font-semibold">
          UI magician Agent
        </h1>
        <button
          className="text-gray-500 hover:text-gray-400 flex h-5 w-5 items-center justify-center"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <div className="border-gray-700 flex flex-col gap-2 border-b pb-3">
        <button className="text-gray-500 hover:text-gray-400 flex items-center gap-2 text-left text-xs font-semibold">
          <ChevronDownIcon />
          From entire frame to a singl...
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="border-gray-700 flex flex-col gap-2 border-b pb-3">
        <button className="text-gray-500 hover:text-gray-400 flex items-center gap-2 text-left text-xs font-semibold">
          <ChevronDownIcon />
          Add New Design
        </button>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-3">
        {/* Personal Access Token Field */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 flex items-center gap-1 text-xs font-semibold">
            Personal Access Token
            <button
              className="text-gray-600 hover:text-gray-500 flex h-4 w-4 items-center justify-center"
              aria-label="Info"
            >
              <InfoIcon />
            </button>
          </label>
          <input
            type="password"
            placeholder="••••••••••••••••••••"
            className="border-gray-700 text-gray-400 placeholder-gray-600 focus:border-gray-600 rounded border bg-black px-2 py-1.5 text-xs focus:outline-none"
          />
        </div>

        {/* Design URL Field */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 flex items-center gap-1 text-xs font-semibold">
            Design URL
            <button
              className="text-gray-600 hover:text-gray-500 flex h-4 w-4 items-center justify-center"
              aria-label="Info"
            >
              <InfoIcon />
            </button>
          </label>
          <input
            type="url"
            placeholder="https://figma.com/..."
            className="border-gray-700 text-gray-400 placeholder-gray-600 focus:border-gray-600 rounded border bg-black px-2 py-1.5 text-xs focus:outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="bg-orange-800 text-gray-300 hover:bg-orange-700 active:bg-orange-900 flex-1 rounded px-3 py-2 text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-orange-800 text-gray-300 hover:bg-orange-700 active:bg-orange-900 flex-1 rounded px-3 py-2 text-xs font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-gray-700 border-t pt-3">
        <h2 className="text-gray-500 text-xs font-semibold">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
