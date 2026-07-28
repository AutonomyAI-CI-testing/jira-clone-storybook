import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2a2a] p-5 font-sans text-white"
    >
      {/* Header Row */}
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="text-2xl text-gray-300" />
      </div>

      {/* Subtitle Row */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp className="text-base text-[#c4783a]" />
        <span className="text-sm text-[#c4783a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp className="text-lg text-white" />
        <h2 className="text-lg font-semibold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-base text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#555] bg-[#363636] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-base text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#363636] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons Row */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2c] px-4 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#9e4d22] px-4 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
