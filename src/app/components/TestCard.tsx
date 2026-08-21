export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] flex flex-col gap-3 p-4"
      style={{ backgroundColor: "#2a2a28" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <span className="text-base" style={{ color: "#b5b5b5" }}>
          ⚙
        </span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <span className="text-xs" style={{ color: "#8b9291" }}>
          ∧
        </span>
        <span className="text-xs" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Section header */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold" style={{ color: "#b2b2b1" }}>
          ∧
        </span>
        <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-1">
        <span className="text-xs font-semibold" style={{ color: "#a4a4a3" }}>
          Personal Access Token
        </span>
        <span className="text-xs" style={{ color: "#a4a4a3" }}>
          ⓘ
        </span>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded px-3 py-2 text-xs font-semibold outline-none border border-[#a5adad] bg-[#272822]"
        style={{ color: "#737470" }}
        readOnly
      />

      {/* Design URL label */}
      <div className="flex items-center gap-1">
        <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
          Design URL
        </span>
        <span className="text-xs" style={{ color: "#a3a3a2" }}>
          ⓘ
        </span>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded px-3 py-2 text-xs font-semibold outline-none border-2 border-[#929291] bg-[#272822]"
        style={{ color: "#71726e" }}
        readOnly
      />

      {/* Button row */}
      <div className="flex items-center gap-3 justify-center">
        <button
          className="rounded px-6 py-2 text-xs font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="rounded px-6 py-2 text-xs font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-2">
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
