import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

const COLORS = {
  bg: "#1e1e1e",
  white: "#e8e8e8",
  mutedOrange: "#b06030",
  inputBg: "#2a2a2a",
  inputBorder: "1px solid #444444",
  btnBg: "#b5541c",
  btnText: "#f0ddd0",
  iconMuted: "#888888",
  placeholder: "#999999",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.bg, color: COLORS.white }}
      className="p-5 min-h-screen font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg" style={{ color: COLORS.white }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={22} style={{ color: COLORS.white }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mt-2">
        <FiChevronUp size={14} style={{ color: COLORS.mutedOrange }} />
        <span
          className="text-sm truncate"
          style={{ color: COLORS.mutedOrange, maxWidth: "260px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp size={18} style={{ color: COLORS.white }} />
        <span className="font-bold text-xl" style={{ color: COLORS.white }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm" style={{ color: COLORS.white }}>
          Personal Access Token
        </span>
        <FiInfo size={16} style={{ color: COLORS.iconMuted }} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded p-2 text-sm mb-4 outline-none"
        style={{
          backgroundColor: COLORS.inputBg,
          border: COLORS.inputBorder,
          color: COLORS.placeholder,
        }}
        readOnly
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm" style={{ color: COLORS.white }}>
          Design URL
        </span>
        <FiInfo size={16} style={{ color: COLORS.iconMuted }} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded p-2 text-sm mb-6 outline-none"
        style={{
          backgroundColor: COLORS.inputBg,
          border: COLORS.inputBorder,
          color: COLORS.placeholder,
        }}
        readOnly
      />

      {/* Action buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          className="rounded-lg px-8 py-3 font-bold text-sm"
          style={{ backgroundColor: COLORS.btnBg, color: COLORS.btnText }}
        >
          Awesome
        </button>
        <button
          className="rounded-lg px-8 py-3 font-bold text-sm"
          style={{ backgroundColor: COLORS.btnBg, color: COLORS.btnText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="font-bold text-xl" style={{ color: COLORS.white }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
