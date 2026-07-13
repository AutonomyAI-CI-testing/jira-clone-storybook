export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col px-6 py-6"
      style={{ backgroundColor: "#2a2a2a", minWidth: "300px", maxWidth: "480px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-white text-xl">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
          style={{ color: "#9ca3af" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-white text-sm">^</span>
        <span className="text-sm" style={{ color: "#92400e" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-white font-bold text-lg">^</span>
        <span className="text-white font-bold text-2xl">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-white text-sm font-medium">Personal Access Token</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="16"
          height="16"
          style={{ color: "#9ca3af" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Token Input */}
      <input
        type="text"
        className="w-full rounded-lg px-3 py-3 mb-5 text-white outline-none"
        style={{
          backgroundColor: "#3f3f46",
          border: "1px solid #52525b",
          color: "#ffffff",
        }}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-white text-sm font-medium">Design URL</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="16"
          height="16"
          style={{ color: "#9ca3af" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Design URL Input */}
      <input
        type="text"
        className="w-full rounded-lg px-3 py-3 mb-6 text-white outline-none"
        style={{
          backgroundColor: "#3f3f46",
          border: "1px solid #52525b",
          color: "#ffffff",
        }}
        placeholder="https://www.figma.com/file/:"
      />

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button
          className="text-white rounded-xl px-8 py-3 font-semibold"
          style={{ backgroundColor: "#b45309" }}
        >
          Awesome
        </button>
        <button
          className="text-white rounded-xl px-8 py-3 font-semibold"
          style={{ backgroundColor: "#b45309" }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="text-white font-bold text-2xl">Recent Breakdowns</div>
    </div>
  );
}
