import { useState } from "react";

export const TestCard = (): JSX.Element => {
  const [isSection1Open, setIsSection1Open] = useState(true);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div id="testElem" className="bg-slate-950 text-gray-300 p-4 rounded w-64" style={{ backgroundColor: "#020617", color: "#d1d5db", padding: "1rem", borderRadius: "0.25rem", width: "16rem" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-sm font-semibold text-gray-100">UI magician Agent</h1>
        <button className="text-gray-400 hover:text-gray-200">⚙</button>
      </div>

      {/* Section 1: Collapsible */}
      <div className="mb-4 border border-gray-700 rounded">
        <button
          onClick={() => setIsSection1Open(!isSection1Open)}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-900 transition"
        >
          <span className="text-xs text-gray-400">From entire frame to a singl...</span>
          <span className="text-gray-500">{isSection1Open ? "↓" : "→"}</span>
        </button>
        {isSection1Open && (
          <div className="px-3 py-2 border-t border-gray-700 bg-slate-900 text-xs text-gray-400">
            Section content here
          </div>
        )}
      </div>

      {/* Section 2: Add New Design */}
      <div className="mb-4">
        <button
          onClick={() => setIsAddDesignOpen(!isAddDesignOpen)}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-900 rounded transition"
        >
          <span className="text-xs font-medium text-gray-200">Add New Design</span>
          <span className="text-gray-500">{isAddDesignOpen ? "↓" : "→"}</span>
        </button>
        {isAddDesignOpen && (
          <div className="px-3 py-3 space-y-3">
            {/* Personal Access Token Field */}
            <div>
              <label className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                Personal Access Token
                <span className="text-gray-500">ℹ</span>
              </label>
              <input
                type="password"
                placeholder="••••••••••••••••"
                className="w-full bg-slate-900 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Design URL Field */}
            <div>
              <label className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                Design URL
                <span className="text-gray-500">ℹ</span>
              </label>
              <input
                type="text"
                placeholder="https://figma.com/..."
                className="w-full bg-slate-900 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-3 py-1 bg-slate-800 border border-gray-700 rounded text-xs text-gray-300 hover:bg-slate-700 transition">
                Awesome
              </button>
              <button className="flex-1 px-3 py-1 bg-slate-800 border border-gray-700 rounded text-xs text-gray-300 hover:bg-slate-700 transition">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer: Recent Breakdowns */}
      <div className="border-t border-gray-700 pt-3">
        <p className="text-xs text-gray-500">Recent Breakdowns</p>
      </div>
    </div>
  );
};
