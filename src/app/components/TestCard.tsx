import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Smoke-test fixture: a self-contained rendering of the "UI magician Agent" Figma frame.
 * Takes no props and is reachable from no route — spacing, colour and type are approximations
 * of the frame rather than a pixel-accurate reproduction.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary text-[13.5px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span>UI magician Agent</span>
      <IoSettingsOutline size={16} className="shrink-0" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] text-[#8b9291]">
      <HiChevronUp size={10} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[76px] flex items-center gap-[9px] text-[#b2b2b1]">
      <HiChevronUp size={14} className="shrink-0" />
      <span>Add New Design</span>
    </div>

    <div className="mt-7 flex items-center gap-5 text-[11.5px] text-[#a4a4a3]">
      <span>Personal Access Token</span>
      <HiOutlineInformationCircle size={15} className="shrink-0" />
    </div>

    <div className="mt-3 flex h-9 w-full items-center border-[1px] border-[color:#a5adad] bg-[#272822] px-[18px] text-[11.5px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    <div className="mt-3 flex items-center gap-5 text-[11.5px] text-[#a3a3a2]">
      <span>Design URL</span>
      <HiOutlineInformationCircle size={15} className="shrink-0" />
    </div>

    <div className="mt-3 flex h-[37px] w-full items-center border-[2px] border-[color:#929291] bg-[#272822] px-[18px] text-[10.5px] text-[#71726e]">
      https://www.figma.com/file/
    </div>

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]">
        Awesome
      </div>
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]">
        Prepare
      </div>
    </div>

    <div className="mt-12 text-[#b0b0b0]">Recent Breakdowns</div>
  </div>
);

export default TestCard;
