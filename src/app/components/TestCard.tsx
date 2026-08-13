export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ fontFamily: "Inter, sans-serif", width: "254px", backgroundColor: "#1a1a17" }}
      className="text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <svg width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 5 5 1 9 5" />
        </svg>
        <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#8b9291" }} className="truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 7 6 1 11 7" />
        </svg>
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full outline-none"
          style={{
            height: "36px",
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "2px",
            paddingLeft: "12px",
            paddingRight: "12px",
            fontSize: "11.5px",
            fontWeight: 600,
            color: "#737470",
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="px-5 mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a3a3a2" }}>
            Design URL
          </span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full outline-none"
          style={{
            height: "37px",
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "2px",
            paddingLeft: "12px",
            paddingRight: "12px",
            fontSize: "10.5px",
            fontWeight: 600,
            color: "#71726e",
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="px-5 flex gap-3 mb-10">
        <button
          style={{
            flex: 1,
            height: "37px",
            backgroundColor: "#843a17",
            borderRadius: "4px",
            fontSize: "11.5px",
            fontWeight: 600,
            color: "#8c8078",
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            height: "37px",
            backgroundColor: "#843a17",
            borderRadius: "4px",
            fontSize: "11.5px",
            fontWeight: 600,
            color: "#8c8078",
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
