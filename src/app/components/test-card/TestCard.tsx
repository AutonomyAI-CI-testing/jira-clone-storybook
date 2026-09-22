import { HiOutlineCog, HiChevronUp } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi2";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[280px] rounded-md bg-[#1c1c17] p-4 font-sans"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      <div className="mt-3 flex items-center gap-1">
        <HiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-1">
          <HiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-[#a4a4a3]" />
          </div>
          <div className="mt-1 rounded border border-[#a5adad] bg-[#272822] px-2 py-2">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-[#a3a3a2]" />
          </div>
          <div className="mt-1 rounded border-2 border-[#929291] bg-[#272822] px-2 py-2">
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
