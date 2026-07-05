import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

export function TestCard() {
  return (
    <div id="testElem">
      <div className="bg-[#272822] w-full p-6 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center">
          <span className="text-[#b5b5b5] text-xl font-bold">UI magician Agent</span>
          <IoSettingsOutline className="text-[#b5b5b5]" size={24} />
        </div>

        {/* Collapse row */}
        <div className="flex items-center gap-2 mt-3">
          <IoChevronUp className="text-[#8b9291]" size={16} />
          <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
        </div>

        {/* Spacer */}
        <div className="h-8" />

        {/* Section header */}
        <div className="flex items-center gap-2">
          <IoChevronUp className="text-[#b2b2b1]" size={20} />
          <span className="text-[#b2b2b1] text-lg font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token input */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
            <IoInformationCircleOutline className="text-[#a4a4a3]" size={16} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full bg-[#1e1e1b] border border-[#a5adad] rounded p-3 text-[#737470] placeholder-[#737470] text-sm outline-none"
          />
        </div>

        {/* Design URL input */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#a4a4a3] text-sm">Design URL</span>
            <IoInformationCircleOutline className="text-[#a4a4a3]" size={16} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#1e1e1b] border border-[#929291] rounded p-3 text-[#737470] placeholder-[#737470] text-sm outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 justify-center">
          <button className="bg-[#843a17] text-[#e8cfc3] px-8 py-3 rounded-xl font-semibold text-base">
            Awesome
          </button>
          <button className="bg-[#843a17] text-[#e8cfc3] px-8 py-3 rounded-xl font-semibold text-base">
            Prepare
          </button>
        </div>

        {/* Spacer */}
        <div className="h-8" />

        {/* Footer */}
        <div className="mt-4">
          <span className="text-[#b0b0b0] text-xl font-bold">Recent Breakdowns</span>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
