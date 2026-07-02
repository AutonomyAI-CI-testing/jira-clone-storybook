import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';

// Figma-derived colors for the smoke test component
const COLORS = {
  BACKGROUND: '#272822',
  HEADER_TEXT: '#b5b5b5',
  SUBTITLE_TEXT: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL: '#a4a4a3',
  LABEL_SECONDARY: '#a3a3a2',
  INPUT_TEXT_TOKEN: '#737470',
  INPUT_TEXT_URL: '#71726e',
  BORDER_TOKEN: '#a5adad',
  BORDER_URL: '#929291',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  FOOTER_TEXT: '#b0b0b0',
} as const;

/**
 * TestCard is a static presentational component used as a smoke test
 * to verify end-to-end rendering of a Figma-designed dark-themed UI.
 * 
 * It uses hardcoded values and inline Tailwind classes with arbitrary values
 * to match the specific visual requirements of the Figma design reference.
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-4 text-white"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* 
        Header Row
        Label: "UI magician Agent" + gear icon
      */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold" style={{ color: COLORS.HEADER_TEXT }}>
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-xl" style={{ color: COLORS.HEADER_TEXT }} />
      </div>

      {/* 
        Subtitle Row 
        Muted text describing the scope
      */}
      <div className="flex items-center gap-1 mb-6">
        <BiChevronUp style={{ color: COLORS.SUBTITLE_TEXT }} />
        <span className="text-sm" style={{ color: COLORS.SUBTITLE_TEXT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer matching Figma layout */}
      <div className="h-8" />

      {/* Section Header: Add New Design */}
      <div className="flex items-center gap-1 mb-4">
        <BiChevronUp style={{ color: COLORS.SECTION_HEADER }} />
        <span className="font-bold" style={{ color: COLORS.SECTION_HEADER }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="pat-input" className="text-sm" style={{ color: COLORS.LABEL }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.LABEL }} />
        </div>
        <div
          id="pat-input"
          className="w-full p-2 h-9 rounded-md border flex items-center"
          style={{
            backgroundColor: COLORS.BACKGROUND,
            borderColor: COLORS.BORDER_TOKEN,
            color: COLORS.INPUT_TEXT_TOKEN,
          }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <label
            htmlFor="design-url-input"
            className="text-sm"
            style={{ color: COLORS.LABEL_SECONDARY }}
          >
            Design URL
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.LABEL_SECONDARY }} />
        </div>
        <div
          id="design-url-input"
          className="w-full p-2 h-9 rounded-md border-2 flex items-center"
          style={{
            backgroundColor: COLORS.BACKGROUND,
            borderColor: COLORS.BORDER_URL,
            color: COLORS.INPUT_TEXT_URL,
          }}
        >
          https://www.figma.com/file/:
        </div>
      </div>

      {/* 
        Buttons Row 
        Side-by-side CTA buttons with brown/orange styling
      */}
      <div className="flex gap-4 justify-between mb-8">
        <button
          className="flex-1 py-2 px-4 font-semibold rounded-md transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-4 font-semibold rounded-md transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div>
        <h3 className="font-bold" style={{ color: COLORS.FOOTER_TEXT }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
