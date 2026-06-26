
import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

const COLORS = {
  bg: "#2a2a2a",
  headerText: "#b5b5b5",
  mutedText: "#8b9291",
  sectionHeaderText: "#b2b2b1",
  labelText: "#a3a3a2",
  inputBg: "#1a1a1a",
  placeholderText: "#9a9b97",
  buttonBg: "#c0622a",
  buttonText: "#ffffff",
  footerText: "#b0b0b0",
} as const;

export function TestCard() {
  return (
    <div id="testElem" className="p-4 rounded-lg" style={{ backgroundColor: COLORS.bg }}>
      {/* Header row: Primary title with configuration icon */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </span>
        <HiCog className="w-6 h-6" style={{ color: COLORS.headerText }} />
      </div>

      {/* Context row: Shows current frame context (collapsed) */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="w-5 h-5" style={{ color: COLORS.mutedText }} />
        <span className="text-sm" style={{ color: COLORS.mutedText }}>
          From entire frame to a single...
        </span>
      </div>

      {/* Main Action Section: Form for adding new design data */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="w-5 h-5" style={{ color: COLORS.sectionHeaderText }} />
        <span className="font-bold text-base" style={{ color: COLORS.sectionHeaderText }}>
          Add New Design
        </span>
      </div>

      {/* Fields are read-only for this static verification component */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className="text-sm" style={{ color: COLORS.labelText }}>
            Personal Access Token
          </label>
          <HiInformationCircle className="w-4 h-4" style={{ color: COLORS.labelText }} />
        </div>
        <input
          id="pat"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md text-sm outline-none"
          style={{ backgroundColor: COLORS.inputBg, color: COLORS.placeholderText }}
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="designUrl" className="text-sm" style={{ color: COLORS.labelText }}>
            Design URL
          </label>
          <HiInformationCircle className="w-4 h-4" style={{ color: COLORS.labelText }} />
        </div>
        <input
          id="designUrl"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md text-sm outline-none"
          style={{ backgroundColor: COLORS.inputBg, color: COLORS.placeholderText }}
        />
      </div>

      {/* Primary Actions */}
      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 py-2 px-4 rounded-md font-medium"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-4 rounded-md font-medium"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* History section label */}
      <div>
        <span className="font-bold text-base" style={{ color: COLORS.footerText }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
