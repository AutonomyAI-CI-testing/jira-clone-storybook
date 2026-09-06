import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-64 flex flex-col bg-[#1e1e1a] font-semibold"
      style={{ fontFamily: "Inter, sans-serif", minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[#b5b5b5]" style={{ fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <IoChevronUp size={10} color="#8b9291" />
        <span className="text-[#8b9291] truncate" style={{ fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5 flex flex-col gap-3">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-1">
          <IoChevronUp size={12} color="#b2b2b1" />
          <span className="text-[#b2b2b1]" style={{ fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[#a4a4a3]" style={{ fontSize: "11.5px" }}>
              Personal Access Token
            </span>
            <IoInformationCircleOutline size={14} color="#a4a4a3" />
          </div>
          <div
            className="w-full px-3 py-2 bg-[#272822]"
            style={{ border: "1px solid #a5adad", borderRadius: "2px" }}
          >
            <span className="text-[#737470]" style={{ fontSize: "11.5px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[#a3a3a2]" style={{ fontSize: "11.5px" }}>
              Design URL
            </span>
            <IoInformationCircleOutline size={14} color="#a3a3a2" />
          </div>
          <div
            className="w-full px-3 py-2 bg-[#272822]"
            style={{ border: "2px solid #929291", borderRadius: "2px" }}
          >
            <span className="text-[#71726e]" style={{ fontSize: "10.5px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-2 text-[#8c8078] bg-[#843a17]"
            style={{ fontSize: "11.5px", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 text-[#8c8078] bg-[#843a17]"
            style={{ fontSize: "11.5px", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 mt-10">
        <span className="text-[#b0b0b0]" style={{ fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
