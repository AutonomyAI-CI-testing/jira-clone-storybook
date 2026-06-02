import { forwardRef } from "react";

export const TestCard = forwardRef<HTMLDivElement>((_props, forwardedRef) => {
  return (
    <div
      id="testElem"
      ref={forwardedRef}
      className="w-full bg-black p-6"
    >
      <div className="max-w-2xl mx-auto space-y-5">
        {/* Header Section */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h1 className="text-base font-semibold text-gray-300">UI magician Agent</h1>
          <button className="text-gray-400 hover:text-gray-200">⚙️</button>
        </div>

        {/* Collapsible Section 1 */}
        <div className="border border-gray-700 rounded px-4 py-3">
          <div className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-semibold text-gray-400">
              From entire frame to a singl...
            </span>
            <span className="text-gray-400 text-xs">▼</span>
          </div>
        </div>

        {/* Add New Design Section Header */}
        <div className="flex items-center justify-between cursor-pointer border-b border-gray-700 pb-2">
          <span className="text-sm font-semibold text-gray-400">Add New Design</span>
          <span className="text-gray-400 text-xs">▼</span>
        </div>

        {/* Form Inputs Section */}
        <div className="space-y-4 mt-5">
          {/* Personal Access Token */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-xs font-semibold text-gray-500">
                Personal Access Token
              </label>
              <span className="text-gray-500 text-xs cursor-help">ℹ️</span>
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs text-gray-600 placeholder-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Design URL */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-xs font-semibold text-gray-500">
                Design URL
              </label>
              <span className="text-gray-500 text-xs cursor-help">ℹ️</span>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs text-gray-600 placeholder-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 bg-amber-900 hover:bg-amber-800 text-gray-300 text-sm font-semibold py-2 rounded transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-amber-900 hover:bg-amber-800 text-gray-300 text-sm font-semibold py-2 rounded transition-colors">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="pt-4 border-t border-gray-700">
          <h2 className="text-sm font-semibold text-gray-400">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
});

TestCard.displayName = "TestCard";
