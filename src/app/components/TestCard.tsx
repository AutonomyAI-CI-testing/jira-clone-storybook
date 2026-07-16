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
        <AiOutlineInfoCircle className="text-gray-400" size={15} />
      </div>

      {/* 6. Personal Access Token input */}
      <input
        className="w-full rounded border border-[#555] bg-[#1c1c1c] px-3 py-2 text-sm text-gray-400 outline-none mb-4"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* 7. Design URL label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-300 text-sm font-medium">Design URL</span>
        <AiOutlineInfoCircle className="text-gray-400" size={15} />
      </div>

      {/* 8. Design URL input */}
      <input
        className="w-full rounded border border-[#555] bg-[#1c1c1c] px-3 py-2 text-sm text-gray-400 outline-none mb-6"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* 9. Action buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button
          className="rounded-lg px-8 py-3 text-white font-semibold"
          style={{ backgroundColor: "#c1622f" }}
        >
          Awesome
        </button>
        <button
          className="rounded-lg px-8 py-3 text-white font-semibold"
          style={{ backgroundColor: "#c1622f" }}
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
