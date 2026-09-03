import { FaCog } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] bg-[#272822] font-semibold"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[#b5b5b5]" style={{ fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <FaCog className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-10">
        <FiChevronUp className="text-[#8b9291] shrink-0" size={10} />
        <span className="text-[#8b9291] truncate" style={{ fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <FiChevronUp className="text-[#b2b2b1] shrink-0" size={12} />
          <span className="text-[#b2b2b1]" style={{ fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[#a4a4a3]" style={{ fontSize: "11.5px" }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle className="text-[#a4a4a3] shrink-0" size={15} />
          </div>
          <div
            className="w-full flex items-center px-3 bg-[#272822]"
            style={{
              height: "36px",
              border: "1px solid #a5adad",
            }}
          >
            <span className="text-[#737470]" style={{ fontSize: "11.5px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[#a3a3a2]" style={{ fontSize: "11.5px" }}>
              Design URL
            </span>
            <AiOutlineInfoCircle className="text-[#a3a3a2] shrink-0" size={15} />
          </div>
          <div
            className="w-full flex items-center px-3 bg-[#272822]"
            style={{
              height: "37px",
              border: "2px solid #929291",
            }}
          >
            <span className="text-[#71726e]" style={{ fontSize: "10.5px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-1">
          <button
            className="bg-[#843a17] text-[#8c8078] rounded font-semibold"
            style={{ width: "85px", height: "37px", fontSize: "11.5px" }}
          >
            Awesome
          </button>
          <button
            className="bg-[#843a17] text-[#8c8078] rounded font-semibold"
            style={{ width: "85px", height: "37px", fontSize: "11.5px" }}
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
