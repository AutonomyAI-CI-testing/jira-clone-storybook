import {
  HiOutlineCog,
  HiChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#1d1d1d] p-4 text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Subheader */}
      <div className="mt-3 flex items-center gap-2">
        <HiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-6 flex items-center gap-2">
        <HiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle className="h-3 w-3 text-[#a4a4a3]" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
          <span className="text-[11.5px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <HiOutlineInformationCircle className="h-3 w-3 text-[#a3a3a2]" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2">
          <span className="text-[10.5px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
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

      {/* Footer */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
