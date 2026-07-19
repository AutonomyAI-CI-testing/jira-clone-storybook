export function TestCard() {
  const orangeBtn: React.CSSProperties = {
    backgroundColor: "#b85c38",
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
  };

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e" }}
      className="w-full max-w-sm min-h-screen p-5 font-sans"
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white text-lg font-bold">UI magician Agent</h1>

        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* ── Collapsible hint row ────────────────────────────── */}
      <div className="flex items-center gap-2 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm" style={{ color: "#c07848" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design section ──────────────────────────── */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-300 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <h2 className="text-white text-xl font-bold">Add New Design</h2>
      </div>

      {/* ── Personal Access Token ───────────────────────────── */}
      <div className="mb-1 flex items-center gap-2">
        <label className="text-gray-300 text-sm font-medium">
          Personal Access Token
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={inputStyle}
        className="w-full rounded border border-gray-600 px-3 py-2 text-sm text-gray-400 placeholder-gray-500 mb-4 outline-none"
      />

      {/* ── Design URL ─────────────────────────────────────── */}
      <div className="mb-1 flex items-center gap-2">
        <label className="text-gray-300 text-sm font-medium">Design URL</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={inputStyle}
        className="w-full rounded border border-gray-600 px-3 py-2 text-sm text-gray-400 placeholder-gray-500 mb-6 outline-none"
      />

      {/* ── Buttons ────────────────────────────────────────── */}
      <div className="flex gap-4 mb-10 justify-center">
        <button
          type="button"
          style={orangeBtn}
          className="flex-1 rounded-lg py-3 px-6 text-white font-semibold text-sm"
        >
          Awesome
        </button>
        <button
          type="button"
          style={orangeBtn}
          className="flex-1 rounded-lg py-3 px-6 text-white font-semibold text-sm"
        >
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ──────────────────────────────── */}
      <h2 className="text-white text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
}
