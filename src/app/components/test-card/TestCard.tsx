
import React from 'react';
import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#282828] p-6 rounded-lg font-sans text-white w-96 max-w-sm overflow-visible">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#b5b5b5] font-semibold text-lg">UI magician Agent</span>
        <IoSettingsOutline className="text-[#8b9291] text-xl block" />
      </div>

      {/* Collapsible-looking Row */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUp className="text-[#8b9291] text-lg" />
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Heading: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUp className="text-[#b2b2b1] text-lg" />
        <span className="text-[#b2b2b1] font-semibold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="pat" className="text-[#a4a4a3] text-sm">Personal Access Token</label>
          <IoInformationCircleOutline className="text-[#a4a4a3] text-base" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#1e1e1e] border border-[#3a3a3a] text-[#737470] text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="designUrl" className="text-[#a4a4a3] text-sm">Design URL</label>
          <IoInformationCircleOutline className="text-[#a4a4a3] text-base" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#1e1e1e] border border-[#3a3a3a] text-[#737470] text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-[#b85c30] text-[#8c8078] rounded-lg px-4 py-2 font-semibold text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c30] text-[#8c8078] rounded-lg px-4 py-2 font-semibold text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Text */}
      <div>
        <span className="text-[#b0b0b0] font-semibold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};
