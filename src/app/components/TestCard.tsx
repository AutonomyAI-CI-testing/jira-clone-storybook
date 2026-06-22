
const SettingsIcon = () => (
  <svg
    className="text-gray-400 w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
    ></path>
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const InfoIcon = () => (
  <svg
    className="w-4 h-4 ml-1 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

/**
 * TestCard: A self-contained settings panel component replicating a Figma design.
 * Uses arbitrary Tailwind values to match the specific charcoal/orange design tokens
 * not present in the standard system.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-5 rounded-xl w-full font-sans"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <SettingsIcon />
      </div>

      {/* Subtitle row - Arbitrary amber text color matching the spec */}
      <div className="flex items-center text-[#c47a3a] text-sm mb-6">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer / divider gap */}
      <div className="h-px bg-[#444444] my-6"></div>

      {/* Add New Design section header */}
      <div className="flex items-center text-white font-bold text-base mb-4">
        <ChevronUpIcon />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <label className="flex items-center text-gray-300 text-sm font-medium mb-2">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1f1f1f] border border-[#444] rounded px-3 py-2 text-gray-400 text-sm focus:outline-none focus:border-amber-600"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <label className="flex items-center text-gray-300 text-sm font-medium mb-2">
          Design URL
          <InfoIcon />
        </label>
        <input
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1f1f1f] border border-[#444] rounded px-3 py-2 text-gray-400 text-sm focus:outline-none focus:border-amber-600"
        />
      </div>

      {/* Button row - Arbitrary orange-brown colors matching the Figma spec */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-[#b85c2a] text-white rounded-lg py-3 font-medium hover:bg-[#a04e22] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] text-white rounded-lg py-3 font-medium hover:bg-[#a04e22] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <h3 className="text-white font-bold text-base">Recent Breakdowns</h3>
    </div>
  );
};

