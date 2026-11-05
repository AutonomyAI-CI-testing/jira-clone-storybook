import { BsChevronUp } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

const panelButtonClass =
  "flex h-[40px] w-[87px] items-center justify-center rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

/**
 * Static reproduction of a Figma frame used as a rendering smoke test.
 * Self-contained on purpose: no props, no state, no interactivity.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px]">UI magician Agent</span>
      <MdSettings aria-hidden="true" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <BsChevronUp aria-hidden="true" size={10} />
      <span className="truncate text-[11.5px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <BsChevronUp aria-hidden="true" size={12} />
      <span className="font-primary-bold text-[13.5px]">Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
      <span>Personal Access Token</span>
      <HiOutlineInformationCircle aria-hidden="true" size={15} />
    </div>
    <div className="mt-[10px] flex h-[39px] items-center rounded-[4px] border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    <div className="mt-[10px] flex items-center gap-2 text-[11.5px] text-[#a3a3a2]">
      <span>Design URL</span>
      <HiOutlineInformationCircle aria-hidden="true" size={15} />
    </div>
    <div className="mt-[9px] flex h-[41px] items-center rounded-[4px] border-2 border-[#929291] bg-[#272822] px-5 text-[11.5px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    <div className="mt-[19px] flex justify-center gap-[15px]">
      <div className={panelButtonClass}>Awesome</div>
      <div className={panelButtonClass}>Prepare</div>
    </div>

    <div className="mt-[45px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
