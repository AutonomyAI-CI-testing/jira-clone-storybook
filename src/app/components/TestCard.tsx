export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen px-5 py-5"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
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
          <circle cx="8" cy="8" r="2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M2.93 2.93l1.06 1.06M12.01 12.01l1.06 1.06M13.07 2.93l-1.06 1.06M3.99 12.01l-1.06 1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M6.5 1.7A6 6 0 0 1 8 1.5a6 6 0 0 1 1.5.2l-.3 1.4A4.5 4.5 0 0 0 8 3a4.5 4.5 0 0 0-1.2.1l-.3-1.4Z"
            fill="#b5b5b5"
            opacity="0"
          />
        </svg>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-8">
        {/* Up-caret */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M1 5L5 1L9 5"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="mb-8">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px" }}
            >
              Personal Access Token
            </span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.75" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="6.5" y1="5.5" x2="6.5" y2="9" stroke="#a4a4a3" strokeWidth="1.1" strokeLinecap="round" />
              <circle cx="6.5" cy="4" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "37px",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#737470", fontSize: "11.5px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px" }}
            >
              Design URL
            </span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.75" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="6.5" y1="5.5" x2="6.5" y2="9" stroke="#a3a3a2" strokeWidth="1.1" strokeLinecap="round" />
              <circle cx="6.5" cy="4" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#71726e", fontSize: "10.5px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 flex items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              height: "37px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 flex items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              height: "37px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Recent Breakdowns */}
      <div>
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
