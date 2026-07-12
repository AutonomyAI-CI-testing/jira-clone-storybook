export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1a1a1a", color: "#e8e0d8", fontFamily: "sans-serif" }}
      className="min-h-screen w-full p-5 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">UI magician Agent</span>
        <span className="text-2xl" style={{ color: "#a0978e" }}>⚙</span>
      </div>

      {/* Collapsible indicator */}
      <div className="flex items-center gap-2" style={{ color: "#b87c50" }}>
        <span className="text-sm">^</span>
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <span className="text-sm" style={{ color: "#a0978e" }}>^</span>
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Personal Access Token</label>
          <span className="text-sm" style={{ color: "#a0978e" }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#4a4a4a",
            color: "#7a7060",
          }}
          className="w-full border rounded px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Design URL</label>
          <span className="text-sm" style={{ color: "#a0978e" }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#4a4a4a",
            color: "#7a7060",
          }}
          className="w-full border rounded px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center mt-2">
        <button
          type="button"
          style={{ backgroundColor: "#c1440e" }}
          className="px-8 py-3 rounded-xl text-white font-semibold text-base"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#a83a0c" }}
          className="px-8 py-3 rounded-xl text-white font-semibold text-base"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
