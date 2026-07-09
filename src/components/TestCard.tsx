export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-[#2a2a2a] p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0a0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron subtitle row */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm font-bold text-[#b5703a]">^</span>
        <span className="text-sm text-[#b5703a]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section heading */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-base font-bold text-white">^</span>
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm text-gray-300">Personal Access Token</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-400 text-[10px] text-gray-400">
          i
        </span>
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full rounded border border-[#555] bg-[#3a3a3a] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm text-gray-300">Design URL</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-400 text-[10px] text-gray-400">
          i
        </span>
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mb-6 w-full rounded border border-[#555] bg-[#3a3a3a] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
      />

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="rounded-lg bg-[#c1541a] px-6 py-3 font-semibold text-white">
          Awesome
        </button>
        <button className="rounded-lg bg-[#c1541a] px-6 py-3 font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
