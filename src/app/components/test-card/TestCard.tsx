
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component
 * A self-contained UI panel for testing "UI magician Agent" features.
 * Matches Figma design with hardcoded dark theme and burnt-orange highlights.
 */
const TestCard: React.FC = () => {
  // Constants for styles to avoid repetition and improve readability
  const inputStyles = "w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded-md p-2 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#b05a2f]";
  const buttonStyles = "flex-1 bg-[#b05a2f] text-white rounded-lg py-2 px-4 font-semibold hover:bg-[#9a4b22] transition-colors";

  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white p-5 rounded-xl max-w-sm mx-auto my-10 shadow-2xl">
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <button type="button" aria-label="Settings">
          <FiSettings className="text-gray-400 hover:text-white transition-colors" />
        </button>
      </div>

      {/* Collapsed Status Row */}
      <div className="flex items-center gap-2 mb-5 cursor-default">
        <FiChevronUp className="text-gray-400" />
        <span className="text-[#c87941] text-sm truncate">From entire frame to a singl...</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#444444] my-5" aria-hidden="true" />

      {/* Form Content */}
      <div className="space-y-4">
        {/* Section Heading: Add New Design */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp className="text-gray-400" />
          <h3 className="font-bold">Add New Design</h3>
        </div>

        {/* Personal Access Token Input */}
        <div>
          <label htmlFor="pat" className="flex items-center gap-2 text-sm font-semibold mb-2 cursor-pointer">
            Personal Access Token
            <FiInfo className="text-gray-400" title="Provide your Figma Personal Access Token" />
          </label>
          <input
            id="pat"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={inputStyles}
          />
        </div>

        {/* Design URL Input */}
        <div className="pb-2">
          <label htmlFor="designUrl" className="flex items-center gap-2 text-sm font-semibold mb-2 cursor-pointer">
            Design URL
            <FiInfo className="text-gray-400" title="Enter the URL of your Figma design" />
          </label>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={inputStyles}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 my-8">
        <button type="button" className={buttonStyles}>
          Awesome
        </button>
        <button type="button" className={buttonStyles}>
          Prepare
        </button>
      </div>

      {/* Footer Section: Recent Breakdowns */}
      <div className="border-t border-[#444444] pt-4">
        <h3 className="font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
