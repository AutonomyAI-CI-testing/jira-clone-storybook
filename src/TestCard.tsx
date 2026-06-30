
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#1e1e1e] text-white min-h-screen">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <FiSettings className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-[#8b9291]" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="my-8" />

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-[#b2b2b1]" />
        <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px] font-semibold">Personal Access Token</label>
          <FiInfo className="text-[#a4a4a3]" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-[11.5px] font-semibold text-[#737470]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="designUrl" className="text-[#a3a3a2] text-[11.5px] font-semibold">Design URL</label>
          <FiInfo className="text-[#a3a3a2]" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#272822] border-2 border-[#929291] text-[11.5px] font-semibold text-[#71726e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button className="bg-[#843a17] text-[#8c8078] font-semibold rounded-lg px-6 py-3 text-[11.5px]">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] font-semibold rounded-lg px-6 py-3 text-[11.5px]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="text-[#b0b0b0] font-semibold text-sm">
        Recent Breakdowns
      </div>
    </div>
  );
};
