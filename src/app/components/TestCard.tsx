import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-5 min-h-screen text-white">
      {/* Header row */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <IoSettingsOutline className="text-[#b5b5b5] text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-[#8b9291] text-sm" />
        <span className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10">
        <div className="flex items-center gap-1 mb-4">
          <HiChevronUp className="text-[#b2b2b1] text-base" />
          <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</span>
            <HiInformationCircle className="text-[#a4a4a3] text-sm" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-[#333] rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[#a3a3a2] text-xs font-semibold">Design URL</span>
            <HiInformationCircle className="text-[#a3a3a2] text-sm" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#2a2a2a] border border-[#555] rounded px-3 py-2 text-xs text-[#71726e] placeholder-[#71726e] outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-[#7c4a2d] text-[#8c8078] font-semibold text-xs px-6 py-2 rounded-lg">
            Awesome
          </button>
          <button className="bg-[#7c4a2d] text-[#8c8078] font-semibold text-xs px-6 py-2 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</span>
      </div>
    </div>
  );
}
