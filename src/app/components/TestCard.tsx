import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosInformationCircleOutline } from "react-icons/io";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 bg-[#1c1c1a] text-white flex flex-col"
      style={{ fontFamily: "Inter, sans-serif", minHeight: "508px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <IoIosArrowUp size={10} color="#8b9291" />
        <span
          className="text-[11.5px] font-semibold truncate"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5 flex-1">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <IoIosArrowUp size={12} color="#b2b2b1" />
          <span
            className="text-[13.5px] font-semibold"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            <IoIosInformationCircleOutline size={15} color="#a4a4a3" />
          </div>
          <div
            className="w-full rounded px-3 py-2"
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
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-2">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            <IoIosInformationCircleOutline size={15} color="#a3a3a2" />
          </div>
          <div
            className="w-full rounded px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#71726e" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 text-[11.5px] font-semibold"
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
      <div className="px-5 pt-8 pb-5">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
