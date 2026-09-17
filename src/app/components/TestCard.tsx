export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-black p-5 text-neutral-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <svg
          className="h-5 w-5 text-[#b5b5b5]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsible row */}
      <div className="mt-3 flex items-center gap-2 text-sm text-[#8b9291]">
        <span>&#9650;</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#b2b2b1]">
          <span>&#9650;</span>
          <span>Add New Design</span>
        </div>

        <div className="mt-5 text-xs font-semibold text-[#a4a4a3]">
          Personal Access Token
        </div>
        <div className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] p-3 text-xs font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>

        <div className="mt-4 text-xs font-semibold text-[#a3a3a2]">
          Design URL
        </div>
        <div className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] p-3 text-xs font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </div>

        <div className="mt-4 flex gap-4">
          <span className="rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]">
            Awesome
          </span>
          <span className="rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10 text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
