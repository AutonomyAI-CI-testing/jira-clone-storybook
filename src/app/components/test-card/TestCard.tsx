import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#1C1D17] p-4 font-sans"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible hint row */}
      <div className="mb-6 flex items-center gap-1.5">
        <FiChevronUp className="h-3.5 w-3.5 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-3 flex items-center gap-1.5">
        <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="mb-4 h-[38px] w-full rounded border-2 border-[#929291] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
      />

      {/* Design URL */}
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mb-4 h-[37px] w-full rounded border border-[#a5adad] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
      />

      {/* Buttons */}
      <div className="mb-6 flex gap-3">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
