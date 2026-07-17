export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#282e33", color: "#dee4ea" }}
      className="w-full max-w-sm rounded-lg p-5 font-sans"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span style={{ color: "#dee4ea" }} className="text-lg font-bold">
          UI magician Agent
        </span>
        <span style={{ color: "#9fadbc" }} className="text-xl leading-none">
          ⚙
        </span>
      </div>

      {/* Chevron subtitle row */}
      <div className="mb-8 flex items-center gap-2">
        <span style={{ color: "#b65c02" }} className="text-sm leading-none">
          ∧
        </span>
        <span style={{ color: "#b65c02" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div className="mb-5 flex items-center gap-2">
        <span style={{ color: "#dee4ea" }} className="text-sm leading-none">
          ∧
        </span>
        <span style={{ color: "#dee4ea" }} className="text-base font-bold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="mb-2 flex items-center gap-2">
          <label style={{ color: "#9fadbc" }} className="text-sm font-medium">
            Personal Access Token
          </label>
          <span style={{ color: "#9fadbc" }} className="text-sm leading-none">
            ⓘ
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#22272b",
            borderColor: "#38414a",
            color: "#9fadbc",
          }}
          className="w-full rounded border px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label style={{ color: "#9fadbc" }} className="text-sm font-medium">
            Design URL
          </label>
          <span style={{ color: "#9fadbc" }} className="text-sm leading-none">
            ⓘ
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#22272b",
            borderColor: "#38414a",
            color: "#9fadbc",
          }}
          className="w-full rounded border px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="mb-8 flex gap-4">
        <button
          type="button"
          style={{ backgroundColor: "#974f0c", color: "#ffffff" }}
          className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#974f0c", color: "#ffffff" }}
          className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span style={{ color: "#dee4ea" }} className="text-lg font-bold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
