import {
  HiOutlineCog,
  HiChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-4 rounded-md bg-[#1a1a1a] p-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      <div className="flex items-center gap-1.5">
        <HiChevronUp className="h-3 w-3 shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <HiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-[#a4a4a3]" />
          </div>
          <div className="rounded-sm border-2 border-[#929291] bg-[#272822] px-2 py-2">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-[#a3a3a2]" />
          </div>
          <div className="rounded-sm border border-[#a5adad] bg-[#272822] px-2 py-2">
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
