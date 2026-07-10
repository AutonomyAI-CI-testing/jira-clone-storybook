import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1c1c1c] p-6 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-[#e8e0d8]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={24} className="text-[#e8e0d8]" />
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-2 text-[#9a8878]">
        <FiChevronUp size={16} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={20} className="text-[#e8e0d8]" />
        <span className="text-lg font-bold text-[#e8e0d8]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium text-[#e8e0d8]">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={16} className="text-[#9a8878]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] px-3 py-3 text-sm text-[#9a8878] placeholder-[#6a6060] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium text-[#e8e0d8]">
            Design URL
          </span>
          <AiOutlineInfoCircle size={16} className="text-[#9a8878]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#4a4040] bg-[#2a2a2a] px-3 py-3 text-sm text-[#9a8878] placeholder-[#6a6060] outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b5511a] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5511a] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <h2 className="text-lg font-bold text-[#e8e0d8]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
