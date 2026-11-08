import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const labelClass =
  "font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";

const iconClass = "shrink-0 text-[color:var(--DarkNeutral700)]";

const inputBaseClass =
  "flex w-full items-center bg-[var(--DarkNeutral200)] px-[19px]";

const placeholderClass =
  "truncate font-primary-bold text-2xs text-[color:var(--DarkNeutral600)]";

const actionClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]";

const TestCardAction = ({ label }: { label: string }): JSX.Element => (
  <button type="button" className={actionClass}>
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

    <div className="px-5 pb-[61px] pt-[11px]">
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xs">UI magician Agent</h1>
        <HiOutlineCog size={16} aria-hidden="true" className="shrink-0" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <HiChevronUp size={12} aria-hidden="true" className="shrink-0" />
        <span className="truncate font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <HiChevronUp size={14} aria-hidden="true" className="shrink-0" />
        <h2 className="font-primary-bold text-xs">Add New Design</h2>
      </div>

      <div className="mt-7 flex items-center gap-[18px]">
        <span className={labelClass}>Personal Access Token</span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden="true"
          className={iconClass}
        />
      </div>
      <div
        className={cx(
          inputBaseClass,
          "mt-3 h-9 border border-[color:var(--DarkNeutral700)]"
        )}
      >
        <span className={placeholderClass}>figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      <div className="mt-[11px] flex items-center gap-[18px]">
        <span className={labelClass}>Design URL</span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden="true"
          className={iconClass}
        />
      </div>
      <div
        className={cx(
          inputBaseClass,
          "mt-[11px] h-[37px] border-2 border-[color:var(--DarkNeutral600)]"
        )}
      >
        <span className={placeholderClass}>https://www.figma.com/file/:</span>
      </div>

      <div className="mt-[23px] flex justify-end gap-[17px]">
        <TestCardAction label="Awesome" />
        <TestCardAction label="Prepare" />
      </div>

      <h3 className="mt-[46px] font-primary-bold text-xs">Recent Breakdowns</h3>
    </div>
  </div>
);
