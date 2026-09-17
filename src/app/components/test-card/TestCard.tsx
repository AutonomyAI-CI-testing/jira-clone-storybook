import { HiOutlineCog } from "react-icons/hi";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[280px] rounded-md bg-[#161616] p-4 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsed row */}
      <div className="mt-4 flex items-center gap-1">
        <IoChevronUpOutline className="h-3 w-3 text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-1">
          <IoChevronUpOutline className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-4">
          <label className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <input
            disabled
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470] placeholder-[#737470]"
          />
        </div>

        <div className="mt-4">
          <label className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <input
            disabled
            placeholder="https://www.figma.com/file/:"
            className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e] placeholder-[#71726e]"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8 flex items-center gap-1">
        <IoChevronDownOutline className="h-3 w-3 text-[#b0b0b0]" />
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
