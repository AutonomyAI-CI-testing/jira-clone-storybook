import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_TEXT = "text-[11.5px] font-semibold leading-[13.92px]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1e1e1e] p-5 font-[family-name:Inter,system-ui,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp size={8} className="text-[#8b9291]" aria-hidden />
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <FiChevronUp size={12} className="text-[#b2b2b1]" aria-hidden />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-2">
        <span className={`${FIELD_TEXT} text-[#a4a4a3]`}>
          Personal Access Token
        </span>
        <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden />
      </div>
      <div className="mt-[11px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className={`${FIELD_TEXT} text-[#737470]`}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-2">
        <span className={`${FIELD_TEXT} text-[#a3a3a2]`}>Design URL</span>
        <FiInfo size={15} className="text-[#a3a3a2]" aria-hidden />
      </div>
      <div className="mt-[10px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[20px]">
        <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
        <span className={`${FIELD_TEXT} text-[#8c8078]`}>Awesome</span>
      </div>
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
        <span className={`${FIELD_TEXT} text-[#8c8078]`}>Prepare</span>
      </div>
    </div>

    <div className="mt-[47px]">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);

export default TestCard;
