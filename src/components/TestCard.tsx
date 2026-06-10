import { FiChevronUp, FiInfo } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

/**
 * Design constants from Figma reference
 * Colors match exact hex values provided in requirements
 */
const COLORS = {
  CARD_BG: '#272822',
  HEADER_TITLE: '#b5b5b5',
  SUBTITLE: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL: '#a4a4a3',
  PLACEHOLDER_TOP: '#737470',
  PLACEHOLDER_BOTTOM: '#71726e',
  BORDER_TOP: '#a5adad',
  BORDER_BOTTOM: '#929291',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#e0c9bc',
  RECENT_TITLE: '#b0b0b0',
} as const;

const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.CARD_BG }}
      className="p-4 text-white min-h-screen"
    >
      {/* Section 1: Header row - Main title and configuration icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 style={{ color: COLORS.HEADER_TITLE }} className="text-xl font-bold">
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-xl text-gray-400" />
      </div>

      {/* Section 2: Collapsible-looking row for context/status */}
      <div style={{ color: COLORS.SUBTITLE }} className="flex items-center mb-6">
        <FiChevronUp className="text-lg mr-2" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section 3: Add New Design section header */}
      <div style={{ color: COLORS.SECTION_HEADER }} className="flex items-center mb-4">
        <FiChevronUp className="text-lg mr-2" />
        <h3 className="font-bold">Add New Design</h3>
      </div>

      {/* Section 4: Form area for token and design URL inputs */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col">
          <label
            htmlFor="personalAccessToken"
            style={{ color: COLORS.LABEL }}
            className="flex items-center text-sm mb-1"
          >
            Personal Access Token <FiInfo className="ml-1 text-xs" />
          </label>
          <input
            type="text"
            id="personalAccessToken"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{
              borderColor: COLORS.BORDER_TOP,
              color: COLORS.PLACEHOLDER_TOP,
            }}
            className="w-full p-2 rounded-md bg-transparent border text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="designURL"
            style={{ color: COLORS.LABEL }}
            className="flex items-center text-sm mb-1"
          >
            Design URL <FiInfo className="ml-1 text-xs" />
          </label>
          <input
            type="text"
            id="designURL"
            placeholder="https://www.figma.com/file/:"
            style={{
              borderColor: COLORS.BORDER_BOTTOM,
              color: COLORS.PLACEHOLDER_BOTTOM,
            }}
            className="w-full p-2 rounded-md bg-transparent border text-sm"
          />
        </div>
      </div>

      {/* Section 5: Primary Actions */}
      <div className="flex space-x-4 mb-8">
        <button
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
          className="flex-1 rounded-lg font-semibold px-6 py-3 transition-opacity hover:opacity-90"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
          className="flex-1 rounded-lg font-semibold px-6 py-3 transition-opacity hover:opacity-90"
        >
          Prepare
        </button>
      </div>

      {/* Section 6: Historical data section */}
      <h3 style={{ color: COLORS.RECENT_TITLE }} className="text-xl font-bold">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
