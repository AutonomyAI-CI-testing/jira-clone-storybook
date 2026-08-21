export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
      className="w-[254px] min-h-[508px] flex flex-col px-5 py-5 gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          style={{ color: "#b5b5b5" }}
          className="text-[13.5px] font-semibold leading-[16px]"
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
          <circle cx="8" cy="8" r="2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M2.93 2.93l1.06 1.06M12.01 12.01l1.06 1.06M2.93 13.07l1.06-1.06M12.01 3.99l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6L5 2L9 6"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span
          style={{ color: "#8b9291" }}
          className="text-[11.5px] font-semibold leading-[14px]"
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L6 2L11 7"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{ color: "#b2b2b1" }}
            className="text-[13.5px] font-semibold leading-[16px]"
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span
              style={{ color: "#a4a4a3" }}
              className="text-[11.5px] font-semibold leading-[14px]"
            >
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="7" r="5.5" stroke="#a4a4a3" strokeWidth="1.2" />
              <path
                d="M7 6.5V10"
                stroke="#a4a4a3"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="7" cy="4.5" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
            className="rounded px-3 py-2.5"
          >
            <span
              style={{ color: "#737470" }}
              className="text-[11.5px] font-semibold leading-[14px]"
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span
              style={{ color: "#a3a3a2" }}
              className="text-[11.5px] font-semibold leading-[14px]"
            >
              Design URL
            </span>
            {/* Info icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="7" r="5.5" stroke="#a3a3a2" strokeWidth="1.2" />
              <path
                d="M7 6.5V10"
                stroke="#a3a3a2"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="7" cy="4.5" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
            className="rounded px-3 py-2.5"
          >
            <span
              style={{ color: "#71726e" }}
              className="text-[10.5px] font-semibold leading-[13px]"
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mt-1">
          <button
            style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078" }}
            className="px-6 py-2.5 text-[11.5px] font-semibold"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078" }}
            className="px-6 py-2.5 text-[11.5px] font-semibold"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <div>
        <span
          style={{ color: "#b0b0b0" }}
          className="text-[13.5px] font-semibold leading-[16px]"
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
