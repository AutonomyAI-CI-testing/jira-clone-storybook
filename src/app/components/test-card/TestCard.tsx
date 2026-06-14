import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 max-w-[320px] flex flex-col gap-4 rounded-lg">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <AiOutlineSetting className="text-white text-xl" />
      </div>

      {/* Section: Subtitle/Accent info */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#c07840] text-sm" aria-hidden="true" />
        <span className="text-[#c07840] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section: Add New Design header */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white text-sm" aria-hidden="true" />
        <span className="text-white font-bold text-base">Add New Design</span>
      </div>

      {/* Field: Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-white text-sm font-medium">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-white text-sm" aria-hidden="true" title="Token information" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="bg-[#333333] border border-[#4a4a4a] rounded px-3 py-2 text-[#cccccc] placeholder:text-[#666666] text-sm w-full"
        />
      </div>

      {/* Field: Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-white text-sm font-medium">Design URL</label>
          <AiOutlineInfoCircle className="text-white text-sm" aria-hidden="true" title="URL of the design file" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="bg-[#333333] border border-[#4a4a4a] rounded px-3 py-2 text-[#cccccc] placeholder:text-[#666666] text-sm w-full"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3">
        <button className="bg-[#8b4a1c] text-[#d4855a] rounded-lg px-4 py-2 font-semibold text-sm flex-1">
          Awesome
        </button>
        <button className="bg-[#8b4a1c] text-[#d4855a] rounded-lg px-4 py-2 font-semibold text-sm flex-1">
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <div>
        <span className="text-white font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};