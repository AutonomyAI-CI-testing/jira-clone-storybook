import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#252525] min-h-screen w-full max-w-[320px] mx-auto p-5 flex flex-col"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-[#e5ddd5] text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-[#e5ddd5]" size={24} />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-10">
        <BiChevronUp className="text-[#c07a40]" size={18} />
        <span className="text-[#c07a40] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <BiChevronUp className="text-[#e5ddd5]" size={22} />
        <h2 className="text-[#e5ddd5] text-2xl font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#c5bdb5] text-sm font-medium">Personal Access Token</span>
        <AiOutlineInfoCircle className="text-[#c5bdb5]" size={16} />
      </div>

      {/* Personal Access Token Input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#3a3430] border border-[#5a5048] rounded text-[#8a7e75] text-sm px-3 py-3 mb-4 placeholder:text-[#7a6e65] outline-none"
      />

      {/* Design URL Label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#c5bdb5] text-sm font-medium">Design URL</span>
        <AiOutlineInfoCircle className="text-[#c5bdb5]" size={16} />
      </div>

      {/* Design URL Input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#3a3430] border border-[#5a5048] rounded text-[#8a7e75] text-sm px-3 py-3 mb-6 placeholder:text-[#7a6e65] outline-none"
      />

      {/* Buttons Row */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#a0522d] hover:bg-[#b5622d] text-[#e5ddd5] font-semibold text-base py-3 px-4 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#8b4513] hover:bg-[#a0521a] text-[#c5bdb5] font-semibold text-base py-3 px-4 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[#e5ddd5] text-2xl font-bold">Recent Breakdowns</h2>
    </div>
  );
};
