export default function TestCard() {
  return (
    <div id="testElem">
      <div className="w-full max-w-sm rounded-lg bg-[#18181b] px-5 py-6 text-[#e4e4e7]">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#e4e4e7]">UI magician Agent</h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#a1a1aa] hover:text-[#e4e4e7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

        <div className="mb-8 flex items-center gap-2 text-sm text-[#a1a1aa]">
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        <div className="mb-4 flex items-center gap-2 text-base text-[#d4d4d8]">
          <ChevronUp />
          <span>Add New Design</span>
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2 text-sm text-[#d4d4d8]">
            <span>Personal Access Token</span>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#52525b] bg-[#27272a] px-3 py-2 text-sm text-[#d4d4d8] outline-none"
          />
        </div>

        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-[#d4d4d8]">
            <span>Design URL</span>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#71717a] bg-[#27272a] px-3 py-2 text-sm text-[#d4d4d8] outline-none"
          />
        </div>

        <div className="mb-10 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#c2410c] px-6 py-2 text-sm font-medium text-[#ffedd5]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#c2410c] px-6 py-2 text-sm font-medium text-[#ffedd5]"
          >
            Prepare
          </button>
        </div>

        <div className="text-base text-[#d4d4d8]">Recent Breakdowns</div>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[#71717a]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
