export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", minWidth: "320px", maxWidth: "480px" }}
      className="flex flex-col gap-0 rounded-xl p-6 font-primary text-white"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xl text-white">
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b6c2cf"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Collapsed section row ── */}
      <div className="mt-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b6c2cf"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#c47f5a" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ── */}
      <div className="h-10" />

      {/* ── Add New Design section heading ── */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b6c2cf"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="font-primary-bold text-lg text-white">
          Add New Design
        </span>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white">Personal Access Token</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8c9bab"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#3a3a3a",
            borderColor: "#555555",
            color: "#8c9bab",
          }}
          className="w-full rounded border px-3 py-3 text-sm outline-none placeholder:text-[#8c9bab]"
        />
      </div>

      {/* ── Design URL ── */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white">Design URL</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8c9bab"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#3a3a3a",
            borderColor: "#777777",
            color: "#8c9bab",
          }}
          className="w-full rounded border-2 px-3 py-3 text-sm outline-none placeholder:text-[#8c9bab]"
        />
      </div>

      {/* ── Buttons row ── */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          style={{ backgroundColor: "#c1612a" }}
          className="flex-1 rounded-lg py-3 font-primary-bold text-sm text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#b0572a" }}
          className="flex-1 rounded-lg py-3 font-primary-bold text-sm text-white"
        >
          Prepare
        </button>
      </div>

      {/* ── Spacer ── */}
      <div className="h-8" />

      {/* ── Recent Breakdowns ── */}
      <span className="font-primary-bold text-xl text-white">
        Recent Breakdowns
      </span>
    </div>
  );
};
