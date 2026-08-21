import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1c1c1a] w-[254px] p-4 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-6">
        <FiChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-[#b2b2b1]" size={13} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
            Personal Access Token
          </span>
          <FiInfo className="text-[#a4a4a3]" size={13} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] text-[11.5px] font-semibold placeholder:text-[#737470] px-3 py-2 outline-none rounded-sm"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
            Design URL
          </span>
          <FiInfo className="text-[#a3a3a2]" size={13} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] text-[11.5px] font-semibold placeholder:text-[#71726e] px-3 py-2 outline-none rounded-sm"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] rounded-[4px] py-2 px-3"
        >
          Awesome
        </button>
        <button
          className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] rounded-[4px] py-2 px-3"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

