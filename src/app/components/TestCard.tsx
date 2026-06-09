import React from 'react';

/**
 * A card component displaying agent status and design input fields.
 * Used in the UI Magician Agent workflow.
 */
export function TestCard() {
  // Brand color for primary action buttons and highlights
  const BRAND_BROWN = "bg-[#8B4513]";
  // Background color for input fields
  const INPUT_BG = "bg-[#272822]";

  return (
    <div id="testElem" className="p-4 text-white bg-[#1c1c1c] min-h-screen">
      {/* Header with Agent branding */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <span className="text-gray-400 cursor-pointer" aria-label="Settings">⚙</span>
      </div>

      {/* Breadcrumb or context indicator */}
      <div className="flex items-center mb-4">
        <span className="text-gray-400 mr-2">^</span>
        <p className="text-sm text-amber-600 truncate">From entire frame to a singl...</p>
      </div>

      {/* Section Toggle */}
      <div className="flex items-center mb-6">
        <span className="text-gray-400 mr-2">^</span>
        <h2 className="text-md font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Field - Essential for Figma API auth */}
      <div className="mb-4">
        <label htmlFor="pat" className="block text-gray-400 text-sm font-bold mb-2 flex items-center">
          Personal Access Token <span className="text-gray-400 ml-2" title="Find this in Figma settings">ℹ</span>
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full p-2 rounded-md ${INPUT_BG} border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500`}
        />
      </div>

      {/* Design URL Field - Link to the Figma file to be processed */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="block text-gray-400 text-sm font-bold mb-2 flex items-center">
          Design URL <span className="text-gray-400 ml-2" title="Copy from browser address bar">ℹ</span>
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className={`w-full p-2 rounded-md ${INPUT_BG} border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500`}
        />
      </div>

      {/* Action Buttons - Distinctive brown color for secondary brand actions */}
      <div className="flex justify-between space-x-4 mb-6">
        <button className={`flex-1 py-2 px-4 rounded-lg ${BRAND_BROWN} text-white font-bold hover:brightness-110 active:scale-95 transition-all`}>
          Awesome
        </button>
        <button className={`flex-1 py-2 px-4 rounded-lg ${BRAND_BROWN} text-white font-bold hover:brightness-110 active:scale-95 transition-all`}>
          Prepare
        </button>
      </div>

      {/* Recent Activity Log */}
      <div>
        <h2 className="text-md font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
