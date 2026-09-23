import { HiOutlineCog, HiOutlineChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-[#000000] p-5 font-['Inter']"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-3 flex items-center gap-2">
        <HiOutlineChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <HiOutlineChevronUp className="h-3 w-3 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle className="h-3 w-3 text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          value=""
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <HiOutlineInformationCircle className="h-3 w-3 text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          value=""
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      <div className="mt-4 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-[4px] bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-[4px] bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
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
};
