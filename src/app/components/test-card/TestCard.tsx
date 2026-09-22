import {
  HiOutlineCog,
  HiOutlineInformationCircle,
  HiChevronUp,
} from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#0d0d0d] p-3 font-sans text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible row 1 */}
      <div className="mt-3 flex items-center gap-2">
        <HiChevronUp className="h-3 w-3 shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a single...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-6 flex items-center gap-2">
        <HiChevronUp className="h-3 w-3 shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle className="h-3 w-3 shrink-0 text-[#a4a4a3]" />
      </div>
      <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] p-2.5">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL field */}
      <div className="mt-4 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle className="h-3 w-3 shrink-0 text-[#a3a3a2]" />
      </div>
      <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] p-2.5">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
