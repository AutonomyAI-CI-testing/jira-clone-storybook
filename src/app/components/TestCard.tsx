export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[320px] rounded-md bg-[#1a1c18] px-5 py-5 text-[#c8c8c4]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#e8e8e4]">UI magician Agent</h1>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#9a9a96]"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>

        {/* Collapsed section */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9a96]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 7.5 L6 4.5 L9 7.5" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Expanded: Add New Design */}
        <div className="mb-4">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c4]"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 4.5 L6 7.5 L9 4.5" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#c8c8c4]">Personal Access Token</label>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-[#9a9a96]"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="5.5" />
                <path d="M7 6.2 V10" strokeLinecap="round" />
                <circle cx="7" cy="4.2" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6b6b68] bg-[#2a2c28] px-3 py-2 text-sm text-[#a8a8a4] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#c8c8c4]">Design URL</label>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-[#9a9a96]"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="5.5" />
                <path d="M7 6.2 V10" strokeLinecap="round" />
                <circle cx="7" cy="4.2" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a8a86] bg-[#2a2c28] px-3 py-2 text-sm text-[#a8a8a4] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#b85c2e] px-6 py-2 text-sm font-medium text-[#d4a890]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#b85c2e] px-6 py-2 text-sm font-medium text-[#d4a890]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-10">
          <h2 className="text-base font-medium text-[#c8c8c4]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}
