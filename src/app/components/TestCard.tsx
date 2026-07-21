import { HiChevronUp } from "react-icons/hi";
import { FiSettings, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2520] text-white p-6 w-[320px] min-h-[600px] flex flex-col"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xl font-bold">UI magician Agent</span>
        <FiSettings size={22} className="text-white" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp size={18} className="text-[#b85c2a]" />
        <span className="text-[#b85c2a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp size={20} className="text-white" />
        <span className="text-lg font-semibold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <FiInfo size={15} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1a17] border border-gray-600 rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm text-gray-300">Design URL</span>
          <FiInfo size={15} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1a17] border border-gray-500 rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 mb-8 justify-center">
        <button className="bg-[#b85c2a] text-white font-semibold rounded-lg px-6 py-3 hover:bg-[#a04f24] active:bg-[#8e4520]">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white font-semibold rounded-lg px-6 py-3 hover:bg-[#a04f24] active:bg-[#8e4520]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-auto pt-4">
        <span className="text-lg font-semibold text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
