import { IoSettingsOutline, IoChevronUp, IoChevronDown } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-[254px] rounded-md bg-[#1e1d18] p-3 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between pb-3">
          <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </span>
          <IoSettingsOutline className="h-4 w-4 text-[#b5b5b5]" />
        </div>
        <div className="h-px w-full bg-[#3a392f]" />

        {/* Collapsible: From entire frame */}
        <div className="flex items-center gap-2 py-3">
          <IoChevronUp className="h-3 w-3 shrink-0 text-[#8b9291]" />
          <span className="text-[11.5px] font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="pt-6">
          <div className="flex items-center gap-2 pb-3">
            <IoChevronUp className="h-3 w-3 shrink-0 text-[#b2b2b1]" />
            <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
          </div>

          {/* Personal Access Token */}
          <div className="mb-3">
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
                Personal Access Token
              </span>
              <AiOutlineInfoCircle className="h-3.5 w-3.5 text-[#a4a4a3]" />
            </div>
            <div className="rounded-[4px] border border-[#a5adad] bg-[#272822] px-3 py-2.5">
              <span className="text-[11.5px] font-semibold text-[#737470]">
                figd_xxxxxxxxxxxxxxxxxx
              </span>
            </div>
          </div>

          {/* Design URL */}
          <div className="mb-4">
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
                Design URL
              </span>
              <AiOutlineInfoCircle className="h-3.5 w-3.5 text-[#a3a3a2]" />
            </div>
            <div className="rounded-[4px] border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
              <span className="text-[10.5px] font-semibold text-[#71726e]">
                https://www.figma.com/file/:
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-6 flex items-center gap-2">
            <button
              type="button"
              className="rounded-[4px] bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-[4px] bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="flex items-center gap-2 pt-2">
          <IoChevronDown className="h-3 w-3 shrink-0 text-[#b0b0b0]" />
          <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
