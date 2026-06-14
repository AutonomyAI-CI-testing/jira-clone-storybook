import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white p-5 rounded-xl w-80">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">UI magician Agent</span>
        <AiOutlineSetting className="text-xl text-gray-300" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mt-2">
        <HiChevronUp className="text-gray-400 text-sm" />
        <span className="text-[#c8a882] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="my-6"></div>

      {/* 'Add New Design' section heading row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-white" />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* 'Personal Access Token' label row and input */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-sm text-white">Personal Access Token</span>
        <AiOutlineInfoCircle className="text-gray-400" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-3 py-2 text-gray-400 text-sm mt-1"
      />

      {/* 'Design URL' label row and input */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-sm text-white">Design URL</span>
        <AiOutlineInfoCircle className="text-gray-400" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-3 py-2 text-gray-400 text-sm mt-1"
      />

      {/* Button row */}
      <div className="flex gap-3 mt-6 justify-center">
        <button className="bg-[#8b4513] text-white rounded-lg px-6 py-3 text-sm font-semibold">
          Awesome
        </button>
        <button className="bg-[#8b4513] text-white rounded-lg px-6 py-3 text-sm font-semibold">
          Prepare
        </button>
      </div>

      {/* 'Recent Breakdowns' bold heading */}
      <div className="text-lg font-bold mt-8">Recent Breakdowns</div>
    </div>
  );
};