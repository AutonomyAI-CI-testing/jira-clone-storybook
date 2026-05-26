import cx from "classix";

// Base button styles shared by all action buttons in the form
const ACTION_BUTTON_CLASS = cx(
  "flex-1 rounded bg-orange-700 px-6 py-3 text-center text-sm font-semibold text-gray-400",
  "hover:bg-orange-600 active:bg-orange-800"
);

// Base input styles shared by text inputs
const INPUT_CLASS = cx(
  "w-full border border-gray-600 bg-transparent px-4 py-3 text-sm font-semibold text-gray-600",
  "placeholder-gray-700 focus:outline-none"
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-sm bg-black p-5">
      {/* Header */}
      <div className="mb-16 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-300">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-28">
        <div className="flex items-center gap-2">
          <CaretIcon />
          <span className="text-sm font-semibold text-gray-500">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="mb-10">
        <div className="mb-8 flex items-center gap-2">
          <CaretIcon />
          <span className="text-lg font-semibold text-gray-400">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-500">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={INPUT_CLASS}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-9">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-500">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={INPUT_CLASS}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className={ACTION_BUTTON_CLASS}>
            Awesome
          </button>
          <button className={ACTION_BUTTON_CLASS}>
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-300">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center text-sm text-gray-400">
        © AutonomyAI
      </div>
    </div>
  );
};

/**
 * Icon Components
 * These are simple SVG icons used throughout the TestCard component.
 * Each icon is styled with consistent sizing and color via className.
 */

const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 text-gray-500 opacity-75"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94m-.213 9.26c.033.264.112.523.22.765m-1.544-1.665a2.25 2.25 0 00-2.25 2.25m5.007-3.228a2.25 2.25 0 10-4.5 0m3.743 9.172a4.5 4.5 0 01-8.586-4.017l.9.855A2.25 2.25 0 1015 12a3 3 0 11-6 0 .75.75 0 00-1.5 0 4.501 4.501 0 004.5 4.5"
    />
  </svg>
);

const CaretIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
