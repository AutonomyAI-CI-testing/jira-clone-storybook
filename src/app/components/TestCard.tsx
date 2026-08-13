export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1a] overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-[#b5b5b5] font-semibold"
          style={{ fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="16"
          height="16"
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
      <div className="flex items-center gap-2 px-5 pb-4">
        {/* Chevron up */}
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5.5L5 1.5L9 5.5" />
        </svg>
        <span
          className="text-[#8b9291] font-semibold"
          style={{ fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          {/* Chevron up (section header) */}
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
            <path d="M1 6L6 1L11 6" />
          </svg>
          <span
            className="text-[#b2b2b1] font-semibold"
            style={{ fontSize: "13.5px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[#a4a4a3] font-semibold"
            style={{ fontSize: "11.5px" }}
          >
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <circle cx="12" cy="8" r="0.5" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          className="w-full bg-[#272822] px-3 py-2 mb-3"
          style={{ border: "1px solid #a5adad" }}
        >
          <span
            className="text-[#737470] font-semibold"
            style={{ fontSize: "11.5px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[#a3a3a2] font-semibold"
            style={{ fontSize: "11.5px" }}
          >
            Design URL
          </span>
          {/* Info circle */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <circle cx="12" cy="8" r="0.5" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          className="w-full bg-[#272822] px-3 py-2 mb-4"
          style={{ border: "2px solid #929291" }}
        >
          <span
            className="text-[#71726e] font-semibold"
            style={{ fontSize: "10.5px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            className="bg-[#843a17] text-[#8c8078] font-semibold rounded"
            style={{ fontSize: "11.5px", width: "85px", height: "37px", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="bg-[#843a17] text-[#8c8078] font-semibold rounded"
            style={{ fontSize: "11.5px", width: "85px", height: "37px", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span
          className="text-[#b0b0b0] font-semibold"
          style={{ fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
