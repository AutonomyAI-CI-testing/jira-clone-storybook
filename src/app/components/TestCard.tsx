import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard Component
 * 
 * A self-contained component that replicates the "UI magician Agent" Figma design.
 * This is a smoke test component for verifying the design system and Figma-to-code pipeline.
 * Colors and styles are hardcoded to match the Figma spec precisely.
 */

// Colors from Figma spec
const COLORS = {
  CARD_BG: '#1e1e1e',
  INPUT_BG: '#272822',
  BUTTON_BG: '#843a17',
  TITLE_TEXT: '#b5b5b5',
  SUBTITLE_TEXT: '#8b9291',
  LABEL_TEXT: '#a4a4a3',
  PLACEHOLDER_TEXT: '#737470',
  BUTTON_TEXT: '#8c8078',
  SECTION_HEADER: '#b2b2b1',
  RECENT_BREAKDOWNS: '#b0b0b0',
  INPUT_BORDER_TOKEN: '#a5adad',
  INPUT_BORDER_URL: '#929291',
};

const TestCard: React.FC = () => {
  return (
    <div 
      id="testElem" 
      className="p-6 max-w-sm mx-auto rounded-lg shadow-lg" 
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold" style={{ color: COLORS.TITLE_TEXT }}>
          UI magician Agent
        </h1>
        <FiSettings className="text-gray-400" aria-hidden="true" title="Settings" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="text-gray-500 mr-2" aria-hidden="true" />
        <p className="text-sm" style={{ color: COLORS.SUBTITLE_TEXT }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <FiChevronUp className="text-gray-500 mr-2" aria-hidden="true" />
          <h2 className="text-lg font-semibold" style={{ color: COLORS.SECTION_HEADER }}>
            Add New Design
          </h2>
        </div>
        
        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label htmlFor="pat" className="flex items-center text-sm mb-2" style={{ color: COLORS.LABEL_TEXT }}>
            Personal Access Token 
            <FiInfo className="ml-1" title="Information about Personal Access Token" />
          </label>
          <input
            id="pat"
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded text-white focus:outline-none"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              border: `1px solid ${COLORS.INPUT_BORDER_TOKEN}`,
            }}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-6">
          <label htmlFor="designUrl" className="flex items-center text-sm mb-2" style={{ color: COLORS.LABEL_TEXT }}>
            Design URL
            <FiInfo className="ml-1" title="Information about Design URL" />
          </label>
          <input
            id="designUrl"
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded text-white focus:outline-none"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              border: `2px solid ${COLORS.INPUT_BORDER_URL}`,
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button 
            type="button"
            className="px-6 py-2 rounded font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold" style={{ color: COLORS.RECENT_BREAKDOWNS }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
