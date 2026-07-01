
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { RiArrowDropUpLine } from 'react-icons/ri';

/**
 * Constants for the specific Figma design colors.
 * These are kept as hex values to match the standalone nature of the test component,
 * diverging from the main design system vars as per requirements.
 */
const COLORS = {
  CARD_BG: '#272822',
  HEADER_TEXT: '#b5b5b5',
  MUTED_TEXT: '#8b9291',
  SECTION_HEADING: '#b2b2b1',
  LABEL_TEXT: '#a4a4a3',
  LABEL_TEXT_ALT: '#a3a3a2',
  INPUT_BORDER: '#a5adad',
  INPUT_BORDER_ALT: '#929291',
  PLACEHOLDER: '#737470',
  PLACEHOLDER_ALT: '#71726e',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  RECENT_HEADING: '#b0b0b0',
} as const;

/**
 * Shared Label + Info icon pattern
 */
const FieldLabel: React.FC<{ label: string; color: string; htmlFor: string }> = ({
  label,
  color,
  htmlFor,
}) => (
  <div className="flex items-center mb-1">
    <label htmlFor={htmlFor} className="text-[11.5px] mr-1" style={{ color }}>
      {label}
    </label>
    <AiOutlineInfoCircle className="w-3 h-3" style={{ color }} />
  </div>
);

/**
 * Styled action button used for the primary CTAs
 */
const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="flex-1 py-2 font-semibold rounded-lg text-[13.5px]"
    style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
  >
    {children}
  </button>
);

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-4 font-sans"
      style={{ backgroundColor: COLORS.CARD_BG, color: COLORS.HEADER_TEXT }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[13.5px] font-semibold">UI magician Agent</h2>
        <AiOutlineSetting className="w-4 h-4" />
      </div>

      {/* Collapsed Row - Indicated by the up-chevron and truncated text */}
      <div className="flex items-center mb-6">
        <RiArrowDropUpLine className="w-5 h-5 mr-1" style={{ color: COLORS.MUTED_TEXT }} />
        <span className="text-[11.5px]" style={{ color: COLORS.MUTED_TEXT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer to match Figma vertical distribution */}
      <div className="h-4" />

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <RiArrowDropUpLine className="w-5 h-5 mr-1" style={{ color: COLORS.SECTION_HEADING }} />
          <h3 className="text-[13.5px] font-semibold" style={{ color: COLORS.SECTION_HEADING }}>
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-4">
          <FieldLabel label="Personal Access Token" color={COLORS.LABEL_TEXT} htmlFor="pat" />
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 bg-transparent border-[1px] rounded text-[12px]"
            style={{ borderColor: COLORS.INPUT_BORDER, color: COLORS.PLACEHOLDER }}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-6">
          <FieldLabel label="Design URL" color={COLORS.LABEL_TEXT_ALT} htmlFor="designUrl" />
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 bg-transparent border-[2px] rounded text-[12px]"
            style={{ borderColor: COLORS.INPUT_BORDER_ALT, color: COLORS.PLACEHOLDER_ALT }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-2">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h3 className="text-[13.5px] font-semibold" style={{ color: COLORS.RECENT_HEADING }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
