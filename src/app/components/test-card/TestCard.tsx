import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { IoChevronUp } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[320px] flex-col gap-5 rounded-lg bg-[#252525] p-5 text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting size={22} className="text-[#aaaaaa]" />
      </div>

      {/* Collapsible label row */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={14} className="text-[#aaaaaa]" />
        <span className="text-sm text-[#b07050]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={16} className="text-white" />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#cccccc]">Personal Access Token</span>
            <AiOutlineInfoCircle size={16} className="text-[#aaaaaa]" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#4a4a4a] bg-[#1e1e1e] px-3 py-2 text-sm text-[#888888] placeholder:text-[#666666] focus:outline-none focus:ring-1 focus:ring-[#4a4a4a]"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#cccccc]">Design URL</span>
            <AiOutlineInfoCircle size={16} className="text-[#aaaaaa]" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-[#4a4a4a] bg-[#1e1e1e] px-3 py-2 text-sm text-[#888888] placeholder:text-[#666666] focus:outline-none focus:ring-1 focus:ring-[#4a4a4a]"
            readOnly
          />
        </div>
      </div>

      {/* Button row */}
      <div className="flex items-center justify-center gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2e] px-4 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2e] px-4 py-3 text-sm font-semibold text-white">
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
