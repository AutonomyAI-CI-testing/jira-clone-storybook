import {
  HiOutlineCog,
  HiOutlineChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => {
  return (
    <div id="testElem" className="max-w-sm rounded-md bg-[#1a1a17] p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <HiOutlineCog className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsed row */}
      <div className="mb-6 flex items-center gap-2">
        <HiOutlineChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-4 flex items-center gap-2">
        <HiOutlineChevronUp className="h-3 w-3 text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle className="h-3.5 w-3.5 text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          value=""
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <HiOutlineInformationCircle className="h-3.5 w-3.5 text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          value=""
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Buttons */}
      <div className="mb-8 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-xs font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-xs font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
