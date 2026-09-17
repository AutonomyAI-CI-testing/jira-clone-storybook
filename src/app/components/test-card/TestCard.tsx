import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md border border-[#3a3a34] bg-[#1c1c17] p-3 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp className="h-3.5 w-3.5 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
      </div>
      <input
        disabled
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-none border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-4 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
      </div>
      <input
        disabled
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
