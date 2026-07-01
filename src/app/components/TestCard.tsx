import React from "react";

/**
 * TestCard is a smoke test component that visually approximates a Figma design
 * for a "UI magician Agent" panel. It uses Tailwind arbitrary values to match
 * specific Figma design specs for colors and typography.
 */
export const TestCard: React.FC = () => {
  // Figma design constants
  const COLORS = {
    bg: "bg-[#2a2a2a]",
    textPrimary: "text-[#b5b5b5]",
    textSecondary: "text-[#8b9291]",
    textHeading: "text-[#b2b2b1]",
    textLabel: "text-[#a4a4a3]",
    textPlaceholder: "placeholder-[#737470]",
    textPlaceholderAlt: "placeholder-[#71726e]",
    textButton: "text-[#8c8078]",
    textFooter: "text-[#b0b0b0]",
    border: "border-[#555]",
    accent: "bg-[#8b4520]", // Orange-brown / Terra cotta
  };

  return (
    <div id="testElem" className={`min-h-screen ${COLORS.bg} p-4 text-white`}>
      {/* Header: Title and Settings icon */}
      <div className="flex items-center justify-between pb-4">
        <h1 className={`${COLORS.textPrimary} text-[13.5px] font-semibold`}>
          UI magician Agent
        </h1>
        <span className={`${COLORS.textPrimary} text-lg`}>⚙️</span>
      </div>

      {/* Subtitle with chevron prefix */}
      <div className="flex items-center pb-6">
        <span className={`${COLORS.textSecondary} text-lg mr-2`}>^</span>
        <p className={`${COLORS.textSecondary} text-[11.5px] font-semibold`}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Vertical spacer matching design gap */}
      <div className="h-8"></div>

      {/* "Add New Design" Section Header */}
      <div className="flex items-center pb-4">
        <span className={`${COLORS.textHeading} text-lg mr-2`}>^</span>
        <h2 className={`${COLORS.textHeading} text-[13.5px] font-semibold`}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input field */}
      <div className="pb-4">
        <label className={`flex items-center ${COLORS.textLabel} text-[11.5px] pb-2`}>
          Personal Access Token
          <span className="text-xs ml-1">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full p-2 rounded ${COLORS.bg} border ${COLORS.border} ${COLORS.textPrimary} ${COLORS.textPlaceholder} text-[11.5px]`}
        />
      </div>

      {/* Design URL Input field */}
      <div className="pb-6">
        <label className={`flex items-center ${COLORS.textLabel} text-[11.5px] pb-2`}>
          Design URL
          <span className="text-xs ml-1">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full p-2 rounded ${COLORS.bg} border ${COLORS.border} ${COLORS.textPrimary} ${COLORS.textPlaceholderAlt} text-[11.5px]`}
        />
      </div>

      {/* Action Buttons: Left-aligned flex row */}
      <div className="flex justify-start space-x-4 pb-8">
        <button className={`px-6 py-2 rounded ${COLORS.accent} ${COLORS.textButton} text-[11.5px] font-semibold`}>
          Awesome
        </button>
        <button className={`px-6 py-2 rounded ${COLORS.accent} ${COLORS.textButton} text-[11.5px] font-semibold`}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns lower section */}
      <div>
        <h2 className={`${COLORS.textFooter} text-[13.5px] font-semibold`}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
