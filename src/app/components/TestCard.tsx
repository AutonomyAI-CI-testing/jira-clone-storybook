
import React from 'react';

const GearIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400 rotate-180 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-white min-h-screen">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-6">
        <ChevronUpIcon />
        <p className="text-sm text-[#c17a50]">From entire frame to a singl...</p>
      </div>

      {/* Spacer / Divider */}
      <div className="border-t border-[#4a4a4a] mb-6"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="pat" className="block text-sm font-medium text-white mb-2 flex items-center">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2 rounded-md bg-[#333] border border-[#4a4a4a] focus:outline-none focus:ring-1 focus:ring-[#c17a50]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="block text-sm font-medium text-white mb-2 flex items-center">
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/"
          className="w-full px-3 py-2 rounded-md bg-[#333] border border-[#4a4a4a] focus:outline-none focus:ring-1 focus:ring-[#c17a50]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mb-6 space-x-4">
        <button className="flex-1 py-2 rounded-md bg-[#9b4a1e] hover:bg-[#a0522d] font-semibold transition-colors">
          Awesome
        </button>
        <button className="flex-1 py-2 rounded-md bg-[#9b4a1e] hover:bg-[#a0522d] font-semibold transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div>
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};


export default TestCard;
