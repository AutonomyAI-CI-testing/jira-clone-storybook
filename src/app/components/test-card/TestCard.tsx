export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] flex flex-col"
      style={{ backgroundColor: "#2a2825", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold text-[13.5px] leading-[16px]"
          style={{ color: "#b5b5b5" }}
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
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.1 3.1l1.06 1.06M11.84 11.84l1.06 1.06M3.1 12.9l1.06-1.06M11.84 4.16l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M1 5L5 1l4 4"
            stroke="#8b9291"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-semibold text-[11.5px] leading-[14px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col px-5 gap-4">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-1">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1l5 5 5-5"
              stroke="#b2b2b1"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-semibold text-[13.5px] leading-[16px]"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className="font-semibold text-[11.5px] leading-[14px]"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <path d="M7.5 7v4" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.5" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="flex items-center px-3 h-[37px] rounded"
            style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
          >
            <span
              className="font-semibold text-[11.5px] leading-[14px] truncate"
              style={{ color: "#737470" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className="font-semibold text-[11.5px] leading-[14px]"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <path d="M7.5 7v4" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.5" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="flex items-center px-3 h-[37px] rounded"
            style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
          >
            <span
              className="font-semibold text-[10.5px] leading-[13px] truncate"
              style={{ color: "#71726e" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mt-1">
          <button
            className="flex items-center justify-center h-[37px] w-[85px] font-semibold text-[11.5px] leading-[14px]"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex items-center justify-center h-[37px] w-[85px] font-semibold text-[11.5px] leading-[14px]"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 mt-10">
        <span
          className="font-semibold text-[13.5px] leading-[16px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
