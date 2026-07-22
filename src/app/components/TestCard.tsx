export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[640px] w-[320px] flex-col bg-[#1a1c16] px-5 py-6 font-sans text-[#c8c8c4]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[18px] font-medium tracking-tight text-[#c8c8c4]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-7 w-7 items-center justify-center rounded text-[#8a8a84] hover:text-[#c8c8c4]"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-[14px] text-[#8a8a84]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="flex flex-col">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-[#c8c8c4]"
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[14px] text-[#c8c8c4]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#3d3f38] bg-[#272822] px-3 py-2.5 text-[13px] text-[#6b6b66] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[14px] text-[#c8c8c4]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[13px] text-[#6b6b66] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="mb-10 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a54a1a] px-6 py-2.5 text-[14px] font-medium text-[#c8a090]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a54a1a] px-6 py-2.5 text-[14px] font-medium text-[#c8a090]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-auto">
        <h2 className="text-[16px] font-medium text-[#c8c8c4]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

function GearIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8a8a84"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
