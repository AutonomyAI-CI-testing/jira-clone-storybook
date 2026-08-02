import { IoSettingsOutline } from "react-icons/io5";
import { LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2420] text-white w-[320px] min-h-screen p-5 flex flex-col gap-3"
    >
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-300 w-6 h-6" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c4662a] text-sm">
        <LuChevronUp className="w-4 h-4 flex-shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <LuChevronUp className="w-5 h-5 text-white" />
        <h2 className="text-lg font-semibold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <LuInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1916] border border-[#4a3f38] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-sm text-gray-300">Design URL</label>
          <LuInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1916] border border-[#4a3f38] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button className="flex-1 bg-[#b5521b] hover:bg-[#9a4517] text-white font-semibold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5521b] hover:bg-[#9a4517] text-white font-semibold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
