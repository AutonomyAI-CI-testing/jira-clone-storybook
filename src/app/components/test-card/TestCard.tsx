import React from "react";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-black p-6 font-primary text-sm"
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-400 font-primary-bold text-sm">
          UI magician Agent
        </h1>
        <button className="text-gray-500 hover:text-gray-300">⚛</button>
      </div>

      {/* Collapsible Section */}
      <div className="border-gray-800 mb-6 rounded border px-4 py-3">
        <button className="hover:text-gray-300 flex w-full items-center justify-between">
          <span className="text-gray-500 text-xs">
            From entire frame to a singl...
          </span>
          <span className="text-gray-500">▼</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="border-gray-800 mb-8 border-b pb-4">
        <button className="hover:text-gray-300 flex w-full items-center justify-between">
          <span className="text-gray-400 font-primary text-xs">
            Add New Design
          </span>
          <span className="text-gray-500">▶</span>
        </button>
      </div>

      {/* Form Section */}
      <div className="mb-8 space-y-5">
        {/* Personal Access Token Field */}
        <div className="space-y-2">
          <label className="text-gray-500 flex items-center gap-2 text-xs">
            Personal Access Token
            <span className="text-gray-600">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Figma personal access token"
            className="border-gray-700 text-gray-600 placeholder-gray-700 hover:border-gray-600 focus:border-gray-500 w-full rounded border bg-black px-3 py-2 text-xs focus:outline-none"
          />
        </div>

        {/* Design URL Field */}
        <div className="space-y-2">
          <label className="text-gray-500 flex items-center gap-2 text-xs">
            Design URL
            <span className="text-gray-600">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Figma file URL"
            className="border-gray-700 text-gray-600 placeholder-gray-700 hover:border-gray-600 focus:border-gray-500 w-full rounded border bg-black px-3 py-2 text-xs focus:outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-3">
        <button className="bg-orange-700 hover:bg-orange-600 text-gray-300 flex-1 rounded px-4 py-2 font-primary text-xs transition-colors">
          Awesome
        </button>
        <button className="bg-orange-800 hover:bg-orange-700 text-gray-300 flex-1 rounded px-4 py-2 font-primary text-xs transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer Text */}
      <div className="text-gray-600 text-xs">Recent Breakdowns</div>
    </div>
  );
};

export default TestCard;
