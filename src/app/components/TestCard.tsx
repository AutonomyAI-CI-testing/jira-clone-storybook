export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col font-sans"
      style={{
        backgroundColor: "#2b2b27",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="2.4" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1.5V3M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L4.5 1.5L8 5" stroke="#8b9291" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ flex: "1 0 48px" }} />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.5L6 1.5L11 6.5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Personal Access Token
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
            <path d="M7 6v4" stroke="#a4a4a3" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="7" cy="4.5" r="0.6" fill="#a4a4a3" />
          </svg>
        </div>

        {/* PAT input */}
        <div
          className="w-full px-3 py-2.5 mb-3 rounded-sm"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Design URL
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
            <path d="M7 6v4" stroke="#a3a3a2" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="7" cy="4.5" r="0.6" fill="#a3a3a2" />
          </svg>
        </div>

        {/* URL input */}
        <div
          className="w-full px-3 py-2.5 mb-4 rounded-sm"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            className="flex-1 py-2.5 font-semibold text-center"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              borderRadius: "4px",
              border: "none",
              cursor: "default",
            }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 py-2.5 font-semibold text-center"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              borderRadius: "4px",
              border: "none",
              cursor: "default",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
