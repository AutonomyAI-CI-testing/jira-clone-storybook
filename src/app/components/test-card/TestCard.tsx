import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="font-sans w-[254px] bg-[#2b2b2b] p-5">
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiCog className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Subtext row */}
      <div className="mb-6 flex items-center gap-1">
        <HiChevronUp className="h-4 w-4 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mb-4 flex items-center gap-2">
        <HiChevronUp className="h-4 w-4 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiInformationCircle className="h-3.5 w-3.5 text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#444] bg-transparent px-2 py-1.5
                     text-[11.5px] font-semibold text-[#737470] outline-none
                     placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <HiInformationCircle className="h-3.5 w-3.5 text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#444] bg-transparent px-2 py-1.5
                     text-[11.5px] font-semibold text-[#71726e] outline-none
                     placeholder:text-[#71726e]"
        />
      </div>

      {/* Buttons */}
      <div className="mb-6 flex gap-3">
        <button
          className="flex-1 rounded-lg bg-[#b5541e] py-2 text-[11.5px]
                           font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg bg-[#b5541e] py-2 text-[11.5px]
                           font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
