import {
  FiSettings,
  FiChevronUp,
  FiInfo,
} from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="max-w-[254px] rounded bg-[#1C1D17] p-3 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible-look row */}
      <div className="mt-4 flex items-center gap-1.5">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-6">
        <div className="flex items-center gap-1.5">
          <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
          </div>
          <div className="mt-1.5 rounded border border-[#a5adad] bg-[#272822] px-2 py-2">
            <span className="text-[11.5px] font-semibold text-[#71726e]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mt-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
          </div>
          <div className="mt-1.5 rounded border-2 border-[#929291] bg-[#272822] px-2 py-2">
            <span className="text-[10.5px] font-semibold text-[#737470]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
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
