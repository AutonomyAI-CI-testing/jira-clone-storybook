export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[280px] min-h-screen p-5 flex flex-col gap-4"
      style={{ backgroundColor: "#232323" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <span className="text-base" style={{ color: "#b5b5b5" }}>
          ⚙
        </span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <span className="text-xs" style={{ color: "#8b9291" }}>
          ^
        </span>
        <span className="text-xs" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
          ^
        </span>
        <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-xs" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          <span className="text-xs" style={{ color: "#a4a4a3" }}>
            ⓘ
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-xs border outline-none"
          style={{
            backgroundColor: "#1a1a1a",
            borderColor: "#3a3a3a",
            color: "#737470",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-xs" style={{ color: "#a4a4a3" }}>
            Design URL
          </span>
          <span className="text-xs" style={{ color: "#a4a4a3" }}>
            ⓘ
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-xs border outline-none"
          style={{
            backgroundColor: "#1a1a1a",
            borderColor: "#3a3a3a",
            color: "#737470",
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-1">
        <button
          className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
          style={{ backgroundColor: "#b45309", color: "#e8d5c4" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
          style={{ backgroundColor: "#b45309", color: "#e8d5c4" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
