import { MdKeyboardArrowUp, MdOutlineInfo, MdOutlineSettings } from "react-icons/md";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[380px] bg-[#0a0a0a] p-5">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-lg text-[#b2b2b1]">
          UI magician Agent
        </span>
        <MdOutlineSettings size={26} className="shrink-0 text-[#b2b2b1]" />
      </div>

      <div className="mt-5 flex items-center gap-2 text-[#8a8a89]">
        <MdKeyboardArrowUp size={20} className="shrink-0" />
        <span className="truncate text-sm">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <MdKeyboardArrowUp size={24} className="shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-xl text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#a4a4a3]">Personal Access Token</span>
          <MdOutlineInfo size={16} className="shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-xs text-[#737470] placeholder-[#737470]"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#a4a4a3]">Design URL</span>
          <MdOutlineInfo size={16} className="shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-xs text-[#737470] placeholder-[#737470]"
        />
      </div>

      <div className="mt-7 flex gap-4">
        <button
          type="button"
          className="rounded bg-[#843a17] px-7 py-2.5 font-primary-bold text-sm text-[#e8dcd4]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-7 py-2.5 font-primary-bold text-sm text-[#e8dcd4]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-24 pb-10">
        <span className="font-primary-bold text-xl text-[#b2b2b1]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
