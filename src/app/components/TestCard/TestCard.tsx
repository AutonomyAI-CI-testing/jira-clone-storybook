export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1b] overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
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
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M1 4L4 1L7 4"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 6L6 1L11 6"
              stroke="#b2b2b1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1.2"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" />
            <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" stroke="none" />
          </svg>
        </div>

        {/* Token input */}
        <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2 mb-3">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="1.2"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" />
            <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" stroke="none" />
          </svg>
        </div>

        {/* URL input */}
        <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 mb-4">
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            className="rounded px-5 py-2 text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px", minWidth: "87px", height: "37px" }}
          >
            Awesome
          </button>
          <button
            className="rounded px-5 py-2 text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px", minWidth: "87px", height: "37px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-4 pb-6">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
