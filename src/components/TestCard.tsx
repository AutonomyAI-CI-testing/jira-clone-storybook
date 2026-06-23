import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Design tokens from Figma spec
 * Using constants to manage repetitive hex values while maintaining exact visual fidelity
 */
const COLORS = {
  PANEL_BG: '#272822',
  HEADER_TEXT: '#b5b5b5',
  SECTION_LABEL: '#b2b2b1',
  MUTED_TEXT: '#8b9291',
  INPUT_LABEL: '#a4a4a3',
  INPUT_BORDER_PRIMARY: '#a5adad',
  INPUT_BORDER_SECONDARY: '#929291',
  PLACEHOLDER: '#737470',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  RECENT_HEADER: '#b0b0b0',
} as const;

const FONT_SIZES = {
  TITLE: '13.5px',
  LABEL: '11.5px',
} as const;

/**
 * TestCard: A self-contained component for visual verification of the "UI magician Agent" design.
 * Uses inline styles for specific Figma hex colors not present in the project's Tailwind config.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-4 flex flex-col space-y-4 shadow-lg"
      style={{ backgroundColor: COLORS.PANEL_BG }}
    >
      {/* Header Row: Title and Settings affordance */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold" style={{ color: COLORS.HEADER_TEXT, fontSize: FONT_SIZES.TITLE }}>
          UI magician Agent
        </h2>
        <FiSettings size={16} color={COLORS.HEADER_TEXT} />
      </div>

      {/* Collapsed Section Row: Shows context about the current selection */}
      <div className="flex items-center space-x-2">
        <FiChevronUp size={16} color={COLORS.MUTED_TEXT} />
        <span className="text-xs" style={{ color: COLORS.MUTED_TEXT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer to separate header from main content */}
      <div className="h-4" aria-hidden="true" />

      {/* Add New Design Section Header */}
      <div className="flex items-center space-x-2">
        <FiChevronUp size={16} color={COLORS.SECTION_LABEL} />
        <h3 className="font-semibold" style={{ color: COLORS.SECTION_LABEL, fontSize: FONT_SIZES.TITLE }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Input Section */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-1">
          <label htmlFor="pat-input" className="text-xs" style={{ color: COLORS.INPUT_LABEL, fontSize: FONT_SIZES.LABEL }}>
            Personal Access Token
          </label>
          <FiInfo size={12} color={COLORS.INPUT_LABEL} />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="p-2 text-xs rounded border focus:outline-none transition-colors"
          style={{
            backgroundColor: COLORS.PANEL_BG,
            color: COLORS.PLACEHOLDER,
            borderColor: COLORS.INPUT_BORDER_PRIMARY,
            borderWidth: '1px',
            fontSize: FONT_SIZES.LABEL,
          }}
        />
      </div>

      {/* Design URL Input Section: Note the 2px border per Figma spec */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-1">
          <label htmlFor="url-input" className="text-xs" style={{ color: COLORS.INPUT_LABEL, fontSize: FONT_SIZES.LABEL }}>
            Design URL
          </label>
          <FiInfo size={12} color={COLORS.INPUT_LABEL} />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="p-2 text-xs rounded border focus:outline-none transition-colors"
          style={{
            backgroundColor: COLORS.PANEL_BG,
            color: COLORS.PLACEHOLDER,
            borderColor: COLORS.INPUT_BORDER_SECONDARY,
            borderWidth: '2px',
            fontSize: FONT_SIZES.LABEL,
          }}
        />
      </div>

      {/* Action Buttons: Principal CTAs for the card */}
      <div className="flex justify-between space-x-2">
        <button
          type="button"
          className="flex-1 py-2 text-sm rounded transition-opacity hover:opacity-90 active:scale-[0.98]"
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.BUTTON_TEXT,
            fontSize: FONT_SIZES.LABEL,
            borderRadius: '4px',
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 text-sm rounded transition-opacity hover:opacity-90 active:scale-[0.98]"
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.BUTTON_TEXT,
            fontSize: FONT_SIZES.LABEL,
            borderRadius: '4px',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading: Footer-level sectioning */}
      <div className="pt-2">
        <h3 className="font-semibold" style={{ color: COLORS.RECENT_HEADER, fontSize: FONT_SIZES.TITLE }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
