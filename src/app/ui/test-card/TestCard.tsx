import { FiSettings } from "react-icons/fi";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="font-sans flex w-[320px] flex-col gap-3 bg-[#0a0a0a] p-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={15} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible summary row */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={12} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-24" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle size={15} className="text-[#a4a4a3]" />
      </div>
      <div className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <AiOutlineInfoCircle size={15} className="text-[#a3a3a2]" />
      </div>
      <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-2 flex gap-4">
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
