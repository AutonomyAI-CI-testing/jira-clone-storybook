import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-[#1c1c1c] p-6 font-sans text-[#e8e0d8]"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-bold text-[#e8e0d8]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={22} className="text-[#9a8a7a]" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-sm text-[#9a8a7a]">
        <FiChevronUp size={16} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section heading */}
      <div className="mb-5 flex items-center gap-2">
        <FiChevronUp size={18} className="text-[#e8e0d8]" />
        <span className="text-lg font-bold text-[#e8e0d8]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-sm font-medium text-[#e8e0d8]">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={16} className="text-[#9a8a7a]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a8a7a] outline-none placeholder:text-[#6a6a6a]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-sm font-medium text-[#e8e0d8]">Design URL</span>
          <AiOutlineInfoCircle size={16} className="text-[#9a8a7a]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a8a7a] outline-none placeholder:text-[#6a6a6a]"
        />
      </div>

      {/* Buttons row */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b5511a] px-4 py-3 text-sm font-semibold text-[#e8e0d8] hover:bg-[#c55f20]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5511a] px-4 py-3 text-sm font-semibold text-[#e8e0d8] hover:bg-[#c55f20]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-[#e8e0d8]">Recent Breakdowns</h2>
    </div>
  );
};
