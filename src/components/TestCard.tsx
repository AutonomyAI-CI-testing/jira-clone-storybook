export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] flex flex-col p-0"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
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
          <path
            d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M13.3 9.7a1.1 1.1 0 0 0 .22 1.22l.04.04a1.33 1.33 0 0 1-1.88 1.88l-.04-.04a1.1 1.1 0 0 0-1.22-.22 1.1 1.1 0 0 0-.67 1.01V14a1.33 1.33 0 0 1-2.66 0v-.06A1.1 1.1 0 0 0 6.37 13a1.1 1.1 0 0 0-1.22.22l-.04.04a1.33 1.33 0 0 1-1.88-1.88l.04-.04A1.1 1.1 0 0 0 3.49 10a1.1 1.1 0 0 0-1.01-.67H2a1.33 1.33 0 0 1 0-2.66h.06A1.1 1.1 0 0 0 3 5.63a1.1 1.1 0 0 0-.22-1.22l-.04-.04A1.33 1.33 0 0 1 4.62 2.49l.04.04A1.1 1.1 0 0 0 5.88 2.75a1.1 1.1 0 0 0 .67-1.01V1.67a1.33 1.33 0 0 1 2.66 0v.06a1.1 1.1 0 0 0 .67 1.01 1.1 1.1 0 0 0 1.22-.22l.04-.04a1.33 1.33 0 0 1 1.88 1.88l-.04.04A1.1 1.1 0 0 0 12.75 5.63a1.1 1.1 0 0 0 1.01.67h.07a1.33 1.33 0 0 1 0 2.66h-.06a1.1 1.1 0 0 0-1.01.67 1.1 1.1 0 0 0 .54.07Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-2">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
          <path d="M1 5L4.5 1.5L8 5" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 2L9 6" stroke="#b2b2b1" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Form */}
      <div className="px-5 flex flex-col gap-3">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <text
                x="7.5"
                y="11"
                textAnchor="middle"
                fill="#a4a4a3"
                fontSize="9"
                fontFamily="Inter"
                fontWeight="600"
              >
                i
              </text>
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded-sm px-3 py-2 font-semibold outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#737470",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <text
                x="7.5"
                y="11"
                textAnchor="middle"
                fill="#a3a3a2"
                fontSize="9"
                fontFamily="Inter"
                fontWeight="600"
              >
                i
              </text>
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded-sm px-3 py-2 font-semibold outline-none"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#71726e",
              fontSize: "10.5px",
              lineHeight: "12.71px",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          <button
            className="flex-1 rounded py-2.5 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded py-2.5 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns */}
      <div className="px-5">
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
