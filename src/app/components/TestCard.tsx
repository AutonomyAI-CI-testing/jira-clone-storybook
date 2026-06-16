import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

// Background and button colors sourced from Figma design specifications
const COLORS = {
  BACKGROUND: "#2a2a2a",
  ACCENT: "#b85c2a",
  SUBTITLE: "#c8784a",
} as const;

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.BACKGROUND }}
      className="p-6 rounded-lg max-w-sm mx-auto shadow-lg"
    >
      {/* Header row: Main title and configuration access */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-xl">UI magician Agent</h2>
        <FiSettings className="text-white text-xl" aria-label="Settings" />
      </div>

      {/* Subtitle row: Shows current scope/context */}
      <div 
        className="flex items-center mb-6" 
        style={{ color: COLORS.SUBTITLE }}
      >
        <FiChevronUp className="text-lg mr-1" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Header: Primary action area */}
      <div className="flex items-center text-white mb-4">
        <FiChevronUp className="text-lg mr-1" />
        <h3 className="text-xl font-bold">Add New Design</h3>
      </div>

      {/* Input Fields: Personal Access Token and Figma Design URL */}
      <div className="mb-4">
        <label
          htmlFor="pat"
          className="flex items-center text-white text-sm font-medium mb-1"
        >
          Personal Access Token
          <FiInfo className="text-xs ml-1" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#b85c2a]"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="designUrl"
          className="flex items-center text-white text-sm font-medium mb-1"
        >
          Design URL
          <FiInfo className="text-xs ml-1" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#b85c2a]"
        />
      </div>

      {/* Action Buttons: Primary CTAs using design-specific brand color */}
      <div className="flex space-x-4 mb-6">
        <button
          style={{ backgroundColor: COLORS.ACCENT }}
          className="flex-1 text-white rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: COLORS.ACCENT }}
          className="flex-1 text-white rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* Footer Title */}
      <div>
        <h3 className="text-white font-bold text-lg">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
