import PropTypes from "prop-types";

// SVG Icons
const SettingsIcon = () => (
  <svg
    className="text-gray-500 h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="text-gray-600 h-3 w-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="text-gray-600 h-3 w-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

interface ActionButtonProps {
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children }) => (
  <button className="bg-gray-800 text-gray-500 hover:bg-gray-700 flex-1 rounded px-3 py-1.5 text-xs font-semibold transition">
    {children}
  </button>
);

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-64 rounded-lg bg-black p-4 font-primary text-xs"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-gray-400 text-sm font-semibold">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section 1 */}
      <div className="border-gray-800 mb-4 border-b">
        <div className="mb-3 flex items-center justify-between pb-2">
          <span className="text-gray-500">From entire frame to a singl...</span>
          <ChevronRightIcon />
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <div className="border-gray-700 flex items-center justify-between rounded border px-3 py-2">
          <span className="text-gray-500">Add New Design</span>
          <PlusIcon />
        </div>
      </div>

      {/* Form Fields */}
      <div className="mb-4 space-y-3">
        {/* Personal Access Token */}
        <div>
          <label className="text-gray-400 mb-1 block text-xs">
            Personal Access Token
          </label>
          <input
            type="text"
            placeholder="Paste your token here"
            className="border-gray-700 bg-gray-900 text-gray-400 placeholder-gray-600 w-full rounded border px-2 py-1.5 text-xs outline-none"
          />
        </div>

        {/* Design URL */}
        <div>
          <label className="text-gray-400 mb-1 block text-xs">Design URL</label>
          <input
            type="text"
            placeholder="Paste Figma design URL here"
            className="border-gray-700 bg-gray-900 text-gray-400 placeholder-gray-600 w-full rounded border px-2 py-1.5 text-xs outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex gap-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="text-gray-500 mb-2 text-xs font-semibold">
          Recent Breakdowns
        </h3>
        <div className="border-gray-800 space-y-1 rounded border px-2 py-2">
          <div className="text-gray-600 text-xs">No recent breakdowns</div>
        </div>
      </div>
    </div>
  );
};
