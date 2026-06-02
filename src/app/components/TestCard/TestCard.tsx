// Color palette for the dark-themed card UI
const COLORS = {
  background: "#000000",
  headerText: "#b5b5b5",
  headerIcon: "#b2b2b1",
  collapsibleText: "#b0b0b0",
  sectionText: "#a3a3a2",
  labelText: "#a4a4a3",
  infoIcon: "#8b9291",
  border: "#3a3a3a",
  borderLight: "#2a2a2a",
  inputPlaceholder: "#737470",
  buttonBg: "#8c8078",
};

const FONT_FAMILY = "Inter, sans-serif";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black p-4 text-xs font-semibold"
      style={{
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Header: Agent name with settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-sm" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h1>
        <span className="text-base" style={{ color: COLORS.headerIcon }}>
          ⚙
        </span>
      </div>

      {/* Collapsible section for frame-to-component workflow */}
      <div
        className="mb-4 flex items-center justify-between py-2"
        style={{ color: COLORS.collapsibleText }}
      >
        <span className="text-xs">From entire frame to a singl...</span>
        <span className="text-sm">▼</span>
      </div>

      {/* Add New Design action section */}
      <div
        className="mb-4 flex items-center justify-between border-b py-2"
        style={{ color: COLORS.sectionText, borderColor: COLORS.borderLight }}
      >
        <span className="text-xs">Add New Design</span>
        <span className="text-sm">›</span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-xs" style={{ color: COLORS.labelText }}>
            Personal Access Token
          </label>
          <span className="text-xs" style={{ color: COLORS.infoIcon }}>
            ⓘ
          </span>
        </div>
        <input
          type="text"
          placeholder="Figma token..."
          className="w-full rounded border bg-black px-2 py-1.5 text-xs text-white focus:outline-none focus-visible:outline-none"
          style={{
            borderColor: COLORS.border,
            color: COLORS.inputPlaceholder,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-xs" style={{ color: COLORS.labelText }}>
            Design URL
          </label>
          <span className="text-xs" style={{ color: COLORS.infoIcon }}>
            ⓘ
          </span>
        </div>
        <input
          type="text"
          placeholder="https://figma.com/..."
          className="w-full rounded border bg-black px-2 py-1.5 text-xs text-white focus:outline-none focus-visible:outline-none"
          style={{
            borderColor: COLORS.border,
            color: COLORS.inputPlaceholder,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          className="flex-1 rounded border px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:opacity-80 active:opacity-70"
          style={{
            backgroundColor: COLORS.buttonBg,
            borderColor: COLORS.buttonBg,
            color: COLORS.buttonBg,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded border px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:opacity-80 active:opacity-70"
          style={{
            backgroundColor: COLORS.buttonBg,
            borderColor: COLORS.buttonBg,
            color: COLORS.buttonBg,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div style={{ color: COLORS.sectionText }}>
        <h3 className="text-xs">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
