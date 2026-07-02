import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a1a] px-5 py-5 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={16} />
      </div>

      {/* 2. Collapsible row */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" size={14} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* 4. Personal Access Token */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo className="text-[#a4a4a3]" size={14} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded-sm bg-[#272822] px-3 py-2 text-[11.5px] font-semibold border border-[#a5adad] text-[#737470] placeholder:text-[#737470] outline-none"
        />
      </div>

      {/* 5. Design URL */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo className="text-[#a3a3a2]" size={14} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded-sm bg-[#272822] px-3 py-2 text-[11.5px] font-semibold border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e] outline-none"
        />
      </div>

      {/* 6. Action buttons */}
      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns heading */}
      <div className="mt-8">
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
