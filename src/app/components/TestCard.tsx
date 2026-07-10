export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="w-64 bg-[#1e1e1e] p-5 text-white"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#888888]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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

      {/* Subtitle row */}
      <div className="mb-8 flex items-center gap-2 text-sm text-[#c47844]">
        <span>^</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* "Add New Design" section header */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-[#c47844]">^</span>
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Form: Personal Access Token */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-[#d0d0d0]">Personal Access Token</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#888888]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#2a2a2a] px-3 py-2 text-sm text-[#888888] placeholder:text-[#666666] focus:outline-none"
        />
      </div>

      {/* Form: Design URL */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-[#d0d0d0]">Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#888888]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#2a2a2a] px-3 py-2 text-sm text-[#888888] placeholder:text-[#666666] focus:outline-none"
        />
      </div>

      {/* Button row */}
      <div className="mb-8 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b05c2a] px-4 py-2 text-sm font-medium text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b05c2a] px-4 py-2 text-sm font-medium text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
