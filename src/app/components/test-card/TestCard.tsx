
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * TestCard - A self-contained smoke-test component.
 * 
 * This component reproduces the "UI magician Agent" panel from Figma.
 * It serves as a visual proof-of-concept for the design-to-code pipeline.
 * It is intended to be static and does not handle real form submission or interaction.
 */
export function TestCard(): JSX.Element {
  // Design-specific tokens derived from Figma
  const COLORS = {
    cardBg: "#121212",
    textPrimary: "#ffffff",
    textMuted: "#a0a0a0",
    inputBorder: "#444444",
    inputPlaceholder: "#666666",
    buttonBg: "#9c4a1b",
  };

  return (
    <div 
      id="testElem" 
      className="rounded-xl p-8 w-full max-w-sm font-sans"
      style={{ backgroundColor: COLORS.cardBg, color: COLORS.textMuted }}
    >
      {/* Header row: Branding and Settings */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-xl" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </span>
        <FiSettings className="text-xl" style={{ color: COLORS.textPrimary }} />
      </div>

      {/* Breadcrumb/Context row */}
      <div className="flex items-center gap-2 mb-12">
        <FiChevronUp />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Main Action Section */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp style={{ color: COLORS.textPrimary }} />
        <span className="font-bold text-xl" style={{ color: COLORS.textPrimary }}>
          Add New Design
        </span>
      </div>

      {/* Form Fields: Hardcoded for smoke-test purposes */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-base mb-2">
          Personal Access Token <FiInfo size={16} />
        </label>
        <div className="bg-transparent border rounded-sm p-3" style={{ borderColor: COLORS.inputBorder }}>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-transparent w-full outline-none"
            style={{ color: COLORS.inputPlaceholder }}
          />
        </div>
      </div>

      <div className="mb-10">
        <label className="flex items-center gap-2 text-base mb-2">
          Design URL <FiInfo size={16} />
        </label>
        <div className="bg-transparent border rounded-sm p-3" style={{ borderColor: COLORS.inputBorder }}>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="bg-transparent w-full outline-none"
            style={{ color: COLORS.inputPlaceholder }}
          />
        </div>
      </div>

      {/* Primary Actions */}
      <div className="flex gap-4 mb-14">
        <button 
          className="text-[#ffffff] rounded-md px-8 py-3 font-semibold text-lg flex-1 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Awesome
        </button>
        <button 
          className="text-[#ffffff] rounded-md px-8 py-3 font-semibold text-lg flex-1 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Prepare
        </button>
      </div>

      {/* Footer / Secondary Content */}
      <div className="mt-8">
        <span className="font-bold text-xl" style={{ color: COLORS.textPrimary }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
