import { FiSettings, FiInfo } from "react-icons/fi";
import { FaChevronUp } from "react-icons/fa";

// Color constants for consistent styling throughout the component
const COLORS = {
  header: "#b5b5b5",
  collapsibleText1: "#8b9291",
  collapsibleText2: "#b2b2b1",
  labelText: "#a4a4a3",
  labelText2: "#a3a3a2",
  inputText: "#737470",
  inputText2: "#71726e",
  inputBorder: "#a5adad",
  inputBorder2: "#929291",
  inputBg: "#272822",
  buttonText: "#8c8078",
  buttonBg: "#843a17",
  buttonBgHover: "#a24a1f",
  recentBreakdownsText: "#b0b0b0",
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] bg-black px-10 py-8">
      {/* Header with title and settings icon */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[18px] font-semibold" style={{ color: COLORS.header }}>
          UI magician Agent
        </h1>
        <FiSettings className="h-5 w-5" style={{ color: COLORS.header }} />
      </div>

      {/* Collapsible section 1 - text truncated in the design */}
      <div className="mb-16 flex items-center gap-4">
        <FaChevronUp className="h-4 w-4" style={{ color: COLORS.collapsibleText1 }} />
        <p className="text-[15px] font-semibold" style={{ color: COLORS.collapsibleText1 }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Collapsible section 2 */}
      <div className="mb-16 flex items-center gap-4">
        <FaChevronUp className="h-4 w-4" style={{ color: COLORS.collapsibleText2 }} />
        <p className="text-[18px] font-semibold" style={{ color: COLORS.collapsibleText2 }}>
          Add New Design
        </p>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4 flex items-center gap-3">
        <label className="text-[16px] font-semibold" style={{ color: COLORS.labelText }}>
          Personal Access Token
        </label>
        <FiInfo className="h-5 w-5" style={{ color: COLORS.labelText }} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-10 w-full border px-5 py-3 text-[15px] font-semibold"
        style={{
          borderColor: COLORS.inputBorder,
          backgroundColor: COLORS.inputBg,
          color: COLORS.inputText,
        }}
      />

      {/* Design URL field */}
      <div className="mb-4 flex items-center gap-3">
        <label className="text-[16px] font-semibold" style={{ color: COLORS.labelText2 }}>
          Design URL
        </label>
        <FiInfo className="h-5 w-5" style={{ color: COLORS.labelText2 }} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-12 w-full border-2 px-5 py-3 text-[14px] font-semibold"
        style={{
          borderColor: COLORS.inputBorder2,
          backgroundColor: COLORS.inputBg,
          color: COLORS.inputText2,
        }}
      />

      {/* Action buttons - both have same styling and hover behavior */}
      <div className="mb-16 flex gap-6">
        <button
          className="flex-1 rounded px-6 py-3 text-[15px] font-semibold transition-colors"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = COLORS.buttonBgHover;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = COLORS.buttonBg;
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-6 py-3 text-[15px] font-semibold transition-colors"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = COLORS.buttonBgHover;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = COLORS.buttonBg;
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h2 className="text-[18px] font-semibold" style={{ color: COLORS.recentBreakdownsText }}>
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-gray-400">© AutonomyAI</p>
      </div>
    </div>
  );
};
