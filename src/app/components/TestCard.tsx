
/**
 * TestCard Component
 *
 * A self-contained smoke test component that visually replicates a Figma design panel.
 * This component is intended for visual verification of the code generation pipeline.
 *
 * Features:
 * - Dark theme with custom color palette
 * - Collapsible-style section headers (static)
 * - Form fields for token and URL entry
 * - Burn-orange action buttons
 */

// Production-ready Constants
const COLORS = {
  background: '#2a2a2a',
  inputBackground: '#1e1e1e',
  accentOrange: '#b5541e',
  accentOrangeHover: '#a04a1b',
  mutedOrange: '#c8794a',
  border: '#444',
};

// Internal Icon Components
const GearIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37s1.066-2.572 1.066-2.572z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    className="w-4 h-4 mr-2 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
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
    />
  </svg>
);

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 text-white max-w-sm mx-auto rounded-lg shadow-lg">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Collapsed Breadcrumb-style Row */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon />
        <span className="text-sm text-[#c8794a]"> From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4 mt-6">
        <ChevronUpIcon />
        <h2 className="text-md font-bold text-white">Add New Design</h2>
      </div>

      {/* Form Field 1: Personal Access Token */}
      <div className="mb-4">
        <label htmlFor="personalAccessToken" className="block text-white text-sm font-bold mb-2 flex items-center">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="shadow appearance-none border border-[#444] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1e1e1e]"
        />
      </div>

      {/* Form Field 2: Design URL */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="block text-white text-sm font-bold mb-2 flex items-center">
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="shadow appearance-none border border-[#444] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1e1e1e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-6">
        <button className="bg-[#b5541e] hover:bg-[#a04a1b] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex-1 transition-colors">
          Awesome
        </button>
        <button className="bg-[#b5541e] hover:bg-[#a04a1b] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex-1 transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer / Secondary Section */}
      <div>
        <h2 className="text-md font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

