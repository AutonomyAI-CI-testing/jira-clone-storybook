import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[253px] rounded bg-[#2a2a2a] p-4 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <LuSettings className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Subtitle row */}
      <div className="mt-1 flex items-center gap-1">
        <LuChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-1">
        <LuChevronUp className="text-[#b2b2b1]" size={16} />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-3">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <LuInfo className="text-[#a4a4a3]" size={14} />
        </div>
        <input
          readOnly
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-3">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <LuInfo className="text-[#a3a3a2]" size={14} />
        </div>
        <input
          readOnly
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs text-[#71726e] placeholder-[#71726e] outline-none"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Button row */}
      <div className="mt-4 flex justify-center gap-2">
        <button className="rounded bg-[#843a17] px-5 py-2 text-sm font-semibold text-[#c4a99a]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-5 py-2 text-sm font-semibold text-[#c4a99a]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-6">
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
