import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans flex w-[254px] flex-col gap-4 bg-[#1e1e1a] p-3"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsed section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
          </div>
          <input
            disabled
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="rounded-[4px] border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
          </div>
          <input
            disabled
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="rounded-[4px] border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            disabled
            className="flex-1 rounded-[4px] bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            disabled
            className="flex-1 rounded-[4px] bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="flex flex-col gap-2">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
        <div className="h-16" />
      </div>
    </div>
  );
};
