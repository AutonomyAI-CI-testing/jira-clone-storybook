import cx from "classix";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

const fieldClass =
  "mt-[10px] w-full bg-[var(--DarkNeutral200)] px-2 text-[11.5px] leading-[14px] text-[var(--Neutral700)] outline-none";

const actionButtonClass =
  "w-[85px] rounded bg-[var(--Orange800)] py-2 font-primary-bold text-[11.5px] leading-[14px] text-[var(--DarkNeutral600)]";

const infoIconClass = "text-[var(--DarkNeutral800)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] rounded bg-[var(--DarkNeutral0)] px-5 pt-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[var(--Neutral400)]">
          UI magician Agent
        </span>
        <MdSettings
          size={16}
          aria-hidden="true"
          className="text-[var(--Neutral400)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <RiArrowUpSLine
          size={14}
          aria-hidden="true"
          className="text-[var(--Neutral500)]"
        />
        <span className="truncate text-[11.5px] leading-[14px] text-[var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[56px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          aria-hidden="true"
          className="text-[var(--Neutral400)]"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[26px] flex items-center gap-2">
        <span className="text-[11.5px] leading-[14px] text-[var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden="true"
          className={infoIconClass}
        />
      </div>
      <input
        readOnly
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        aria-label="Personal Access Token"
        className={cx(
          fieldClass,
          "h-[36px] border border-[color:var(--DarkNeutral800)]"
        )}
      />

      <div className="mt-5 flex items-center gap-2">
        <span className="text-[11.5px] leading-[14px] text-[var(--DarkNeutral800)]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden="true"
          className={infoIconClass}
        />
      </div>
      <input
        readOnly
        defaultValue="https://www.figma.com/file/:"
        aria-label="Design URL"
        className={cx(
          fieldClass,
          "h-[37px] border-2 border-[color:var(--DarkNeutral700)]"
        )}
      />

      <div className="mt-[22px] flex justify-center gap-4">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <span className="mt-[46px] block font-primary-bold text-[13.5px] leading-[16px] text-[var(--Neutral400)]">
        Recent Breakdowns
      </span>
    </div>
  );
};
