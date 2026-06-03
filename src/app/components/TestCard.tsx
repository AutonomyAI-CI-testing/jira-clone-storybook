import { useState } from "react";

export default function TestCard() {
  const [section1Expanded, setSection1Expanded] = useState(true);
  const [section2Expanded, setSection2Expanded] = useState(true);

  return (
    <div
      id="testElem"
      className="min-h-screen bg-black text-gray-400 p-5 font-family-inter"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-sm font-semibold text-gray-300">UI magician Agent</h1>
        <button className="p-1 hover:opacity-80 transition-opacity">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          >
            <circle cx="10" cy="10" r="3" />
            <circle cx="10" cy="2.5" r="1" />
            <circle cx="10" cy="17.5" r="1" />
            <circle cx="2.5" cy="10" r="1" />
            <circle cx="17.5" cy="10" r="1" />
            <circle cx="4.5" cy="4.5" r="1" />
            <circle cx="15.5" cy="15.5" r="1" />
            <circle cx="4.5" cy="15.5" r="1" />
            <circle cx="15.5" cy="4.5" r="1" />
          </svg>
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-6">
        <button
          onClick={() => setSection1Expanded(!section1Expanded)}
          className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-gray-400 text-sm">
            {section1Expanded ? "^" : "v"}
          </span>
          <span className="text-xs font-semibold text-gray-500">
            From entire frame to a singl...
          </span>
        </button>
        {section1Expanded && <div className="h-12 bg-gray-900 rounded"></div>}
      </div>

      {/* Collapsible Section 2 */}
      <div className="mb-8">
        <button
          onClick={() => setSection2Expanded(!section2Expanded)}
          className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
        >
          <span className="text-gray-400 text-sm">
            {section2Expanded ? "^" : "v"}
          </span>
          <span className="text-sm font-semibold text-gray-300">
            Add New Design
          </span>
        </button>

        {section2Expanded && (
          <div className="space-y-4">
            {/* Personal Access Token Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold text-gray-400">
                  Personal Access Token
                </label>
                <button className="p-0.5 hover:opacity-80 transition-opacity">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-500"
                  >
                    <circle cx="7" cy="7" r="6.5" />
                    <text
                      x="7"
                      y="8.5"
                      textAnchor="middle"
                      fontSize="9"
                      fill="currentColor"
                    >
                      i
                    </text>
                  </svg>
                </button>
              </div>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full bg-gray-900 border border-gray-700 text-gray-500 text-xs px-3 py-2 rounded focus:outline-none focus:border-gray-600 placeholder-gray-600"
              />
            </div>

            {/* Design URL Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold text-gray-400">
                  Design URL
                </label>
                <button className="p-0.5 hover:opacity-80 transition-opacity">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-500"
                  >
                    <circle cx="7" cy="7" r="6.5" />
                    <text
                      x="7"
                      y="8.5"
                      textAnchor="middle"
                      fontSize="9"
                      fill="currentColor"
                    >
                      i
                    </text>
                  </svg>
                </button>
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full bg-gray-900 border border-gray-700 text-gray-500 text-xs px-3 py-2 rounded focus:outline-none focus:border-gray-600 placeholder-gray-600"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-gray-300 font-semibold py-2 px-4 rounded text-xs transition-colors">
                Awesome
              </button>
              <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-gray-300 font-semibold py-2 px-4 rounded text-xs transition-colors">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-12">
        <h2 className="text-sm font-semibold text-gray-300">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
