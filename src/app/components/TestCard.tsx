import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[color:var(--Neutral600)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[var(--DarkNeutral-100)] px-5 pb-16 pt-5 font-primary"
    >
      <div className="flex items-center justify-between text-[color:var(--Neutral400)]">
        <span className="font-primary-bold text-[13.5px]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[color:var(--Neutral500)]">
        <RiArrowUpSLine size={14} />
        <span className="text-[11.5px]">From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-2 text-[color:var(--Neutral400)]">
        <RiArrowUpSLine size={16} />
        <span className="font-primary-bold text-[13.5px]">Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-3 text-[color:var(--DarkNeutral800)]">
        <span className="text-[11.5px]">Personal Access Token</span>
        <IoInformationCircleOutline size={15} />
      </div>

      <div className="mt-3 border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 py-2 text-[11.5px] text-[color:var(--Neutral700)]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-3 flex items-center gap-3 text-[color:var(--DarkNeutral800)]">
        <span className="text-[11.5px]">Design URL</span>
        <IoInformationCircleOutline size={15} />
      </div>

      <div className="mt-3 border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-3 py-2 text-[10.5px] text-[color:var(--Neutral700)]">
        https://www.figma.com/file/:
      </div>

      <div className="mt-5 flex items-center gap-4 pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-11 font-primary-bold text-[13.5px] text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </div>
    </div>
  );
};
