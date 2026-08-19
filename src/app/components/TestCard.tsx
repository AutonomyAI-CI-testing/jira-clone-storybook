import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#1a1a18] font-semibold overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FaCog size={14} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <FaChevronUp size={8} color="#8b9291" />
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <FaChevronUp size={10} color="#b2b2b1" />
          <span className="text-[13.5px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11.5px] text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FaInfoCircle size={13} color="#a4a4a3" />
          </div>
          <div
            className="w-full h-[37px] bg-[#272822] flex items-center px-3"
            style={{ border: "1px solid #a5adad" }}
          >
            <span className="text-[11.5px] text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11.5px] text-[#a3a3a2]">
              Design URL
            </span>
            <FaInfoCircle size={13} color="#a3a3a2" />
          </div>
          <div
            className="w-full h-[37px] bg-[#272822] flex items-center px-3"
            style={{ border: "2px solid #929291" }}
          >
            <span className="text-[10.5px] text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 h-[37px] bg-[#843a17] rounded text-[11.5px] text-[#8c8078] flex items-center justify-center"
          >
            Awesome
          </button>
          <button
            className="flex-1 h-[37px] bg-[#843a17] rounded text-[11.5px] text-[#8c8078] flex items-center justify-center"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="text-[13.5px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
