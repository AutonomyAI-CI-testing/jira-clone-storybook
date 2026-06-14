import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard is a smoke test component designed to verify the rendering pipeline.
 * It reproduces a specific dark-themed UI panel with Tailwind and react-icons.
 * 
 * Note: Uses arbitrary Tailwind colors (#2b2b2b, #b5541e) to match the 
 * specific design requirements for this smoke test.
 */
export const TestCard: React.FC = () => {
  // Shared styles for the input fields and buttons to ensure consistency
  const inputStyles = "w-full p-2 rounded-md bg-[#3a3a3a] border border-[#555] placeholder-gray-500 text-white text-sm";
  const buttonStyles = "flex-1 py-2 px-4 bg-[#b5541e] text-white font-bold rounded-full text-sm hover:opacity-90 transition-opacity";

  return (
    <div id="testElem" className="bg-[#2b2b2b] p-4 rounded-lg text-white font-sans max-w-sm">
      {/* Header: Identity and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <FiSettings className="text-xl cursor-not-allowed" />
      </div>

      {/* Accordion Summary: State indicator */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="text-md mr-2 text-gray-400" />
        <span className="text-sm text-[#b5541e]">From entire frame to a singl...</span>
      </div>

      {/* Layout Spacer */}
      <div className="h-6" aria-hidden="true"></div>

      {/* Section: Configuration Header */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-md mr-2 text-gray-400" />
        <h3 className="text-md font-bold">Add New Design</h3>
      </div>

      {/* Input Group: Authentication */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat" className="text-sm mr-2">Personal Access Token</label>
          <FiInfo className="text-sm text-gray-400 cursor-help" title="Figma Personal Access Token" />
        </div>
        <input
          id="pat"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputStyles}
        />
      </div>

      {/* Input Group: Target Resource */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="design-url" className="text-sm mr-2">Design URL</label>
          <FiInfo className="text-sm text-gray-400 cursor-help" title="URL of the Figma design" />
        </div>
        <input
          id="design-url"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className={inputStyles}
        />
      </div>

      {/* Action Row */}
      <div className="flex space-x-4 mb-6">
        <button type="button" className={buttonStyles}>
          Awesome
        </button>
        <button type="button" className={buttonStyles}>
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div>
        <h3 className="text-md font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
