export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] bg-[#1a1a1a] px-6 py-5 text-[#c8c8c8] font-sans">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight text-[#c8c8c8]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a9a] hover:text-[#c8c8c8]"
          >
            <svg
              width="22"
              height="22"
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

        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-[15px] text-[#9a9a9a]"
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
            className="shrink-0"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        <div className="mb-2">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-lg font-medium text-[#c8c8c8]"
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
              className="shrink-0"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          <label className="mb-4 block">
            <span className="mb-2 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
              Personal Access Token
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6b6b] text-[10px] text-[#9a9a9a]"
                aria-hidden
              >
                i
              </span>
            </span>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded-sm border border-[#6b6b6b] bg-[#1f1f1f] px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
            />
          </label>

          <label className="mb-5 block">
            <span className="mb-2 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
              Design URL
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6b6b] text-[10px] text-[#9a9a9a]"
                aria-hidden
              >
                i
              </span>
            </span>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded-sm border border-[#8a8a8a] bg-[#1f1f1f] px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
            />
          </label>

          <div className="flex justify-center gap-3 px-2">
            <button
              type="button"
              className="min-w-[120px] rounded-lg bg-[#a34b28] px-6 py-2.5 text-[15px] text-[#d4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[120px] rounded-lg bg-[#a34b28] px-6 py-2.5 text-[15px] text-[#d4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        <h2 className="mt-14 text-lg font-medium text-[#c8c8c8]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

export default TestCard;
