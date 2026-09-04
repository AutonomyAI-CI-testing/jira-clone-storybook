export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        width: "254px",
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        minHeight: "508px",
        padding: 0,
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 20px 10px 20px",
        }}
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
        {/* Gear / Settings icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "0 20px 32px 20px",
        }}
      >
        {/* Chevron up */}
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 5 4.5 1.5 8 5" />
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

      {/* Add New Design section */}
      <div style={{ padding: "0 16px 24px 16px" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          {/* Chevron down */}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 1 6 6.5 11 1" />
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "6px",
            }}
          >
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="1"
            >
              <circle cx="7.5" cy="7.5" r="6.5" />
              <line x1="7.5" y1="6" x2="7.5" y2="10.5" strokeWidth="1.2" />
              <circle cx="7.5" cy="4.2" r="0.7" fill="#a4a4a3" stroke="none" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              padding: "10px 12px",
              width: "100%",
              boxSizing: "border-box" as const,
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
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "6px",
            }}
          >
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="#a3a3a2"
              strokeWidth="1"
            >
              <circle cx="7.5" cy="7.5" r="6.5" />
              <line x1="7.5" y1="6" x2="7.5" y2="10.5" strokeWidth="1.2" />
              <circle cx="7.5" cy="4.2" r="0.7" fill="#a3a3a2" stroke="none" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              padding: "10px 12px",
              width: "100%",
              boxSizing: "border-box" as const,
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
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              border: "none",
              borderRadius: "4px",
              padding: "10px 0",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
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
              lineHeight: "13.92px",
              border: "none",
              borderRadius: "4px",
              padding: "10px 0",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ padding: "24px 20px 20px 20px" }}>
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
