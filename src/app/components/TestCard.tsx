export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1e1e1a] p-5 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">UI magician Agent</span>
        <span className="text-base text-[#b5b5b5]">⚙</span>
      </div>

      <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#8b9291]">
        <span className="text-[10px]">▲</span>
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#b2b2b1]">
        <span className="text-[10px]">▲</span>
        <span>Add New Design</span>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-[#a4a4a3]">Personal Access Token</span>
          <span className="text-[10px] text-[#a4a4a3]">ⓘ</span>
        </div>
        <input
          className="mt-1 w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470] placeholder:text-[#737470]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-[#a3a3a2]">Design URL</span>
          <span className="text-[10px] text-[#a3a3a2]">ⓘ</span>
        </div>
        <input
          className="mt-1 w-full border border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e] placeholder:text-[#71726e]"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-xs font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-xs font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-8 text-xs font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
