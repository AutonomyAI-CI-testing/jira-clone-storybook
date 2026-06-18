import React from "react";

/**
 * TestCard component
 * Renders a UI Magician Agent interface for design breakdowns.
 * This is currently a static preview of the agent configuration UI.
 */
export const TestCard = (): JSX.Element => {
  // Theme constants - matching the design's dark mode palette
  const colors = {
    background: "bg-[#2a2a2a]",
    inputBg: "bg-[#3a3a3a]",
    borderColor: "border-[#555]",
    dividerColor: "border-[#3a3a3a]",
    primaryAction: "bg-[#c1612a]",
    textMuted: "text-[#888]",
    textAccent: "text-[#c1612a]",
    textPlaceholder: "placeholder-[#666]",
  };

  return (
    <div id="testElem" className={`${colors.background} w-full min-h-screen p-4 font-sans`}>
      {/* Header section with brand and settings */}
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <span className={`${colors.textMuted} text-xl cursor-pointer`}>⚙</span>
      </div>

      {/* Breadcrumb or status hint */}
      <div className="flex items-center gap-1 text-[#c1612a] text-sm mt-1">
        <span>^ From entire frame to a singl...</span>
      </div>

      <div className={`my-4 border-t ${colors.dividerColor}`}></div>

      {/* Configuration Section */}
      <div className="flex items-center gap-2 text-white font-semibold mt-4">
        <span>^ Add New Design</span>
      </div>

      {/* Figma Integration - Personal Access Token */}
      <div className="mt-4">
        <label className="flex items-center gap-1 text-white text-sm mb-1">
          Personal Access Token <span className={colors.textMuted}>ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={`w-full rounded border ${colors.inputBg} ${colors.borderColor} px-3 py-2 text-[#aaa] ${colors.textPlaceholder} text-sm outline-none focus:border-[#777] transition-colors`}
        />
      </div>

      {/* Design Reference - URL Input */}
      <div className="mt-4">
        <label className="flex items-center gap-1 text-white text-sm mb-1">
          Design URL <span className={colors.textMuted}>ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full rounded border ${colors.inputBg} ${colors.borderColor} px-3 py-2 text-[#aaa] ${colors.textPlaceholder} text-sm outline-none focus:border-[#777] transition-colors`}
        />
      </div>

      {/* Primary Actions */}
      <div className="flex gap-3 mt-4">
        <button className={`${colors.primaryAction} text-white rounded-lg px-6 py-2 text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all`}>
          Awesome
        </button>
        <button className={`${colors.primaryAction} text-white rounded-lg px-6 py-2 text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all`}>
          Prepare
        </button>
      </div>

      {/* History section */}
      <div className="mt-6 text-white font-bold text-lg">
        Recent Breakdowns
      </div>
    </div>
  );
};
