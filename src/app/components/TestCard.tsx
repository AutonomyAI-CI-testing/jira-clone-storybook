import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static render of the "UI magician Agent" panel frame.
 * Self-contained smoke test: no props, no state, no interaction.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1C1D17] px-[20px] pb-[62px] pt-[20px] font-[family-name:Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} aria-hidden="true" className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp size={10} aria-hidden="true" className="text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <FiChevronUp size={12} aria-hidden="true" className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[26px]">
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo size={15} aria-hidden="true" className="text-[#a4a4a3]" />
    </div>

    <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[color:#a5adad] bg-[#272822] pl-[18px]">
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[11px] flex items-center gap-[20px]">
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo size={15} aria-hidden="true" className="text-[#a3a3a2]" />
    </div>

    <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[color:#929291] bg-[#272822] pl-[19px]">
      <span className="text-[10.5px] font-semibold leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17]">
        <span className="text-[11.5px] font-semibold leading-[14px] text-[#8c8078]">
          Awesome
        </span>
      </div>
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17]">
        <span className="text-[11.5px] font-semibold leading-[14px] text-[#8c8078]">
          Prepare
        </span>
      </div>
    </div>

    <span className="mt-[47px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
