export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] bg-[#1a1f1a] text-[#c8c8c8] p-6 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[18px] font-medium text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9a9a9a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </div>

      {/* Collapsed row */}
      <button
        type="button"
        className="flex items-center gap-2 text-[14px] text-[#b0b0b0] mb-8 w-full text-left"
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
          aria-hidden
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design section */}
      <div className="mb-8">
        <button
          type="button"
          className="flex items-center gap-2 text-[16px] font-medium text-[#d0d0d0] mb-5 w-full text-left"
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
            aria-hidden
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <label className="block mb-4">
          <span className="flex items-center gap-2 text-[14px] text-[#c8c8c8] mb-2">
            Personal Access Token
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8a8a8a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2f2a] border border-[#5a5a5a] rounded px-3 py-2.5 text-[14px] text-[#a0a0a0] outline-none"
          />
        </label>

        {/* Design URL */}
        <label className="block mb-5">
          <span className="flex items-center gap-2 text-[14px] text-[#c8c8c8] mb-2">
            Design URL
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8a8a8a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full bg-[#2a2f2a] border border-[#9a9a9a] rounded px-3 py-2.5 text-[14px] text-[#b8b8b8] outline-none"
          />
        </label>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            className="bg-[#a54a2a] text-[#d8b8a8] rounded-lg px-8 py-2.5 text-[15px] font-medium"
          >
            Awesome
          </button>
          <button
            type="button"
            className="bg-[#a54a2a] text-[#d8b8a8] rounded-lg px-8 py-2.5 text-[15px] font-medium"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10 text-[15px] text-[#c8c8c8]">Recent Breakdowns</div>
    </div>
  );
}

export default TestCard;
