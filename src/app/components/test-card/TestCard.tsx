
import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard - A self-contained presentational component recreating the "UI magician Agent" panel.
 * 
 * DESIGN NOTES:
 * - Uses a custom dark background (#2a2a2a) to match target design.
 * - Colors for accents (muted orange #c87941, orange-brown buttons #b5541c) are hardcoded 
 *   to ensure visual fidelity with the reference mockup.
 */
const TestCard: React.FC = () => {
  // Styles are extracted to Tailwind classes using arbitrary values for precise design matching
  const inputBaseStyles = "w-full bg-[#1e1e1e] border border-[#444] rounded-lg px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 outline-none transition-colors focus:border-[#b5541c]";
  const buttonBaseStyles = "flex-1 bg-[#b5541c] hover:bg-[#c4622d] text-white font-semibold py-3 rounded-xl transition-all active:scale-95";
  const iconBaseStyles = "text-gray-400";

  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-xl p-5 w-full max-w-sm text-white shadow-2xl">
      {/* Header section with title and settings icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold tracking-tight">UI magician Agent</h2>
        <IoSettingsOutline className={`${iconBaseStyles} text-2xl cursor-pointer hover:text-white transition-colors`} />
      </div>

      {/* Hero-like subtitle with muted orange text */}
      <div className="flex items-center space-x-2 mb-6">
        <HiChevronUp className={`${iconBaseStyles} text-lg`} aria-hidden="true" />
        <span className="text-[#c87941] text-sm">From entire frame to a singl...</span>
      </div>

      <hr className="border-t border-[#444] mb-6" />

      {/* Configuration section title */}
      <div className="flex items-center space-x-2 mb-4">
        <HiChevronUp className={`${iconBaseStyles} text-lg`} aria-hidden="true" />
        <h3 className="text-lg font-bold">Add New Design</h3>
      </div>

      {/* Input Group: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <label htmlFor="pat" className="text-sm font-medium">Personal Access Token</label>
          <AiOutlineInfoCircle className={`${iconBaseStyles} text-sm cursor-help`} />
        </div>
        <input
          id="pat"
          type="text"
          autoComplete="off"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputBaseStyles}
        />
      </div>

      {/* Input Group: Design URL */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <label htmlFor="designUrl" className="text-sm font-medium">Design URL</label>
          <AiOutlineInfoCircle className={`${iconBaseStyles} text-sm cursor-help`} />
        </div>
        <input
          id="designUrl"
          type="text"
          autoComplete="off"
          placeholder="https://www.figma.com/file/:"
          className={inputBaseStyles}
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className={buttonBaseStyles}>
          Awesome
        </button>
        <button className={buttonBaseStyles}>
          Prepare
        </button>
      </div>

      {/* Footer section */}
      <div className="pt-2 border-t border-[#444]/50">
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
