export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1c1c1c", minHeight: "100vh", fontFamily: "sans-serif", color: "#e5e7eb" }}
      className="text-white p-5 flex flex-col gap-4"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between">
        <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>UI magician Agent</span>

        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Subrow: chevron-up + muted orange text ── */}
      <div className="flex items-center gap-2">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#c2714f" }}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#c2714f", fontSize: "0.875rem" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ── */}
      <div style={{ height: "1rem" }} />

      {/* ── Add New Design section heading ── */}
      <div className="flex items-center gap-2">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>Add New Design</span>
      </div>

      {/* ── Personal Access Token label ── */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>Personal Access Token</span>
          {/* Info-circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#9ca3af" }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>

        {/* Token input */}
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            color: "#9ca3af",
            padding: "10px 14px",
            fontSize: "0.875rem",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      {/* ── Design URL label ── */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>Design URL</span>
          {/* Info-circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#9ca3af" }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>

        {/* URL input */}
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #6b7280",
            borderRadius: "6px",
            color: "#9ca3af",
            padding: "10px 14px",
            fontSize: "0.875rem",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      {/* ── Action buttons ── */}
      <div className="flex gap-4 justify-center mt-2">
        <button
          type="button"
          style={{
            backgroundColor: "#b45309",
            borderRadius: "10px",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.95rem",
            padding: "12px 32px",
            border: "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#b45309",
            borderRadius: "10px",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.95rem",
            padding: "12px 32px",
            border: "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* ── Spacer ── */}
      <div style={{ height: "1.5rem" }} />

      {/* ── Recent Breakdowns heading ── */}
      <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>Recent Breakdowns</span>
    </div>
  );
}
