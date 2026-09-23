export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#0d0d0c] p-4 font-primary text-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]" aria-hidden>
          ⚙
        </span>
      </div>

      {/* Collapsed row */}
      <div className="mt-4 flex items-center gap-2 text-[11.5px] font-semibold text-[#8b9291]">
        <span aria-hidden>⌄</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1]">
          <span aria-hidden>⌃</span>
          <span>Add New Design</span>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1 text-[11.5px] font-semibold text-[#a4a4a3]">
            <span>Personal Access Token</span>
            <span aria-hidden>ⓘ</span>
          </div>
          <input
            readOnly
            value=""
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded border border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1 text-[11.5px] font-semibold text-[#a3a3a2]">
            <span>Design URL</span>
            <span aria-hidden>ⓘ</span>
          </div>
          <input
            readOnly
            value=""
            placeholder="https://www.figma.com/file/:"
            className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
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
  );
};
