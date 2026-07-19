import { HiChevronUp, HiOutlineCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-lg bg-[#1c1d17] px-4 pb-6 pt-5 text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-white">UI magician Agent</span>
        <HiOutlineCog size={22} className="text-white opacity-80" />
      </div>

      {/* Collapsible row */}
      <div className="mt-3 flex items-center gap-1">
        <HiChevronUp size={14} className="text-[#c47f52]" />
        <span className="text-sm text-[#c47f52]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={16} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-[#d0c8be]">Personal Access Token</span>
          <HiInformationCircle size={16} className="text-[#a0a0a0]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#929291] bg-[#272822] px-3 py-2 text-sm text-[#8a8a8a] outline-none placeholder:text-[#6a6a6a]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-3">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-[#d0c8be]">Design URL</span>
          <HiInformationCircle size={16} className="text-[#a0a0a0]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-sm text-[#8a8a8a] outline-none placeholder:text-[#6a6a6a]"
        />
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#843a17] py-2 text-sm font-bold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#843a17] py-2 text-sm font-bold text-white">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
