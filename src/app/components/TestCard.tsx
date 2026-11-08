import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Self-contained — it takes no props.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark h-[508px] w-[254px] overflow-hidden bg-elevation-surface font-primary text-font"
  >
    <div className="h-[9px] w-full bg-elevation-surface-sunken" />

    <div className="px-5 pb-[62px]">
      <div className="flex items-center justify-between pt-[11px]">
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-font-subtle" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp size={12} className="text-font-subtlest" />
        <span className="text-[11.5px] leading-[14px] text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-1">
        <HiChevronUp size={12} className="text-font-subtle" />
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          Add New Design
        </span>
      </div>

      <div className="mt-[26px] flex items-center gap-2">
        <span className="text-[11.5px] leading-[14px] text-font-subtle">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle size={15} className="text-font-subtle" />
      </div>
      <div className="mt-[13px] flex h-[36px] w-full items-center border border-border-bold bg-elevation-surface-raised px-[19px]">
        <span className="text-[11.5px] leading-[14px] text-font-subtlest">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[9px] flex items-center gap-2">
        <span className="text-[11.5px] leading-[14px] text-font-subtle">
          Design URL
        </span>
        <HiOutlineInformationCircle size={15} className="text-font-subtle" />
      </div>
      <div className="mt-[12px] flex h-[37px] w-full items-center border-2 border-border-bold bg-elevation-surface-raised px-[20px]">
        <span className="text-[10.5px] leading-[13px] text-font-subtlest">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-4 pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-font-subtle"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-font-subtle"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px]">
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  </div>
);
