export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen p-0 font-sans"
      style={{ backgroundColor: "#1a1a17" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-4 pt-5 pb-2">
        <span
          className="text-[13.5px] font-semibold"
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
          <circle cx="8" cy="8" r="6.5" stroke="#b5b5b5" strokeWidth="1.2" />
          <circle cx="8" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <line x1="8" y1="1" x2="8" y2="3" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="8" y1="13" x2="8" y2="15" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="1" y1="8" x2="3" y2="8" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="13" y1="8" x2="15" y2="8" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="2.93" y1="2.93" x2="4.34" y2="4.34" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="11.66" y1="11.66" x2="13.07" y2="13.07" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="13.07" y1="2.93" x2="11.66" y2="4.34" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="4.34" y1="11.66" x2="2.93" y2="13.07" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-4 pb-2">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="text-[11.5px] font-semibold truncate"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section */}
      <div className="px-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="text-[13.5px] font-semibold"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            {/* Info circle */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#a4a4a3" strokeWidth="1" />
              <path d="M6.5 5.5V9.5" stroke="#a4a4a3" strokeWidth="1.1" strokeLinecap="round" />
              <circle cx="6.5" cy="3.8" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="rounded px-3 py-2"
            style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
          >
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#737470" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            {/* Info circle */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#a3a3a2" strokeWidth="1" />
              <path d="M6.5 5.5V9.5" stroke="#a3a3a2" strokeWidth="1.1" strokeLinecap="round" />
              <circle cx="6.5" cy="3.8" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="rounded px-3 py-2"
            style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
          >
            <span
              className="text-[10.5px] font-semibold"
              style={{ color: "#71726e" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 rounded py-2 text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded py-2 text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Recent Breakdowns */}
      <div className="px-4">
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
