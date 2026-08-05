export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ width: 254, backgroundColor: "#1a1a18", fontFamily: "Inter, sans-serif" }}
      className="flex flex-col px-5 py-5 gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ color: "#b5b5b5", fontSize: 13.5, fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#b5b5b5" }}
        >
          <path
            d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
          />
          <path
            d="M13.3 6.6 12.1 6a4.7 4.7 0 0 0-.2-.5l.5-1.3a.4.4 0 0 0-.1-.4l-1-1a.4.4 0 0 0-.4-.1L9.6 3.1A4.7 4.7 0 0 0 9.1 3l-.6-1.2a.4.4 0 0 0-.4-.2H6.9a.4.4 0 0 0-.4.2L5.9 3a4.7 4.7 0 0 0-.5.2L4.1 2.7a.4.4 0 0 0-.4.1l-1 1a.4.4 0 0 0-.1.4l.5 1.3a4.7 4.7 0 0 0-.2.5L1.7 6.6a.4.4 0 0 0-.2.4v1.4a.4.4 0 0 0 .2.4l1.2.6a4.7 4.7 0 0 0 .2.5L2.6 11a.4.4 0 0 0 .1.4l1 1a.4.4 0 0 0 .4.1l1.3-.5a4.7 4.7 0 0 0 .5.2l.6 1.2a.4.4 0 0 0 .4.2h1.4a.4.4 0 0 0 .4-.2l.6-1.2a4.7 4.7 0 0 0 .5-.2l1.3.5a.4.4 0 0 0 .4-.1l1-1a.4.4 0 0 0 .1-.4l-.5-1.3a4.7 4.7 0 0 0 .2-.5l1.2-.6a.4.4 0 0 0 .2-.4V7a.4.4 0 0 0-.2-.4Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <span style={{ color: "#8b9291", fontSize: 11.5, fontWeight: 600 }}>^</span>
        <span style={{ color: "#8b9291", fontSize: 11.5, fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 mt-4">
        <span style={{ color: "#b2b2b1", fontSize: 13.5, fontWeight: 600 }}>^</span>
        <span style={{ color: "#b2b2b1", fontSize: 13.5, fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span style={{ color: "#a4a4a3", fontSize: 11.5, fontWeight: 600 }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#a4a4a3" strokeWidth="1" />
            <text x="6.5" y="9.5" textAnchor="middle" fill="#a4a4a3" fontSize="7" fontWeight="700">
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: 11.5,
            fontWeight: 600,
            padding: "8px 10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span style={{ color: "#a3a3a2", fontSize: 11.5, fontWeight: 600 }}>
            Design URL
          </span>
          {/* Info icon */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#a3a3a2" strokeWidth="1" />
            <text x="6.5" y="9.5" textAnchor="middle" fill="#a3a3a2" fontSize="7" fontWeight="700">
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: 10.5,
            fontWeight: 600,
            padding: "8px 10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 justify-center mt-1">
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            borderRadius: 4,
            color: "#8c8078",
            fontSize: 11.5,
            fontWeight: 600,
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            borderRadius: 4,
            color: "#8c8078",
            fontSize: 11.5,
            fontWeight: 600,
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div className="mt-4">
        <span style={{ color: "#b0b0b0", fontSize: 13.5, fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
