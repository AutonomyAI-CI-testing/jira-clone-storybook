export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-[360px] bg-[#1a1a1a] px-6 py-8 text-[#e8e8e8] font-sans"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[20px] font-medium tracking-tight text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-8 w-8 items-center justify-center text-[#9a9a9a]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-[15px] text-[#c8c8c8]"
      >
        <ChevronUp className="h-4 w-4 shrink-0 rotate-180 text-[#9a9a9a]" />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-6 flex w-full items-center gap-2 text-left text-[16px] font-medium text-[#d0d0d0]"
        >
          <ChevronUp className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[14px] text-[#b0b0b0]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            readOnly
            value="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#c8c8c8] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[14px] text-[#b0b0b0]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            readOnly
            value="https://www.figma.com/file/:"
            className="w-full rounded-sm border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#c8c8c8] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#A54A2A] px-6 py-2.5 text-[15px] font-medium text-[#d8b8a8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#A54A2A] px-6 py-2.5 text-[15px] font-medium text-[#d8b8a8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-16">
        <h2 className="text-[16px] font-medium text-[#d0d0d0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
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
  );
}

function InfoIcon() {
  return (
    <span
      className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] leading-none text-[#9a9a9a]"
      aria-hidden
    >
      i
    </span>
  );
}

