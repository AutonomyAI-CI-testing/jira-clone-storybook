
import React from 'react';

/**
 * TestCard component - A smoke test UI following a specific Figma design.
 * Uses arbitrary Tailwind values to ensure exact color matching from the project specs.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#2a2a2a] p-4 text-[#b5b5b5] font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <svg
          className="w-4 h-4 text-[#b5b5b5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </div>

      {/* Subtitle - Represents the current context/scope within the design magician tool */}
      <div className="flex items-center text-[#8b9291] text-[11.5px] font-semibold mb-6">
        <svg
          className="w-3 h-3 mr-1 transform rotate-180" // Rotated to match the "up" chevron while using a standard down path
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-px bg-[#4a4a4a] my-4"></div>

      {/* Add New Design Section */}
      <div className="flex items-center text-[#b2b2b1] text-[13.5px] font-semibold mb-4">
        <svg
          className="w-3 h-3 mr-1 transform rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center text-[#a4a4a3] text-[11.5px] font-semibold mb-2">
          <label htmlFor="pat">Personal Access Token</label>
          <svg
            className="w-3 h-3 ml-1 text-[#a4a4a3]"
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
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#353535] border border-[#4a4a4a] text-[#737470] text-[11.5px] focus:outline-none focus:border-white"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center text-[#a4a4a3] text-[11.5px] font-semibold mb-2">
          <label htmlFor="designUrl">Design URL</label>
          <svg
            className="w-3 h-3 ml-1 text-[#a4a4a3]"
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
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#353535] border border-[#4a4a4a] text-[#737470] text-[11.5px] focus:outline-none focus:border-white"
        />
      </div>

      {/* Action Buttons - Primary actions for the magician agent flow */}
      <div className="flex justify-between gap-2 mb-6">
        <button className="flex-1 px-4 py-2 bg-[#8c4a2f] text-[#8c8078] text-[11.5px] font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 px-4 py-2 bg-[#8c4a2f] text-[#8c8078] text-[11.5px] font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
