export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1a",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        minHeight: "508px",
        overflow: "auto",
      }}
    >
      {/* Header row */}
      <div
        style={{ padding: "20px 20px 8px 20px" }}
        className="flex items-center justify-between"
      >
        <span
          style={{
            color: "#b5b5b5",
            fontSize: "13.5px",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          UI magician Agent
        </span>
        {/* Settings gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M7 0.5V2M7 14V15.5M0.5 8H2M12 8H13.5M1.98 2.48L3.04 3.54M10.96 12.46L12.02 13.52M1.98 13.52L3.04 12.46M10.96 3.54L12.02 2.48"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div
        style={{ padding: "0 20px 8px 20px" }}
        className="flex items-center gap-2"
      >
        {/* Small up-chevron */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M7 4L4 1L1 4"
            stroke="#8b9291"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            color: "#8b9291",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "32px" }} />

      {/* Add New Design section */}
      <div style={{ padding: "0 20px" }}>
        {/* Section heading */}
        <div className="flex items-center gap-2" style={{ marginBottom: "16px" }}>
          {/* Larger up-chevron */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M11 7L6 2L1 7"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              color: "#b2b2b1",
              fontSize: "13.5px",
              fontWeight: 600,
              lineHeight: "16.34px",
            }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div style={{ marginBottom: "12px" }}>
          <div className="flex items-center gap-1.5" style={{ marginBottom: "6px" }}>
            <span
              style={{
                color: "#a4a4a3",
                fontSize: "11.5px",
                fontWeight: 600,
                lineHeight: "13.92px",
              }}
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <path
                d="M7.5 6.5V10.5"
                stroke="#a4a4a3"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <circle cx="7.5" cy="4.5" r="0.75" fill="#a4a4a3" />
            </svg>
          </div>
          {/* Token input box */}
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "36px",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
            }}
          >
            <span
              style={{
                color: "#737470",
                fontSize: "11.5px",
                fontWeight: 600,
                lineHeight: "13.92px",
              }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div style={{ marginBottom: "16px" }}>
          <div className="flex items-center gap-1.5" style={{ marginBottom: "6px" }}>
            <span
              style={{
                color: "#a3a3a2",
                fontSize: "11.5px",
                fontWeight: 600,
                lineHeight: "13.92px",
              }}
            >
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <path
                d="M7.5 6.5V10.5"
                stroke="#a3a3a2"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <circle cx="7.5" cy="4.5" r="0.75" fill="#a3a3a2" />
            </svg>
          </div>
          {/* URL input box */}
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
            }}
          >
            <span
              style={{
                color: "#71726e",
                fontSize: "10.5px",
                fontWeight: 600,
                lineHeight: "12.71px",
              }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2" style={{ marginBottom: "32px" }}>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              border: "none",
              cursor: "pointer",
              height: "37px",
              flex: 1,
            }}
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
              lineHeight: "13.92px",
              border: "none",
              cursor: "pointer",
              height: "37px",
              flex: 1,
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ padding: "0 20px" }}>
        <span
          style={{
            color: "#b0b0b0",
            fontSize: "13.5px",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
