import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
      className="w-[254px] min-h-[508px] p-5 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#b5b5b5" }} size={14} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FiChevronUp style={{ color: "#8b9291" }} size={10} />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: 32 }} />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <FiChevronUp style={{ color: "#b2b2b1" }} size={12} />
          <span
            className="text-[13.5px] font-semibold leading-[16.34px]"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            <FiInfo style={{ color: "#a4a4a3" }} size={13} />
          </div>
          <div
            className="w-full h-[37px] flex items-center px-3 rounded"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#737470" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            <FiInfo style={{ color: "#a3a3a2" }} size={13} />
          </div>
          <div
            className="w-full h-[37px] flex items-center px-3 rounded"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              className="text-[10.5px] font-semibold"
              style={{ color: "#71726e" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 h-[37px] rounded text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 h-[37px] rounded text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
