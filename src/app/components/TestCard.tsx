import { HiOutlineCog, HiOutlineChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full max-w-sm rounded bg-[#000000] p-5 font-primary">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <HiOutlineCog size={18} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-4 flex items-center gap-2">
        <HiOutlineChevronUp size={14} className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <HiOutlineChevronUp size={14} className="text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <HiOutlineInformationCircle size={12} className="text-[#a4a4a3]" />
          </div>
          <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] px-3 py-2">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <HiOutlineInformationCircle size={12} className="text-[#a3a3a2]" />
          </div>
          <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
            <span className="text-[10.5px] font-semibold text-[#71726e]">
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
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
