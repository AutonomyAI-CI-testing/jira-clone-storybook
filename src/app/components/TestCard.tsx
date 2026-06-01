import React from "react";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-black p-6 rounded-lg w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">⚙️</span>
        <h1 className="text-sm font-semibold text-gray-400">UI magician Agent</h1>
      </div>

      {/* Collapsible Section */}
      <div className="mb-6 border-b border-gray-700 pb-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-gray-400">▼</span>
          <p className="text-xs text-gray-500">From entire frame to a singl...</p>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-400">▶</span>
          <h2 className="text-sm font-semibold text-gray-300">Add New Design</h2>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Personal Access Token */}
          <div>
            <label className="flex items-center gap-1 text-xs font-medium text-gray-400 mb-2">
              Personal Access Token
              <span className="text-gray-600">ℹ️</span>
            </label>
            <input
              type="text"
              value="figd_xxxxxxxxxxxxxxxxxx"
              readOnly
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-xs text-gray-300 placeholder-gray-600"
            />
          </div>

          {/* Design URL */}
          <div>
            <label className="flex items-center gap-1 text-xs font-medium text-gray-400 mb-2">
              Design URL
              <span className="text-gray-600">ℹ️</span>
            </label>
            <input
              type="text"
              value="https://www.figma.com/file/:"
              readOnly
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-xs text-gray-300 placeholder-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 px-4 py-2 bg-amber-900 text-white text-xs font-semibold rounded hover:bg-amber-800 active:bg-amber-950">
          Awesome
        </button>
        <button className="flex-1 px-4 py-2 bg-amber-900 text-white text-xs font-semibold rounded hover:bg-amber-800 active:bg-amber-950">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="text-xs text-gray-500 pt-4 border-t border-gray-700">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
