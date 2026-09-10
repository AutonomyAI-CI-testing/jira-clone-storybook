import { FiSettings } from "react-icons/fi";
import { RiArrowUpSLine } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[260px] flex-col gap-4 rounded-md bg-black p-3 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <div className="flex items-center gap-2">
        <RiArrowUpSLine className="h-4 w-4 text-[#8b9291]" />
        <span className="truncate text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <RiArrowUpSLine className="h-4 w-4 text-[#b2b2b1]" />
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-[#a3a3a2]">
              Personal Access Token
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-[#a3a3a2]" />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="rounded border border-[#a5adad] bg-[#272822] px-2 py-2 text-xs font-semibold text-[#737470] placeholder:text-[#737470]"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-[#a4a4a3]">
              Design URL
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-[#a4a4a3]" />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="rounded border-2 border-[#929291] bg-[#272822] px-2 py-2 text-xs font-semibold text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <span className="mt-4 text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
