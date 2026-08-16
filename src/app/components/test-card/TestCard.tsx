export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1b", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="p-0"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <img src="/tc-settings.png" alt="settings" style={{ width: "14px", height: "16px" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <img src="/tc-chevron.png" alt="chevron" style={{ width: "8px", height: "5px" }} />
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5 pb-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <img src="/tc-chevron.png" alt="chevron" style={{ width: "12px", height: "8px" }} />
          <span
            style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <img src="/tc-info.png" alt="info" style={{ width: "15px", height: "15px" }} />
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
            className="px-3 py-2.5"
          >
            <span
              style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <img src="/tc-info.png" alt="info" style={{ width: "15px", height: "15px" }} />
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
            className="px-3 py-2.5"
          >
            <span
              style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              borderRadius: "4px",
              height: "37px",
              width: "85px",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              borderRadius: "4px",
              height: "37px",
              width: "85px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5 pt-2">
        <span
          style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
