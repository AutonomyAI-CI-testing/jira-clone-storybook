import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ fontFamily: "Inter, sans-serif", width: "254px" }}
      className="bg-[#1c1d17] p-5 min-h-full"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Sub-row */}
      <div className="flex items-center gap-1 mb-8">
        <FiChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-[#b2b2b1]" size={12} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </span>
          <FiInfo className="text-[#a4a4a3]" size={13} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#272822] text-[#737470] text-[11.5px] font-semibold px-3 py-2 outline-none placeholder:text-[#737470]"
          style={{ border: "1px solid #a5adad" }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-4 mt-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
            Design URL
          </span>
          <FiInfo className="text-[#a3a3a2]" size={13} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#272822] text-[#71726e] text-[11.5px] font-semibold px-3 py-2 outline-none placeholder:text-[#71726e]"
          style={{ border: "2px solid #929291" }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2 text-[#8c8078] text-[11.5px] font-semibold rounded"
          style={{ backgroundColor: "#843a17" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 text-[#8c8078] text-[11.5px] font-semibold rounded"
          style={{ backgroundColor: "#843a17" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
