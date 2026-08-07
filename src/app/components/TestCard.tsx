export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        background: "#1e1e1a",
        width: "254px",
        padding: "20px",
        fontFamily: "Inter, sans-serif",
      }}
      className="flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-semibold"
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
          <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        {/* Chevron-up icon */}
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5L4.5 1.5L8 5"
            stroke="#8b9291"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        {/* Section header */}
        <div className="flex items-center gap-2">
          {/* Chevron-down icon */}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#b2b2b1"
              strokeWidth="1.3"
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
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px" }}
            >
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
              <path
                d="M6.5 5.5v3.5"
                stroke="#a4a4a3"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="6.5" cy="4" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
              fontSize: "11.5px",
              fontWeight: 600,
              color: "#737470",
            }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px" }}
            >
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
              <path
                d="M6.5 5.5v3.5"
                stroke="#a3a3a2"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="6.5" cy="4" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              background: "#272822",
              border: "2px solid #929291",
              fontSize: "10.5px",
              fontWeight: 600,
              color: "#71726e",
            }}
          >
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-2 font-semibold rounded"
            style={{
              background: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 font-semibold rounded"
            style={{
              background: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
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
