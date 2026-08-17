export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1a",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        minHeight: "508px",
      }}
      className="flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <span
          style={{
            color: "#b5b5b5",
            fontWeight: 600,
            fontSize: "13.5px",
            lineHeight: "16.34px",
          }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-4 pb-3">
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 6 5 2 9 6" />
        </svg>
        <span
          style={{
            color: "#8b9291",
            fontWeight: 600,
            fontSize: "11.5px",
            lineHeight: "13.92px",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ minHeight: "32px" }} />

      {/* Add New Design section */}
      <div className="px-4">
        <div className="flex items-center gap-2 mb-4">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            stroke="#b2b2b1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 1 6 6 11 1" />
          </svg>
          <span
            style={{
              color: "#b2b2b1",
              fontWeight: 600,
              fontSize: "13.5px",
              lineHeight: "16.34px",
            }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span
              style={{
                color: "#a4a4a3",
                fontWeight: 600,
                fontSize: "11.5px",
                lineHeight: "13.92px",
              }}
            >
              Personal Access Token
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
            className="w-full px-3 py-2"
          >
            <span
              style={{
                color: "#737470",
                fontWeight: 600,
                fontSize: "11.5px",
                lineHeight: "13.92px",
              }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span
              style={{
                color: "#a3a3a2",
                fontWeight: 600,
                fontSize: "11.5px",
                lineHeight: "13.92px",
              }}
            >
              Design URL
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a3a3a2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
            className="w-full px-3 py-2"
          >
            <span
              style={{
                color: "#71726e",
                fontWeight: 600,
                fontSize: "10.5px",
                lineHeight: "12.71px",
              }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontWeight: 600,
              fontSize: "11.5px",
              lineHeight: "13.92px",
              fontFamily: "Inter, sans-serif",
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
              fontWeight: 600,
              fontSize: "11.5px",
              lineHeight: "13.92px",
              fontFamily: "Inter, sans-serif",
            }}
            className="flex-1 py-2 px-4"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "24px" }} />

      {/* Recent Breakdowns */}
      <div className="px-4 pb-6">
        <span
          style={{
            color: "#b0b0b0",
            fontWeight: 600,
            fontSize: "13.5px",
            lineHeight: "16.34px",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
