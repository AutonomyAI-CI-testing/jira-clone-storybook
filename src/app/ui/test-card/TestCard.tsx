export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] flex flex-col overflow-auto"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Top stripe */}
      <div className="w-full h-[9px]" style={{ backgroundColor: "#1a1a1a" }} />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
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
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
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
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Divider */}
      <div className="h-px mx-0" style={{ backgroundColor: "#3a3a38" }} />

      {/* Add New Design section */}
      <div className="px-5 pt-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            stroke="#b2b2b1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 7L6 1L11 7" />
          </svg>
          <span
            className="text-[13.5px] font-semibold leading-[16.34px]"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="1.5"
            >
              <circle cx="10" cy="10" r="9" />
              <line x1="10" y1="9" x2="10" y2="14" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="6.5" r="0.8" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full h-[36px] flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#737470" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            {/* Info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#a3a3a2"
              strokeWidth="1.5"
            >
              <circle cx="10" cy="10" r="9" />
              <line x1="10" y1="9" x2="10" y2="14" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="6.5" r="0.8" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full h-[37px] flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              className="text-[10.5px] font-semibold leading-[12.71px]"
              style={{ color: "#71726e" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className="flex-1 h-[37px] flex items-center justify-center rounded"
            style={{ backgroundColor: "#843a17" }}
          >
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#8c8078" }}
            >
              Awesome
            </span>
          </button>
          <button
            className="flex-1 h-[37px] flex items-center justify-center rounded"
            style={{ backgroundColor: "#843a17" }}
          >
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#8c8078" }}
            >
              Prepare
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px mb-4" style={{ backgroundColor: "#3a3a38" }} />

        {/* Recent Breakdowns */}
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>

        {/* Bottom padding */}
        <div className="pb-5" />
      </div>
    </div>
  );
}

export default TestCard;
