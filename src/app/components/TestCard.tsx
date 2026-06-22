
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

const CARD_BACKGROUND = "bg-[#2a2a2a]";
const PRIMARY_ACCENT = "text-[#c87941]";
const BUTTON_BACKGROUND = "bg-[#a0522d]";
const INPUT_BACKGROUND = "bg-[#333]";
const INPUT_BORDER = "border-[#555]";

/**
 * TestCard component for the UI Magician Agent.
 * Displays configuration for new designs and a list of recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={`${CARD_BACKGROUND} p-5 flex flex-col gap-4 w-full max-w-[320px] font-sans`}
    >
      {/* Header section with agent title and settings access */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-white text-xl">UI magician Agent</h2>
        <AiOutlineSetting className="text-gray-300 text-2xl cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Secondary info row - muted orange accent color */}
      <div className="flex items-center gap-2">
        <FiChevronUp className={`${PRIMARY_ACCENT} text-base flex-shrink-0`} />
        <p className={`${PRIMARY_ACCENT} text-sm truncate`}>From entire frame to a singl...</p>
      </div>

      {/* Visual spacer */}
      <div className="h-4" aria-hidden="true" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white text-base flex-shrink-0" />
        <h3 className="font-bold text-white text-xl">Add New Design</h3>
      </div>

      {/* Configuration inputs */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-1 text-white text-sm font-normal">
            Personal Access Token
            <AiOutlineInfoCircle className="text-gray-400 text-base cursor-help" title="Figma Personal Access Token" />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={`w-full p-3 rounded ${INPUT_BACKGROUND} border ${INPUT_BORDER} text-gray-300 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-500`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-1 text-white text-sm font-normal">
            Design URL
            <AiOutlineInfoCircle className="text-gray-400 text-base cursor-help" title="Figma file URL" />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={`w-full p-3 rounded ${INPUT_BACKGROUND} border ${INPUT_BORDER} text-gray-300 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-500`}
          />
        </div>
      </div>

      {/* Action buttons - burnt-orange background matching Figma */}
      <div className="flex gap-3 justify-center">
        <button
          type="button"
          className={`flex-1 py-3 px-5 ${BUTTON_BACKGROUND} rounded-lg text-white font-semibold text-base hover:brightness-110 active:scale-[0.98] transition-all`}
        >
          Awesome
        </button>
        <button
          type="button"
          className={`flex-1 py-3 px-5 ${BUTTON_BACKGROUND} rounded-lg text-white font-semibold text-base hover:brightness-110 active:scale-[0.98] transition-all`}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-4">
        <h3 className="font-bold text-white text-xl">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
