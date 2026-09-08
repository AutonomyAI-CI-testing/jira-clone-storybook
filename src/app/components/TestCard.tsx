export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        width: "254px",
        minHeight: "508px",
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <span style={{ color: "#b5b5b5", fontSize: "16px" }}>⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 px-5 pt-2">
        <span style={{ color: "#8b9291", fontSize: "10px" }}>˄</span>
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "36px" }} />

      {/* Add New Design section */}
      <div className="px-5 pb-2">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <span style={{ color: "#b2b2b1", fontSize: "11px" }}>˄</span>
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Personal Access Token
          </span>
          <span style={{ color: "#a4a4a3", fontSize: "12px" }}>ⓘ</span>
        </div>

        {/* Token input */}
        <div
          className="w-full mb-4 px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "2px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-1 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Design URL
          </span>
          <span style={{ color: "#a3a3a2", fontSize: "12px" }}>ⓘ</span>
        </div>

        {/* URL input */}
        <div
          className="w-full mb-5 px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "2px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 font-semibold cursor-pointer"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 font-semibold cursor-pointer"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ minHeight: "28px" }} />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
