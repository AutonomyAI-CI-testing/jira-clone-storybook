import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-5"
      style={{ backgroundColor: "#272823", width: "254px", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <HiOutlineCog size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <HiChevronUp size={10} color="#8b9291" />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp size={12} color="#b2b2b1" />
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          <HiInformationCircle size={15} color="#a4a4a3" />
        </div>
        <div
          className="w-full rounded px-3 py-2"
          style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
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
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          <HiInformationCircle size={15} color="#a3a3a2" />
        </div>
        <div
          className="w-full rounded px-3 py-2"
          style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#71726e" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 rounded py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-center"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-center"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
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
