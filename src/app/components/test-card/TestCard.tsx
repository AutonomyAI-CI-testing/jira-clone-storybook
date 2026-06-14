
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Color constants matching Figma design reference
const COLORS = {
  CARD_BG: "bg-[#2a2a2a]",
  INPUT_BG: "bg-[#1e1e1e]",
  BUTTON_BG: "bg-[#c0622f]",
  BUTTON_HOVER: "hover:bg-[#a8521f]",
  MUTED_AMBER: "text-[#b8926a]",
  BORDER: "border-[#3d3d3d]",
} as const;

/**
 * TestCard - A high-fidelity UI panel replicating a settings interface.
 * Designed to verify visual output against Figma specifications.
 * Root element uses id="testElem" for automated UI testing targeting.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className={`${COLORS.CARD_BG} p-5 rounded-lg max-w-sm shadow-xl`}>
        {/* Header row: Agent identity and settings access */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-primary-bold text-lg">
            UI magician Agent
          </span>
          <IoSettingsOutline className="text-white" size={22} />
        </div>

        {/* Subtitle with muted amber coloring for visual hierarchy */}
        <div className="flex items-center gap-1 mb-6">
          <HiChevronUp className={COLORS.MUTED_AMBER} />
          <span className={`${COLORS.MUTED_AMBER} text-sm`}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Section header: Collapsible-style title */}
        <div className="flex items-center gap-2 mb-4">
          <HiChevronUp className="text-white" size={18} />
          <span className="text-white font-primary-bold text-base">
            Add New Design
          </span>
        </div>

        {/* Form: Design integration inputs */}
        <div className="flex flex-col gap-3">
          {/* Personal Access Token Field */}
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <label className="text-white text-sm">Personal Access Token</label>
              <HiInformationCircle className="text-gray-400" size={16} />
            </div>
            <input
              className={`w-full ${COLORS.INPUT_BG} text-gray-400 text-sm px-3 py-2 rounded border ${COLORS.BORDER} outline-none focus:ring-1 focus:ring-[#c0622f]`}
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              aria-label="Personal Access Token"
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <label className="text-white text-sm">Design URL</label>
              <HiInformationCircle className="text-gray-400" size={16} />
            </div>
            <input
              className={`w-full ${COLORS.INPUT_BG} text-gray-400 text-sm px-3 py-2 rounded border ${COLORS.BORDER} outline-none focus:ring-1 focus:ring-[#c0622f]`}
              placeholder="https://www.figma.com/file/:"
              aria-label="Design URL"
            />
          </div>

          {/* Action Buttons: Prominent CTAs with branding colors */}
          <div className="flex gap-3 mt-2">
            <button
              className={`flex-1 ${COLORS.BUTTON_BG} ${COLORS.BUTTON_HOVER} text-white py-2.5 rounded-lg font-primary-bold text-sm transition-colors`}
            >
              Awesome
            </button>
            <button
              className={`flex-1 ${COLORS.BUTTON_BG} ${COLORS.BUTTON_HOVER} text-white py-2.5 rounded-lg font-primary-bold text-sm transition-colors`}
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer section: Historical data heading */}
        <div className={`mt-6 border-t ${COLORS.BORDER} pt-4`}>
          <span className="text-white font-primary-bold text-base">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
