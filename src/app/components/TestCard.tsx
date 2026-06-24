const COLORS = {
  CARD_BG: '#2b2b27',
  INPUT_BG: '#272822',
  BUTTON_ORANGE: '#843a17',
  BORDER_GRAY: '#4a4a4a',
  TEXT_MUTED: '#a0a09c',
};

/**
 * Shared icon for informational tooltips
 */
const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * Reusable input field with dark theme styling
 */
const TextField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="mb-4 last:mb-6">
    <label className="block text-sm font-medium text-zinc-400 mb-1">
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded-md text-white border focus:outline-none focus:ring-1 focus:ring-zinc-500"
      style={{ backgroundColor: COLORS.INPUT_BG, borderColor: COLORS.BORDER_GRAY }}
    />
  </div>
);

/**
 * Primary action button with brand orange background
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="flex-1 py-2 rounded-lg text-white font-medium hover:opacity-90 active:scale-[0.98] transition-all"
    style={{ backgroundColor: COLORS.BUTTON_ORANGE }}
  >
    {children}
  </button>
);

/**
 * TestCard component - A self-contained AI Agent panel
 * Renders a dark-themed card for managing UI design breakdowns
 */
export function TestCard() {
  return (
    <div id="testElem" className="p-4 rounded-lg w-64 shadow-xl select-none" style={{ backgroundColor: COLORS.CARD_BG }}>
      {/* Header section with brand title and settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold">UI magician Agent</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-zinc-400 cursor-pointer hover:text-white transition-colors"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {/* Settings/Gear icon - Replaced manual placeholder path with standard gear path */}
          <path
            fillRule="evenodd"
            d="M11.423 3.007a.5.5 0 01.177.373V5.5c0 .276.224.5.5.5h2.12a.5.5 0 01.5.5v1.27c0 .276-.224.5-.5.5H12.1a.5.5 0 01-.5.5V11a.5.5 0 01-.5.5H8.9a.5.5 0 01-.5-.5V8.77c0-.276-.224-.5-.5-.5H5.78a.5.5 0 01-.5-.5V6.5a.5.5 0 01.5-.5H7.9a.5.5 0 01.5-.5V3.38a.5.5 0 01.5-.373h2.523z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Expansion/Context row */}
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-zinc-400 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm truncate" style={{ color: COLORS.TEXT_MUTED }}>
          From entire frame to a singl...
        </p>
      </div>

      <div className="border-t border-zinc-700 my-4" />

      {/* Configuration Section */}
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="text-white font-bold">Add New Design</h3>
      </div>

      <TextField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <TextField label="Design URL" placeholder="https://www.figma.com/file/:" />

      <div className="flex justify-between space-x-2 mb-6">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer / History section */}
      <h3 className="text-white font-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
}

export default TestCard;
