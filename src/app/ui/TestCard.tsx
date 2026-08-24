import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a17] w-[254px] font-['Inter'] overflow-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <IoSettingsOutline color="#b5b5b5" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <IoChevronUp color="#8b9291" size={10} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-5">
          <IoChevronUp color="#b2b2b1" size={13} />
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
              Personal Access Token
            </span>
            <IoInformationCircleOutline color="#a4a4a3" size={15} />
          </div>
          <div className="bg-[#272822] border border-[#a5adad] px-3 h-[37px] flex items-center">
            <span className="text-[#737470] text-[11.5px] font-semibold leading-[13.92px]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
              Design URL
            </span>
            <IoInformationCircleOutline color="#a3a3a2" size={15} />
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] px-3 h-[37px] flex items-center">
            <span className="text-[#71726e] text-[10.5px] font-semibold leading-[12.71px]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-10">
          <button
            className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] h-[37px] flex items-center justify-center"
          >
            Awesome
          </button>
          <button
            className="flex-1 bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] h-[37px] flex items-center justify-center"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
