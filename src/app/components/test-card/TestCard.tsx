
import React from 'react';
import { IoSettingsOutline, IoChevronUp } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white p-4 flex flex-col gap-4 w-[375px] font-primary" style={{ backgroundColor: '#2a2a2a', color: '#ffffff' }}>
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="text-white text-xl" />
      </div>

      {/* Collapsed Info Row */}
      <div className="flex items-center gap-2 text-[#a0a0a0] text-sm">
        <IoChevronUp className="text-white" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 font-semibold text-white">
        <IoChevronUp className="text-white" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <div>
        <label className="flex items-center gap-1 text-sm text-white mb-1">
          Personal Access Token
          <AiOutlineInfoCircle className="text-white" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1a1a1a] border border-[#444] rounded text-[#888] text-sm px-3 py-2 placeholder:text-[#666]"
          style={{ backgroundColor: '#1a1a1a', border: '1px solid #444444', color: '#888888' }}
        />
      </div>

      {/* Design URL Input */}
      <div>
        <label className="flex items-center gap-1 text-sm text-white mb-1">
          Design URL
          <AiOutlineInfoCircle className="text-white" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1a1a1a] border border-[#444] rounded text-[#888] text-sm px-3 py-2 placeholder:text-[#666]"
          style={{ backgroundColor: '#1a1a1a', border: '1px solid #444444', color: '#888888' }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#b5521b] text-white rounded-lg py-2 text-sm font-semibold" style={{ backgroundColor: '#b5521b', color: '#ffffff' }}>
          Awesome
        </button>
        <button className="flex-1 bg-[#b5521b] text-white rounded-lg py-2 text-sm font-semibold" style={{ backgroundColor: '#b5521b', color: '#ffffff' }}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h2 className="font-semibold text-white mt-4">Recent Breakdowns</h2>
    </div>
  );
};
