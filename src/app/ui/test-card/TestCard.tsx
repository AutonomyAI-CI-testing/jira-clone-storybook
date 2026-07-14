import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-80 rounded-xl bg-[#2a2a2a] p-5">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting size={22} className="text-white" />
      </div>

      {/* Collapsible-looking row */}
      <div className="mt-2 flex items-center gap-2">
        <HiChevronUp size={16} className="text-gray-400" />
        <span className="text-sm text-[#b05a2f]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Form area */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Personal Access Token field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <span className="text-sm text-white">Personal Access Token</span>
            <AiOutlineInfoCircle size={16} className="ml-2 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#555] bg-[#3a3a3a] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-[#777]"
            readOnly
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <span className="text-sm text-white">Design URL</span>
            <AiOutlineInfoCircle size={16} className="ml-2 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-[#555] bg-[#3a3a3a] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-[#777]"
            readOnly
          />
        </div>
      </div>

      {/* Button row */}
      <div className="mt-4 flex justify-center gap-4">
        <button className="rounded-lg bg-[#b05a2f] px-6 py-3 font-medium text-white hover:bg-[#9a4e28]">
          Awesome
        </button>
        <button className="rounded-lg bg-[#b05a2f] px-6 py-3 font-medium text-white hover:bg-[#9a4e28]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-10">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
