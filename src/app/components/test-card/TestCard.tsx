import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#232120] text-white w-[375px] min-h-screen p-6 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#c97a4a] text-sm mb-10">
        <RiArrowUpSLine className="text-lg shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <RiArrowUpSLine className="text-white text-xl shrink-0" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            <AiOutlineInfoCircle className="text-gray-400 text-base shrink-0" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-300">Design URL</span>
            <AiOutlineInfoCircle className="text-gray-400 text-base shrink-0" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-[#b85c2c] text-white font-semibold rounded-xl px-8 py-4 text-base">
            Awesome
          </button>
          <button className="bg-[#b85c2c] text-white font-semibold rounded-xl px-8 py-4 text-base">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
