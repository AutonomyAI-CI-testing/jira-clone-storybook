import React from 'react';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 font-sans text-sm mx-auto max-w-sm rounded-lg">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#b5b5b5]">UI magician Agent</span>
        <AiOutlineSetting className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Collapsed Info Row */}
      <div className="flex items-center gap-2 mt-2">
        <HiChevronUp className="text-[#8b9291]" />
        <span className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section Header */}
      <div className="mt-8 flex items-center gap-2">
        <HiChevronUp className="text-[#b2b2b1]" />
        <span className="font-semibold text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#555] rounded px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] focus:outline-none focus:border-[#b05a2a]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">Design URL</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#555] rounded px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] focus:outline-none focus:border-[#b05a2a]"
        />
      </div>

      {/* Action Buttons Row */}
      <div className="mt-6 flex gap-3 justify-center">
        <button className="flex-1 bg-[#b05a2a] text-white text-xs font-semibold py-3 rounded-xl cursor-pointer hover:opacity-90">
          Awesome
        </button>
        <button className="flex-1 bg-[#b05a2a] text-white text-xs font-semibold py-3 rounded-xl cursor-pointer hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-[#b0b0b0] font-semibold text-sm">
        Recent Breakdowns
      </div>
    </div>
  );
}