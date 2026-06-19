import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

const COLORS = {
  bg: "#2b2b2b",
  textPrimary: "#e8e3dc",
  textSecondary: "#a0a0a0",
  textMuted: "#8a8a8a",
  accent: "#b5601a",
  label: "#c0bbb4",
  inputBg: "#3a3a3a",
  inputBorder: "#555",
  btnBg: "#a0522d",
  btnText: "#e8c9a0",
};

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="mx-auto p-6"
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.textPrimary,
        maxWidth: "360px",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="text-2xl cursor-pointer" style={{ color: COLORS.textSecondary }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp style={{ color: COLORS.textMuted }} />
        <span style={{ color: COLORS.accent }}>From entire frame to a singl...</span>
      </div>

      {/* "Add New Design" section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="pat" className="text-sm font-medium" style={{ color: COLORS.label }}>
            Personal Access Token
          </label>
          <FiInfo className="text-xs" style={{ color: COLORS.textMuted }} />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2.5 outline-none border"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.textPrimary,
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="designUrl" className="text-sm font-medium" style={{ color: COLORS.label }}>
            Design URL
          </label>
          <FiInfo className="text-xs" style={{ color: COLORS.textMuted }} />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full px-3 py-2.5 outline-none border"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.textPrimary,
          }}
        />
      </div>

      {/* Two-button row */}
      <div className="flex gap-3 mb-10">
        <button
          className="flex-1 font-bold py-3 px-4 rounded-lg border-none cursor-pointer text-[15px]"
          style={{
            backgroundColor: COLORS.btnBg,
            color: COLORS.btnText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 font-bold py-3 px-4 rounded-lg border-none cursor-pointer text-[15px]"
          style={{
            backgroundColor: COLORS.btnBg,
            color: COLORS.btnText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <div>
        <h2 className="text-xl font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
