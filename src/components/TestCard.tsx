export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#ffffff", minWidth: "300px", maxWidth: "400px" }}
      className="p-5 flex flex-col gap-4 rounded-lg"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">UI magician Agent</span>
        <span style={{ fontSize: "1.25rem" }}>⚙</span>
      </div>

      {/* Chevron + subtitle row */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#c47a4a" }}>^</span>
        <span style={{ color: "#c47a4a" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacer */}
      <div style={{ height: "1rem" }} />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">^</span>
        <span className="font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span>Personal Access Token</span>
          <span style={{ color: "#aaaaaa" }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded p-2 text-sm"
          style={{
            backgroundColor: "#333333",
            border: "1px solid #555555",
            color: "#aaaaaa",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span>Design URL</span>
          <span style={{ color: "#aaaaaa" }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded p-2 text-sm"
          style={{
            backgroundColor: "#333333",
            border: "1px solid #555555",
            color: "#aaaaaa",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 py-3 rounded-lg font-medium text-sm"
          style={{ backgroundColor: "#b5451b", color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg font-medium text-sm"
          style={{ backgroundColor: "#b5451b", color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="font-bold text-lg" style={{ marginTop: "0.5rem" }}>
        Recent Breakdowns
      </div>
    </div>
  );
}
