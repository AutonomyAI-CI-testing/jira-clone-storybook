import React from "react";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="bg-black text-gray-400 p-5 rounded-lg w-full max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-sm font-semibold text-gray-300">
          UI magician Agent
        </h1>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Collapsible Section */}
      <div className="flex items-start gap-3 mb-6 pb-6 border-b border-gray-700">
        <svg
          className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-xs text-gray-400 leading-relaxed">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-3 mb-6">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-xs font-semibold text-gray-300">Add New Design</h2>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-400">
            Personal Access Token
          </label>
          <input
            type="text"
            placeholder="Paste your PAT here"
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600"
          />
        </div>

        {/* Design URL Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-400">
            Design URL
          </label>
          <input
            type="text"
            placeholder="https://figma.com/..."
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold py-2 px-4 rounded transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold py-2 px-4 rounded transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
        Recent Breakdowns
      </div>
    </div>
  );
}
