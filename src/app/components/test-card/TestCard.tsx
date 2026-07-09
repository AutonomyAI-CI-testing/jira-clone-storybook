import { HiChevronUp, HiInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white min-h-screen p-6 max-w-sm mx-auto flex flex-col gap-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-2xl text-zinc-400" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-[#c1623f] text-lg flex-shrink-0" />
        <span className="text-[#c1623f] text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <HiChevronUp className="text-white text-xl flex-shrink-0" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-zinc-200">
              Personal Access Token
            </label>
            <HiInformationCircle className="text-zinc-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#2a2a2a] border border-[#3a3a3a] rounded px-3 py-2 text-sm text-zinc-400 placeholder-zinc-500 outline-none w-full"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-zinc-200">
              Design URL
            </label>
            <HiInformationCircle className="text-zinc-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#2a2a2a] border border-[#3a3a3a] rounded px-3 py-2 text-sm text-zinc-400 placeholder-zinc-500 outline-none w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button className="flex-1 bg-[#9e4c2a] hover:bg-[#b5572f] text-white font-semibold py-3 rounded-xl transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#9e4c2a] hover:bg-[#b5572f] text-white font-semibold py-3 rounded-xl transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
