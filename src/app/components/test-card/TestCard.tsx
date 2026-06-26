
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

/**
 * TestCard Component
 * A self-contained dark-themed card panel reproducing the Figma design.
 * Primarily used as a visual smoke test for the UI Magician Agent pattern.
 */
const TestCard: React.FC = () => {
  // Shared button styles to ensure consistency and easier maintenance
  const buttonClassName =
    'flex-1 bg-[#a0522d] text-[#8c8078] font-semibold rounded-lg px-4 py-2 text-xs transition-colors hover:bg-[#b85e33] active:bg-[#8b4513] focus:outline-none focus:ring-2 focus:ring-[#a0522d] focus:ring-offset-2 focus:ring-offset-[#252525]';

  return (
    <div
      id="testElem"
      className="p-4 bg-[#252525] text-[#b5b5b5] font-sans w-[280px] space-y-4 shadow-xl rounded-md"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        <button
          aria-label="Settings"
          className="p-1 hover:bg-[#333333] rounded-full transition-colors"
        >
          <AiOutlineSetting className="text-[#b5b5b5] text-lg" />
        </button>
      </div>

      {/* Collapsed/Context Row */}
      <div className="flex items-center space-x-2 cursor-pointer group" aria-expanded="false">
        <FiChevronUp className="text-[#8b9291] group-hover:text-[#b5b5b5]" />
        <span className="text-[#8b9291] text-xs font-semibold group-hover:text-[#b5b5b5]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacing alignment */}
      <div className="h-4" aria-hidden="true" />

      {/* Add New Design Section */}
      <div className="flex items-center space-x-2">
        <FiChevronUp className="text-[#b2b2b1]" />
        <h3 className="text-[#b2b2b1] text-sm font-semibold uppercase tracking-wider">
          Add New Design
        </h3>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Personal Access Token Input */}
        <div className="space-y-1.5">
          <label
            htmlFor="pat-input"
            className="flex items-center space-x-1 text-[#a4a4a3] text-[11.5px] font-semibold"
          >
            <span>Personal Access Token</span>
            <AiOutlineInfoCircle className="text-[#a4a4a3]" />
          </label>
          <input
            id="pat-input"
            type="password"
            autoComplete="off"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#737470] text-xs px-2 py-1.5 w-full focus:outline-none focus:border-[#a0522d] transition-colors"
          />
        </div>

        {/* Design URL Input */}
        <div className="space-y-1.5">
          <label
            htmlFor="url-input"
            className="flex items-center space-x-1 text-[#a3a3a2] text-[11.5px] font-semibold"
          >
            <span>Design URL</span>
            <AiOutlineInfoCircle className="text-[#a3a3a2]" />
          </label>
          <input
            id="url-input"
            type="url"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#71726e] text-xs px-2 py-1.5 w-full focus:outline-none focus:border-[#a0522d] transition-colors"
          />
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-2">
          <button type="button" className={buttonClassName}>
            Awesome
          </button>
          <button type="button" className={buttonClassName}>
            Prepare
          </button>
        </div>
      </form>

      {/* Recent Activity/Breakdowns Section */}
      <div className="border-t border-[#3a3a3a] pt-4">
        <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
