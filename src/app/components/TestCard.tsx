
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard is a self-contained smoke-test component designed to verify
 * Tailwind CSS rendering and the component pipeline.
 * It uses arbitrary hex values for colors to match specific design requirements
 * without modifying global theme tokens.
 */
export const TestCard: React.FC = () => {
  // Shared styles for inputs and buttons to ensure consistency and reduce redundancy
  const inputStyles = "bg-[#2a2a2a] border border-[#444] rounded-md px-3 py-2 text-gray-400 w-full text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#c26a3a]";
  const buttonStyles = "bg-[#b5451b] hover:bg-[#c95a25] text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200";

  return (
    <div id="testElem" className="bg-[#1c1c1c] text-white p-6 rounded-xl max-w-sm mx-auto shadow-lg">
      {/* Header Row: Agent title and settings action */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg">UI magician Agent</span>
        <IoSettingsOutline className="text-gray-400 text-xl cursor-not-allowed" title="Settings" />
      </div>

      {/* Subtitle Row: Context hint in muted orange accent */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-[#c26a3a] text-lg" aria-hidden="true" />
        <span className="text-[#c26a3a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Navigation Section: Indication of current view/action */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-white text-lg" aria-hidden="true" />
        <span className="font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token Field: Requirement for Figma integration */}
      <div className="mb-4">
        <label htmlFor="personalAccessToken" className="flex items-center gap-1 text-sm text-gray-300 mb-1">
          Personal Access Token 
          <AiOutlineInfoCircle className="text-gray-400 text-lg cursor-help" title="Figma Personal Access Token" />
        </label>
        <input
          id="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputStyles}
        />
      </div>

      {/* Design URL Field: Target Figma file link */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center gap-1 text-sm text-gray-300 mb-1">
          Design URL 
          <AiOutlineInfoCircle className="text-gray-400 text-lg cursor-help" title="Figma File URL" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={inputStyles}
        />
      </div>

      {/* Action Buttons: Burnt orange theme buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button className={buttonStyles} type="button">
          Awesome
        </button>
        <button className={buttonStyles} type="button">
          Prepare
        </button>
      </div>

      {/* Recent Activity Section */}
      <div>
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};
