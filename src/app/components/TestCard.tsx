export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1a",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
      }}
      className="flex flex-col overflow-auto"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
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
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M7 4L4 1L1 4"
            stroke="#8b9291"
            strokeWidth="1.2"
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

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "48px" }} />

      {/* Add New Design section */}
      <div className="px-3 pb-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          {/* Chevron up — larger */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M11 7L6 2L1 7"
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

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1 mb-1 px-1">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" />
          </svg>
        </div>

        {/* Token input field */}
        <div
          className="w-full flex items-center px-3 mb-3"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "36px",
          }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#737470" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-1 mb-1 px-1">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" />
          </svg>
        </div>

        {/* URL input field */}
        <div
          className="w-full flex items-center px-3 mb-4"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
          }}
        >
          <span
            className="text-[10.5px] font-semibold leading-[12.71px]"
            style={{ color: "#71726e" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            className="flex items-center justify-center text-[11.5px] font-semibold leading-[13.92px]"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="flex items-center justify-center text-[11.5px] font-semibold leading-[13.92px]"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 py-4 mt-2">
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
