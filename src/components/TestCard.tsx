
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 text-[#b5b5b5] w-full min-h-screen">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <FiSettings className="text-xl" />
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center mb-4 text-[#8b9291] text-sm">
        <FiChevronUp className="mr-2" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-8"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4 text-[#b2b2b1] text-lg font-semibold">
        <FiChevronUp className="mr-2" />
        <h3>Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center text-[#a4a4a3] text-sm font-semibold mb-2">
          <label htmlFor="personalAccessToken">Personal Access Token</label>
          <FiInfo className="ml-2 text-xs" />
        </div>
        <input
          id="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#1e1e1e] border border-[#4a4a4a] text-[#8b9291] text-sm"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center text-[#a4a4a3] text-sm font-semibold mb-2">
          <label htmlFor="designURL">Design URL</label>
          <FiInfo className="ml-2 text-xs" />
        </div>
        <input
          id="designURL"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full p-2 rounded bg-[#1e1e1e] border border-[#4a4a4a] text-[#8b9291] text-sm"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-around mb-6">
        <button className="px-6 py-2 rounded-lg bg-[#a0522d] text-[#c8bfb8] font-semibold text-sm mr-2">
          Awesome
        </button>
        <button className="px-6 py-2 rounded-lg bg-[#a0522d] text-[#c8bfb8] font-semibold text-sm ml-2">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="text-[#b0b0b0] text-lg font-semibold">
        <h3>Recent Breakdowns</h3>
      </div>
    </div>
  );
};
