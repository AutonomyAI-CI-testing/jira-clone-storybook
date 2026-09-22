import { FaChevronUp, FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-y-4 rounded bg-black p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      <div className="flex items-center gap-x-2">
        <FaChevronUp className="h-2.5 w-2.5 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <FaChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FaRegQuestionCircle className="h-2.5 w-2.5 text-[#a4a4a3]" />
          </div>
          <input
            readOnly
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="rounded-sm border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <FaRegQuestionCircle className="h-2.5 w-2.5 text-[#a3a3a2]" />
          </div>
          <input
            readOnly
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="rounded-sm border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
          />
        </div>

        <div className="flex gap-x-3">
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

      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
