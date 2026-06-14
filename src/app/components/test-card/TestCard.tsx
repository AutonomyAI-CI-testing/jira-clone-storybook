import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-72 rounded-xl p-5 bg-[#2b2b2b] text-white"
  >
    {/* header row */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg">
        UI magician Agent
      </h2>
      <AiOutlineSetting className="text-xl" />
    </div>

    {/* caret row */}
    <div className="flex items-center gap-1 text-sm mb-6 text-[#b07a50]">
      <RiArrowDropUpLine className="text-lg" />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Add New Design section */}
    <div className="flex items-center gap-1 font-bold mb-4">
      <RiArrowDropUpLine className="text-lg" />
      <span>Add New Design</span>
    </div>

    {/* Personal Access Token input */}
    <div className="mb-3">
      <div className="flex items-center gap-1 text-sm mb-1 text-white/80">
        <span>Personal Access Token</span>
        <AiOutlineInfoCircle />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded px-3 py-2 text-sm bg-[#3a3a3a] border border-white/15 text-white/50 placeholder-white/30 focus:outline-none"
      />
    </div>

    {/* Design URL input */}
    <div className="mb-6">
      <div className="flex items-center gap-1 text-sm mb-1 text-white/80">
        <span>Design URL</span>
        <AiOutlineInfoCircle />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded px-3 py-2 text-sm bg-[#3a3a3a] border border-white/15 text-white/50 placeholder-white/30 focus:outline-none"
      />
    </div>

    {/* Buttons row */}
    <div className="flex gap-3 mb-8">
      <button
        className="flex-1 rounded-lg py-2 text-sm font-semibold bg-[#c1622a] hover:bg-[#d1723a] transition-colors"
      >
        Awesome
      </button>
      <button
        className="flex-1 rounded-lg py-2 text-sm font-semibold bg-[#c1622a] hover:bg-[#d1723a] transition-colors"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="text-lg font-bold">
      Recent Breakdowns
    </h3>
  </div>
);
