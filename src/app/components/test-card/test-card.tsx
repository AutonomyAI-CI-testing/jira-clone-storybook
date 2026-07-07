import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="bg-[#1a1a1a] min-h-screen p-4">
    <div className="bg-[#272822] w-[280px] rounded-lg p-5 text-white">
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-[#b5b5b5]" size={20} />
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <FiChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-8" />

      {/* 4. "Add New Design" section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" size={14} />
        <span className="text-lg font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* 5. Personal Access Token */}
      <div className="mt-4 flex items-center gap-1">
        <span className="text-xs font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle className="text-[#a4a4a3]" size={14} />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-1 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470] placeholder:text-[#737470] outline-none"
      />

      {/* 6. Design URL */}
      <div className="mt-3 flex items-center gap-1">
        <span className="text-xs font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <AiOutlineInfoCircle className="text-[#a3a3a2]" size={14} />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-1 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e] placeholder:text-[#71726e] outline-none"
      />

      {/* 7. Buttons */}
      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-6 py-3 text-xs font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-6 py-3 text-xs font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-lg font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  </div>
);
