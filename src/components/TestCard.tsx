import React from 'react';
import { HiOutlineCog, HiChevronUp, HiOutlineInformationCircle } from 'react-icons/hi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 max-w-sm mx-auto text-white rounded-lg">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#e0e0e0] font-semibold text-lg">UI magician Agent</h2>
        <HiOutlineCog size={22} className="text-[#a0a0a0]" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1 mb-6">
        <HiChevronUp className="text-[#c97a50]" />
        <span className="text-[#c97a50] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="mt-6 mb-4">
        <div className="flex items-center gap-2">
          <HiChevronUp className="text-[#e0e0e0]" />
          <span className="text-[#e4e4e4] font-bold text-xl">Add New Design</span>
        </div>
        <div className="mt-4">
          {/* Personal Access Token Field */}
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-1">
              <label htmlFor="personalAccessToken" className="text-[#e0e0e0] text-sm">Personal Access Token</label>
              <HiOutlineInformationCircle size={16} className="text-[#a0a0a0]" />
            </div>
            <input
              type="text"
              id="personalAccessToken"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full bg-[#1e1e1e] border border-[#3d3d3d] rounded text-[#a0a0a0] placeholder-[#555] px-3 py-2 text-sm outline-none focus:border-[#c97a50]"
            />
          </div>

          {/* Design URL Field */}
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-1">
              <label htmlFor="designUrl" className="text-[#e0e0e0] text-sm">Design URL</label>
              <HiOutlineInformationCircle size={16} className="text-[#a0a0a0]" />
            </div>
            <input
              type="text"
              id="designUrl"
              placeholder="https://www.figma.com/file/:"
              className="w-full bg-[#1e1e1e] border border-[#3d3d3d] rounded text-[#a0a0a0] placeholder-[#555] px-3 py-2 text-sm outline-none focus:border-[#c97a50]"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="bg-[#b5451b] hover:bg-[#9e3c18] text-white font-semibold px-6 py-3 rounded-lg flex-1 transition-colors duration-200">
          Awesome
        </button>
        <button className="bg-[#b5451b] hover:bg-[#9e3c18] text-white font-semibold px-6 py-3 rounded-lg flex-1 transition-colors duration-200">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-8">
        <h3 className="text-[#e0e0e0] font-bold text-xl">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
