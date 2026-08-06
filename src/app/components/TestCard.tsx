export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="p-4 flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="3" stroke="#b5b5b5" strokeWidth="1.5" />
          <path
            d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
            stroke="#b5b5b5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Chevron-up + subtitle */}
      <div className="flex items-center gap-2">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4L4 1L1 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L6 6L1 1" stroke="#b2b2b1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <path d="M7.5 6.5v5" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.5" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          className="flex items-center px-2 py-2 rounded-sm"
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            Design URL
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <path d="M7.5 6.5v5" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.5" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          className="flex items-center px-2 py-2 rounded-sm"
          style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
        >
          <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 justify-center mt-1">
        <button
          className="flex items-center justify-center rounded"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          className="flex items-center justify-center rounded"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
