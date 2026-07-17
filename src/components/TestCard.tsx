export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
      className="w-full max-w-sm px-5 py-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between pb-3">
        <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
          UI magician Agent
        </span>
        <span
          className="text-xl cursor-pointer"
          style={{ color: "#9ca3af" }}
          aria-label="Settings"
        >
          ⚙
        </span>
      </div>

      {/* Chevron / preview row */}
      <div className="flex items-center gap-2 pb-10">
        <span className="text-sm" style={{ color: "#c2692a" }}>
          ∧
        </span>
        <span className="text-sm" style={{ color: "#c2692a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 pb-1">
          <span className="text-base font-bold" style={{ color: "#ffffff" }}>
            ∧
          </span>
          <span className="text-base font-bold" style={{ color: "#ffffff" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              className="text-sm font-semibold"
              style={{ color: "#d1d5db" }}
            >
              Personal Access Token
            </label>
            <span
              className="text-base cursor-pointer"
              style={{ color: "#9ca3af" }}
              aria-label="More info"
            >
              ⓘ
            </span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: "#383838",
              border: "1px solid #555555",
              color: "#ffffff",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              className="text-sm font-semibold"
              style={{ color: "#d1d5db" }}
            >
              Design URL
            </label>
            <span
              className="text-base cursor-pointer"
              style={{ color: "#9ca3af" }}
              aria-label="More info"
            >
              ⓘ
            </span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: "#383838",
              border: "1px solid #555555",
              color: "#ffffff",
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 pt-1">
          <button
            type="button"
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold cursor-pointer"
            style={{
              backgroundColor: "#b5541a",
              color: "#ffffff",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold cursor-pointer"
            style={{
              backgroundColor: "#9c4815",
              color: "#ffffff",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
