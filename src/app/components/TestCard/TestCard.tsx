import { LuSettings2, LuChevronUp } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272017] text-[#e8e0d0] p-6 w-[320px] min-h-screen font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-[#e8e0d0]">UI magician Agent</h1>
        <LuSettings2 className="text-[#e8e0d0] text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <LuChevronUp className="text-[#b07040] text-base" />
        <span className="text-[#b07040] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <LuChevronUp className="text-[#e8e0d0] text-base" />
        <h2 className="text-lg font-bold text-[#e8e0d0]">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-[#e8e0d0]">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-[#e8e0d0] text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1a14] border border-[#4a3f30] text-[#7a6a5a] placeholder-[#7a6a5a] text-sm px-3 py-2.5 rounded outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-[#e8e0d0]">Design URL</label>
          <AiOutlineInfoCircle className="text-[#e8e0d0] text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1a14] border border-[#4a3f30] text-[#7a6a5a] placeholder-[#7a6a5a] text-sm px-3 py-2.5 rounded outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button className="flex-1 bg-[#c45e28] text-[#f0e8d8] font-semibold text-sm py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#a04a1e] text-[#f0e8d8] font-semibold text-sm py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-[#e8e0d0]">Recent Breakdowns</h2>
    </div>
  );
};
