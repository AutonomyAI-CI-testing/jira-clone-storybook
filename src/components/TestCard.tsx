import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#2a2a2a] w-[320px] p-5 flex flex-col">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        <AiOutlineSetting className="text-white" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1.5 mt-2">
        <FiChevronUp className="text-[#b5795a]" size={16} />
        <span className="text-[#b5795a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Section header: Add New Design */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#aaaaaa] text-sm">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#aaaaaa]" size={16} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#4a4a4a] rounded px-3 py-2.5 text-sm text-[#888888] placeholder:text-[#666666] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#aaaaaa] text-sm">Design URL</span>
          <AiOutlineInfoCircle className="text-[#aaaaaa]" size={16} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#4a4a4a] rounded px-3 py-2.5 text-sm text-[#888888] placeholder:text-[#666666] outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-[#b5541e] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541e] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-white font-bold text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
}
