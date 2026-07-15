import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[390px] min-h-screen bg-[#2a2a2a] p-5 flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#e5e5e5] text-xl font-bold">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#e5e5e5]" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp className="text-[#c87941]" size={16} />
        <span className="text-[#c87941] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-[#e5e5e5]" size={18} />
        <span className="text-[#e5e5e5] text-xl font-bold">Add New Design</span>
      </div>

      {/* Form field: Personal Access Token */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[#e5e5e5] text-sm font-semibold">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle className="text-[#e5e5e5]" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#333333] border border-[#555555] rounded px-3 py-3 text-[#888888] placeholder:text-[#888888] text-sm outline-none"
        />
      </div>

      {/* Form field: Design URL */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[#e5e5e5] text-sm font-semibold">
            Design URL
          </span>
          <AiOutlineInfoCircle className="text-[#e5e5e5]" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#333333] border border-[#777777] rounded px-3 py-3 text-[#888888] placeholder:text-[#888888] text-sm outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="flex items-center gap-4 mb-10 px-2">
        <button className="flex-1 bg-[#b5430c] text-[#e5e5e5] font-semibold text-base py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5430c] text-[#e5e5e5] font-semibold text-base py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span className="text-[#e5e5e5] text-xl font-bold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
