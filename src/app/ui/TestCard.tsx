import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] min-h-screen p-6 flex flex-col gap-4 font-sans antialiased"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#b5b5b5] font-bold text-xl">UI magician Agent</h1>
        <AiOutlineSetting className="text-[#b5b5b5] text-xl" />
      </div>

      {/* Collapsible breadcrumb row */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#8b9291]" />
        <p className="text-[#8b9291] text-sm">From entire frame to a singl...</p>
      </div>

      {/* Visual spacer */}
      <div className="h-4" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp className="text-[#b2b2b1]" />
        <h2 className="text-[#b2b2b1] font-semibold text-lg">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="pat" className="text-[#a4a4a3] text-sm">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1e1e1b] border border-[#a5adad] w-full px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] rounded focus:outline-none"
        />
      </div>

      {/* Design URL Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="designUrl" className="text-[#a4a4a3] text-sm">Design URL</label>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1e1b] border-2 border-[#929291] w-full px-3 py-2 text-xs text-[#71726e] placeholder:text-[#71726e] rounded focus:outline-none"
        />
      </div>

      {/* Primary Actions */}
      <div className="flex gap-3 justify-center mt-2">
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-6 py-3 font-medium hover:brightness-110 transition-all">Awesome</button>
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-6 py-3 font-medium hover:brightness-110 transition-all">Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-[#b0b0b0] font-semibold text-lg mt-4">Recent Breakdowns</h3>
    </div>
  );
};


export default TestCard;
