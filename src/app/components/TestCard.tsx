import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full max-w-sm p-4 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-[#b5b5b5] text-xl font-semibold">UI magician Agent</h1>
        <FiSettings className="text-[#b5b5b5] text-2xl" />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#8b9291] text-sm" />
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-[#b2b2b1] text-base" />
        <h2 className="text-[#b2b2b1] text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
          <FiInfo className="text-[#a4a4a3] text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] text-[#b5b5b5] placeholder:text-[#737470] rounded px-3 py-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a3a3a2] text-sm">Design URL</span>
          <FiInfo className="text-[#a3a3a2] text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] text-[#b5b5b5] placeholder:text-[#71726e] rounded px-3 py-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#843a17] text-[#c8b8b0] font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#c8b8b0] font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[#b0b0b0] text-lg font-semibold">Recent Breakdowns</h2>
    </div>
  );
}
