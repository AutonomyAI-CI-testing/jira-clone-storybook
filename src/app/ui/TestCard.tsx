export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <img src="/tc-gear.svg" alt="settings" style={{ width: 14, height: 16 }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-10">
        <img src="/tc-chevron.svg" alt="" style={{ width: 8, height: 5 }} />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 px-5 py-4">
        <img src="/tc-chevron.svg" alt="" style={{ width: 12, height: 8 }} />
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 px-5 pt-2 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#a4a4a3", fontSize: "11.5px" }}
        >
          Personal Access Token
        </span>
        <img src="/tc-info.svg" alt="info" style={{ width: 15, height: 15 }} />
      </div>

      {/* Token input */}
      <div className="px-5 pb-4">
        <div
          className="w-full px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
          }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 px-5 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#a3a3a2", fontSize: "11.5px" }}
        >
          Design URL
        </span>
        <img src="/tc-info2.svg" alt="info" style={{ width: 15, height: 15 }} />
      </div>

      {/* URL input */}
      <div className="px-5 pb-6">
        <div
          className="w-full px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#71726e",
            fontSize: "10.5px",
            fontWeight: 600,
          }}
        >
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 pb-10">
        <button
          className="flex-1 py-2 font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-2">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
