import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex max-w-xs flex-col gap-4 rounded-md bg-[#1c1c18] p-4 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-1.5">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470] placeholder:text-[#737470]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-[4px] bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-[4px] bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <span className="mt-2 text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
