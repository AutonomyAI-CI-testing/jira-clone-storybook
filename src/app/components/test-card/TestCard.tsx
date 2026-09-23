import { HiOutlineCog, HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-[340px] rounded-lg bg-black p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </span>
          <HiOutlineCog className="h-4 w-4 text-[#b5b5b5]" />
        </div>

        {/* Subtext row */}
        <div className="mt-3 flex items-center gap-1">
          <HiChevronUp className="h-3 w-3 text-[#8b9291]" />
          <span className="text-[11.5px] font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="mt-8">
          <div className="flex items-center gap-1">
            <HiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
            <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
          </div>

          {/* Personal Access Token */}
          <div className="mt-4">
            <label className="block text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <input
              disabled
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="mt-1 h-9 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
            />
          </div>

          {/* Design URL */}
          <div className="mt-4">
            <label className="block text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <input
              disabled
              placeholder="https://www.figma.com/file/:"
              className="mt-1 h-9 w-full rounded border border-[#a5adad] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
            />
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]">
              Awesome
            </button>
            <button className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]">
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns footer */}
        <div className="mt-8">
          <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
