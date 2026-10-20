import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[var(--DarkNeutral100)] px-5 pt-5 pb-16 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
        UI magician Agent
      </span>
      <IoSettingsOutline size={16} className="text-[var(--Neutral400)]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        size={12}
        className="shrink-0 text-[var(--DarkNeutral600)]"
      />
      <span className="truncate text-[11.5px] text-[var(--DarkNeutral600)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <HiChevronUp size={16} className="shrink-0 text-[var(--Neutral400)]" />
      <span className="font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <label className="mt-7 block">
      <span className="flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded-none border border-[var(--Neutral400)] bg-[var(--DarkNeutral200)] px-[19px] text-[11.5px] text-[var(--Neutral600)] outline-none placeholder:text-[var(--Neutral600)]"
      />
    </label>

    <label className="mt-[11px] block">
      <span className="flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[var(--DarkNeutral800)]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full rounded-none border-2 border-[var(--Neutral400)] bg-[var(--DarkNeutral200)] px-[19px] text-[10.5px] text-[var(--Neutral600)] outline-none placeholder:text-[var(--Neutral600)]"
      />
    </label>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="font-primary-bold h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="font-primary-bold h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[46px] font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
      Recent Breakdowns
    </span>
  </div>
);
