import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-[#232320] p-5 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtext row */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" size={13} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle className="text-[#a4a4a3]" size={15} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        readOnly
        className="mt-2 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] outline-none"
      />

      {/* Design URL */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <AiOutlineInfoCircle className="text-[#a3a3a2]" size={15} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mt-2 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] outline-none"
      />

      {/* Action buttons */}
      <div className="mt-5 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
