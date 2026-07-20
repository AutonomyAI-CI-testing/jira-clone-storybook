import { LuSettings2, LuChevronUp } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 min-h-screen text-white">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <LuSettings2 className="text-white" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <LuChevronUp className="text-[#a0613a]" size={16} />
        <span className="text-sm text-[#a0613a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="my-8" />

      {/* Section heading */}
      <div className="flex items-center gap-2">
        <LuChevronUp className="text-white" size={20} />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-sm text-white">Personal Access Token</span>
        <AiOutlineInfoCircle className="text-white" size={16} />
      </div>

      {/* Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[#4a4a4a] bg-transparent px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
        readOnly
      />

      {/* Design URL label */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm text-white">Design URL</span>
        <AiOutlineInfoCircle className="text-white" size={16} />
      </div>

      {/* URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-[#4a4a4a] bg-transparent px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
        readOnly
      />

      {/* Button row */}
      <div className="mt-6 flex gap-3">
        <button className="rounded-lg bg-[#b5541c] px-6 py-3 font-semibold text-white">
          Awesome
        </button>
        <button className="rounded-lg bg-[#b5541c] px-6 py-3 font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="my-8" />

      {/* Recent Breakdowns heading */}
      <span className="text-xl font-bold text-white">Recent Breakdowns</span>
    </div>
  );
}
