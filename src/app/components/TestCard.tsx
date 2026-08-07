export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] p-4 font-sans"
      style={{ minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
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
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M1 4L4 1.5L7 4"
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

      {/* Add New Design section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 7L6 2L11 7"
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
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px" }}
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
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full flex items-center px-3"
            style={{
              height: "36px",
              background: "#272822",
              border: "1px solid #a5adad",
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
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px" }}
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
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full flex items-center px-3"
            style={{
              height: "37px",
              background: "#272822",
              border: "2px solid #929291",
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
            className="flex items-center justify-center font-semibold"
            style={{
              width: "85px",
              height: "37px",
              background: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            className="flex items-center justify-center font-semibold"
            style={{
              width: "85px",
              height: "37px",
              background: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
