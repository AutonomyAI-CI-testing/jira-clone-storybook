import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#272727] px-5 py-6 font-sans"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={22} className="text-white opacity-80" />
      </div>

      {/* Chevron + muted text row */}
      <div className="mb-8 flex items-center gap-2">
        <HiChevronUp size={18} className="text-white opacity-60" />
        <span className="text-sm text-[#c47a3a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div className="mb-6 flex items-center gap-2">
        <HiChevronUp size={20} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm text-white opacity-80">
          Personal Access Token
        </span>
        <HiInformationCircle size={17} className="text-white opacity-50" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full rounded border border-[#555] bg-[#1e1e1e] px-4 py-3 text-sm text-white placeholder-[#888] outline-none"
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm text-white opacity-80">Design URL</span>
        <HiInformationCircle size={17} className="text-white opacity-50" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mb-6 w-full rounded border border-[#555] bg-[#1e1e1e] px-4 py-3 text-sm text-white placeholder-[#888] outline-none"
      />

      {/* Buttons row */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#8b4513] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#8b4513] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
