const GearIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CaretUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[300px] min-h-screen p-5 flex flex-col gap-4 text-white"
      style={{ backgroundColor: "#1c1d17" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-white">UI magician Agent</span>
        <span className="text-white opacity-70">
          <GearIcon />
        </span>
      </div>

      {/* Collapsed subtitle row */}
      <div className="flex items-center gap-2" style={{ color: "#a07050" }}>
        <CaretUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <span className="text-white opacity-70">
          <CaretUpIcon />
        </span>
        <span className="font-bold text-lg text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <span className="text-white opacity-60">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2 rounded text-sm text-gray-400 placeholder-gray-500 outline-none border"
          style={{ backgroundColor: "#272822", borderColor: "#929291" }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <span className="text-white opacity-60">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full px-3 py-2 rounded text-sm text-gray-400 placeholder-gray-500 outline-none border"
          style={{ backgroundColor: "#272822", borderColor: "#929291" }}
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 justify-center mt-2">
        <button
          className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "#843a17" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "#843a17" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="font-bold text-lg text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
