import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 rounded-lg text-white max-w-sm mx-auto">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg">UI magician Agent</span>
        <AiOutlineSetting size={22} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-amber-600 text-sm mb-6">
        <HiChevronUp />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section heading: Add New Design */}
      <div className="flex items-center gap-2 font-bold text-white text-xl mb-4">
        <HiChevronUp />
        <span>Add New Design</span>
      </div>

      {/* Form field: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 text-white text-sm font-medium mb-2">
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle size={16} />
        </div>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-neutral-600 rounded px-3 py-2 text-neutral-400 text-sm"
        />
      </div>

      {/* Form field: Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 text-white text-sm font-medium mb-2">
          <span>Design URL</span>
          <AiOutlineInfoCircle size={16} />
        </div>
        <input
          placeholder="https://www.figma.com/file/"
          className="w-full bg-[#1e1e1e] border border-neutral-600 rounded px-3 py-2 text-neutral-400 text-sm"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-4 mb-8">
        <button className="bg-[#b85c2a] hover:bg-[#a04f22] text-white px-6 py-2 rounded-lg font-medium flex-1">
          Awesome
        </button>
        <button className="bg-[#b85c2a] hover:bg-[#a04f22] text-white px-6 py-2 rounded-lg font-medium flex-1">
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <h2 className="font-bold text-white text-xl">
        Recent Breakdowns
      </h2>
    </div>
  );
};