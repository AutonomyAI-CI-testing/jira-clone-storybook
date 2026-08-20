export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] bg-[#272822] p-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
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
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <svg width="8" height="5" viewBox="0 0 10 6" fill="none">
          <path
            d="M1 5L5 1L9 5"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 7L6 1L11 7"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-[13.5px] font-semibold leading-[16.34px]"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a4a4a3" }}
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
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="px-3 py-2 rounded"
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
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a3a3a2" }}
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
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="px-3 py-2 rounded"
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
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-2 rounded text-[11.5px] font-semibold leading-[13.92px]"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded text-[11.5px] font-semibold leading-[13.92px]"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
