import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

export function TestCard() {
  return (
    <div id="testElem" style={{ backgroundColor: "#2a2a2a" }} className="min-h-screen w-full text-white font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-2">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <AiOutlineSetting className="text-white text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <BsChevronUp className="text-amber-700 text-sm" />
        <span className="text-amber-700 text-sm truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={{ backgroundColor: "#343434" }} className="mx-4 rounded-lg px-4 py-5 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <BsChevronUp className="text-white text-base" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300 font-medium">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            readOnly
            value=""
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{ backgroundColor: "#2a2a2a", borderColor: "#6b5a4a" }}
            className="w-full border rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300 font-medium">Design URL</label>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            readOnly
            value=""
            placeholder="https://www.figma.com/file/:"
            style={{ backgroundColor: "#2a2a2a", borderColor: "#6b5a4a" }}
            className="w-full border rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            style={{ backgroundColor: "#c0622a" }}
            className="flex-1 py-3 rounded-xl text-white font-semibold text-base"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: "#c0622a" }}
            className="flex-1 py-3 rounded-xl text-white font-semibold text-base"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-2">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
