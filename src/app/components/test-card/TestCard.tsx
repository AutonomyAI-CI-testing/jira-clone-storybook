/**
 * TestCard component
 * 
 * A self-contained smoke test component built to verify Figma-to-code rendering.
 * Matches a specific dark-themed Figma design with form fields and action buttons.
 * 
 * Design specifications:
 * - Background: Dark gray (#2b2b28)
 * - Typography: Inter font, 13.5px for labels/headers
 * - Brand color: Rust/Orange-brown (#843a17) for primary actions
 */

// HEX Constants for design accuracy
const COLORS = {
  CARD_BG: '#2b2b28',
  INPUT_BG: '#272822',
  HEADING_TEXT: '#b5b5b5', // UI magician Agent
  LABEL_TEXT: '#a4a4a3',   // Subtitles and field labels
  SECTION_TEXT: '#b2b2b1', // Add New Design
  RECENT_TEXT: '#b0b0b0',  // Recent Breakdowns
  INPUT_TEXT: '#b5b5b5',
  PLACEHOLDER: '#737470',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  BORDER_PAT: '#a5adad',
  BORDER_URL: '#929291',
};

export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 text-white font-semibold rounded-lg" style={{ backgroundColor: COLORS.CARD_BG }}>
      {/* Header section with Gear icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[13.5px]" style={{ color: COLORS.HEADING_TEXT }}>UI magician Agent</h2>
        <span style={{ color: COLORS.HEADING_TEXT }}>⚙</span>
      </div>

      {/* Expandable status row (static) */}
      <div className="flex items-center mb-4 text-[13.5px]" style={{ color: COLORS.LABEL_TEXT }}>
        <span className="mr-2">▲</span>
        <span>From entire frame to a singl...</span>
      </div>

      <div className="border-b border-gray-700 mb-4"></div>

      {/* Action header */}
      <div className="flex items-center mb-4 text-[13.5px]" style={{ color: COLORS.SECTION_TEXT }}>
        <span className="mr-2">▲</span>
        <h2>Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <label htmlFor="pat" className="block text-[13.5px] mb-2" style={{ color: COLORS.LABEL_TEXT }}>
          Personal Access Token <span style={{ color: COLORS.LABEL_TEXT }}>ⓘ</span>
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded border text-[13.5px] placeholder-[#737470]"
          style={{ 
            backgroundColor: COLORS.INPUT_BG, 
            borderColor: COLORS.BORDER_PAT,
            color: COLORS.INPUT_TEXT,
          }}
          // Note: placeholder color handled via CSS or global styles usually, 
          // keeping it matching the Figma spec via class if available
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <label htmlFor="design-url" className="block text-[13.5px] mb-2" style={{ color: COLORS.LABEL_TEXT }}>
          Design URL <span style={{ color: COLORS.LABEL_TEXT }}>ⓘ</span>
        </label>
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/: "
          className="w-full p-2 rounded border text-[13.5px] placeholder-[#737470]"
          style={{ 
            backgroundColor: COLORS.INPUT_BG, 
            borderColor: COLORS.BORDER_URL,
            color: COLORS.INPUT_TEXT,
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex justify-between gap-2 mb-4">
        <button 
          className="flex-1 py-2 px-4 rounded transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 py-2 px-4 rounded transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Footer footer section */}
      <div>
        <h2 className="text-[13.5px]" style={{ color: COLORS.RECENT_TEXT }}>Recent Breakdowns</h2>
      </div>
    </div>
  );
};
