import React from 'react';
import { IoSettingsOutline, IoChevronUp } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard component
 * Renders a dark-themed card representing a "UI magician Agent" panel.
 * This is a standalone static component used for UI/visual testing.
 */
export const TestCard = (): JSX.Element => {
  // Use arbitrary colors to match Figma design specifications
  // Background: #1d2125, Input: #2a2f35, Brand/Accent: #c1622a
  
  return (
    <div id="testElem" className="bg-[#1d2125] p-5 rounded-xl max-w-sm text-white shadow-2xl">
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline size={22} className="text-white hover:text-gray-300 cursor-pointer transition-colors" />
      </div>

      {/* Accent subtitle row */}
      <div className="flex items-center gap-1 mt-2">
        <IoChevronUp className="text-[#c1622a]" />
        <span className="text-[#c1622a] text-sm font-medium">From entire frame to a singl...</span>
      </div>

      <div className="mt-8" />

      {/* Main section header */}
      <div className="flex items-center gap-2 mb-5">
        <IoChevronUp size={20} className="text-white" />
        <h2 className="font-bold text-xl">Add New Design</h2>
      </div>

      {/* Configuration Form */}
      <div className="space-y-4">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label htmlFor="personalAccessToken" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle size={14} className="text-gray-500 cursor-help" />
          </div>
          <input
            id="personalAccessToken"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2f35] border border-[#3a3f45] rounded-md px-3 py-2.5 text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-[#4a4f55] transition-colors"
            readOnly
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label htmlFor="designUrl" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Design URL
            </label>
            <AiOutlineInfoCircle size={14} className="text-gray-500 cursor-help" />
          </div>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#2a2f35] border border-[#3a3f45] rounded-md px-3 py-2.5 text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-[#4a4f55] transition-colors"
            readOnly
          />
        </div>
      </div>

      {/* CTA Actions */}
      <div className="flex gap-3 mt-6 justify-center">
        <button className="flex-1 bg-[#c1622a] hover:bg-[#d1723a] text-white py-2.5 rounded-lg font-bold transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1622a] hover:bg-[#d1723a] text-white py-2.5 rounded-lg font-bold transition-colors">
          Prepare
        </button>
      </div>

      <div className="mt-8 border-t border-[#2a2f35] pt-6" />

      {/* Footer section heading */}
      <h3 className="font-bold text-xl text-white">Recent Breakdowns</h3>
    </div>
  );
};