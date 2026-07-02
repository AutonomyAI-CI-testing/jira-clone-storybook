import React from 'react';
import { FaCog, FaInfoCircle, FaChevronUp } from 'react-icons/fa';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] text-[#b5b5b5] p-5 w-[254px] min-h-[508px] flex flex-col gap-3 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">UI magician Agent</span>
        <FaCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Chevron subtitle row */}
      <div className="flex items-center gap-2">
        <FaChevronUp size={8} className="text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-8">
        <FaChevronUp size={10} className="text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token input */}
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#a4a4a3]">Personal Access Token</span>
          <FaInfoCircle size={12} className="text-[#a4a4a3]" />
        </div>
        <input placeholder="figd_xxxxxxxxxxxxxxxxxx" className="w-full bg-[#272822] border border-[#929291] rounded text-xs font-semibold text-[#737470] placeholder:text-[#737470] px-3 py-2 mt-1 outline-none" />
      </div>

      {/* Design URL input */}
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#a3a3a2]">Design URL</span>
          <FaInfoCircle size={12} className="text-[#a3a3a2]" />
        </div>
        <input placeholder="https://www.figma.com/file/:" className="w-full bg-[#272822] border border-[#a5adad] rounded text-xs font-semibold text-[#71726e] placeholder:text-[#71726e] px-3 py-2 mt-1 outline-none" />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-xs font-semibold py-2.5 rounded">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-xs font-semibold py-2.5 rounded">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-8">
        <span className="text-sm font-semibold text-[#b0b0b0]">Recent Breakdowns</span>
      </div>
    </div>
  );
};