
import React from 'react';
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard component for the UI Magician Agent.
 * Displays configuration fields for Personal Access Token and Design URL,
 * along with action buttons and a list of recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  // Constants for colors to maintain consistency and ease of updates
  const COLORS = {
    primary: '#b85c2a',
    primaryHover: '#a0522d',
    bgMain: '#1e1e1e',
    bgInput: '#2a2a2a',
    textMuted: '#c4703a',
    border: '#4b5563', // gray-600
    borderSeparator: '#374151', // gray-700
  };

  return (
    <div id="testElem" className="bg-[#1e1e1e] p-6 min-w-[400px] rounded-lg shadow-lg font-sans text-white">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <HiOutlineCog className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle row - Indicates the current scope or capability */}
      <div className="flex items-center text-[#c4703a] text-sm mb-6">
        <HiChevronUp className="mr-1 text-lg" aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section - Main configuration header */}
      <div className="flex items-center text-white font-bold text-lg mb-4 mt-6 border-t border-gray-700 pt-6">
        <HiChevronUp className="mr-2 text-xl" aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center text-sm text-white mb-2">
          Personal Access Token
          <HiInformationCircle className="ml-1 text-gray-400" aria-label="Information about Personal Access Token" />
        </label>
        <input
          type="text"
          id="pat"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#b85c2a]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center text-sm text-white mb-2">
          Design URL
          <HiInformationCircle className="ml-1 text-gray-400" aria-label="Information about Design URL" />
        </label>
        <input
          type="text"
          id="designUrl"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#b85c2a]"
        />
      </div>

      {/* Action buttons row */}
      <div className="flex space-x-4 mb-8">
        <button className="flex-1 px-5 py-3 bg-[#b85c2a] text-white font-semibold rounded-lg hover:bg-[#a0522d] transition-colors text-sm">
          Awesome
        </button>
        <button className="flex-1 px-5 py-3 bg-[#b85c2a] text-white font-semibold rounded-lg hover:bg-[#a0522d] transition-colors text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h2 className="text-white font-bold text-xl">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
