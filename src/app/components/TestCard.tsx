import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] flex flex-col p-5 gap-y-2"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <FiChevronUp size={10} className="text-[#8b9291]" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#b2b2b1]" />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1 mt-3">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
            Personal Access Token
          </span>
          <FiInfo size={14} className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex items-center gap-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
            Design URL
          </span>
          <FiInfo size={14} className="text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] px-3 py-2 text-[11.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 justify-center mt-3">
        <button className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold px-5 py-2.5">
          Awesome
        </button>
        <button className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold px-5 py-2.5">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <p className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px] mt-4">
        Recent Breakdowns
      </p>
    </div>
  );
};
