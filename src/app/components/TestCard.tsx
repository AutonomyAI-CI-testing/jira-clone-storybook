export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[340px] bg-[#1a1a1a] px-5 py-5 text-[14px] text-[#c8c8c8] font-sans">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[16px] font-medium text-[#d0d0d0]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-6 w-6 items-center justify-center text-[#a0a0a0]"
          >
            <svg
              width="16"
              height="16"
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

        {/* Collapsed section */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-[13px] text-[#b0b0b0]"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="currentColor"
            className="shrink-0 opacity-70"
          >
            <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-[#c8c8c8]"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="shrink-0 opacity-70"
            >
              <path
                d="M2 6.5 L5 3.5 L8 6.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[13px] text-[#b8b8b8]">
                Personal Access Token
              </label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#777] text-[10px] text-[#888]"
                aria-hidden
              >
                i
              </span>
            </div>
            <div className="rounded border border-[#555] bg-[#2a2a2a] px-3 py-2.5 text-[13px] text-[#888]">
              figd_xxxxxxxxxxxxxxxx
            </div>
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[13px] text-[#b8b8b8]">Design URL</label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#777] text-[10px] text-[#888]"
                aria-hidden
              >
                i
              </span>
            </div>
            <div className="rounded border-2 border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-[13px] text-[#888]">
              https://www.figma.com/file/:
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[112px] rounded-md bg-[#a85a2a] px-5 py-2.5 text-[14px] text-[#d4b8a0]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[112px] rounded-md bg-[#a85a2a] px-5 py-2.5 text-[14px] text-[#d4b8a0]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-2">
          <h2 className="text-[15px] font-medium text-[#c8c8c8]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
