// TestCard — self-contained, no props
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1c1c1a] font-sans flex flex-col"
      style={{ minHeight: 508 }}
    >
      {/* ── Header row ─────────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="14"
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

      {/* ── Subtitle row ───────────────────────────────────── */}
      <div className="flex items-center gap-2 px-5 pb-4">
        {/* Chevron up */}
        <svg
          width="8"
          height="5"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 5 5 1 9 5" />
        </svg>
        <span
          className="text-[11.5px] font-semibold text-[#8b9291] truncate"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ─────────────────────────────────────────── */}
      <div className="h-8" />

      {/* ── Add New Design section ─────────────────────────── */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            width="12"
            height="8"
            viewBox="0 0 14 9"
            fill="none"
            stroke="#b2b2b1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 8 7 2 13 8" />
          </svg>
          <span
            className="text-[13.5px] font-semibold text-[#b2b2b1]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="text-[11.5px] font-semibold text-[#a4a4a3]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Personal Access Token
            </span>
            {/* Info circle */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="10" r="9" />
              <line x1="10" y1="9" x2="10" y2="14" />
              <circle cx="10" cy="6.5" r="0.8" fill="#a4a4a3" />
            </svg>
          </div>
          <div className="w-full bg-[#272822] border border-[#a5adad] px-3 py-2">
            <span
              className="text-[11.5px] font-semibold text-[#737470]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="text-[11.5px] font-semibold text-[#a3a3a2]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Design URL
            </span>
            {/* Info circle */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#a3a3a2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="10" r="9" />
              <line x1="10" y1="9" x2="10" y2="14" />
              <circle cx="10" cy="6.5" r="0.8" fill="#a3a3a2" />
            </svg>
          </div>
          <div className="w-full bg-[#272822] border-2 border-[#929291] px-3 py-2">
            <span
              className="text-[10.5px] font-semibold text-[#71726e]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className="flex-1 bg-[#843a17] rounded px-3 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 bg-[#843a17] rounded px-3 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* ── Spacer ─────────────────────────────────────────── */}
      <div className="h-8" />

      {/* ── Recent Breakdowns ──────────────────────────────── */}
      <div className="px-5 pb-5">
        <span
          className="text-[13.5px] font-semibold text-[#b0b0b0]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
