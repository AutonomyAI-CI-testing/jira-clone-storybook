import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] min-h-screen text-white">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        <FiSettings className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="text-[#8b9291] mr-2" />
        <span className="text-[#8b9291] text-xs">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-6"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-[#b2b2b1] mr-2" />
        <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label className="flex items-center text-[#a4a4a3] text-xs font-semibold mb-2">
          Personal Access Token
          <FiInfo className="ml-2" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1e1e1e] border border-[#555] text-[#737470] rounded px-3 py-2 w-full text-xs placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label className="flex items-center text-[#a4a4a3] text-xs font-semibold mb-2">
          Design URL
          <FiInfo className="ml-2" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1e1e] border border-[#555] text-[#737470] rounded px-3 py-2 w-full text-xs placeholder:text-[#71726e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-start space-x-4 mb-6">
        <button className="bg-[#a0522d] text-[#e8d5c8] rounded-lg px-6 py-2 text-sm font-medium">
          Awesome
        </button>
        <button className="bg-[#a0522d] text-[#e8d5c8] rounded-lg px-6 py-2 text-sm font-medium">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
    </div>
  );
};