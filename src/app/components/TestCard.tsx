import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Figma Design Colors
const COLORS = {
  CARD_BG: '#2a2a2a',
  INPUT_BG: '#1e1e1e',
  INPUT_BORDER: '#555',
  PRIMARY_ORANGE: '#c0552a',
  PRIMARY_ORANGE_HOVER: '#a84a24',
  TEXT_MUTED: '#888',
  TEXT_BRIGHT: '#e8e8e8',
};

/**
 * TestCard component reproducing the "UI magician Agent" panel design from Figma.
 * Used for visual testing and Storybook demonstrations.
 */
const TestCard: React.FC = () => {
  const inputStyles = `w-full bg-[${COLORS.INPUT_BG}] border border-[${COLORS.INPUT_BORDER}] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-amber-500`;
  const buttonStyles = `flex-1 bg-[${COLORS.PRIMARY_ORANGE}] text-white rounded-lg px-5 py-3 font-semibold text-sm transition-colors hover:bg-[${COLORS.PRIMARY_ORANGE_HOVER}]`;

  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.CARD_BG }}
      className="w-[280px] p-4 flex flex-col gap-4 text-gray-100"
    >
      {/* Header with agent title and settings */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">UI magician Agent</span>
        <IoSettingsOutline className="text-gray-400 text-xl cursor-not-allowed" />
      </div>

      {/* Collapsed context row - static display as per requirement */}
      <div className="flex items-center gap-2 text-[#888] text-sm">
        <FiChevronUp className="text-lg" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Configuration Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-gray-200 font-semibold">
          <FiChevronUp className="text-lg" />
          <span>Add New Design</span>
        </div>

        {/* Form Fields: PAT and Design URL */}
        <div className="flex flex-col gap-4">
          <div className="space-y-1.5">
            <label htmlFor="pat" className="text-sm flex items-center gap-1">
              Personal Access Token <AiOutlineInfoCircle className="text-gray-400" />
            </label>
            <input
              id="pat"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={inputStyles}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="design-url" className="text-sm flex items-center gap-1">
              Design URL <AiOutlineInfoCircle className="text-gray-400" />
            </label>
            <input
              id="design-url"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className={inputStyles}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button className={buttonStyles}>Awesome</button>
          <button className={buttonStyles}>Prepare</button>
        </div>
      </div>

      {/* Footer / History Section */}
      <div className="mt-4 border-t border-gray-700 pt-4">
        <span className="text-lg font-bold text-gray-100">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
