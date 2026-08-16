import { IoSettingsOutline, IoChevronUp, IoChevronDown, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a18] p-4 flex flex-col gap-3 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <IoChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <IoChevronDown className="text-[#b2b2b1]" size={14} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <IoInformationCircleOutline className="text-[#a4a4a3]" size={15} />
        </div>
        <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <IoInformationCircleOutline className="text-[#a3a3a2]" size={15} />
        </div>
        <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2">
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button className="flex-1 bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] py-2 px-3">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] py-2 px-3">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
