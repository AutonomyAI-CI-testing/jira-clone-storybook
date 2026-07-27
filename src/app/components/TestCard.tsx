export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] min-h-[640px] bg-[#1a1c16] text-[#c8cbbc] px-6 py-8 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[18px] font-medium text-[#c8cbbc]">
          UI Magician Agent
        </h1>
        <button type="button" aria-label="Settings" className="text-[#c8cbbc]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section hint */}
      <button
        type="button"
        className="flex items-center gap-2 text-[14px] text-[#9aa093] mb-10"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-6">
        <button
          type="button"
          className="flex items-center gap-2 text-[16px] text-[#c8cbbc] mb-6"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="font-medium">Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[14px] text-[#b0b4a4]">
              Personal Access Token
            </label>
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#6b6f62] text-[10px] text-[#6b6f62]"
              aria-label="Info"
            >
              i
            </span>
          </div>
          <div className="w-full rounded border border-[#5a5e52] bg-[#22241c] px-3 py-2.5 text-[14px] text-[#c8cbbc]">
            figd_xxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[14px] text-[#b0b4a4]">Design URL</label>
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#6b6f62] text-[10px] text-[#6b6f62]"
              aria-label="Info"
            >
              i
            </span>
          </div>
          <div className="w-full rounded border-2 border-[#8a8e80] bg-[#22241c] px-3 py-2.5 text-[14px] text-[#c8cbbc]">
            https://www.figma.com/file/
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#a3542a] px-6 py-2.5 text-[15px] font-medium text-[#d4b5a0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#a3542a] px-6 py-2.5 text-[15px] font-medium text-[#d4b5a0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-16">
        <h2 className="text-[16px] font-medium text-[#c8cbbc]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

export default TestCard;
