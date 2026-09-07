export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1b", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="min-h-[508px] p-5 flex flex-col gap-4"
    >
      {/* Section 1 — Header row */}
      <div className="flex items-center justify-between">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
          className="font-semibold leading-4"
        >
          UI magician Agent
        </span>
        {/* Gear / Settings icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Section 2 — Subtitle row */}
      <div className="flex items-center gap-2">
        {/* Chevron up */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px" }} className="font-semibold leading-4">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Section 3 — Add New Design */}
      <div className="flex items-center gap-2">
        {/* Chevron up */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 7L6 1L11 7" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px" }} className="font-semibold leading-4">
          Add New Design
        </span>
      </div>

      {/* Section 4 — Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px" }} className="font-semibold leading-4">
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
          className="w-full px-3 py-2"
        >
          <span style={{ color: "#737470", fontSize: "11.5px" }} className="font-semibold leading-4">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Section 5 — Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px" }} className="font-semibold leading-4">
            Design URL
          </span>
          {/* Info circle icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div
          style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
          className="w-full px-3 py-2"
        >
          <span style={{ color: "#71726e", fontSize: "10.5px" }} className="font-semibold leading-4">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Section 6 — Buttons */}
      <div className="flex gap-3 justify-center pt-1">
        <button
          style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px", width: "85px", height: "37px" }}
          className="font-semibold rounded"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px", width: "85px", height: "37px" }}
          className="font-semibold rounded"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Section 7 — Recent Breakdowns */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px" }} className="font-semibold leading-4">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
