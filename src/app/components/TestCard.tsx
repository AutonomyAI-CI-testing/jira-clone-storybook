import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldLabelClass = "flex items-center gap-1.5";
const fieldLabelTextClass = "text-[11.5px] leading-[14px]";
const actionButtonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-[11.5px] leading-[14px] text-[var(--Neutral600)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-primary-bold"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16px] text-[var(--Neutral400)]">
          UI magician Agent
        </span>
        <FiSettings
          size={16}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp
          size={10}
          className="text-[var(--Neutral500)]"
          aria-hidden="true"
        />
        <span className="text-[11.5px] leading-[14px] text-[var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mt-[77px] flex items-center gap-2">
        <FiChevronUp
          size={12}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
        <span className="text-[13.5px] leading-[16px] text-[var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className={`mt-7 ${fieldLabelClass}`}>
        <span className={`${fieldLabelTextClass} text-[var(--DarkNeutral800)]`}>
          Personal Access Token
        </span>
        <FiInfo
          size={15}
          className="text-[var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>
      <div className="mt-3 flex h-[36px] w-full items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px]">
        <span className="text-[11.5px] leading-[14px] text-[var(--Neutral700)]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL field */}
      <div className={`mt-[11px] ${fieldLabelClass}`}>
        <span className={`${fieldLabelTextClass} text-[var(--DarkNeutral800)]`}>
          Design URL
        </span>
        <FiInfo
          size={15}
          className="text-[var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>
      <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-5">
        <span className="text-[10.5px] leading-[13px] text-[var(--Neutral700)]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        {["Awesome", "Prepare"].map((label) => (
          <div key={label} className={actionButtonClass}>
            {label}
          </div>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[47px] text-[13.5px] leading-[16px] text-[var(--DarkNeutral800)]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
