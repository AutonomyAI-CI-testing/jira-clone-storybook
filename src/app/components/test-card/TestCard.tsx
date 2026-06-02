import React from "react";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-black p-6 text-sm font-primary"
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-primary-bold text-gray-400">
          UI magician Agent
        </h1>
        <button className="text-gray-500 hover:text-gray-300">⚛</button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-6 border border-gray-800 rounded px-4 py-3">
        <button className="flex items-center justify-between w-full hover:text-gray-300">
          <span className="text-xs text-gray-500">
            From entire frame to a singl...
          </span>
          <span className="text-gray-500">▼</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8 border-b border-gray-800 pb-4">
        <button className="flex items-center justify-between w-full hover:text-gray-300">
          <span className="text-xs font-primary text-gray-400">
            Add New Design
          </span>
          <span className="text-gray-500">▶</span>
        </button>
      </div>

      {/* Form Section */}
      <div className="mb-8 space-y-5">
        {/* Personal Access Token Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs text-gray-500">
            Personal Access Token
            <span className="text-gray-600">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Figma personal access token"
            className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-xs text-gray-600 placeholder-gray-700 hover:border-gray-600 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Design URL Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs text-gray-500">
            Design URL
            <span className="text-gray-600">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Figma file URL"
            className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-xs text-gray-600 placeholder-gray-700 hover:border-gray-600 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-3">
        <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-gray-300 text-xs font-primary py-2 px-4 rounded transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-orange-800 hover:bg-orange-700 text-gray-300 text-xs font-primary py-2 px-4 rounded transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer Text */}
      <div className="text-xs text-gray-600">Recent Breakdowns</div>
    </div>
  );
};

export default TestCard;
