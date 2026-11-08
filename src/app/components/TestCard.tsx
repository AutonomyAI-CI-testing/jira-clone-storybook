import { FaCog } from "react-icons/fa";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="relative flex w-[254px] flex-col bg-[var(--DarkNeutral0)] px-[20px] pb-[62px] pt-[20px] font-primary text-[13px] text-[color:var(--DarkNeutral900)]"
    >
      <span className="absolute left-0 top-0 h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13px] text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <FaCog size={14} className="text-[color:var(--DarkNeutral900)]" />
      </div>

      <div className="ml-[3px] mt-[18px] flex items-center gap-[9px]">
        <HiChevronUp size={10} className="text-[color:var(--DarkNeutral700)]" />
        <span className="text-[12px] text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="ml-[6px] mt-[77px] flex items-center gap-[8px]">
        <HiChevronUp size={12} className="text-[color:var(--DarkNeutral900)]" />
        <span className="font-primary-bold text-[13px] text-[color:var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[8px]">
        <span className="text-[12px] text-[color:var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>

      <div className="mt-[12px] flex h-[36px] w-full items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px]">
        <span className="text-[12px] text-[color:var(--DarkNeutral600)]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-[8px]">
        <span className="text-[12px] text-[color:var(--DarkNeutral800)]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>

      <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[19px]">
        <span className="text-[12px] text-[color:var(--DarkNeutral600)]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="ml-[24px] mt-[22px] flex gap-[17px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[12px] text-[color:var(--DarkNeutral700)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[12px] text-[color:var(--DarkNeutral700)]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] font-primary-bold text-[13px] text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
