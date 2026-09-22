import {
  HiOutlineCog,
  HiChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="font-sans w-[320px] bg-[#161511] p-5">
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog size={18} className="text-[#8b9291]" />
    </div>

    {/* Collapsible row */}
    <div className="mt-4 flex items-center gap-2">
      <HiChevronUp size={14} className="text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="mt-9 flex items-center gap-2">
      <HiChevronUp size={16} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-4 flex items-center gap-2">
      <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </label>
      <HiOutlineInformationCircle size={14} className="text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
    />

    {/* Design URL */}
    <div className="mt-4 flex items-center gap-2">
      <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </label>
      <HiOutlineInformationCircle size={14} className="text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
    />

    {/* Buttons */}
    <div className="mt-4 flex gap-2">
      <button className="flex-1 rounded bg-[#843a17] px-3 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
        Awesome
      </button>
      <button className="flex-1 rounded bg-[#843a17] px-3 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-9">
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
