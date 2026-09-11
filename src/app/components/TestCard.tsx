import { HiOutlineCog, HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 rounded-md bg-[#1c1d17] p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsed section header */}
      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <HiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
          />
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
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
