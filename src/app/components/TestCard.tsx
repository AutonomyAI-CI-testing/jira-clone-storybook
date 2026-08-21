export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2b2b27", fontFamily: "Inter, sans-serif" }}
      className="w-[254px] p-5 flex flex-col gap-4"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <span style={{ color: "#b5b5b5", fontSize: "16px" }}>⚙</span>
      </div>

      {/* Subtext Row */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#8b9291", fontSize: "11px" }}>∧</span>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-2">
          <span style={{ color: "#b2b2b1", fontSize: "11px" }}>∧</span>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            <span style={{ color: "#a4a4a3", fontSize: "12px" }}>ⓘ</span>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              borderRadius: "2px",
            }}
            className="px-3 py-2"
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
              Design URL
            </span>
            <span style={{ color: "#a3a3a2", fontSize: "12px" }}>ⓘ</span>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              borderRadius: "2px",
            }}
            className="px-3 py-2"
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
            className="flex-1 py-2 px-4"
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
            className="flex-1 py-2 px-4"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
