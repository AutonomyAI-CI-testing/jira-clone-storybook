import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

const labelClass = "text-[11.5px] leading-[14px] font-semibold";

const fieldClass = "mt-3 w-full bg-[#272822] px-[19px] font-semibold";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] pb-[62px] font-['Inter',sans-serif]"
    >
      <div className="h-[9px] w-full bg-[#2B2C26]" />

      <div className="px-5 pt-[11px]">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <MdOutlineSettings
            size={16}
            aria-label="Settings"
            className="text-[#b5b5b5]"
          />
        </div>

        {/* Collapsed summary line */}
        <div className="mt-[18px] flex items-center gap-[9px]">
          <RiArrowUpSLine size={12} className="text-[#8b9291]" />
          <span className="text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Section header */}
        <div className="mt-[77px] flex items-center gap-[5px]">
          <RiArrowUpSLine size={14} className="text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal access token */}
        <div className="mt-7">
          <div className="flex items-center gap-[21px]">
            <span className={`${labelClass} text-[#a4a4a3]`}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle
              size={15}
              aria-label="More information"
              className="text-[#a4a4a3]"
            />
          </div>
          <input
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxxx"
            aria-label="Personal Access Token"
            className={`${fieldClass} h-[36px] border border-[#a5adad] text-[11.5px] leading-[14px] text-[#737470]`}
          />
        </div>

        {/* Design URL */}
        <div className="mt-[11px]">
          <div className="flex items-center gap-[21px]">
            <span className={`${labelClass} text-[#a3a3a2]`}>Design URL</span>
            <AiOutlineInfoCircle
              size={15}
              aria-label="More information"
              className="text-[#a3a3a2]"
            />
          </div>
          <input
            readOnly
            defaultValue="https://www.figma.com/file/:"
            aria-label="Design URL"
            className={`${fieldClass} h-[37px] border-2 border-[#929291] text-[10.5px] leading-[13px] text-[#71726e]`}
          />
        </div>

        {/* Actions */}
        <div className="mt-[22px] flex gap-[17px] pl-1">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        {/* Recent breakdowns */}
        <div className="mt-[47px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
