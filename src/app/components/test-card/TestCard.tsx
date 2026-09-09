export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="mx-auto w-full max-w-sm rounded-md bg-[#272822] p-5 font-sans text-white"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-lg text-[#b5b5b5]">⚙</span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#8b9291]">
        <span>⌃</span>
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-[#b2b2b1]">
        <span>⌃</span>
        <span>Add New Design</span>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-current text-[10px]">
            i
          </span>
        </div>
        <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#a3a3a2]">
          <span>Design URL</span>
          <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-current text-[10px]">
            i
          </span>
        </div>
        <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-4 py-2 text-sm font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-4 py-2 text-sm font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-10 text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
