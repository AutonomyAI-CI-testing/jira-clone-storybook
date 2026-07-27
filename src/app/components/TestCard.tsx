export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#232323] w-[390px] rounded-lg p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
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
          className="text-white opacity-80"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#8a8a8a] flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#8a8a8a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-5">
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
          className="text-white flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <h3 className="text-xl font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-sm text-white mb-2">
          Personal Access Token
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#8a8a8a]"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2e2e2e] border border-[#4a4a4a] rounded-md px-3 py-2 text-[#8a8a8a] text-sm placeholder-[#8a8a8a] focus:outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm text-white mb-2">
          Design URL
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#8a8a8a]"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2e2e2e] border border-[#4a4a4a] rounded-md px-3 py-2 text-[#8a8a8a] text-sm placeholder-[#8a8a8a] focus:outline-none"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#b8481f] hover:bg-[#a03d1a] text-white font-semibold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b8481f] hover:bg-[#a03d1a] text-white font-semibold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-xl font-bold">Recent Breakdowns</h3>
    </div>
  );
}
