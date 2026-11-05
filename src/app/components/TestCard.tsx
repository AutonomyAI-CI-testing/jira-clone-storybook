import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--Neutral600)]";

export const TestCard = () => {
  return (
    <div id="testElem" className="flex h-[508px] w-[254px] flex-col bg-black">
      <div className="h-[9px] w-full bg-[var(--DarkNeutral200)]" />

      <div className="mt-[11px] flex items-start justify-between px-5">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-[var(--Neutral400)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[23px]">
        <IoChevronUp size={9} className="text-[var(--Neutral500)]" />
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[26px]">
        <IoChevronUp size={12} className="text-[var(--Neutral400)]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-5 pl-5">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          className="text-[var(--DarkNeutral800)]"
        />
      </div>

      <div className="ml-5 mt-3 flex h-9 w-[211px] items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px]">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--Neutral700)]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-5 pl-5">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          className="text-[var(--DarkNeutral800)]"
        />
      </div>

      <div className="ml-5 mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[18px]">
        <span className="font-primary-bold text-[10.5px] leading-[12.71px] text-[var(--Neutral700)]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-11">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-[47px] pl-5">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
