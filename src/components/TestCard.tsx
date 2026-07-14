export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#e0e0e0", width: "320px", fontFamily: "sans-serif" }}
      className="flex flex-col p-5 gap-4 rounded-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg" style={{ color: "#f0f0f0" }}>
          UI magician Agent
        </span>
        <span className="text-xl" style={{ color: "#a0a0a0" }}>⚙</span>
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#a0a0a0" }}>∧</span>
        <span className="text-sm" style={{ color: "#c87941" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <span style={{ color: "#e0e0e0" }}>∧</span>
          <span className="font-bold text-lg" style={{ color: "#f0f0f0" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: "#c8c8c8" }}>
              Personal Access Token
            </span>
            <span className="text-sm" style={{ color: "#909090" }}>ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded px-3 py-2 text-sm outline-none border"
            style={{
              backgroundColor: "#383232",
              borderColor: "#555555",
              color: "#c8c8c8",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: "#c8c8c8" }}>
              Design URL
            </span>
            <span className="text-sm" style={{ color: "#909090" }}>ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded px-3 py-2 text-sm outline-none border"
            style={{
              backgroundColor: "#383232",
              borderColor: "#7a6060",
              color: "#c8c8c8",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-2">
          <button
            className="px-6 py-3 rounded-lg font-medium text-sm"
            style={{ backgroundColor: "#b85c38", color: "#f0f0f0" }}
          >
            Awesome
          </button>
          <button
            className="px-6 py-3 rounded-lg font-medium text-sm"
            style={{ backgroundColor: "#9e4e2e", color: "#f0f0f0" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="font-bold text-lg" style={{ color: "#f0f0f0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
