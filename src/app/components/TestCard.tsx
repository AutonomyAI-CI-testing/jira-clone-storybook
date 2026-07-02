
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard — self-contained dark-themed UI panel matching the Figma reference design.
 * All content is hardcoded; accepts no props.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 w-80">
      {/* Header: title + settings gear */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg" aria-label="Settings" />
      </div>

      {/* Collapsed scope info row */}
      <div className="flex items-center gap-1 mt-2">
        <FiChevronUp className="text-[#8b9291] text-lg" />
        <span className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      <div className="mt-8" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-[#b2b2b1] text-lg" />
        <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
      </div>

      {/* Personal Access Token input */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className="text-[#a4a4a3] text-xs font-semibold">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-sm" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#272822] border border-[#3a3a3a] rounded px-3 py-2 w-full text-[#737470] text-xs focus:outline-none"
        />
      </div>

      {/* Design URL input */}
      <div className="mt-3 mb-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="designUrl" className="text-[#a3a3a2] text-xs font-semibold">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-[#a3a3a2] text-sm" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#272822] border border-[#3a3a3a] rounded px-3 py-2 w-full text-[#737470] text-xs focus:outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-[#843a17] text-[#8c8078] text-xs font-semibold rounded-lg px-6 py-2">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] text-xs font-semibold rounded-lg px-6 py-2">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div className="mt-8">
        <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

