
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

// Figma design colors
const COLORS = {
  CARD_BG: '#272822',
  TEXT_MAIN: '#b5b5b5',
  TEXT_SUBTITLE: '#8b9291',
  TEXT_LABEL: '#a4a4a3',
  PLACEHOLDER_TOKEN: '#737470',
  PLACEHOLDER_URL: '#71726e',
  BORDER_TOKEN: '#a5adad',
  BORDER_URL: '#929291',
  BUTTON_BG: '#843a17',
  // Figma specifies a slightly muted text color for buttons
  BUTTON_TEXT: '#c8b8b0',
} as const;

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="p-4 max-w-xs rounded-md"
      style={{ backgroundColor: COLORS.CARD_BG, color: COLORS.TEXT_MAIN }}
    >
      {/* Header Row: Agent name and settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline className="text-xl" />
      </div>

      {/* Description: Collapsible-style row with muted label */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-2" />
        <p className="text-sm" style={{ color: COLORS.TEXT_SUBTITLE }}>
          From entire frame to a singl...
        </p>
      </div>

      <div className="h-6" aria-hidden="true" /> {/* Layout spacer */}

      {/* Section: Configuration input */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="mr-2" />
        <h3 className="font-bold text-base">Add New Design</h3>
      </div>

      {/* Input Group: Personal Access Token */}
      <div className="mb-4">
        <div
          className="flex items-center text-sm mb-2"
          style={{ color: COLORS.TEXT_LABEL }}
        >
          <label htmlFor="accessToken">Personal Access Token</label>
          <FiInfo className="ml-2" />
        </div>
        <input
          type="text"
          id="accessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded outline-none border transition-colors"
          style={{
            backgroundColor: COLORS.CARD_BG,
            borderColor: COLORS.BORDER_TOKEN,
            color: COLORS.TEXT_MAIN,
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          #accessToken::placeholder { color: ${COLORS.PLACEHOLDER_TOKEN}; }
        `}} />
      </div>

      {/* Input Group: Design URL */}
      <div className="mb-6">
        <div
          className="flex items-center text-sm mb-2"
          style={{ color: COLORS.TEXT_LABEL }}
        >
          <label htmlFor="designURL">Design URL</label>
          <FiInfo className="ml-2" />
        </div>
        <input
          type="text"
          id="designURL"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded outline-none border-2 transition-colors"
          style={{
            backgroundColor: COLORS.CARD_BG,
            borderColor: COLORS.BORDER_URL,
            color: COLORS.TEXT_MAIN,
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          #designURL::placeholder { color: ${COLORS.PLACEHOLDER_URL}; }
        `}} />
      </div>

      {/* Action Buttons: Primary controls */}
      <div className="flex justify-between space-x-2 mb-6">
        <button
          className="flex-1 py-2 px-4 rounded-lg font-semibold active:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-4 rounded-lg font-semibold active:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: History/Recent labels */}
      <div>
        <h3 className="font-bold text-base">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
