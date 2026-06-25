
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { HiInformationCircle } from 'react-icons/hi';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#242424] p-5 w-full">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <span className="text-white font-semibold text-sm">UI magician Agent</span>
        <IoSettingsOutline className="text-white text-lg" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mt-1">
        <FiChevronUp className="text-[#bfbfbf] text-lg" />
        <span className="text-[#bfbfbf] text-xs font-semibold">From entire frame to a single element</span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white text-lg" />
        <span className="text-white font-semibold text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex items-center gap-1 mt-4">
        <span className="text-[#f0f0f0] text-xs font-semibold">Personal Access Token</span>
        <HiInformationCircle className="text-[#f0f0f0] text-sm" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="bg-[#2a2a2a] border border-[#3d3d3d] rounded text-xs placeholder:text-[#737470] px-3 py-2 mt-1 w-full outline-none text-white"
      />

      {/* Design URL Field */}
      <div className="flex items-center gap-1 mt-3">
        <span className="text-[#f0f0f0] text-xs font-semibold">Design URL</span>
        <HiInformationCircle className="text-[#f0f0f0] text-sm" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="bg-[#2a2a2a] border border-[#3d3d3d] rounded text-xs placeholder:text-[#737470] px-3 py-2 mt-1 w-full outline-none text-white"
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-5 justify-center">
        <button className="bg-[#b5451c] text-[#ffffff] text-xs font-semibold px-8 py-3 rounded-lg flex-1">
          Awesome
        </button>
        <button className="bg-[#b5451c] text-[#ffffff] text-xs font-semibold px-8 py-3 rounded-lg flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <p className="text-white font-semibold text-sm mt-8">Recent Breakdowns</p>
    </div>
  );
};

export default TestCard;
