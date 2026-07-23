export function TestCard() {
  return (
    <div id="testElem">
      <div className="min-h-[640px] w-[340px] bg-[#1a1c16] px-6 py-8 text-[#e8e8e6]">
        <div className="mb-6 flex items-start justify-between">
          <h1 className="text-[22px] font-semibold leading-tight tracking-tight">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="mt-1 text-[#c8c8c6]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        <div className="mb-10 flex items-center gap-2 text-[14px] text-[#9a9a98]">
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        <div className="mb-12">
          <div className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#c8c8c6]">
            <ChevronUp />
            <span>Add New Design</span>
          </div>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2 text-[15px] text-[#c8c8c6]">
              <span>Personal Access Token</span>
              <InfoIcon />
            </div>
            <div className="rounded border border-[#6a6a68] bg-[#242520] px-3 py-2.5 text-[14px] text-[#8a8a88]">
              figd_xxxxxxxxxxxxxxx
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2 text-[15px] text-[#c8c8c6]">
              <span>Design URL</span>
              <InfoIcon />
            </div>
            <div className="rounded border-2 border-[#929291] bg-[#242520] px-3 py-2.5 text-[14px] text-[#8a8a88]">
              https://www.figma.com/file/:
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#a34b24] px-7 py-2.5 text-[15px] font-medium text-[#d4b5a0]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a34b24] px-7 py-2.5 text-[15px] font-medium text-[#d4b5a0]"
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="text-[18px] font-medium text-[#c8c8c6]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M1 6.5L6 1.5L11 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#9a9a98]"
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 7v4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}
