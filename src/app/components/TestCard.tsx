export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="flex min-h-[640px] w-full max-w-md flex-col bg-[#1a1a1a] px-6 py-8 text-[#c8c8c8]">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-wide text-[#d4d4d4]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a9a] hover:text-[#d4d4d4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Collapsed summary row */}
        <button
          type="button"
          className="mb-10 flex items-center gap-2 text-left text-[#b0b0b0]"
        >
          <ChevronUp />
          <span className="truncate text-base">
            From entire frame to a singl...
          </span>
        </button>

        {/* Add New Design section */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="flex items-center gap-2 text-left text-lg text-[#cfcfcf]"
          >
            <ChevronUp />
            <span>Add New Design</span>
          </button>

          <div className="mt-2 flex flex-col gap-5 pl-1">
            {/* Personal Access Token */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label className="text-base text-[#cfcfcf]">
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
              <div className="rounded border border-[#6b6b6b] bg-[#222222] px-3 py-2.5 font-mono text-sm text-[#8a8a8a]">
                figd_xxxxxxxxxxxxxxx
              </div>
            </div>

            {/* Design URL */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label className="text-base text-[#cfcfcf]">Design URL</label>
                <InfoIcon />
              </div>
              <div className="rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 font-mono text-sm text-[#bdbdbd]">
                https://www.figma.com/file/:
              </div>
            </div>

            {/* Actions */}
            <div className="mt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                className="rounded-md bg-[#a3542e] px-6 py-2.5 text-base text-[#8a6a5a]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="rounded-md bg-[#a3542e] px-6 py-2.5 text-base text-[#8a6a5a]"
              >
                Prepare
              </button>
            </div>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-auto pt-16">
          <h2 className="text-lg text-[#cfcfcf]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

function ChevronUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#9a9a9a]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default TestCard;
