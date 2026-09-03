export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col font-['Inter']"
      style={{ backgroundColor: "#272822", width: "254px", minHeight: "508px", padding: "20px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-sm" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron up */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M9 6L5 2L1 6" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold text-xs truncate" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ maxHeight: "40px" }} />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M9 6L5 2L1 6" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold text-sm" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="font-semibold text-xs" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <div
          className="w-full rounded px-3 py-2"
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
        >
          <span className="font-semibold text-xs" style={{ color: "#737470" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="font-semibold text-xs" style={{ color: "#a3a3a2" }}>
            Design URL
          </span>
          {/* Info icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <div
          className="w-full rounded px-3 py-2"
          style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
        >
          <span className="font-semibold text-xs" style={{ color: "#71726e" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2 rounded font-semibold text-xs"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded font-semibold text-xs"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-semibold text-sm" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
