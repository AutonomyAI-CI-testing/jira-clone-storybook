export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-lg bg-[#1a1c18] px-6 py-5 font-sans text-[#c8cbbf]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight text-[#e8eae0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#a8ab9f] hover:text-[#c8cbbf]"
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

      {/* Collapsed path row */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#a8ab9f]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design section */}
      <div className="mb-6">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8cbbf]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-medium text-[#c8cbbf]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#3a3c38] bg-[#272822] px-3 py-2.5 text-sm text-[#c8cbbf] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-medium text-[#c8cbbf]">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-sm text-[#c8cbbf] outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#a85a32] px-5 py-2.5 text-sm font-medium text-[#e8d5c8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#a85a32] px-5 py-2.5 text-sm font-medium text-[#e8d5c8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-base font-medium text-[#c8cbbf]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M3 7.5L6 4.5L9 7.5" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      className="shrink-0 text-[#a8ab9f]"
    >
      <circle cx="7" cy="7" r="5.5" />
      <path d="M7 6.2v3.5" strokeLinecap="round" />
      <circle cx="7" cy="4.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default TestCard;
