
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 w-full bg-[#2a2a2a] text-[#b5b5b5] min-h-screen">

      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#b5b5b5]">UI magician Agent</h2>
        <FiSettings className="text-xl text-[#b5b5b5]" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-md text-[#8b9291]" />
        <p className="text-sm font-semibold text-[#8b9291]">From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="mt-10 mb-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-md text-[#b2b2b1]" />
        <h3 className="text-base font-semibold text-[#b2b2b1]">Add New Design</h3>
      </div>

      {/* Personal Access Token input */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="pat" className="text-sm font-semibold text-[#a4a4a3]">Personal Access Token</label>
          <FiInfo className="text-sm text-[#a4a4a3]" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full p-3 rounded-md bg-[#232323] border border-[#444] text-[#b5b5b5] placeholder-[#737470] text-sm"
        />
      </div>

      {/* Design URL input */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="design-url" className="text-sm font-semibold text-[#a4a4a3]">Design URL</label>
          <FiInfo className="text-sm text-[#a4a4a3]" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/: "
          className="w-full p-3 rounded-md bg-[#232323] border border-[#555] text-[#b5b5b5] placeholder-[#71726e] text-sm"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="px-8 py-3 rounded-xl bg-[#b5603a] text-[#c9a090] font-semibold text-sm">
          Awesome
        </button>
        <button className="px-8 py-3 rounded-xl bg-[#b5603a] text-[#c9a090] font-semibold text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-base font-semibold text-[#b0b0b0] mt-8">
        Recent Breakdowns
      </h3>

    </div>
  );
};
