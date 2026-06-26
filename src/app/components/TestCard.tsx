import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Design constants from Figma to ensure visual consistency
const COLORS = {
  bgMain: "#2b2b2b",
  bgInput: "#1e1e1e",
  textPrimary: "#b5b5b5",
  textSecondary: "#8b9291",
  textMuted: "#b2b2b1",
  textLabel: "#a4a4a3",
  textPlaceholder: "#737470",
  // Button brown-orange palette
  btnBg: "#7a4a30",
  btnText: "#d4a090",
  border: "#444",
} as const;

/**
 * TestCard - A smoke test component that visually reproduces the "UI magician Agent" panel.
 * Used to verify the rendering pipeline, Tailwind integration, and icon library setup.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    style={{ backgroundColor: COLORS.bgMain }}
    className="font-sans flex w-[254px] flex-col space-y-4 p-5 text-[#b5b5b5]"
  >
    {/* Header row: Title and configuration entry point */}
    <div className="flex items-center justify-between">
      <h2 className="text-sm font-semibold text-[#b5b5b5]">UI magician Agent</h2>
      <FiSettings className="text-[#b5b5b5]" size={16} />
    </div>

    {/* Subtitle row: Status or description summary */}
    <div className="flex items-center space-x-1 text-xs text-[#8b9291]">
      <FiChevronUp size={14} />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Vertical spacer - provides visual breathing room between summary and actions */}
    <div className="py-2"></div>

    {/* Section heading: Primary interactive area */}
    <div className="flex items-center space-x-1 text-sm font-medium text-[#b2b2b1]">
      <FiChevronUp size={14} />
      <span>Add New Design</span>
    </div>

    {/* Personal Access Token field: Sensitive configuration input */}
    <div>
      <label className="mb-1 flex items-center space-x-1 text-xs text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <FiInfo size={12} />
      </label>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{ backgroundColor: COLORS.bgInput, color: COLORS.textPlaceholder }}
        className="w-full rounded border border-[#444] p-2 text-xs focus:outline-none"
      />
    </div>

    {/* Design URL field: Component/Frame source path */}
    <div>
      <label className="mb-1 flex items-center space-x-1 text-xs text-[#a4a4a3]">
        <span>Design URL</span>
        <FiInfo size={12} />
      </label>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        style={{ backgroundColor: COLORS.bgInput, color: COLORS.textPlaceholder }}
        className="w-full rounded border border-[#444] p-2 text-xs focus:outline-none"
      />
    </div>

    {/* Actions: Primary task triggers (Awesome / Prepare) */}
    <div className="mt-2 flex space-x-2">
      <button
        style={{ backgroundColor: COLORS.btnBg, color: COLORS.btnText }}
        className="flex-1 rounded-md py-2 text-sm font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
      >
        Awesome
      </button>
      <button
        style={{ backgroundColor: COLORS.btnBg, color: COLORS.btnText }}
        className="flex-1 rounded-md py-2 text-sm font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
      >
        Prepare
      </button>
    </div>

    {/* Footer Section: Historical data link */}
    <div className="pt-4">
      <h3 className="text-sm font-medium text-[#b2b2b1]">Recent Breakdowns</h3>
    </div>
  </div>
);
