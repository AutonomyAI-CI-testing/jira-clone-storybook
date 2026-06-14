import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Colors defined in the Figma mockup that aren't part of the standard Tailwind theme.
// These are kept as constants to explain their origin and make them easier to maintain.
const COLORS = {
  CARD_BG: "#2a2a2a",
  MUTED_ORANGE: "#a0856a",
  PRIMARY_BUTTON: "#c1622f",
};

/**
 * TestCard is a visual smoke test component that approximates a "UI magician Agent" panel.
 * It is used to validate the project's Tailwind setup and color rendering against Figma requirements.
 * 
 * Note: This component is currently static/read-only as per the initial smoke test requirements.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[280px] rounded-xl p-5"
      style={{ background: COLORS.CARD_BG }}
    >
      {/* Header section with branding and settings */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline className="text-gray-400" size={20} />
      </div>

      {/* Breadcrumb or context row - Uses a specific muted orange from Figma */}
      <div className="mb-6 flex items-center gap-2">
        <IoChevronUp className="text-gray-400" size={14} />
        <span className="text-sm" style={{ color: COLORS.MUTED_ORANGE }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header: Add New Design */}
      <div className="mb-5 flex items-center gap-2 border-none bg-transparent p-0 text-left">
        <IoChevronUp className="text-white" size={16} />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Input Field: Personal Access Token */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400" size={14} />
        </div>
        <input
          className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          aria-label="Personal Access Token"
        />
      </div>

      {/* Input Field: Design URL */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-sm text-gray-300">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400" size={14} />
        </div>
        <input
          className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
          placeholder="https://www.figma.com/file/:"
          readOnly
          aria-label="Design URL"
        />
      </div>

      {/* Action Buttons - These use the signature brand color from Figma */}
      <div className="mb-8 flex gap-3">
        <button
          className="flex-1 rounded-lg py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95"
          style={{ background: COLORS.PRIMARY_BUTTON }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95"
          style={{ background: COLORS.PRIMARY_BUTTON }}
        >
          Prepare
        </button>
      </div>

      {/* Footer section: Recent history title */}
      <div>
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
