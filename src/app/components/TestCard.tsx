import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-screen"
      style={{ backgroundColor: "#1c1c1a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <FiSettings size={14} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-2">
        <FiChevronUp size={8} color="#8b9291" />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px] truncate"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex flex-col px-5 gap-4 mt-6">
        {/* Add New Design heading */}
        <div className="flex items-center gap-2">
          <FiChevronUp size={12} color="#b2b2b1" />
          <span
            className="text-[13.5px] font-semibold leading-[16.34px]"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            <FiInfo size={15} color="#a4a4a3" />
          </div>
          <div
            className="w-full rounded px-3 py-[10px]"
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
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[11.5px] font-semibold leading-[13.92px]"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            <FiInfo size={15} color="#a3a3a2" />
          </div>
          <div
            className="w-full rounded px-3 py-[10px]"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              className="text-[10.5px] font-semibold leading-[12.71px]"
              style={{ color: "#71726e" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-[10px] text-[11.5px] font-semibold leading-[13.92px]"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-[10px] text-[11.5px] font-semibold leading-[13.92px]"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 mt-8">
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
