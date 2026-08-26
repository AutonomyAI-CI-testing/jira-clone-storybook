export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        display: "flex",
        flexDirection: "column",
        padding: "0 0 20px 0",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        {/* Up caret */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M4 0L8 5H0L4 0Z" fill="#8b9291" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1, minHeight: "32px" }} />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          {/* Down caret */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M0 0L6 8L12 0H0Z" fill="#b2b2b1" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
            Personal Access Token
          </span>
          {/* Info icon */}
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

        {/* Token input */}
        <div
          className="w-full mb-3 px-3 flex items-center"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "36px",
          }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
            Design URL
          </span>
          {/* Info icon */}
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

        {/* URL input */}
        <div
          className="w-full mb-5 px-3 flex items-center"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
          }}
        >
          <span style={{ color: "#71726e", fontSize: "10.5px" }}>
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons row */}
        <div className="flex gap-3 mb-8">
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              border: "none",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              cursor: "default",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              border: "none",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              cursor: "default",
            }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <span style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
