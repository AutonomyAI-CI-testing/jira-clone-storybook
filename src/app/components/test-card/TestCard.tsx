import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] w-[254px] min-h-[508px] p-5 font-primary flex flex-col gap-3"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1.5">
        <FiChevronUp size={12} className="text-[#8b9291] shrink-0" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={14} className="text-[#b2b2b1] shrink-0" />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex flex-col gap-1.5 mt-2">
        <div className="flex items-center gap-2">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
            Personal Access Token
          </span>
          <FiInfo size={15} className="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] rounded-sm px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="flex flex-col gap-1.5 mt-1">
        <div className="flex items-center gap-2">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
            Design URL
          </span>
          <FiInfo size={15} className="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] rounded-sm px-3 py-2.5 text-[11.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] outline-none"
        />
      </div>

      {/* Buttons Row */}
      <div className="flex items-center justify-center gap-3 mt-2">
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg px-6 py-2 hover:bg-[#9a4520] active:bg-[#6e2f12]">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg px-6 py-2 hover:bg-[#9a4520] active:bg-[#6e2f12]">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
