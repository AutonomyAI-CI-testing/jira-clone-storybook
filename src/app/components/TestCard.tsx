import { HiChevronUp } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2b2b2b" }}
      className="w-[320px] min-h-screen text-white px-5 py-6 flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="w-6 h-6 text-white" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1" style={{ color: "#c47a4a" }}>
        <HiChevronUp className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center gap-2">
          <HiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-300">Design URL</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-1">
          <button
            style={{ backgroundColor: "#b85c2a" }}
            className="flex-1 text-white font-semibold py-3 rounded-lg text-sm"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: "#b85c2a" }}
            className="flex-1 text-white font-semibold py-3 rounded-lg text-sm"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
