/**
 * TestCard — static smoke-test panel matching the "UI magician Agent" Figma frame.
 * Self-contained, no props. Approximate Tailwind styling is intentional.
 */
export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1c18] px-6 py-5 text-[#e8e8e6] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight">UI magician Agent</h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-8 w-8 items-center justify-center rounded text-[#c4c4c0] hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        {/* Collapsed row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#c8c8c4]"
        >
          <CaretUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#d4d4d0]"
          >
            <CaretUp />
            <span>Add New Design</span>
          </button>

          <div className="mb-4">
            <label className="mb-2 flex items-center gap-2 text-sm text-[#cfcfcb]">
              Personal Access Token
              <InfoIcon />
            </label>
            <input
              type="text"
              readOnly
              value="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#929291] bg-[#272822] px-3 py-2.5 text-sm text-[#d0d0cc] outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 flex items-center gap-2 text-sm text-[#cfcfcb]">
              Design URL
              <InfoIcon />
            </label>
            <input
              type="text"
              readOnly
              value="https://www.figma.com/file/:"
              className="w-full rounded border border-[#929291] bg-[#272822] px-3 py-2.5 text-sm text-[#d0d0cc] outline-none"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#a6532a] px-5 py-2.5 text-sm font-medium text-[#f0e6de]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#a6532a] px-5 py-2.5 text-sm font-medium text-[#f0e6de]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-2">
          <h2 className="text-base font-medium text-[#d4d4d0]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}

function CaretUp() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#a8a8a4]"
    >
      <path
        d="M3 7.5L6 4.5L9 7.5"
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
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="text-[#9a9a96]"
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M7 6.25V9.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="7" cy="4.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export default TestCard;
