
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Constants for theme colors to improve maintainability
const COLORS = {
  PANEL_BG: 'bg-[#2a2a2a]',
  INPUT_BG: 'bg-[#1a1a1a]',
  ACCENT_ORANGE: 'text-[#c57c4b]',
  BUTTON_ORANGE: 'bg-[#a0522d]',
  BORDER_GRAY: 'border-gray-600',
};

/**
 * TestCard - A smoke test component that visually reproduces the "UI magician Agent" panel.
 * Used to verify Tailwind CSS rendering and icon integration in the project.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={`${COLORS.PANEL_BG} p-4 w-full rounded-lg shadow-xl max-w-sm`}>
      {/* Header row: Agent Name and Settings */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white leading-tight">UI magician Agent</h1>
        <button 
          aria-label="Settings"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <HiOutlineCog className="text-xl" />
        </button>
      </div>

      {/* Subtitle row with truncated description */}
      <div className="flex items-center gap-1 mt-2">
        <HiChevronUp className={COLORS.ACCENT_ORANGE} aria-hidden="true" />
        <p className={`${COLORS.ACCENT_ORANGE} text-sm font-medium`}>From entire frame to a singl...</p>
      </div>

      {/* Visual spacer to match the design panel layout */}
      <div className="mt-8" aria-hidden="true" />

      {/* Section heading row: Collapsible section indicator */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-white" aria-hidden="true" />
        <h2 className="text-white font-bold text-lg">Add New Design</h2>
      </div>

      {/* Form field 1: Personal Access Token */}
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <label htmlFor="personalAccessToken" className="text-white text-sm font-medium">
            Personal Access Token
          </label>
          <HiInformationCircle 
            className="text-gray-400 cursor-help" 
            title="Your Figma Personal Access Token" 
          />
        </div>
        <input
          id="personalAccessToken"
          type="password" // Changed to password for security-best-practice, though placeholder is a mock
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${COLORS.INPUT_BG} border ${COLORS.BORDER_GRAY} text-gray-300 text-sm rounded px-3 py-2 w-full outline-none focus:border-blue-500 transition-colors`}
        />
      </div>

      {/* Form field 2: Design URL */}
      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1">
          <label htmlFor="designURL" className="text-white text-sm font-medium">
            Design URL
          </label>
          <HiInformationCircle 
            className="text-gray-400 cursor-help" 
            title="The URL of the Figma design file" 
          />
        </div>
        <input
          id="designURL"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className={`${COLORS.INPUT_BG} border ${COLORS.BORDER_GRAY} text-gray-300 text-sm rounded px-3 py-2 w-full outline-none focus:border-blue-500 transition-colors`}
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button className={`${COLORS.BUTTON_ORANGE} text-white font-bold rounded-lg px-6 py-3 flex-1 hover:brightness-110 active:scale-[0.98] transition-all`}>
          Awesome
        </button>
        <button className={`${COLORS.BUTTON_ORANGE} text-white font-bold rounded-lg px-6 py-3 flex-1 hover:brightness-110 active:scale-[0.98] transition-all`}>
          Prepare
        </button>
      </div>

      {/* Footer: Recent activity heading */}
      <div className="mt-8 border-t border-zinc-700 pt-4">
        <h3 className="text-white font-bold text-lg">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
