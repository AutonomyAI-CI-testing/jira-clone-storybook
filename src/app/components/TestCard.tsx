/**
 * Self-contained panel matching the Figma "UI magician Agent" design.
 * No props — content is hardcoded from the design.
 */
export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-full max-w-md bg-[#1a1a1a] px-6 py-5 font-sans text-gray-200">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-gray-200">UI magician Agent</h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-gray-400 hover:text-gray-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="mb-8 flex items-center gap-2 text-sm text-gray-400"
        >
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
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex items-center gap-2 text-base text-gray-300"
          >
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
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-gray-300">Personal Access Token</label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-500 text-[10px] text-gray-400"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-gray-600 bg-[#2a2a2a] px-3 py-2.5 text-sm text-gray-400 outline-none"
            />
          </div>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-gray-300">Design URL</label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-500 text-[10px] text-gray-400"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border-2 border-gray-400 bg-[#2a2a2a] px-3 py-2.5 text-sm text-gray-300 outline-none"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[120px] rounded-lg bg-[#b45309] px-6 py-2.5 text-sm font-medium text-gray-200 hover:bg-[#c2610f]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[120px] rounded-lg bg-[#b45309] px-6 py-2.5 text-sm font-medium text-gray-200 hover:bg-[#c2610f]"
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="mt-10 pt-2">
          <h2 className="text-base text-gray-300">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}
