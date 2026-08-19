export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] w-[254px] min-h-[508px] p-5 flex flex-col gap-0 font-semibold"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] text-[13.5px]">UI magician Agent</span>
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
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <svg
          width="8"
          height="5"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          width="12"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span className="text-[#b2b2b1] text-[13.5px]">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[#a4a4a3] text-[11.5px]">
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
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Personal Access Token input */}
      <div
        className="w-full h-[37px] bg-[#272822] border border-[#a5adad] flex items-center px-3 mb-4"
        style={{ borderWidth: "1px", borderColor: "#a5adad" }}
      >
        <span className="text-[#737470] text-[11.5px]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[#a3a3a2] text-[11.5px]">Design URL</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Design URL input */}
      <div
        className="w-full h-[37px] bg-[#272822] flex items-center px-3 mb-5"
        style={{ border: "2px solid #929291" }}
      >
        <span className="text-[#71726e] text-[10.5px]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 h-[37px] bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold flex items-center justify-center"
          style={{ borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 h-[37px] bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold flex items-center justify-center"
          style={{ borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
