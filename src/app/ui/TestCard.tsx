const COLORS = {
  bg: "#222222",
  inputBg: "#2a2a2a",
  inputBorder: "#4a4a4a",
  text: "#ffffff",
  textMuted: "#aaaaaa",
  accent: "#fb923c",
  btnBg: "#b45309",
} as const;

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-6 rounded-md p-5"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, width: 320 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">UI magician Agent</span>
        <span className="text-xl" style={{ color: COLORS.textMuted }}>⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-sm -mt-4" style={{ color: COLORS.accent }}>
        <span>∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span>∧</span>
          <span className="font-bold text-base">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm">Personal Access Token</label>
            <span
              className="text-xs flex items-center justify-center leading-none"
              style={{
                color: COLORS.textMuted,
                border: `1px solid ${COLORS.inputBorder}`,
                borderRadius: "50%",
                width: 16,
                height: 16,
              }}
            >i</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded text-sm px-3 py-2 outline-none"
            style={{
              backgroundColor: COLORS.inputBg,
              border: `1px solid ${COLORS.inputBorder}`,
              color: COLORS.textMuted,
            }}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm">Design URL</label>
            <span
              className="text-xs flex items-center justify-center leading-none"
              style={{
                color: COLORS.textMuted,
                border: `1px solid ${COLORS.inputBorder}`,
                borderRadius: "50%",
                width: 16,
                height: 16,
              }}
            >i</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded text-sm px-3 py-2 outline-none"
            style={{
              backgroundColor: COLORS.inputBg,
              border: `1px solid ${COLORS.inputBorder}`,
              color: COLORS.textMuted,
            }}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 font-semibold py-2 rounded-lg"
            style={{ backgroundColor: COLORS.btnBg, color: COLORS.text }}
          >
            Awesome
          </button>
          <button
            className="flex-1 font-semibold py-2 rounded-lg"
            style={{ backgroundColor: COLORS.btnBg, color: COLORS.text }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div>
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}
