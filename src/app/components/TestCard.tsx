import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";

// The frame's own values: none of them has a semantic role in this repo's token set.
const fieldClass =
  "w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-2xs text-[#737470] outline-none";

const buttonClass =
  "w-[85px] rounded bg-[#843a17] py-2 text-2xs font-primary-bold text-[#8c8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-6 bg-black px-5 pb-8 pt-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="flex items-center gap-2">
        <RiArrowDropUpLine size={18} className="text-[#8b9291]" />
        <span className="font-primary-bold text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <RiArrowDropUpLine size={20} className="text-[#b2b2b1]" />
          <span className="font-primary-bold text-xs text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-primary-bold text-2xs text-[#a4a4a3]">
              Personal Access Token
            </span>
            <HiOutlineInformationCircle size={15} className="text-[#a4a4a3]" />
          </div>
          <input
            readOnly
            value="figd_xxxxxxxxxxxxxxxxxx"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-primary-bold text-2xs text-[#a3a3a2]">
              Design URL
            </span>
            <HiOutlineInformationCircle size={15} className="text-[#a3a3a2]" />
          </div>
          <input
            readOnly
            value="https://www.figma.com/file/:"
            className={fieldClass}
          />
        </div>

        <div className="flex gap-4">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>
      </div>

      <span className="font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
