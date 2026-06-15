
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle, AiOutlineUp } from 'react-icons/ai';

/**
 * TestCard component representing a UI Agent configuration panel.
 * Designed with a dark theme and specific orange accents to match the "UI magician" aesthetic.
 */
export const TestCard = (): JSX.Element => {
  // Shared button style to ensure consistency between Awesome and Prepare actions
  const buttonClassName = "flex-1 rounded-lg py-2 text-sm font-semibold bg-[#A0522D] hover:bg-[#8B4513] text-white transition-colors";
  
  // Shared input style for form fields
  const inputClassName = "w-full border border-gray-600 bg-transparent rounded px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-colors";

  return (
    <div id="testElem" className="bg-[#282420] text-white p-4 rounded-lg max-w-xs space-y-4 shadow-xl">
      {/* Header: Agent name and settings */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <button className="text-xl hover:text-gray-300 transition-colors" aria-label="Settings">
          <AiOutlineSetting />
        </button>
      </div>

      {/* Collapsible section: Status/Description */}
      <div className="flex items-center gap-2">
        <AiOutlineUp className="text-[#DAA520]" title="Expanded" /> {/* Muted orange/gold icon */}
        <p className="text-sm text-gray-400 truncate">From entire frame to a singl...</p>
      </div>

      {/* Visual spacer to separate sections */}
      <div className="h-4" aria-hidden="true"></div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
        <AiOutlineUp className="text-xl text-gray-300" />
        <h3 className="font-bold text-white">Add New Design</h3>
      </div>

      {/* Field: Personal Access Token */}
      <div className="space-y-1">
        <label htmlFor="pat" className="flex items-center gap-1 text-sm text-gray-300">
          Personal Access Token
          <AiOutlineInfoCircle className="text-xs text-gray-400 cursor-help" title="Input your Figma personal access token" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      {/* Field: Design URL */}
      <div className="space-y-1">
        <label htmlFor="designUrl" className="flex items-center gap-1 text-sm text-gray-300">
          Design URL
          <AiOutlineInfoCircle className="text-xs text-gray-400 cursor-help" title="The URL of the Figma design file" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={inputClassName}
        />
      </div>

      {/* Footer Actions */}
      <div className="flex gap-3 pt-2">
        <button className={buttonClassName}>
          Awesome
        </button>
        <button className={buttonClassName}>
          Prepare
        </button>
      </div>

      {/* Section: Historical data */}
      <h3 className="font-bold mt-4 pt-2 border-t border-gray-700 text-gray-200">Recent Breakdowns</h3>
    </div>
  );
};
