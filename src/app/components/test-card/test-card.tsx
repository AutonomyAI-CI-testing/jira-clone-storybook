import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Theme colors for the UI magician Agent card design
const COLORS = {
  cardBackground: '#2a2318',
  textPrimary: '#e8e0d4',
  textSecondary: '#b8ada0',
  textMuted: '#8a7e6e',
  inputBackground: '#3a3228',
  inputBorder: '#4a4238',
  buttonBackground: '#b5651d',
  buttonHover: '#c06820',
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[480px] rounded p-8" style={{ backgroundColor: COLORS.cardBackground, color: COLORS.textPrimary }}>
      {/* Header with settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-primary text-xl">UI magician Agent</h1>
        <IoSettingsOutline style={{ color: COLORS.textMuted }} size={24} />
      </div>

      {/* Collapsible hint section - truncated text indicates collapsed state */}
      <div className="mb-8 flex items-center gap-2">
        <IoChevronUp style={{ color: COLORS.textMuted }} size={20} />
        <span className="font-primary text-sm" style={{ color: COLORS.textMuted }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - collapsible header */}
      <div className="mb-8 flex items-center gap-2">
        <IoChevronUp style={{ color: COLORS.textMuted }} size={20} />
        <h2 className="font-primary-bold text-base">Add New Design</h2>
      </div>

      {/* Personal Access Token field with info tooltip */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="font-primary text-sm" style={{ color: COLORS.textSecondary }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.textMuted }} size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border px-4 py-3 font-primary text-sm focus:outline-none"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.textMuted,
          }}
        />
      </div>

      {/* Design URL field with info tooltip */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="font-primary text-sm" style={{ color: COLORS.textSecondary }}>
            Design URL
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.textMuted }} size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border px-4 py-3 font-primary text-sm focus:outline-none"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.textMuted,
          }}
        />
      </div>

      {/* Primary action buttons */}
      <div className="mb-8 flex gap-6">
        <button 
          className="flex-1 rounded px-6 py-3 font-primary text-base text-white transition-colors"
          style={{ backgroundColor: COLORS.buttonBackground }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonHover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonBackground}
        >
          Awesome
        </button>
        <button 
          className="flex-1 rounded px-6 py-3 font-primary text-base text-white transition-colors"
          style={{ backgroundColor: COLORS.buttonBackground }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonHover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonBackground}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h2 className="font-primary-bold text-base">Recent Breakdowns</h2>
      </div>

      {/* Footer with copyright */}
      <div className="mt-6 border-t border-gray-300 pt-3 text-center">
        <p className="font-primary text-sm">© AutonomyAI</p>
      </div>
    </div>
  );
};
