export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#e8e8e8" }}
      className="w-full max-w-sm p-5 flex flex-col gap-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl" style={{ color: "#e8e8e8" }}>
          UI magician Agent
        </span>
        <span className="text-2xl" style={{ color: "#e8e8e8" }}>
          ⚙
        </span>
      </div>

      {/* Chevron / subtitle row */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold" style={{ color: "#c07840" }}>
          ^
        </span>
        <span className="text-sm" style={{ color: "#c07840" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg" style={{ color: "#e8e8e8" }}>
            ^
          </span>
          <span className="font-bold text-lg" style={{ color: "#e8e8e8" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: "#e8e8e8" }}>
              Personal Access Token
            </span>
            <span className="text-sm" style={{ color: "#a0a0a0" }}>
              ⓘ
            </span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full px-3 py-3 rounded text-sm outline-none"
            style={{
              backgroundColor: "#333",
              color: "#888",
              border: "1px solid #555",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: "#e8e8e8" }}>
              Design URL
            </span>
            <span className="text-sm" style={{ color: "#a0a0a0" }}>
              ⓘ
            </span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full px-3 py-3 rounded text-sm outline-none"
            style={{
              backgroundColor: "#333",
              color: "#888",
              border: "1px solid #888",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-1">
          <button
            className="flex-1 px-4 py-3 rounded-lg font-semibold text-sm"
            style={{ backgroundColor: "#b85428", color: "#e8e8e8" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 px-4 py-3 rounded-lg font-semibold text-sm"
            style={{ backgroundColor: "#b85428", color: "#e8e8e8" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4">
        <span className="font-bold text-xl" style={{ color: "#e8e8e8" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
