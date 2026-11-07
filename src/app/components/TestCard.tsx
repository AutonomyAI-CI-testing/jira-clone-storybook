import { HiInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

const labelClass =
  "text-[11.5px] font-primary-bold text-[var(--DarkNeutral800)]";

const fieldClass =
  "flex h-[36px] w-full items-center bg-[var(--DarkNeutral250)] px-4 text-[11.5px] font-primary-bold text-[var(--DarkNeutral600)]";

const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-[11.5px] font-primary-bold text-[var(--Orange200)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral100)] px-5 pb-16 pt-5 font-primary text-[13.5px] text-[var(--DarkNeutral900)]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <MdOutlineSettings
          size={16}
          className="text-[var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-4 flex items-center gap-3">
        <RiArrowUpSLine
          size={16}
          className="shrink-0 text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
        <span className="truncate font-primary-bold text-[11.5px] text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-16 flex items-center gap-3">
        <RiArrowUpSLine
          size={16}
          className="shrink-0 text-[var(--DarkNeutral800)]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-2">
        <span className={labelClass}>Personal Access Token</span>
        <HiInformationCircle
          size={15}
          className="text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
      </div>
      <div
        className={`mt-3 border border-[color:var(--DarkNeutral800)] ${fieldClass}`}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-2">
        <span className={labelClass}>Design URL</span>
        <HiInformationCircle
          size={15}
          className="text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
      </div>
      <div
        className={`mt-3 border-2 border-[color:var(--DarkNeutral700)] text-[10.5px] ${fieldClass}`}
      >
        https://www.figma.com/file/:
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-4 pl-1">
        <div className={buttonClass}>Awesome</div>
        <div className={buttonClass}>Prepare</div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12 font-primary-bold text-[var(--DarkNeutral900)]">
        Recent Breakdowns
      </div>
    </div>
  );
};
