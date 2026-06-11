import React from 'react';
import { FiSettings, FiInfo, FiChevronUp } from 'react-icons/fi';

export const TestCard = (): React.JSX.Element => {
  return (
    <div id="testElem" className="p-6 rounded-lg bg-[#1c1c1a] text-white max-w-sm mx-auto shadow-lg">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold font-sans">UI magician Agent</h2>
        <FiSettings className="text-[#a4a4a3]" size="18" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1 mb-6">
        <FiChevronUp className="text-[#8b9291]" size="16" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold font-sans">From entire frame to a singl...</p>
      </div>

      {/* 'Add New Design' Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-[#b2b2b1]" size="16" />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold font-sans">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px] font-semibold font-sans">Personal Access Token</label>
          <FiInfo className="text-[#a4a4a3]" size="14" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#272822] border-2 border-[#929291] text-white placeholder-[#737470] text-[11.5px] font-sans focus:outline-none focus:ring-1 focus:ring-[#929291]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="designUrl" className="text-[#a4a4a3] text-[11.5px] font-semibold font-sans">Design URL</label>
          <FiInfo className="text-[#a4a4a3]" size="14" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-white placeholder-[#71726e] text-[11.5px] font-sans focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
        />
      </div>

      {/* Button Row */}
      <div className="flex gap-3 justify-center mb-6">
        <button type="button" className="flex-1 py-2 px-4 bg-[#843a17] text-[#e8c9b8] text-[11.5px] font-semibold rounded-md shadow-sm hover:opacity-90 transition-opacity font-sans">
          Awesome
        </button>
        <button type="button" className="flex-1 py-2 px-4 bg-[#843a17] text-[#e8c9b8] text-[11.5px] font-semibold rounded-md shadow-sm hover:opacity-90 transition-opacity font-sans">
          Prepare
        </button>
      </div>

      {/* Footer Heading */}
      <div>
        <h4 className="text-[#b0b0b0] text-[13.5px] font-semibold font-sans">Recent Breakdowns</h4>
      </div>
    </div>
  );
};
