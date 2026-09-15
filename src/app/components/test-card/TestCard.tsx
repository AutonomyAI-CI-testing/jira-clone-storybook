import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-sm bg-[#1a1a1a] p-5 font-sans"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FaCog className="text-[#b5b5b5]" size={16} />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FaChevronUp className="text-[#8b9291]" size={10} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <FaChevronUp className="text-[#b2b2b1]" size={12} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FaInfoCircle className="text-[#a4a4a3]" size={11} />
      </div>
      <input
        readOnly
        value=""
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-sm border border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />

      <div className="mt-4 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FaInfoCircle className="text-[#a3a3a2]" size={11} />
      </div>
      <input
        readOnly
        value=""
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded-sm border-2 border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
