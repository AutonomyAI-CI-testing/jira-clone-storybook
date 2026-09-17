import { HiOutlineCog } from "react-icons/hi";
import { IoChevronUpOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-md bg-[#181816] p-4 font-sans text-neutral-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-300">
          UI magician Agent
        </span>
        <HiOutlineCog size={20} className="text-neutral-400" />
      </div>

      {/* Collapsed row */}
      <div className="mt-3 flex items-center gap-2">
        <IoChevronUpOutline size={14} className="text-neutral-400" />
        <span className="truncate text-xs font-semibold text-neutral-400">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <IoChevronUpOutline size={14} className="text-neutral-400" />
        <span className="text-sm font-semibold text-neutral-300">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-neutral-400">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={13} className="text-neutral-500" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-1.5 w-full rounded border-2 border-neutral-600 bg-neutral-800 px-3 py-2 text-xs text-neutral-500 placeholder:text-neutral-500 focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-neutral-400">
            Design URL
          </span>
          <AiOutlineInfoCircle size={13} className="text-neutral-500" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-1.5 w-full rounded border border-neutral-600 bg-neutral-800 px-3 py-2 text-xs text-neutral-500 placeholder:text-neutral-500 focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-neutral-300">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-neutral-300">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-sm font-semibold text-neutral-300">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
