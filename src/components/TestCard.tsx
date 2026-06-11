
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export function TestCard() {
  return (
    <div id="testElem" className="max-w-xs p-4 flex flex-col gap-4 bg-[#1a1a1a] text-white">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="w-5 h-5" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="w-4 h-4 text-[#c2813a]" />
        <p className="text-[#c2813a]">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section Heading */}
      <div className="flex items-center gap-2 mt-2">
        <FiChevronUp className="w-4 h-4" />
        <h3 className="text-base font-bold">Add New Design</h3>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-3">
        {/* Personal Access Token Input */}
        <div className="flex flex-col gap-1">
          <label htmlFor="pat" className="text-sm text-[#aaa] flex items-center gap-1">
            Personal Access Token <AiOutlineInfoCircle className="w-3 h-3" />
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#2a2a2a] border border-[#444] rounded p-2 text-white placeholder-[#888]"
          />
        </div>

        {/* Design URL Input */}
        <div className="flex flex-col gap-1">
          <label htmlFor="design-url" className="text-sm text-[#aaa] flex items-center gap-1">
            Design URL <AiOutlineInfoCircle className="w-3 h-3" />
          </label>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#2a2a2a] border border-[#444] rounded p-2 text-white placeholder-[#888]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#b45309] rounded-lg px-6 py-3 text-white font-semibold">
          Awesome
        </button>
        <button className="flex-1 bg-[#b45309] rounded-lg px-6 py-3 text-white font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Heading */}
      <div className="mt-2">
        <h3 className="text-base font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
