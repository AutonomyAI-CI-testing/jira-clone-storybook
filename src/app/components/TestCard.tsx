export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col overflow-hidden"
      style={{
        width: "254px",
        height: "508px",
        background: "#1e1e1a",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-[13.5px] font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-3">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 10 7" fill="none">
          <path d="M1 6L5 1L9 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Divider */}
      <div className="w-full" style={{ height: "1px", background: "#2e2e2a" }} />

      {/* Add New Design section */}
      <div className="px-5 pt-5 pb-3 flex flex-col gap-3">
        {/* Section header */}
        <div className="flex items-center gap-2">
          {/* Chevron up */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 7L6 1L11 7" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13.5px] font-semibold" style={{ color: "#b2b2b1" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold" style={{ color: "#a4a4a3" }}>
              Personal Access Token
            </span>
            {/* Info circle */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{ background: "#272822", border: "1px solid #a5adad" }}
          >
            <span className="text-[11.5px] font-semibold" style={{ color: "#737470" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold" style={{ color: "#a3a3a2" }}>
              Design URL
            </span>
            {/* Info circle */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="0.5" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full px-3 py-2 rounded"
            style={{ background: "#272822", border: "2px solid #929291" }}
          >
            <span className="text-[10.5px] font-semibold" style={{ color: "#71726e" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold rounded"
            style={{ background: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold rounded"
            style={{ background: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer to push footer down */}
      <div className="flex-1" />

      {/* Divider */}
      <div className="w-full" style={{ height: "1px", background: "#2e2e2a" }} />

      {/* Recent Breakdowns footer */}
      <div className="px-5 py-4">
        <span className="text-[13.5px] font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
