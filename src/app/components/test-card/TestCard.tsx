import { HiOutlineCog } from "react-icons/hi";
import { IoChevronUp } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div id="testElem" className="w-80 rounded-md bg-black p-5 text-white">
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      <div className="mt-2 flex items-center gap-1">
        <IoChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8 flex items-center gap-1">
        <IoChevronUp className="h-3 w-3 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-4">
        <div className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </div>
        <div className="mt-1 rounded-sm border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      <div className="mt-4">
        <div className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Design URL
        </div>
        <div className="mt-1 rounded-sm border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-8 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
