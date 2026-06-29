import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * Design tokens extracted from Figma.
 * Values are used inline via style prop because the component is located
 * outside the standard Tailwind scan path in some environments, ensuring
 * accurate color rendering regardless of build configuration.
 */
const COLORS = {
  CARD_BG: '#2a2a2a',
  INPUT_BG: '#272822',
  BUTTON_BG: '#843a17',
  HEADER_TEXT: '#b5b5b5',
  SECTION_HEADER: '#b2b2b1',
  LABEL_TEXT_1: '#a4a4a3',
  LABEL_TEXT_2: '#a3a3a2',
  SUBTEXT: '#8b9291',
  FOOTER_TEXT: '#b0b0b0',
  BUTTON_TEXT: '#8c8078',
  INPUT_BORDER_1: '#929291',
  INPUT_BORDER_2: '#a5adad',
  INPUT_PLACEHOLDER_1: '#737470',
  INPUT_PLACEHOLDER_2: '#71726e',
};

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[260px] p-5 rounded-lg shadow-lg mx-auto"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header row: Title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold" style={{ color: COLORS.HEADER_TEXT }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-lg" style={{ color: COLORS.HEADER_TEXT }} />
      </div>

      {/* Subtext row: Description with toggle-style icon */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-2" style={{ color: COLORS.SUBTEXT }} />
        <p className="text-sm" style={{ color: COLORS.SUBTEXT }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer per design requirements */}
      <div className="py-4"></div>

      {/* Add New Design section header */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="mr-2" style={{ color: COLORS.SECTION_HEADER }} />
        <h3 className="text-md font-semibold" style={{ color: COLORS.SECTION_HEADER }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <label
          htmlFor="token"
          className="block text-sm font-medium mb-2 flex items-center"
          style={{ color: COLORS.LABEL_TEXT_1 }}
        >
          Personal Access Token
          <AiOutlineInfoCircle className="ml-1 text-xs" />
        </label>
        <input
          type="text"
          id="token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border text-sm focus:outline-none focus:ring-1"
          style={{
            backgroundColor: COLORS.INPUT_BG,
            borderColor: COLORS.INPUT_BORDER_1,
            color: COLORS.HEADER_TEXT,
          }}
        />
        {/* Note: ::placeholder pseudo-elements must be handled via CSS or Tailwind classes. 
            Inline style does not support it directly without a library or style-tag injection. */}
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <label
          htmlFor="design-url"
          className="block text-sm font-medium mb-2 flex items-center"
          style={{ color: COLORS.LABEL_TEXT_2 }}
        >
          Design URL
          <AiOutlineInfoCircle className="ml-1 text-xs" />
        </label>
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border text-sm focus:outline-none focus:ring-1"
          style={{
            backgroundColor: COLORS.INPUT_BG,
            borderColor: COLORS.INPUT_BORDER_2,
            color: COLORS.HEADER_TEXT,
          }}
        />
      </div>

      {/* Action buttons: Dual primary-style actions */}
      <div className="flex justify-between gap-3 mb-6">
        <button
          className="flex-1 py-2 px-4 rounded-md font-semibold text-center transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-4 rounded-md font-semibold text-center transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Footer: Metadata or navigation label */}
      <div className="text-md font-semibold" style={{ color: COLORS.FOOTER_TEXT }}>
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
