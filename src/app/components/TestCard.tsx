import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#282828] text-white w-[320px] min-h-screen p-5 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <HiOutlineCog className="text-white text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-[#c4813f] text-lg" />
        <span className="text-[#c4813f] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <HiChevronUp className="text-white text-lg" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <HiInformationCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-gray-400 placeholder-gray-600 text-sm w-full outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <HiInformationCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-gray-400 placeholder-gray-600 text-sm w-full outline-none"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg">
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
