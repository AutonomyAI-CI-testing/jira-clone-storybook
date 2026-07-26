/**
 * Smoke-test panel approximating the Figma "UI magician Agent" design.
 * Self-contained — no props. Root must keep id="testElem".
 */
export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[320px] rounded-lg bg-[#1C1D17] px-5 py-5 text-[14px] text-gray-200">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[18px] font-medium tracking-tight text-gray-100">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-7 w-7 items-center justify-center rounded text-gray-400 hover:text-gray-200"
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

        {/* Collapsed frame summary */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-gray-300"
        >
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[16px] font-medium text-gray-200"
          >
            <ChevronUp />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[14px] text-gray-200">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#A5ADAD] bg-[#272822] px-3 py-2 text-[13px] text-gray-300 outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[14px] text-gray-200">Design URL</label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[13px] text-gray-300 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[96px] rounded-md bg-[#843A17] px-5 py-2 text-[14px] font-medium text-gray-200"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[96px] rounded-md bg-[#843A17] px-5 py-2 text-[14px] font-medium text-gray-200"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-2">
          <h2 className="text-[16px] font-medium text-gray-200">
            Recent Breakdowns
          </h2>
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
      className="shrink-0 text-gray-400"
    >
      <path
        d="M1 6.5L6 1.5L11 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <span
      className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-500 text-[10px] leading-none text-gray-400"
      aria-hidden="true"
    >
      i
    </span>
  );
}

export default TestCard;
