export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-lg bg-[#1a1f1a] px-5 py-5 text-[#c8c8c8] font-sans"
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#d4d4d4]">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
          <svg
            width="18"
            height="18"
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
        className="mb-6 flex w-full items-center gap-2 text-left text-sm text-[#b0b0b0]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      <div className="mb-8">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#cfcfcf]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        <div className="mb-4">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#b8b8b8]">
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            type="text"
            readOnly
            value="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#b8b8b8]">
            Design URL
            <InfoIcon />
          </label>
          <input
            type="text"
            readOnly
            value="https://www.figma.com/file/:"
            className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#a0a0a0] outline-none"
          />
        </div>

        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a34c2e] px-6 py-2.5 text-sm font-medium text-[#e8c4b8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a34c2e] px-6 py-2.5 text-sm font-medium text-[#e8c4b8]"
          >
            Prepare
          </button>
        </div>
      </div>

      <div className="pt-2">
        <h2 className="text-base font-medium text-[#cfcfcf]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[#9a9a9a]"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[#8a8a8a]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default TestCard;
