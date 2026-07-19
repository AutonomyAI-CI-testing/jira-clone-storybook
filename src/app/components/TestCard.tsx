export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white p-5 w-[320px] min-h-screen flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.983 15.983a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.394 13.394a1.5 1.5 0 0 0 .3 1.654l.054.055a1.818 1.818 0 0 1-2.571 2.57l-.055-.054a1.5 1.5 0 0 0-1.653-.3 1.5 1.5 0 0 0-.91 1.373v.154a1.818 1.818 0 0 1-3.636 0v-.082a1.5 1.5 0 0 0-.982-1.373 1.5 1.5 0 0 0-1.654.3l-.054.054a1.818 1.818 0 0 1-2.571-2.571l.054-.055a1.5 1.5 0 0 0 .3-1.653 1.5 1.5 0 0 0-1.373-.91h-.154a1.818 1.818 0 0 1 0-3.636h.082A1.5 1.5 0 0 0 6.9 8.588a1.5 1.5 0 0 0-.3-1.654l-.054-.054A1.818 1.818 0 0 1 9.117 4.31l.055.054a1.5 1.5 0 0 0 1.653.3h.073a1.5 1.5 0 0 0 .91-1.373v-.154a1.818 1.818 0 0 1 3.636 0v.082a1.5 1.5 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.653-.3l.055-.054a1.818 1.818 0 0 1 2.57 2.571l-.054.055a1.5 1.5 0 0 0-.3 1.653v.073a1.5 1.5 0 0 0 1.373.91h.154a1.818 1.818 0 0 1 0 3.636h-.082a1.5 1.5 0 0 0-1.373.91Z"
          />
        </svg>
      </div>

      {/* Chevron / subtitle row */}
      <div className="text-[#c97a4a] text-sm flex items-center gap-1">
        <span>^</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Section heading */}
      <div className="text-white font-bold text-base flex items-center gap-2">
        <span>^</span>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>Personal Access Token</span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#333] border border-[#4a4a4a] text-gray-300 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none focus:border-[#c97a4a]"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>Design URL</span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#333] border border-[#4a4a4a] text-gray-300 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none focus:border-[#c97a4a]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mt-2">
        <button className="flex-1 bg-[#b5541a] text-white font-semibold py-3 rounded-xl hover:bg-[#c96020] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541a] text-white font-semibold py-3 rounded-xl hover:bg-[#c96020] transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <div className="mt-4 text-white font-bold text-base">Recent Breakdowns</div>
    </div>
  );
}
