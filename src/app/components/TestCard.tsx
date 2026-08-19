export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a18] flex flex-col py-4 overflow-auto"
      style={{ fontFamily: "Inter, sans-serif", minHeight: 508 }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 mb-2">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 mb-2">
        {/* Chevron up */}
        <svg
          width="8"
          height="5"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 5 5 1 9 5" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
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
            <polyline points="1 1 6 7 11 1" />
          </svg>
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
              Personal Access Token
            </span>
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
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full h-[37px] px-3 flex items-center rounded"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span className="text-[#737470] text-[11.5px] font-semibold leading-[13.92px] truncate">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
              Design URL
            </span>
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
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full h-[37px] px-3 flex items-center rounded"
            style={{
              background: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span className="text-[#71726e] text-[10.5px] font-semibold leading-[12.71px] truncate">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className="flex items-center justify-center rounded"
            style={{ background: "#843a17", width: 85, height: 37, borderRadius: 4 }}
          >
            <span className="text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px]">
              Awesome
            </span>
          </button>
          <button
            className="flex items-center justify-center rounded"
            style={{ background: "#843a17", width: 85, height: 37, borderRadius: 4 }}
          >
            <span className="text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px]">
              Prepare
            </span>
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-2">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
