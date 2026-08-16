export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] overflow-auto"
      style={{ backgroundColor: "#222220", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        {/* Gear / Settings icon */}
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
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1,4 4,1 7,4" />
        </svg>
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "40px" }} />

      {/* Add New Design header */}
      <div className="flex items-center gap-2 px-5 mb-4">
        {/* Chevron up */}
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
          <polyline points="1,7 6,1 11,7" />
        </svg>
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeWidth="1.2" />
            <circle cx="7.5" cy="4.8" r="0.7" fill="#a4a4a3" stroke="none" />
          </svg>
        </div>
        <div
          className="w-full h-[37px] px-3 flex items-center"
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
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          {/* Info circle icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="1"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeWidth="1.2" />
            <circle cx="7.5" cy="4.8" r="0.7" fill="#a3a3a2" stroke="none" />
          </svg>
        </div>
        <div
          className="w-full h-[37px] px-3 flex items-center"
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
      <div className="flex gap-3 justify-center px-5 mb-6">
        <button
          className="h-[37px] w-[85px] flex items-center justify-center"
          style={{ backgroundColor: "#843a17", borderRadius: "4px" }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#8c8078" }}
          >
            Awesome
          </span>
        </button>
        <button
          className="h-[37px] w-[85px] flex items-center justify-center"
          style={{ backgroundColor: "#843a17", borderRadius: "4px" }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#8c8078" }}
          >
            Prepare
          </span>
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
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
