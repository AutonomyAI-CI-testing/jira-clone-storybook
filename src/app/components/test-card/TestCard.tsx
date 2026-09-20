import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-[#1c1c17] p-5 font-sans text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible hint row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo size={11} className="text-[#a4a4a3]" />
        </div>
        <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo size={11} className="text-[#a3a3a2]" />
        </div>
        <div className="mt-2 rounded border border-[#929291] bg-[#272822] px-3 py-2.5">
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <div className="flex-1 rounded bg-[#843a17] py-2.5 text-center">
          <span className="text-[11.5px] font-semibold text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex-1 rounded bg-[#843a17] py-2.5 text-center">
          <span className="text-[11.5px] font-semibold text-[#8c8078]">
            Prepare
          </span>
        </div>
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
