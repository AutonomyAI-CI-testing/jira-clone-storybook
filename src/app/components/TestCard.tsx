
import React from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export function TestCard() {
  return (
    <div id="testElem" style={{ backgroundColor: "#1c1c1c" }} className="p-4 rounded-lg shadow-lg max-w-sm mx-auto my-8">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-lg font-semibold">UI magician Agent</h2>
        <AiOutlineSetting className="text-gray-400 text-xl" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp className="text-[#8b9291] text-lg" />
        <p className="text-[#8b9291] text-sm font-semibold">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <HiChevronUp className="text-[#b2b2b1] text-lg" />
          <h3 className="text-[#b2b2b1] text-base font-semibold">Add New Design</h3>
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="pat" className="text-[#a4a4a3] text-sm font-semibold">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-gray-500 text-sm" />
          </div>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-[#737470]"
            style={{ backgroundColor: '#2a2a2a', color: '#a4a4a3', fontSize: '0.8rem' }}
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="designUrl" className="text-[#a3a3a2] text-sm font-semibold">Design URL</label>
            <AiOutlineInfoCircle className="text-gray-500 text-sm" />
          </div>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/"
            className="w-full p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-[#71726e]"
            style={{ backgroundColor: '#2a2a2a', color: '#a3a3a2', fontSize: '0.7rem' }}
          />
        </div>
      </div>

      {/* Buttons Row */}
      <div className="flex justify-end gap-3 pt-2 mb-6">
        <button
          className="py-2 px-5 rounded-lg text-[#8c8078] font-semibold text-sm"
          style={{ backgroundColor: "#b5451b" }}
        >
          Awesome
        </button>
        <button
          className="py-2 px-5 rounded-lg text-[#8c8078] font-semibold text-sm"
          style={{ backgroundColor: "#b5451b" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Heading */}
      <div>
        <h3 className="text-[#b0b0b0] text-base font-semibold mt-4">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
