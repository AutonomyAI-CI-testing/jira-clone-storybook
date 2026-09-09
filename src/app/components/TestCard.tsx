import { FiSettings } from "react-icons/fi";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-[#17140f] p-4 font-sans"
  >
    {/* Header row: title + gear icon */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings className="text-[#b5b5b5]" size={16} />
    </div>

    {/* Hint row */}
    <div className="mt-3 flex items-center gap-1.5">
      <HiChevronUp className="text-[#8b9291]" size={12} />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="mt-8">
      <div className="flex items-center gap-1.5">
        <HiChevronUp className="text-[#b2b2b1]" size={14} />
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
          <HiOutlineInformationCircle className="text-[#a4a4a3]" size={13} />
        </div>
        <div className="mt-1.5 flex h-9 items-center rounded-[3px] border border-[#a5adad] bg-[#272822] px-3">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <HiOutlineInformationCircle className="text-[#a3a3a2]" size={13} />
        </div>
        <div className="mt-1.5 flex h-9 items-center rounded-[3px] border-2 border-[#929291] bg-[#272822] px-3">
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons row */}
      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
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
