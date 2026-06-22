
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Constants for the Figma-inspired theme
const COLORS = {
  BACKGROUND: '#1e1e1e',
  SUBTITLE: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL: '#a4a4a3',
  LABEL_SECONDARY: '#a3a3a2',
  INPUT_BG: '#2d2d2d',
  INPUT_BORDER: '#3e3e3e',
  PLACEHOLDER: '#737470',
  PLACEHOLDER_SECONDARY: '#71726e',
  BUTTON_BG: '#b5522a',
  RECENT_BREAKDOWNS: '#b0b0b0',
} as const;

/**
 * TestCard component
 * A self-contained UI panel approximating a "UI magician Agent" Figma design.
 * All styling is hardcoded via Tailwind and HEX constants to match specific design requirements.
 */
export function TestCard() {
  return (
    <div id="testElem" className="p-4 text-white min-h-screen" style={{ backgroundColor: COLORS.BACKGROUND }}>
      {/* Header: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-gray-300 text-[13.5px] font-semibold">UI magician Agent</h1>
        <HiOutlineCog className="text-gray-400 text-lg" aria-label="Settings" />
      </div>

      {/* Subtitle: Collapsible indicator and descriptive text */}
      <div className="flex items-center mb-6">
        <HiChevronUp className="text-gray-500 mr-2" />
        <p className="text-[11.5px] font-semibold" style={{ color: COLORS.SUBTITLE }}>From entire frame to a singl...</p>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-gray-500 mr-2" />
        <h2 className="text-[13.5px] font-semibold" style={{ color: COLORS.SECTION_HEADER }}>Add New Design</h2>
      </div>

      {/* Personal Access Token Input Field */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat" className="text-[11.5px] mr-2" style={{ color: COLORS.LABEL }}>Personal Access Token</label>
          <HiInformationCircle className="text-gray-500" aria-label="More info" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border text-[#b5b5b5] text-sm focus:outline-none focus:border-blue-500"
          style={{ 
            backgroundColor: COLORS.INPUT_BG, 
            borderColor: COLORS.INPUT_BORDER,
          }}
        />
      </div>

      {/* Design URL Input Field */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="designUrl" className="text-[11.5px] mr-2" style={{ color: COLORS.LABEL_SECONDARY }}>Design URL</label>
          <HiInformationCircle className="text-gray-500" aria-label="More info" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border text-[#b5b5b5] text-sm focus:outline-none focus:border-blue-500"
          style={{ 
            backgroundColor: COLORS.INPUT_BG, 
            borderColor: COLORS.INPUT_BORDER,
          }}
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex space-x-4 mb-8">
        <button 
          className="flex-1 text-white rounded-lg px-6 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 text-white rounded-lg px-6 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: Recent Activity History */}
      <div>
        <h2 className="text-[13.5px] font-semibold" style={{ color: COLORS.RECENT_BREAKDOWNS }}>Recent Breakdowns</h2>
      </div>
    </div>
  );
}
