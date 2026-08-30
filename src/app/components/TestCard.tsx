export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        minHeight: "508px",
        padding: "0",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.4" />
          <path
            d="M8 1.5V2.5M8 13.5V14.5M1.5 8H2.5M13.5 8H14.5M3.4 3.4L4.1 4.1M11.9 11.9L12.6 12.6M12.6 3.4L11.9 4.1M4.1 11.9L3.4 12.6"
            stroke="#b5b5b5"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L5 1L9 5" stroke="#8b9291" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L6 1L11 7" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <path d="M7.5 6.5v4" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "37px",
              borderRadius: "2px",
            }}
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <path d="M7.5 6.5v4" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
              borderRadius: "2px",
            }}
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              height: "37px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              height: "37px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-2">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
