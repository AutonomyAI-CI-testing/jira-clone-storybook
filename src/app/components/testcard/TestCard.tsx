import React from "react";

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="w-64 bg-black p-5 font-sans">
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-sm font-semibold text-gray-300">UI magician Agent</h1>
        {/* Settings icon */}
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
          <path d="M12 5v14M12 5a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100 4 2 2 0 000-4zm7-7a2 2 0 11-4 0 2 2 0 014 0zM5 12a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>

      {/* Collapsible section */}
      <div className="mb-8 flex items-center gap-3">
        <svg
          className="w-4 h-4 text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="text-xs font-semibold text-gray-500">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-10 flex items-center gap-3">
        <svg
          className="w-4 h-4 text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span className="text-sm font-semibold text-gray-400">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-gray-500">
            Personal Access Token
          </label>
          {/* Info icon */}
          <svg
            className="w-3.5 h-3.5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs font-semibold text-gray-600 placeholder-gray-600 focus:outline-none"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-gray-500">
            Design URL
          </label>
          {/* Info icon */}
          <svg
            className="w-3.5 h-3.5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs font-semibold text-gray-600 placeholder-gray-600 focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-12">
        <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-orange-100 text-xs font-semibold py-2 px-4 rounded">
          Awesome
        </button>
        <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-orange-100 text-xs font-semibold py-2 px-4 rounded">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
