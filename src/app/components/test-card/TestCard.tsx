import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[480px] rounded-lg bg-[#252525] p-6 text-white">
        {/* 1. Header row */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">
            UI magician Agent
          </span>
          <IoSettingsOutline size={22} className="text-white" />
        </div>

        {/* 2. Collapsible-looking row */}
        <div className="mb-8 flex items-center gap-2">
          <RiArrowUpSLine size={18} className="text-gray-400" />
          <span className="text-sm text-[#c47a3a]">
            From entire frame to a singl...
          </span>
        </div>

        {/* 3. Add New Design heading */}
        <div className="mb-5 flex items-center gap-2">
          <RiArrowUpSLine size={20} className="text-white" />
          <span className="text-lg font-bold text-white">Add New Design</span>
        </div>

        {/* 4. Personal Access Token field */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-sm text-white">Personal Access Token</span>
            <AiOutlineInfoCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded border border-[#444] bg-[#1a1a1a] px-3 py-2 text-gray-300 placeholder-gray-600 outline-none"
          />
        </div>

        {/* 5. Design URL field */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-sm text-white">Design URL</span>
            <AiOutlineInfoCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded border border-[#555] bg-[#1a1a1a] px-3 py-2 text-gray-300 placeholder-gray-600 outline-none"
          />
        </div>

        {/* 6. Buttons */}
        <div className="mb-10 flex gap-4">
          <button className="rounded-lg bg-[#b5451b] px-8 py-2.5 text-sm font-medium text-white">
            Awesome
          </button>
          <button className="rounded-lg bg-[#b5451b] px-8 py-2.5 text-sm font-medium text-white">
            Prepare
          </button>
        </div>

        {/* 7. Recent Breakdowns heading */}
        <div>
          <span className="text-lg font-bold text-white">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
