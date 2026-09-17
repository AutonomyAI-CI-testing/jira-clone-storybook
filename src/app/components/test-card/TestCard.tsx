export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="mx-auto w-[254px] rounded-md bg-black p-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b5b5b5"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>

        {/* Collapsed row */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[10px] text-[#8b9291]">^</span>
          <span className="text-[11.5px] font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#b2b2b1]">^</span>
            <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
          </div>

          <label className="mt-4 block text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <input
            disabled
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-1 w-full rounded border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
          />

          <label className="mt-3 block text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <input
            disabled
            placeholder="https://www.figma.com/file/:"
            className="mt-1 w-full rounded border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
          />

          <div className="mt-4 flex gap-3">
            <button
              disabled
              className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
            >
              Awesome
            </button>
            <button
              disabled
              className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-8 text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
