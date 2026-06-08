
import React from 'react';

/**
 * TestCard component
 * 
 * A UI agent card component displaying design tool integration status.
 * Shows collapsible sections for agent task status and a form for adding
 * new design integrations with token and URL inputs.
 * 
 * Dark theme component with brown CTA buttons for visual hierarchy.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#1E1E1E] text-white p-6 w-[290px] min-h-[508px] flex flex-col space-y-4 rounded-md shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">UI magician Agent</span>
        <span className="text-gray-400">⚙️</span>
      </div>

      {/* Collapsible Section Label */}
      <div className="flex items-center space-x-2 text-gray-400 text-sm">
        <span>^</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex items-center space-x-2 text-gray-200 font-semibold">
          <span>^</span>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token Field */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm text-gray-300 flex items-center space-x-1">
            <span>Personal Access Token</span>
            <span className="text-xs text-gray-500">ⓘ</span>
          </label>
          <div className="bg-[#2A2A2A] border border-gray-700 text-gray-400 p-2 rounded-md text-sm">
            figd_xxxxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL Field */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm text-gray-300 flex items-center space-x-1">
            <span>Design URL</span>
            <span className="text-xs text-gray-500">ⓘ</span>
          </label>
          <div className="bg-[#2A2A2A] border border-gray-700 text-gray-400 p-2 rounded-md text-sm">
            https://www.figma.com/file/
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-around space-x-2 pt-2">
          <button className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold py-2 px-4 rounded-md flex-1 text-sm">
            Awesome
          </button>
          <button className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold py-2 px-4 rounded-md flex-1 text-sm">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto text-gray-300 text-sm pt-4">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
