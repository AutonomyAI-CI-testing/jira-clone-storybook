export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1c18] px-6 py-5 font-sans text-[#c8c8c4]">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight text-[#c8c8c4]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a96] hover:text-[#c8c8c4]"
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
          className="mb-8 flex w-full items-center gap-2 text-left text-[15px] text-[#a8a8a4]"
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
            className="shrink-0"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-lg font-medium text-[#c8c8c4]"
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
              className="shrink-0"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label
                htmlFor="testcard-pat"
                className="text-[15px] text-[#b0b0ac]"
              >
                Personal Access Token
              </label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a66] text-[10px] text-[#8a8a86]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              id="testcard-pat"
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#5a5a56] bg-[#2a2c28] px-3 py-2.5 text-sm text-[#c8c8c4] outline-none"
            />
          </div>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label
                htmlFor="testcard-design-url"
                className="text-[15px] text-[#b0b0ac]"
              >
                Design URL
              </label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a66] text-[10px] text-[#8a8a86]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              id="testcard-design-url"
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a8a86] bg-[#2a2c28] px-3 py-2.5 text-sm text-[#c8c8c4] outline-none"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#b4532a] px-8 py-2.5 text-[15px] font-medium text-[#d4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#b4532a] px-8 py-2.5 text-[15px] font-medium text-[#d4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="pt-2">
          <h2 className="text-lg font-medium text-[#c8c8c4]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}
