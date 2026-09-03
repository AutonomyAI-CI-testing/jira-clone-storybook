export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 bg-[#272822] font-sans text-white flex flex-col"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-4 pt-5 pb-2">
        <span
          className="font-semibold text-[#b5b5b5]"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="14"
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
      <div className="flex items-center gap-2 px-4 pb-2">
        {/* Chevron up */}
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5L4 2L7 5" />
        </svg>
        <span
          className="font-semibold text-[#8b9291] truncate"
          style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-16" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 px-4 mb-4">
        {/* Chevron down */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 1L6 6L11 1" />
        </svg>
        <span
          className="font-semibold text-[#b2b2b1]"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-4 mb-3">
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className="font-semibold text-[#a4a4a3]"
            style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
          </svg>
        </div>
        <div
          className="w-full bg-[#272822] px-3 py-2"
          style={{ border: "1px solid #a5adad" }}
        >
          <span
            className="font-semibold text-[#737470]"
            style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-4 mb-5">
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className="font-semibold text-[#a3a3a2]"
            style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Design URL
          </span>
          {/* Info circle */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
          </svg>
        </div>
        <div
          className="w-full bg-[#272822] px-3 py-2"
          style={{ border: "2px solid #929291" }}
        >
          <span
            className="font-semibold text-[#71726e]"
            style={{ fontSize: "10.5px", lineHeight: "12.71px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-4 flex gap-3 mb-10">
        <button
          className="flex-1 py-2 font-semibold text-[#8c8078]"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            fontSize: "11.5px",
            lineHeight: "13.92px",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 font-semibold text-[#8c8078]"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            fontSize: "11.5px",
            lineHeight: "13.92px",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-4">
        <span
          className="font-semibold text-[#b0b0b0]"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
