import React from 'react';

// Design Constants
const COLORS = {
  background: '#1c1c1c',
  accent: '#b5522a',
  amber: '#f59e0b', // text-amber-500
};

/**
 * Icons extracted for clarity and reuse.
 * Using SVG components to keep the main JSX clean.
 */
const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronUpIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/**
 * TestCard component
 * A self-contained smoke test component representing a dark UI panel for design synchronization.
 * Matches Figma design with dark background and burnt-orange accents.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-[#1c1c1c] text-white rounded-md shadow-lg w-96 mx-auto my-8">
      {/* Header: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Status/Context row: Collapsed by default according to spec */}
      <div className="flex items-center text-amber-500 mb-4">
        <ChevronUpIcon className="h-5 w-5 mr-2" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Configuration Section */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <ChevronUpIcon className="h-5 w-5 mr-2 text-white" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>
        
        <div className="ml-7 space-y-4">
          {/* Personal Access Token Field */}
          <div>
            <label htmlFor="pat" className="block text-sm font-medium text-gray-300 flex items-center mb-1">
              Personal Access Token
              <InfoIcon />
            </label>
            <input
              type="text"
              id="pat"
              placeholder="figd_xxxxxxxxxxxxxxxxx"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
            />
          </div>

          {/* Design URL Field */}
          <div>
            <label htmlFor="design-url" className="block text-sm font-medium text-gray-300 flex items-center mb-1">
              Design URL
              <InfoIcon />
            </label>
            <input
              type="text"
              id="design-url"
              placeholder="https://www.figma.com/file/:"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons: Burnt-orange accents for primary actions */}
      <div className="flex justify-end space-x-2 mt-2 mb-6">
        <button className="px-5 py-2 bg-[#b5522a] hover:bg-[#a04825] transition-colors text-white rounded-md font-medium">
          Awesome
        </button>
        <button className="px-5 py-2 bg-[#b5522a] hover:bg-[#a04825] transition-colors text-white rounded-md font-medium">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-700 pt-4">
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
