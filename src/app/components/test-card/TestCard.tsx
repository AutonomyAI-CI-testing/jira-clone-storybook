import { RiSettings3Line } from "react-icons/ri";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-black p-1">
      <div className="mx-auto w-[320px] rounded bg-[#272822] p-4 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </span>
          <RiSettings3Line className="h-4 w-4 text-[#b5b5b5]" />
        </div>

        {/* Description */}
        <div className="mt-2 flex items-center gap-1.5">
          <HiChevronUp className="h-3.5 w-3.5 shrink-0 text-[#8b9291]" />
          <span className="truncate text-[13px] font-semibold text-[#8b9291]">
            From entire frame to a single...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="mt-6">
          <div className="flex items-center gap-1.5">
            <HiChevronUp className="h-3.5 w-3.5 shrink-0 text-[#b2b2b1]" />
            <span className="text-[15px] font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
          </div>

          <div className="mt-4 flex items-center gap-1.5">
            <span className="text-[13px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <AiOutlineInfoCircle className="h-3.5 w-3.5 text-[#a4a4a3]" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[13px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
          />

          <div className="mt-4 flex items-center gap-1.5">
            <span className="text-[13px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <AiOutlineInfoCircle className="h-3.5 w-3.5 text-[#a3a3a2]" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="mt-2 w-full rounded border border-[#929291] bg-[#272822] px-3 py-2 text-[12px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
          />

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[13px] font-semibold text-[#8c8078]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[13px] font-semibold text-[#8c8078]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-8">
          <span className="text-[15px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
