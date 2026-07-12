export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1c1c1c", color: "#e8e8e8" }}
      className="p-5 flex flex-col max-w-sm font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">UI magician Agent</span>
        <span className="text-xl">⚙</span>
      </div>

      {/* 2. Collapsible row */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-sm">^</span>
        <span style={{ color: "#c87533" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="h-8" />

      {/* 4. Add New Design section header */}
      <div className="flex items-center gap-2">
        <span className="text-sm">^</span>
        <span className="font-bold text-xl">Add New Design</span>
      </div>

      {/* 5. Spacer */}
      <div className="h-4" />

      {/* 6. Personal Access Token label */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Personal Access Token</span>
        <span
          style={{ borderColor: "#888", color: "#e8e8e8" }}
          className="text-xs border rounded-full w-5 h-5 flex items-center justify-center shrink-0"
        >
          i
        </span>
      </div>

      {/* 7. Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded px-3 py-2 text-sm mt-2 outline-none"
        style={{
          backgroundColor: "#2a2a2a",
          color: "#e8e8e8",
          border: "1px solid #555",
        }}
      />

      {/* 8. Spacer */}
      <div className="h-3" />

      {/* 9. Design URL label */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Design URL</span>
        <span
          style={{ borderColor: "#888", color: "#e8e8e8" }}
          className="text-xs border rounded-full w-5 h-5 flex items-center justify-center shrink-0"
        >
          i
        </span>
      </div>

      {/* 10. URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded px-3 py-2 text-sm mt-2 outline-none"
        style={{
          backgroundColor: "#2a2a2a",
          color: "#e8e8e8",
          border: "1px solid #888",
        }}
      />

      {/* 11. Spacer */}
      <div className="h-5" />

      {/* 12. Two buttons */}
      <div className="flex gap-4">
        <button
          className="flex-1 py-3 rounded-xl font-semibold text-white text-base"
          style={{ backgroundColor: "#c1440e" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-xl font-semibold text-white text-base"
          style={{ backgroundColor: "#9e3a0c" }}
        >
          Prepare
        </button>
      </div>

      {/* 13. Spacer */}
      <div className="h-8" />

      {/* 14. Recent Breakdowns heading */}
      <span className="font-bold text-xl">Recent Breakdowns</span>
    </div>
  );
}
