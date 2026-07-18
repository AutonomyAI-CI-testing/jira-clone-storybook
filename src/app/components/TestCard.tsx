import { AiOutlineSetting, AiOutlineInfoCircle, AiOutlineUp } from "react-icons/ai";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen p-6 max-w-sm mx-auto">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-300 text-2xl" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mt-3">
        <AiOutlineUp className="text-amber-600 text-sm" />
        <span className="text-amber-600 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mt-10">
        <AiOutlineUp className="text-white text-base" />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-gray-300 text-sm font-semibold">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#333] border border-gray-600 rounded px-3 py-2 w-full text-gray-300 placeholder:text-gray-500 outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-gray-300 text-sm font-semibold">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="bg-[#333] border border-gray-600 rounded px-3 py-2 w-full text-gray-300 placeholder:text-gray-500 outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-4 mt-6">
        <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg px-8 py-3 flex-1">
          Awesome
        </button>
        <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg px-8 py-3 flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-10">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
