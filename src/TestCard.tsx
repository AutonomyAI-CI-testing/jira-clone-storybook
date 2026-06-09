
import React from 'react';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 bg-gray-900 text-gray-100 rounded-lg shadow-lg max-w-sm mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <span className="text-gray-400">⚙️</span> {/* Gear icon approximation */}
      </div>

      {/* Helper Row */}
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <span className="mr-2">▲</span> {/* Caret icon approximation */}
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center text-base font-semibold text-gray-200 mb-4">
        <span className="mr-2">▲</span> {/* Caret icon approximation */}
        <h3>Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center text-sm font-medium text-gray-300 mb-2">
          <label htmlFor="token">Personal Access Token</label>
          <span className="ml-2 text-gray-400">ⓘ</span> {/* Info icon approximation */}
        </div>
        <div className="bg-gray-800 border border-gray-700 p-2 rounded text-gray-500">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center text-sm font-medium text-gray-300 mb-2">
          <label htmlFor="designUrl">Design URL</label>
          <span className="ml-2 text-gray-400">ⓘ</span> {/* Info icon approximation */}
        </div>
        <div className="bg-gray-800 border border-gray-700 p-2 rounded text-gray-500">
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4 mb-6">
        <button className="flex-1 bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
          Awesome
        </button>
        <button className="flex-1 bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="text-sm font-semibold text-gray-300">
        Recent Breakdowns
      </div>
    </div>
  );
};

