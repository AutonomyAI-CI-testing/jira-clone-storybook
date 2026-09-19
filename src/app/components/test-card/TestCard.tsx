import {
  HiOutlineCog,
  HiChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="font-sans w-[254px] rounded-md bg-[#000000] p-3"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} className="text-[#b5b5b5]" />
    </div>

    {/* Subtitle */}
    <div className="mt-4 flex items-center gap-1">
      <HiChevronUp size={12} className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="mt-8 flex items-center gap-1">
      <HiChevronUp size={12} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token field */}
    <div className="mt-4 flex items-center gap-1">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle size={12} className="text-[#a4a4a3]" />
    </div>
    <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] p-2">
      <span className="text-[11.5px] font-semibold text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL field */}
    <div className="mt-3 flex items-center gap-1">
      <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </span>
      <HiOutlineInformationCircle size={12} className="text-[#a3a3a2]" />
    </div>
    <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] p-2">
      <span className="text-[10.5px] font-semibold text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Buttons */}
    <div className="mt-4 flex gap-3">
      <button
        type="button"
        className="flex-1 rounded-[4px] bg-[#843a17] p-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-[4px] bg-[#843a17] p-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-8">
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
