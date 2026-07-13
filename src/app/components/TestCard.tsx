import { IoChevronUp, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-5 bg-[#2a2a2a] p-5 text-white"
      style={{ maxWidth: "340px", minHeight: "100vh" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={22} color="#aaaaaa" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={16} color="#888888" />
        <span className="text-sm text-[#c07a50]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-6 flex flex-col gap-4">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <IoChevronUp size={18} color="#ffffff" />
          <span className="text-base font-bold text-white">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white">Personal Access Token</span>
            <AiOutlineInfoCircle size={16} color="#aaaaaa" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded border border-[#555555] bg-[#333333] px-3 py-2 text-sm text-[#888888] placeholder-[#666666] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white">Design URL</span>
            <AiOutlineInfoCircle size={16} color="#aaaaaa" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded border border-[#777777] bg-[#333333] px-3 py-2 text-sm text-[#888888] placeholder-[#666666] outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-1">
          <button className="flex-1 rounded-xl bg-[#b85c2a] py-3 text-sm font-medium text-white">
            Awesome
          </button>
          <button className="flex-1 rounded-xl bg-[#b85c2a] py-3 text-sm font-medium text-white">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
