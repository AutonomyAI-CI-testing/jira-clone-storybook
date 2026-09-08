export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-0 font-sans"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        padding: "20px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <span style={{ color: "#b5b5b5", fontSize: "14px" }}>⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <span style={{ color: "#8b9291", fontSize: "11px" }}>˄</span>
        <span style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <span style={{ color: "#b2b2b1", fontSize: "11px" }}>˄</span>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
          Personal Access Token
        </span>
        <span style={{ color: "#a4a4a3", fontSize: "11px" }}>ℹ</span>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full mb-3 px-3 py-2 outline-none"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          fontSize: "11.5px",
          color: "#737470",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: "#a3a3a2", fontSize: "11.5px" }}>Design URL</span>
        <span style={{ color: "#a3a3a2", fontSize: "11px" }}>ℹ</span>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full mb-5 px-3 py-2 outline-none"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          fontSize: "11.5px",
          color: "#71726e",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Button row */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2 rounded"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            borderRadius: "4px",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            borderRadius: "4px",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
