export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] flex flex-col"
      style={{ background: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-[13.5px] font-semibold leading-tight"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="8" r="2.4" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M7 1.5V2.8M7 13.2V14.5M1.5 8H2.8M11.2 8H12.5M3.05 3.05L3.96 3.96M10.04 10.04L10.95 10.95M3.05 12.95L3.96 12.04M10.04 5.96L10.95 5.05"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-2">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M7 4L4 1.5L1 4"
            stroke="#8b9291"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="text-[11.5px] font-semibold leading-tight"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[60px]" />

      {/* Add New Design */}
      <div className="px-3 pb-2">
        <div className="flex items-center gap-2 mb-4">
          {/* Chevron up larger */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M11 6.5L6 2L1 6.5"
              stroke="#b2b2b1"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-[13.5px] font-semibold leading-tight"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <path
                d="M7.5 6.5V10.5"
                stroke="#a4a4a3"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <circle cx="7.5" cy="4.8" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 text-[11.5px] font-semibold"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
              color: "#737470",
            }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <path
                d="M7.5 6.5V10.5"
                stroke="#a3a3a2"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <circle cx="7.5" cy="4.8" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 text-[10.5px] font-semibold"
            style={{
              background: "#272822",
              border: "2px solid #929291",
              color: "#71726e",
            }}
          >
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className="flex-1 py-2.5 text-[11.5px] font-semibold text-center"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 text-[11.5px] font-semibold text-center"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
