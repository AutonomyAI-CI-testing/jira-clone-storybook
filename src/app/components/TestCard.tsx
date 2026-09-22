import { FiSettings } from "react-icons/fi";
import { RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-full max-w-sm rounded-md bg-[#1e1b16] p-4 font-['Inter']">
        {/* Title bar */}
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </span>
          <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
        </div>

        {/* Collapsed helper row */}
        <div className="mt-4 flex items-center gap-1">
          <RiArrowDropUpLine className="h-4 w-4 text-[#8b9291]" />
          <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="mt-6">
          <div className="flex items-center gap-1">
            <RiArrowDropUpLine className="h-4 w-4 text-[#b2b2b1]" />
            <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-1">
              <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
                Personal Access Token
              </span>
              <AiOutlineInfoCircle className="h-3 w-3 text-[#a4a4a3]" />
            </div>
            <input
              readOnly
              value=""
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] p-2 text-[11.5px] text-[#737470] placeholder-[#737470] outline-none"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-1">
              <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
                Design URL
              </span>
              <AiOutlineInfoCircle className="h-3 w-3 text-[#a3a3a2]" />
            </div>
            <input
              readOnly
              value=""
              placeholder="https://www.figma.com/file/:"
              className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] p-2 text-[10.5px] text-[#71726e] placeholder-[#71726e] outline-none"
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="flex-1 rounded-[4px] bg-[#843a17] p-2 text-[11.5px] font-semibold text-[#8c8078]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 rounded-[4px] bg-[#843a17] p-2 text-[11.5px] font-semibold text-[#8c8078]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-6 text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
