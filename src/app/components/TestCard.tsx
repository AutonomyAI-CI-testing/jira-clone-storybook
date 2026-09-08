import { HiChevronUp } from "react-icons/hi";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] p-5 w-[254px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-[#b5b5b5] font-semibold"
          style={{ fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <AiOutlineSetting color="#b5b5b5" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <HiChevronUp color="#8b9291" size={10} />
        <span
          className="text-[#8b9291] font-semibold"
          style={{ fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp color="#b2b2b1" size={12} />
        <span
          className="text-[#b2b2b1] font-semibold"
          style={{ fontSize: "13.5px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-1 mb-2">
        <span
          className="text-[#a4a4a3] font-semibold"
          style={{ fontSize: "11.5px" }}
        >
          Personal Access Token
        </span>
        <AiOutlineInfoCircle color="#a4a4a3" size={15} />
      </div>

      {/* Token input */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#272822] border border-[#a5adad] px-3 py-2 mb-3 outline-none"
        style={{
          fontSize: "11.5px",
          color: "#737470",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        }}
      />

      {/* Design URL label */}
      <div className="flex items-center gap-1 mb-2">
        <span
          className="text-[#a3a3a2] font-semibold"
          style={{ fontSize: "11.5px" }}
        >
          Design URL
        </span>
        <AiOutlineInfoCircle color="#a3a3a2" size={15} />
      </div>

      {/* URL input */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#272822] border-2 border-[#929291] px-3 py-2 mb-4 outline-none"
        style={{
          fontSize: "10.5px",
          color: "#71726e",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        }}
      />

      {/* Buttons row */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 bg-[#843a17] rounded py-2 font-semibold"
          style={{ fontSize: "11.5px", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 bg-[#843a17] rounded py-2 font-semibold"
          style={{ fontSize: "11.5px", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span
        className="text-[#b0b0b0] font-semibold"
        style={{ fontSize: "13.5px" }}
      >
        Recent Breakdowns
      </span>
    </div>
  );
};
