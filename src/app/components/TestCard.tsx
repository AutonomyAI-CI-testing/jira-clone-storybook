export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] min-h-[600px] rounded-xl p-5 flex flex-col gap-4"
      style={{ backgroundColor: "#2a2a2a", color: "#e8e8e8", fontFamily: "sans-serif" }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        {/* Gear icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2">
        <CaretUpIcon />
        <span className="text-sm" style={{ color: "#c47f5a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <CaretUpIcon />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white">Personal Access Token</label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{ backgroundColor: "#3a3a3a", color: "#999", border: "1px solid #555" }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white">Design URL</label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{ backgroundColor: "#3a3a3a", color: "#999", border: "1px solid #555" }}
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-1">
        <button
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#c1612a" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#a0502a" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};

const CaretUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c47f5a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);
