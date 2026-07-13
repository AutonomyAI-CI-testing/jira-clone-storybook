import { AiOutlineSetting } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-5 font-sans">

      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[#d4cfc8] text-xl font-semibold">UI magician Agent</h1>
        <AiOutlineSetting size={24} className="text-[#d4cfc8]" />
      </div>

      {/* Collapsible subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <RiArrowUpSLine size={18} className="text-[#a07060]" />
        <span className="text-[#a07060] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <RiArrowUpSLine size={20} className="text-[#d4cfc8]" />
        <h2 className="text-[#d4cfc8] text-lg font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#c8c0b8] text-sm font-medium">
            Personal Access Token
          </label>
          <HiInformationCircle size={16} className="text-[#c8c0b8]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#323228] border border-[#929291] rounded px-3 py-2 text-[#9a9490] text-sm placeholder-[#7a7470] outline-none focus:border-[#b07050]"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#c8c0b8] text-sm font-medium">Design URL</label>
          <HiInformationCircle size={16} className="text-[#c8c0b8]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#323228] border border-[#a5adad] rounded px-3 py-2 text-[#9a9490] text-sm placeholder-[#7a7470] outline-none focus:border-[#b07050]"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#843A17] text-[#e8d8c8] text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#9a4520] transition-colors">
          Awesome
        </button>
        <button className="bg-[#843A17] text-[#e8d8c8] text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#9a4520] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[#d4cfc8] text-xl font-semibold">Recent Breakdowns</h2>
    </div>
  );
};
