import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

// Design system constants match the visual requirements for the UI Magician Agent feature.
const COLORS = {
  BACKGROUND: '#2a2a2a',
  INPUT_BACKGROUND: '#3a3a3a',
  INPUT_BORDER: '#555555',
  PRIMARY_BUTTON: '#a0522d',
  PRIMARY_BUTTON_HOVER: '#8b4513',
  SUBTITLE: '#c8845a',
};

/**
 * TestCard is a presentational component used as a visual fidelity test.
 * It mirrors a plugin interface for the "UI magician Agent" featuring design inputs and action buttons.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-5 rounded-xl w-[280px] font-sans text-white border border-gray-800 shadow-xl"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header row: Main title and configuration access */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold leading-tight">UI magician Agent</h2>
        <AiOutlineSetting className="text-gray-400 text-xl cursor-not-allowed" aria-hidden="true" />
      </div>

      {/* Context/Subtitle row: Indicates current tool scope */}
      <div className="flex items-center gap-1 mb-5">
        <FiChevronUp style={{ color: COLORS.SUBTITLE }} aria-hidden="true" />
        <p style={{ color: COLORS.SUBTITLE }} className="text-sm">
          From entire frame to a singl...
        </p>
      </div>

      <hr className="border-gray-700 mb-5" />

      {/* Add New Design section: Primary interaction form */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-3">
          <FiChevronUp className="text-white" aria-hidden="true" />
          <h3 className="text-md font-bold">Add New Design</h3>
        </div>

        {/* Personal Access Token Input: Required for Figma API authentication */}
        <div className="mb-3">
          <label htmlFor="pat" className="flex items-center gap-1 text-sm text-gray-300 mb-1">
            Personal Access Token
            <AiOutlineInfoCircle className="text-gray-400" title="Figma Personal Access Token" />
          </label>
          <input
            type="password"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            autoComplete="off"
            className="w-full p-2 rounded border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{
              backgroundColor: COLORS.INPUT_BACKGROUND,
              borderColor: COLORS.INPUT_BORDER,
            }}
          />
        </div>

        {/* Design URL Input: The Figma file link to be processed */}
        <div className="mb-5">
          <label htmlFor="designUrl" className="flex items-center gap-1 text-sm text-gray-300 mb-1">
            Design URL
            <AiOutlineInfoCircle className="text-gray-400" title="The link to your Figma design" />
          </label>
          <input
            type="url"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{
              backgroundColor: COLORS.INPUT_BACKGROUND,
              borderColor: COLORS.INPUT_BORDER,
            }}
          />
        </div>

        {/* Action Buttons: Multi-step process for preparation and execution */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-200"
            style={{ backgroundColor: COLORS.PRIMARY_BUTTON }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.PRIMARY_BUTTON_HOVER)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.PRIMARY_BUTTON)}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-200"
            style={{ backgroundColor: COLORS.PRIMARY_BUTTON }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.PRIMARY_BUTTON_HOVER)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.PRIMARY_BUTTON)}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer: Historical data section */}
      <h3 className="text-md font-bold mt-8 border-t border-gray-700 pt-4">Recent Breakdowns</h3>
    </div>
  );
};
