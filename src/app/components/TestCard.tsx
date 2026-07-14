import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi2";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 w-full max-w-sm min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-[#c47f5a] text-lg" />
        <span className="text-[#c47f5a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="text-white text-lg" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm font-medium text-gray-200">
            Personal Access Token
          </span>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 text-gray-300 placeholder-gray-500 text-sm outline-none focus:border-[#c1612a]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm font-medium text-gray-200">Design URL</span>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 text-gray-300 placeholder-gray-500 text-sm outline-none focus:border-[#c1612a]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button className="bg-[#c1612a] text-white font-semibold rounded-lg px-8 py-3 hover:bg-[#a8521f]">
          Awesome
        </button>
        <button className="bg-[#c1612a] text-white font-semibold rounded-lg px-8 py-3 hover:bg-[#a8521f]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
