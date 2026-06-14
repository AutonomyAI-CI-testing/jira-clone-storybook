import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#2b2b2b] p-4 rounded-lg text-white font-sans">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <FiSettings className="text-xl" />
      </div>

      {/* Collapsed Accordion Row */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="text-md mr-2 text-gray-400" />
        <span className="text-sm text-[#b5541e]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-6"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-md mr-2 text-gray-400" />
        <h3 className="text-md font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat" className="text-sm mr-2">Personal Access Token</label>
          <FiInfo className="text-sm text-gray-400" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#3a3a3a] border border-[#555] placeholder-gray-500 text-white text-sm"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="design-url" className="text-sm mr-2">Design URL</label>
          <FiInfo className="text-sm text-gray-400" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#3a3a3a] border border-[#555] placeholder-gray-500 text-white text-sm"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button className="flex-1 py-2 px-4 bg-[#b5541e] text-white font-bold rounded-full text-sm">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 bg-[#b5541e] text-white font-bold rounded-full text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Header */}
      <div>
        <h3 className="text-md font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};