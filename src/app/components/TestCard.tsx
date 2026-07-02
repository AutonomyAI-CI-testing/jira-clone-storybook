import { FaCog, FaInfoCircle, FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] min-h-[508px] flex-col bg-[#1a1a1a] p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FaCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Chevron subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <FaChevronUp size={8} className="text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <FaChevronUp size={10} className="text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FaInfoCircle size={12} className="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-1 w-full rounded border border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <FaInfoCircle size={12} className="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-1 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-5 flex justify-center gap-4">
        <button className="flex-1 rounded-lg bg-[#843a17] py-2.5 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#843a17] py-2.5 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-8">
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
