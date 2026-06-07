import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-4 bg-[#252525] p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-[#b5b5b5]">UI magician Agent</span>
        <FiSettings className="text-[#b5b5b5]" />
      </div>

      {/* Subheader */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#8b9291]" />
        <span className="text-sm text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Section heading */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" />
        <span className="font-bold text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#a4a4a3]">Personal Access Token</span>
          <FiInfo className="text-[#a4a4a3]" />
        </div>
        <input
          className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2 text-[#737470] placeholder:text-[#737470] focus:outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#a4a4a3]">Design URL</span>
          <FiInfo className="text-[#a4a4a3]" />
        </div>
        <input
          className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2 text-[#737470] placeholder:text-[#737470] focus:outline-none"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-6 py-3 font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-6 py-3 font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <span className="text-lg font-bold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}
