export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="flex w-[340px] flex-col gap-6 bg-[#1a1a1a] px-5 py-6 text-[#f5f5f5]">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight text-[#f5f5f5]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-8 w-8 items-center justify-center text-[#a3a3a3]"
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
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-left text-sm text-[#d4d4d4]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="-rotate-90"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="flex items-center gap-2 text-left text-base font-medium text-[#e5e5e5]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <span>Add New Design</span>
          </button>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#d4d4d4]">Personal Access Token</span>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#737373] text-[10px] text-[#a3a3a3]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#525252] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d4d4d4] outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#d4d4d4]">Design URL</span>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#737373] text-[10px] text-[#a3a3a3]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#a3a3a3] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#e5e5e5] outline-none"
            />
          </div>

          <div className="mt-1 flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#a85a2a] px-6 py-2.5 text-sm font-medium text-[#e5e5e5]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a85a2a] px-6 py-2.5 text-sm font-medium text-[#e5e5e5]"
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="pt-4">
          <h2 className="text-base font-medium text-[#e5e5e5]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
