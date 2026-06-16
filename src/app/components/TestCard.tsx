
import React from 'react';
import { HiChevronUp } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Brand colors and shared styles for the TestCard component
const BRAND_ORANGE = '#b5541c';
const DARK_BG = '#2a2a2a';
const INPUT_BG = '#1e1e1e';

const INPUT_STYLES = `w-full p-2 rounded bg-[${INPUT_BG}] border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#b5541c]`;
const LABEL_STYLES = 'flex items-center text-sm font-medium text-gray-300 mb-2';
const BUTTON_STYLES = `flex-1 py-2 rounded bg-[${BRAND_ORANGE}] text-white font-medium transition-opacity hover:opacity-90 active:scale-[0.98]`;

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={`bg-[${DARK_BG}] p-5 max-w-sm mx-auto rounded-lg shadow-lg text-white font-sans`}
    >
      {/* Header: Displays the agent name and settings access */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <button aria-label="Settings" className="hover:opacity-80 transition-opacity">
          <IoSettingsOutline className="w-5 h-5" />
        </button>
      </div>

      {/* Status/Breadcrumb: Indicator of the current scope or mode */}
      <div className={`flex items-center text-[${BRAND_ORANGE}] text-sm mb-6`}>
        <HiChevronUp className="w-4 h-4 mr-1" />
        <span>From entire frame to a singl...</span>
      </div>

      <hr className="border-t border-gray-700 my-4" />

      {/* Section Header: Collapsible toggle for adding new designs */}
      <div className="flex items-center font-bold text-white mb-4 cursor-pointer hover:text-gray-200 transition-colors">
        <HiChevronUp className="w-4 h-4 mr-1" />
        <span>Add New Design</span>
      </div>

      {/* Input Field: Figma Personal Access Token */}
      <div className="mb-4">
        <label htmlFor="pat" className={LABEL_STYLES}>
          Personal Access Token
          <AiOutlineInfoCircle className="w-4 h-4 ml-1 cursor-help" title="Figma PAT is required for API access" />
        </label>
        <input
          id="pat"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={INPUT_STYLES}
        />
      </div>

      {/* Input Field: Source Figma Design URL */}
      <div className="mb-6">
        <label htmlFor="designUrl" className={LABEL_STYLES}>
          Design URL
          <AiOutlineInfoCircle className="w-4 h-4 ml-1 cursor-help" title="Link to the Figma file for processing" />
        </label>
        <input
          id="designUrl"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className={INPUT_STYLES}
        />
      </div>

      {/* Primary Actions: Confirm or Prepare the design breakdown */}
      <div className="flex space-x-4 mb-8">
        <button className={BUTTON_STYLES}>Awesome</button>
        <button className={BUTTON_STYLES}>Prepare</button>
      </div>

      {/* History Tracking: List of previous design breakdowns */}
      <h3 className="font-bold text-lg mb-2">Recent Breakdowns</h3>
    </div>
  );
};
