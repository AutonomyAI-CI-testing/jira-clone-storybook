import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-5 font-primary-bold text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h2 className="text-xs">UI magician Agent</h2>
        <RiSettings3Line aria-hidden size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <RiArrowUpSLine aria-hidden size={12} className="text-[#b5b5b5]" />
        <p className="text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[72px] flex items-center gap-1.5">
        <RiArrowUpSLine aria-hidden size={14} className="text-[#b5b5b5]" />
        <h2 className="text-xs">Add New Design</h2>
      </div>

      <div className="mt-7 flex items-center gap-3">
        <label className="text-2xs text-[#a4a4a3]" htmlFor="testElem-token">
          Personal Access Token
        </label>
        <RiInformationLine
          aria-hidden
          size={15}
          className="text-[#b5b5b5]"
        />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-2.5 text-2xs text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-3">
        <label className="text-2xs text-[#a3a3a2]" htmlFor="testElem-url">
          Design URL
        </label>
        <RiInformationLine
          aria-hidden
          size={15}
          className="text-[#b5b5b5]"
        />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-2.5 text-2xs text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex gap-4 pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 text-xs text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
}
