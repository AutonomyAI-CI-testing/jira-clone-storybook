export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1c1d17",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Scoped placeholder styles */}
      <style>{`
        #testElem .tc-input::placeholder {
          color: #737470;
          font-size: 11.5px;
          font-weight: 600;
          opacity: 1;
        }
        #testElem .tc-input-url::placeholder {
          color: #71726e;
          font-size: 10.5px;
          font-weight: 600;
          opacity: 1;
        }
      `}</style>

      {/* Top accent bar */}
      <img
        src="/test-card-assets/top-bar.png"
        alt=""
        style={{ width: "254px", height: "9px", objectFit: "cover", display: "block" }}
      />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        <img
          src="/test-card-assets/gear.png"
          alt="settings"
          style={{ width: "14px", height: "16px" }}
        />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <img
          src="/test-card-assets/chevron-small.png"
          alt=""
          style={{ width: "8px", height: "5px" }}
        />
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Divider spacer */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px 20px" }}>

        {/* Add New Design section header */}
        <div className="flex items-center gap-2 mb-4 mt-2">
          <img
            src="/test-card-assets/chevron-large.png"
            alt=""
            style={{ width: "12px", height: "8px" }}
          />
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex items-center gap-2">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Personal Access Token
            </span>
            <img
              src="/test-card-assets/info5.png"
              alt="info"
              style={{ width: "15px", height: "15px" }}
            />
          </div>
          <input
            className="tc-input"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{
              width: "100%",
              height: "36px",
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              borderRadius: "2px",
              paddingLeft: "12px",
              paddingRight: "12px",
              color: "#737470",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-2">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
              Design URL
            </span>
            <img
              src="/test-card-assets/info2.png"
              alt="info"
              style={{ width: "15px", height: "15px" }}
            />
          </div>
          <input
            className="tc-input-url"
            readOnly
            placeholder="https://www.figma.com/file/:"
            style={{
              width: "100%",
              height: "37px",
              backgroundColor: "#272822",
              border: "2px solid #929291",
              borderRadius: "2px",
              paddingLeft: "12px",
              paddingRight: "12px",
              color: "#71726e",
              fontSize: "10.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            style={{
              width: "85px",
              height: "37px",
              backgroundColor: "#843a17",
              borderRadius: "4px",
              border: "none",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              cursor: "pointer",
              lineHeight: "13.92px",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              width: "85px",
              height: "37px",
              backgroundColor: "#843a17",
              borderRadius: "4px",
              border: "none",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              cursor: "pointer",
              lineHeight: "13.92px",
            }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
