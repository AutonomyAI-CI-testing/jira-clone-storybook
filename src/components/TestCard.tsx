import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="font-sans w-[254px] bg-[#2a2a2a] p-5 text-sm">
      {/* Header row */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Subtitle row */}
      <div className="mb-8 flex items-center gap-2">
        <IoChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-4 flex items-center gap-2">
        <IoChevronUp className="text-[#b2b2b1]" size={13.5} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <HiInformationCircle className="text-[#a4a4a3]" size={14} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <HiInformationCircle className="text-[#a3a3a2]" size={14} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="mb-8 mt-4 flex gap-3">
        <button className="flex-1 rounded-[4px] bg-[#843a17] px-5 py-2 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded-[4px] bg-[#843a17] px-5 py-2 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-2 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
