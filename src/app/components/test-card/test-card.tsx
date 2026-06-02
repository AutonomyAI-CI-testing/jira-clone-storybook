import { useState } from "react";

export const TestCard = (): JSX.Element => {
  const [frameExpanded, setFrameExpanded] = useState(true);
  const [designExpanded, setDesignExpanded] = useState(true);

  return (
    <div
      id="testElem"
      className="w-full max-w-md bg-black p-6 font-inter text-white"
    >
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-base font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </h1>
        {/* Settings Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#b5b5b5" }}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24" />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-8 space-y-4">
        <button
          onClick={() => setFrameExpanded(!frameExpanded)}
          className="flex items-center gap-2"
          style={{ color: "#8b9291" }}
        >
          <span
            className={`inline-block transition-transform ${
              frameExpanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
          <span className="text-sm font-semibold">
            From entire frame to a singl...
          </span>
        </button>
        {frameExpanded && (
          <div className="ml-6 text-xs" style={{ color: "#71726e" }}>
            {/* Content placeholder */}
          </div>
        )}
      </div>

      {/* Collapsible Section 2 - Add New Design */}
      <div className="mb-6 space-y-4">
        <button
          onClick={() => setDesignExpanded(!designExpanded)}
          className="flex items-center gap-2"
          style={{ color: "#b2b2b1" }}
        >
          <span
            className={`inline-block transition-transform ${
              designExpanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
          <span className="text-base font-semibold">Add New Design</span>
        </button>

        {designExpanded && (
          <div className="space-y-4">
            {/* Personal Access Token */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label
                  className="text-sm font-semibold"
                  style={{ color: "#a4a4a3" }}
                >
                  Personal Access Token
                </label>
                {/* Info Icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "#a4a4a3" }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4m0-4h.01" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full border bg-black px-4 py-3 text-sm font-semibold"
                style={{
                  borderColor: "#3a3a3a",
                  color: "#737470",
                }}
              />
            </div>

            {/* Design URL */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label
                  className="text-sm font-semibold"
                  style={{ color: "#a3a3a2" }}
                >
                  Design URL
                </label>
                {/* Info Icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "#a3a3a2" }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4m0-4h.01" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full border bg-black px-4 py-3 text-sm font-semibold"
                style={{
                  borderColor: "#3a3a3a",
                  color: "#71726e",
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                className="flex-1 rounded px-6 py-3 text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#a0624b",
                  color: "#8c8078",
                }}
              >
                Awesome
              </button>
              <button
                className="flex-1 rounded px-6 py-3 text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#a0624b",
                  color: "#8c8078",
                }}
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-12 space-y-2">
        <h2 className="text-base font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </h2>
        <div
          className="min-h-24 rounded"
          style={{ backgroundColor: "#0a0a0a" }}
        />
      </div>
    </div>
  );
};
