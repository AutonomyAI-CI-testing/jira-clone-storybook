import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2b2b2b] text-[#e8e0d5] w-[500px] p-6 rounded-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xl font-bold">UI magician Agent</span>
        <HiOutlineCog className="text-[#e8e0d5] text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp className="text-[#b07040] text-lg flex-shrink-0" />
        <span className="text-[#b07040] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="text-[#e8e0d5] text-lg flex-shrink-0" />
        <span className="text-xl font-semibold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium">Personal Access Token</span>
          <HiInformationCircle className="text-[#e8e0d5] text-base opacity-70" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#3a3a3a] border border-[#555555] text-[#999] placeholder-[#777] rounded px-3 py-2.5 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2 mt-4">
          <span className="text-sm font-medium">Design URL</span>
          <HiInformationCircle className="text-[#e8e0d5] text-base opacity-70" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#3a3a3a] border border-[#555555] text-[#999] placeholder-[#777] rounded px-3 py-2.5 text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#b85c28] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a04f20] transition-colors">
          Awesome
        </button>
        <button className="bg-[#b85c28] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a04f20] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
