import React from 'react';
import { AiOutlineSetting, AiOutlineUp, AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2b2b2b] p-6 rounded-lg w-full">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-white text-lg">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400 text-xl" />
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center gap-2 mb-16">
        <AiOutlineUp className="text-[#b35c2e] text-sm flex-shrink-0" />
        <span className="text-[#b35c2e] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <AiOutlineUp className="text-white text-base flex-shrink-0" />
        <span className="font-bold text-white text-base">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-gray-200 text-sm font-medium mb-2">
          Personal Access Token
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </label>
        <input
          className="w-full bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-gray-400 text-sm placeholder:text-gray-600 outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-gray-200 text-sm font-medium mb-2">
          Design URL
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </label>
        <input
          className="w-full bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-gray-400 text-sm placeholder:text-gray-600 outline-none"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Button Row */}
      <div className="flex gap-4 justify-center mb-12 mt-2">
        <button className="bg-[#9e4e20] hover:bg-[#b35c2e] text-white font-semibold rounded-2xl px-6 py-3 text-sm">Awesome</button>
        <button className="bg-[#9e4e20] hover:bg-[#b35c2e] text-white font-semibold rounded-2xl px-6 py-3 text-sm">Prepare</button>
      </div>

      {/* Footer */}
      <div>
        <span className="font-bold text-white text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
};
