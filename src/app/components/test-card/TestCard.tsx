import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] overflow-auto bg-[#2b2b27] font-semibold"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top accent bar */}
      <div className="h-[9px] w-full bg-[#1a1a17]" />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <IoSettingsOutline size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <IoChevronUp size={10} color="#8b9291" />
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#3a3a35]" />

      {/* Add New Design section */}
      <div className="px-5 pt-5 pb-5">
        {/* Section title */}
        <div className="mb-4 flex items-center gap-3">
          <IoChevronUp size={12} color="#b2b2b1" />
          <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[11.5px] text-[#a4a4a3]">Personal Access Token</span>
            <IoInformationCircleOutline size={15} color="#a4a4a3" />
          </div>
          <div className="flex h-[37px] w-full items-center rounded border border-[#a5adad] bg-[#272822] px-3">
            <span className="text-[11.5px] text-[#737470]">figd_xxxxxxxxxxxxxxxxxx</span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
            <IoInformationCircleOutline size={15} color="#a3a3a2" />
          </div>
          <div className="flex h-[37px] w-full items-center rounded border-2 border-[#929291] bg-[#272822] px-3">
            <span className="text-[10.5px] text-[#71726e]">https://www.figma.com/file/:</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078] hover:opacity-90"
          >
            Awesome
          </button>
          <button
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078] hover:opacity-90"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#3a3a35]" />

      {/* Recent Breakdowns */}
      <div className="px-5 py-5">
        <span className="text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
