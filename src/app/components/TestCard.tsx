import { MdExpandLess, MdInfoOutline, MdOutlineSettings } from "react-icons/md";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#111111] px-5 py-5 font-primary text-2xs text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs">UI magician Agent</span>
        <MdOutlineSettings size={16} aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <MdExpandLess size={14} aria-hidden="true" className="shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-2 text-xs text-[#b2b2b1]">
        <MdExpandLess size={14} aria-hidden="true" className="shrink-0" />
        <span>Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-2 text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <MdInfoOutline size={14} aria-hidden="true" className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[color:#a5adad] bg-[#272822] px-3 text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-2 text-[#a3a3a2]">
        <span>Design URL</span>
        <MdInfoOutline size={14} aria-hidden="true" className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[color:#929291] bg-[#272822] px-3 text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex gap-4 pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-12 text-xs text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
};
