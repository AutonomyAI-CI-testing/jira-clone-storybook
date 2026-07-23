export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-full max-w-[420px] bg-[#1a1a1a] px-6 py-8 font-sans text-[#c8c8c8]"
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium tracking-wide text-[#d0d0d0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#8a8a8a] hover:text-[#c8c8c8]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-[15px] text-[#9a9a9a]"
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
          className="shrink-0 opacity-80"
          aria-hidden
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      <div className="mb-6 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
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
          aria-hidden
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span>Add New Design</span>
      </div>

      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[15px] text-[#b8b8b8]" htmlFor="testcard-pat">
            Personal Access Token
          </label>
          <span
            className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#7a7a7a] text-[10px] text-[#8a8a8a]"
            aria-hidden
          >
            i
          </span>
        </div>
        <input
          id="testcard-pat"
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-[#5a5a5a] bg-[#222222] px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
        />
      </div>

      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[15px] text-[#b8b8b8]" htmlFor="testcard-url">
            Design URL
          </label>
          <span
            className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#7a7a7a] text-[10px] text-[#8a8a8a]"
            aria-hidden
          >
            i
          </span>
        </div>
        <input
          id="testcard-url"
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full rounded-md border border-[#8a8a8a] bg-[#222222] px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
        />
      </div>

      <div className="mb-14 flex justify-center gap-4">
        <button
          type="button"
          className="min-w-[120px] rounded-lg bg-[#a65c2e] px-6 py-2.5 text-[15px] text-[#c4a090]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="min-w-[120px] rounded-lg bg-[#a65c2e] px-6 py-2.5 text-[15px] text-[#c4a090]"
        >
          Prepare
        </button>
      </div>

      <div className="text-[15px] text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
}
