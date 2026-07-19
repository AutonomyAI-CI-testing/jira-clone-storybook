export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
      className="w-full max-w-sm p-5"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span style={{ color: "#ffffff" }} className="text-lg font-bold">
          UI magician Agent
        </span>
        <span style={{ color: "#9ca3af", fontSize: "1.25rem" }}>⚙</span>
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-2 flex items-center gap-2">
        <span style={{ color: "#a07850", fontSize: "0.75rem" }}>∧</span>
        <span style={{ color: "#a07850" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "2rem" }} />

      {/* 3. Section heading row */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#ffffff", fontSize: "0.85rem" }}>∧</span>
        <span style={{ color: "#ffffff" }} className="text-base font-bold">
          Add New Design
        </span>
      </div>

      {/* 4. Personal Access Token label */}
      <div className="mt-4 flex items-center gap-2">
        <span style={{ color: "#d1d5db" }} className="text-sm">
          Personal Access Token
        </span>
        <span style={{ color: "#9ca3af", fontSize: "1rem" }}>ⓘ</span>
      </div>

      {/* 5. Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="mt-2 w-full rounded border p-3 text-sm outline-none"
        style={{
          backgroundColor: "#363636",
          borderColor: "#555555",
          color: "#9ca3af",
        }}
      />

      {/* 6. Design URL label */}
      <div className="mt-4 flex items-center gap-2">
        <span style={{ color: "#d1d5db" }} className="text-sm">
          Design URL
        </span>
        <span style={{ color: "#9ca3af", fontSize: "1rem" }}>ⓘ</span>
      </div>

      {/* 7. URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mt-2 w-full rounded border-2 p-3 text-sm outline-none"
        style={{
          backgroundColor: "#363636",
          borderColor: "#888888",
          color: "#9ca3af",
        }}
      />

      {/* 8. Action buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="flex-1 rounded-lg py-3 text-sm font-bold"
          style={{ backgroundColor: "#b5532a", color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 text-sm font-bold"
          style={{ backgroundColor: "#b5532a", color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* 9. Recent Breakdowns heading */}
      <div className="mt-8">
        <span style={{ color: "#ffffff" }} className="text-lg font-bold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
