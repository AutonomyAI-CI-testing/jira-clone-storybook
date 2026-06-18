import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaChevronUp } from 'react-icons/fa';

/**
 * TestCard - A high-fidelity UI panel replicating the "UI magician Agent" design.
 * This component is used as a smoke test for the rendering pipeline and handles
 * complex layout sections, custom branding colors, and iconography.
 */
const TestCard: React.FC = () => {
  // Shared styles for the dark-themed inputs
  const inputClassName = "w-full p-2 rounded-md bg-[#1e1e1e] border border-[#3a3a3a] text-[#d4d4d4] placeholder-[#a0a0a0] focus:outline-none focus:border-[#b5522b] transition-colors";
  
  // Shared styles for the primary action buttons
  const buttonClassName = "flex-1 py-2 px-4 bg-[#b5522b] hover:bg-[#c4622d] text-white rounded-lg font-semibold transition-colors";

  return (
    <div id="testElem" className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] p-4 flex flex-col items-center">
      <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-md w-full">

        {/* Header Row: Agent name and settings */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">UI magician Agent</h2>
          <button aria-label="Settings" className="hover:opacity-80 transition-opacity">
            <IoSettingsOutline className="text-xl" />
          </button>
        </div>

        {/* Status/Context row with collapsible indicator */}
        <div className="flex items-center text-[#a0a0a0] mb-6 cursor-default">
          <FaChevronUp className="text-sm mr-2" />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        {/* Section: Add New Design - Form for token and URL */}
        <div className="mb-6">
          <div className="flex items-center mb-4 cursor-default">
            <FaChevronUp className="text-sm mr-2" />
            <h3 className="text-lg font-semibold">Add New Design</h3>
          </div>

          <div className="mb-4">
            <label htmlFor="pat" className="block text-sm font-medium text-[#a0a0a0] mb-1 flex items-center">
              Personal Access Token
              <AiOutlineInfoCircle className="ml-1 text-xs cursor-help" title="Figma Personal Access Token" />
            </label>
            <input
              type="text"
              id="pat"
              placeholder="figd_xxxxxxxxxxxxxxxxx"
              className={inputClassName}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="designUrl" className="block text-sm font-medium text-[#a0a0a0] mb-1 flex items-center">
              Design URL
              <AiOutlineInfoCircle className="ml-1 text-xs cursor-help" title="URL of the Figma file" />
            </label>
            <input
              type="text"
              id="designUrl"
              placeholder="https://www.figma.com/file/:"
              className={inputClassName}
            />
          </div>

          <div className="flex space-x-4">
            <button className={buttonClassName}>Awesome</button>
            <button className={buttonClassName}>Prepare</button>
          </div>
        </div>

        {/* Section: History/Breakdowns footer */}
        <div className="border-t border-[#3a3a3a] pt-4">
          <h3 className="text-lg font-semibold">Recent Breakdowns</h3>
        </div>

      </div>
    </div>
  );
};

export default TestCard;
