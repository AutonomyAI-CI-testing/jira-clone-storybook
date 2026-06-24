import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

/**
 * TestCard component - a self-contained UI panel replicate from Figma.
 * Used as a smoke test for the Figma-to-code pipeline.
 *
 * Design characteristics:
 * - Dark theme (#2a2a2a background)
 * - Specific burnt-orange buttons (#8b4513)
 * - Custom muted text colors for visual hierarchy
 */
// Styling token map keyed to Figma design specs — defined at module level to avoid per-render allocation.
const COLORS = {
    PANEL_BG: "bg-[#2a2a2a]",
    INPUT_BG: "bg-[#333333]",
    PRIMARY_BTN: "bg-[#8b4513]",
    TEXT_MUTED: "text-[#8b9291]",
    TEXT_HEADING: "text-[#b5b5b5]",
    TEXT_LABEL: "text-[#a4a4a3]",
    BORDER_DEFAULT: "border-[#555]",
    BORDER_ACCENT: "border-[#666]", // Design URL has a slightly more prominent border
};

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className={`${COLORS.PANEL_BG} p-5 w-64 rounded-lg flex flex-col gap-2 shadow-xl`}
    >
      {/* Header section with plug-in title and settings shortcut */}
      <div className="flex items-center justify-between">
        <span className={`${COLORS.TEXT_HEADING} font-semibold text-sm`}>
          UI magician Agent
        </span>
        <AiOutlineSetting className={COLORS.TEXT_MUTED} />
      </div>

      {/* Breadcrumb-style collapsed meta information */}
      <div className="flex items-center gap-2 mt-2">
        <BiChevronUp className={COLORS.TEXT_MUTED} />
        <span className={`${COLORS.TEXT_MUTED} text-xs font-semibold`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Main interaction area header */}
      <div className="mt-8 flex items-center gap-2">
        <BiChevronUp className="text-[#b2b2b1]" />
        <span className="text-[#b2b2b1] font-semibold text-sm">
          Add New Design
        </span>
      </div>

      {/* Authentication: Personal Access Token (PAT) input */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label htmlFor="pat" className={`${COLORS.TEXT_LABEL} text-xs font-semibold`}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className={COLORS.TEXT_LABEL} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`mt-1 w-full ${COLORS.INPUT_BG} border ${COLORS.BORDER_DEFAULT} rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none focus:ring-1 focus:ring-orange-900/30 transition-all`}
        />
      </div>

      {/* Design Identification: Figma URL input */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label htmlFor="design-url" className={`${COLORS.TEXT_LABEL} text-xs font-semibold`}>
            Design URL
          </label>
          <AiOutlineInfoCircle className={COLORS.TEXT_LABEL} />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`mt-1 w-full ${COLORS.INPUT_BG} border ${COLORS.BORDER_ACCENT} rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none focus:ring-1 focus:ring-orange-900/30 transition-all`}
        />
      </div>

      {/* Action CTA pair - both use the signature burnt-orange color */}
      <div className="mt-6 flex gap-3 justify-center">
        <button className={`${COLORS.PRIMARY_BTN} text-[#e8d5c4] font-semibold text-xs px-6 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all`}>
          Awesome
        </button>
        <button className={`${COLORS.PRIMARY_BTN} text-[#e8d5c4] font-semibold text-xs px-6 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all`}>
          Prepare
        </button>
      </div>

      {/* Footer: Browse historical items */}
      <div className="mt-8 text-[#b0b0b0] font-semibold text-sm">
        Recent Breakdowns
      </div>
    </div>
  );
};
