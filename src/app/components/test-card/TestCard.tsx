import React from "react";

// Color palette and spacing constants to match dark theme design
const COLORS = {
  background: "#1a1a1a",
  header: "#a3a3a2",
  label: "#8b9291",
  inputBg: "#2a2a2a",
  inputBorder: "#404040",
  inputText: "#b5b5b5",
  descText: "#71726e",
  buttonBg: "#8c8078",
} as const;

const FONT_SIZES = {
  header: "12px",
  label: "11px",
  input: "10px",
  description: "10px",
} as const;

const INPUT_STYLE = {
  background: COLORS.inputBg,
  borderColor: COLORS.inputBorder,
  color: COLORS.inputText,
  fontSize: FONT_SIZES.input,
} as const;

const BUTTON_STYLE = {
  background: COLORS.buttonBg,
  fontSize: FONT_SIZES.label,
  color: "#ffffff",
} as const;

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="rounded bg-black p-4">
      <div
        className="bg-gray-900 w-64 rounded text-white"
        style={{ background: COLORS.background }}
      >
        {/* Header with title and settings button */}
        <div className="border-gray-700 flex items-center justify-between border-b px-4 py-3">
          <h2
            className="text-sm font-semibold"
            style={{ fontSize: FONT_SIZES.header, color: COLORS.header }}
          >
            UI magician Agent
          </h2>
          <button className="text-gray-500 hover:text-gray-400">⚙️</button>
        </div>

        {/* Collapsible section to add new design */}
        <div className="border-gray-700 border-b">
          <button className="hover:bg-gray-800 flex w-full items-center justify-between px-4 py-3">
            <span
              className="text-xs font-semibold"
              style={{ fontSize: FONT_SIZES.label, color: COLORS.label }}
            >
              Add New Design
            </span>
            <span className="text-gray-500">^</span>
          </button>

          {/* Expandable section with description */}
          <div
            className="bg-gray-850 border-gray-700 border-t px-4 py-2"
            style={{ background: "#0f0f0f" }}
          >
            <p
              className="text-gray-500 text-xs"
              style={{
                fontSize: FONT_SIZES.description,
                color: COLORS.descText,
              }}
            >
              From entire frame to a singl...
            </p>
          </div>
        </div>

        {/* Form fields for token and URL input */}
        <div className="border-gray-700 space-y-4 border-b px-4 py-4">
          {/* Personal Access Token input */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label
                className="text-xs font-semibold"
                style={{ fontSize: FONT_SIZES.label, color: COLORS.label }}
              >
                Personal Access Token
              </label>
              <span className="text-gray-600 text-xs">ⓘ</span>
            </div>
            <input
              type="password"
              placeholder="Enter token"
              className="bg-gray-800 border-gray-700 text-gray-400 placeholder-gray-600 w-full rounded border px-2 py-1 text-xs"
              style={INPUT_STYLE}
              readOnly
            />
          </div>

          {/* Design URL input */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label
                className="text-xs font-semibold"
                style={{ fontSize: FONT_SIZES.label, color: COLORS.label }}
              >
                Design URL
              </label>
              <span className="text-gray-600 text-xs">ⓘ</span>
            </div>
            <input
              type="text"
              placeholder="Enter URL"
              className="bg-gray-800 border-gray-700 text-gray-400 placeholder-gray-600 w-full rounded border px-2 py-1 text-xs"
              style={INPUT_STYLE}
              readOnly
            />
          </div>
        </div>

        {/* Action buttons section */}
        <div className="border-gray-700 flex gap-2 border-b px-4 py-4">
          <button
            className="flex-1 rounded px-3 py-2 text-xs font-semibold text-white"
            style={BUTTON_STYLE}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-3 py-2 text-xs font-semibold text-white"
            style={BUTTON_STYLE}
          >
            Prepare
          </button>
        </div>

        {/* Recent breakdowns section */}
        <div className="px-4 py-3">
          <p
            className="text-xs font-semibold"
            style={{ fontSize: FONT_SIZES.label, color: COLORS.label }}
          >
            Recent Breakdowns
          </p>
        </div>
      </div>
    </div>
  );
};
