import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] overflow-auto"
      style={{ backgroundColor: "#1e1e1b", fontFamily: "Inter, sans-serif" }}
    >
      {/* Thin top bar */}
      <div className="h-[9px] w-full" style={{ backgroundColor: "#843a17" }} />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <AiOutlineSetting size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 px-5 pb-8">
        <HiChevronUp size={10} style={{ color: "#8b9291" }} />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <HiChevronUp size={13} style={{ color: "#b2b2b1" }} />
          <span
            className="text-[13.5px] font-semibold leading-[16.34px]"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          <HiInformationCircle size={15} style={{ color: "#a4a4a3" }} />
        </div>

        {/* Token input */}
        <div
          className="w-full mb-4 px-3 py-[9px] rounded"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
          }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#737470" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          <HiInformationCircle size={15} style={{ color: "#a3a3a2" }} />
        </div>

        {/* URL input */}
        <div
          className="w-full mb-5 px-3 py-[9px] rounded"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
          }}
        >
          <span
            className="text-[11px] font-semibold leading-[12.71px]"
            style={{ color: "#71726e" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons row */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold leading-[13.92px] rounded"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              borderRadius: "4px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold leading-[13.92px] rounded"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              borderRadius: "4px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
