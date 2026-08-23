export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1c1c1a] min-h-screen overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-[#b5b5b5] font-semibold"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.4" />
          <path
            d="M7 1.5V2.5M7 13.5V14.5M1.5 8H2.5M11.5 8H12.5M3.2 3.2L3.9 3.9M10.1 10.1L10.8 10.8M3.2 12.8L3.9 12.1M10.1 5.9L10.8 5.2"
            stroke="#b5b5b5"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row with up-chevron */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5L4 2L7 5"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="text-[#8b9291] font-semibold"
          style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading with down-chevron */}
        <div className="flex items-center gap-3 mb-5">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-[#b2b2b1] font-semibold"
            style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[#a4a4a3] font-semibold"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            {/* Circle-i info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.8" r="0.7" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full bg-[#272822] flex items-center px-3"
            style={{
              height: "37px",
              border: "1px solid #a5adad",
            }}
          >
            <span
              className="text-[#737470] font-semibold"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[#a3a3a2] font-semibold"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            {/* Circle-i info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.8" r="0.7" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full bg-[#272822] flex items-center px-3"
            style={{
              height: "37px",
              border: "2px solid #929291",
            }}
          >
            <span
              className="text-[#71726e] font-semibold"
              style={{ fontSize: "10.5px", lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            className="flex-1 flex items-center justify-center bg-[#843a17] rounded"
            style={{ height: "37px", borderRadius: "4px" }}
          >
            <span
              className="text-[#8c8078] font-semibold"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Awesome
            </span>
          </button>
          <button
            className="flex-1 flex items-center justify-center bg-[#843a17] rounded"
            style={{ height: "37px", borderRadius: "4px" }}
          >
            <span
              className="text-[#8c8078] font-semibold"
              style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Prepare
            </span>
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns */}
      <div className="px-5 pt-2">
        <span
          className="text-[#b0b0b0] font-semibold"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
