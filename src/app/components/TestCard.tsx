import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1c1c1c] px-5 py-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <HiChevronUp size={14} className="text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <HiChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiInformationCircle size={15} className="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470] placeholder:text-[#737470] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-3">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <HiInformationCircle size={15} className="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e] placeholder:text-[#71726e] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mt-5 flex justify-center gap-3">
        <button className="rounded-md bg-[#843a17] px-8 py-2.5 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded-md bg-[#843a17] px-8 py-2.5 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
