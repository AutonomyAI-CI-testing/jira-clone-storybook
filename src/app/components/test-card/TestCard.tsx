import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-black p-3 font-sans"
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible row */}
      <div className="mb-6 flex items-center gap-1.5">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a single...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-1.5">
          <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mb-3">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
          />
        </div>

        <div className="mb-3">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a3]">
              Design URL
            </span>
            <FiInfo className="h-3 w-3 text-[#a3a3a3]" />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
          />
        </div>

        <div className="flex gap-2">
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
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
