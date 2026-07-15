import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full flex-col bg-[#2a2a2a] px-5 py-6"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={24} className="text-white" />
      </div>

      {/* Chevron + muted text row */}
      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-sm text-[#c47a3a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-3">
        <HiChevronUp size={20} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <HiInformationCircle size={18} className="text-white opacity-70" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-4 py-3 text-sm text-[#888] placeholder-[#888] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <HiInformationCircle size={18} className="text-white opacity-70" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-4 py-3 text-sm text-[#888] placeholder-[#888] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#8b4513] px-6 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#8b4513] px-6 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
