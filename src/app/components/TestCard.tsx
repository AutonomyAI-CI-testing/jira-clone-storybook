import { IoSettingsOutline, IoChevronUpOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="min-h-screen w-full px-5 py-6 flex flex-col font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <IoSettingsOutline className="text-white" size={24} />
      </div>

      {/* 2. Chevron-up + muted orange/brown subtitle */}
      <div className="flex items-center gap-2 mb-2">
        <IoChevronUpOutline
          style={{ color: "#a0622b" }}
          size={18}
          className="shrink-0"
        />
        <span style={{ color: "#a0622b" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="min-h-[60px]" />

      {/* 4. Section header: chevron-up + bold white 'Add New Design' */}
      <div className="flex items-center gap-2 mb-5">
        <IoChevronUpOutline className="text-white shrink-0" size={20} />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* 5. Personal Access Token label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-300 text-sm font-medium">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle className="text-gray-300" size={16} />
      </div>

      {/* 6. Dark input — PAT */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{ backgroundColor: "#363636" }}
        className="w-full rounded border border-zinc-600 px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none mb-4"
      />

      {/* 7. Design URL label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-300 text-sm font-medium">Design URL</span>
        <AiOutlineInfoCircle className="text-gray-300" size={16} />
      </div>

      {/* 8. Dark input — URL */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{ backgroundColor: "#363636" }}
        className="w-full rounded border border-zinc-500 px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none mb-6"
      />

      {/* 9. Two burnt-orange buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button
          type="button"
          style={{ backgroundColor: "#b5511a" }}
          className="flex-1 max-w-[180px] rounded-lg px-6 py-3 text-white font-semibold text-base hover:opacity-90 active:opacity-80"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#b5511a" }}
          className="flex-1 max-w-[180px] rounded-lg px-6 py-3 text-white font-semibold text-base hover:opacity-90 active:opacity-80"
        >
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns heading */}
      <div className="mt-2">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
