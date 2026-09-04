export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
      className="w-[254px] p-5 flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <span style={{ color: "#b5b5b5", fontSize: "16px" }}>⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <span style={{ color: "#8b9291", fontSize: "11px", fontWeight: 600 }}>∧</span>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* "Add New Design" section header */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#b2b2b1", fontSize: "13px", fontWeight: 600 }}>∧</span>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center justify-between mt-1">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
          Personal Access Token
        </span>
        <span style={{ color: "#a4a4a3", fontSize: "13px" }}>ⓘ</span>
      </div>

      {/* Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full px-3 py-2 outline-none"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          borderRadius: 0,
          color: "#737470",
          fontSize: "11.5px",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Design URL label */}
      <div className="flex items-center gap-1 mt-1">
        <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
          Design URL
        </span>
        <span style={{ color: "#a3a3a2", fontSize: "13px" }}>ⓘ</span>
      </div>

      {/* URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full px-3 py-2 outline-none"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          borderRadius: 0,
          color: "#71726e",
          fontSize: "10.5px",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Button row */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <button
          type="button"
          className="flex-1 py-2 px-4"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            cursor: "default",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-4"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            cursor: "default",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-6" />

      {/* Recent Breakdowns heading */}
      <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
        Recent Breakdowns
      </span>
    </div>
  );
}

export default TestCard;
