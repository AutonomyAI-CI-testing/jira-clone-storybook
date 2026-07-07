import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] bg-[#2a2a2a] p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline className="text-xl text-[#b0b0b0]" />
      </div>

      {/* Collapsed section */}
      <div className="mb-8 flex items-center gap-2">
        <HiChevronUp className="text-sm text-[#c8956c]" />
        <span className="text-sm text-[#c8956c]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2">
        <HiChevronUp className="text-base text-white" />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-[#d0d0d0]">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-base text-[#b0b0b0]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2.5 text-sm text-[#888] placeholder-[#888] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-[#d0d0d0]">Design URL</span>
          <AiOutlineInfoCircle className="text-base text-[#b0b0b0]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2.5 text-sm text-[#888] placeholder-[#888] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#9b4e23] px-6 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#9b4e23] px-6 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
