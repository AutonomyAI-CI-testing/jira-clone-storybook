import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const labelBaseClass =
  "flex items-center gap-2 text-[11.5px] leading-[13.92px]";

const fieldBaseClass =
  "h-[36px] w-full rounded-none bg-[var(--DarkNeutral200)] px-[18px] text-[var(--DarkNeutral900)]";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-[20px] pb-[62px] pt-[20px] font-primary"
    >
      {/* Card header */}
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
          UI magician Agent
        </h2>
        <HiOutlineCog
          size={16}
          className="text-[var(--DarkNeutral900)]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed selection summary */}
      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp
          size={12}
          className="text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
        <p className="text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-2">
        <HiChevronUp
          size={12}
          className="text-[var(--DarkNeutral900)]"
          aria-hidden="true"
        />
        <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <div
        className={cx("mt-[28px] text-[var(--DarkNeutral800)]", labelBaseClass)}
      >
        <label htmlFor="testcard-token">Personal Access Token</label>
        <HiOutlineInformationCircle
          size={15}
          className="text-[var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testcard-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          "mt-[12px] border border-[color:var(--DarkNeutral800)] text-[11.5px] leading-[13.92px] placeholder:text-[var(--DarkNeutral600)]",
          fieldBaseClass
        )}
      />

      {/* Design URL */}
      <div
        className={cx("mt-[11px] text-[var(--DarkNeutral800)]", labelBaseClass)}
      >
        <label htmlFor="testcard-url">Design URL</label>
        <HiOutlineInformationCircle
          size={15}
          className="text-[var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testcard-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={cx(
          "mt-[11px] border-2 border-[color:var(--DarkNeutral700)] text-[10.5px] leading-[12.71px] placeholder:text-[var(--DarkNeutral600)]",
          fieldBaseClass
        )}
      />

      {/* Actions */}
      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button type="button" className={cx("font-primary-bold", buttonClass)}>
          Awesome
        </button>
        <button type="button" className={cx("font-primary-bold", buttonClass)}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
