import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded bg-[#151512] p-4 font-['Inter',sans-serif] font-semibold"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <IoSettingsOutline className="text-[#b5b5b5]" size={18} />
    </div>

    {/* "From entire frame..." collapsible row */}
    <div className="mt-4 flex items-center gap-2">
      <IoChevronUp className="text-[#8b9291]" size={12} />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <IoChevronUp className="text-[#b2b2b1]" size={14} />
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4 flex items-center gap-1">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="text-[#a4a4a3]" size={13} />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-[4px] border-[1px] border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] placeholder-[#737470] outline-none"
      />

      {/* Design URL */}
      <div className="mt-4 flex items-center gap-1">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <FiInfo className="text-[#a3a3a2]" size={13} />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded-[4px] border-[2px] border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] text-[#71726e] placeholder-[#71726e] outline-none"
      />

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-5 py-2 text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-5 py-2 text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-8">
      <span className="text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</span>
    </div>
  </div>
);
