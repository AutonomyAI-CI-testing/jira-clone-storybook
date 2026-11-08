import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained smoke-test component: no props, no state.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-black px-[20px] py-[20px] font-primary-bold"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[var(--Neutral400)]" />
    </div>

    {/* Collapsed section */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp size={12} className="text-[var(--Neutral500)]" />
      <span className="text-[11.5px] leading-[13.92px] text-[var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[5px]">
      <FiChevronUp size={14} className="text-[var(--Neutral400)]" />
      <span className="text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-[8px]">
      <span className="text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]">
        Personal Access Token
      </span>
      <FiInfo size={15} className="text-[var(--DarkNeutral800)]" />
    </div>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-[11.5px] leading-[13.92px] text-[var(--Neutral700)] placeholder:text-[var(--Neutral700)]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-[8px]">
      <span className="text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]">
        Design URL
      </span>
      <FiInfo size={15} className="text-[var(--DarkNeutral800)]" />
    </div>
    <input
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-[20px] text-[10.5px] leading-[12.71px] text-[var(--Neutral700)] placeholder:text-[var(--Neutral700)]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-[13.92px] text-[var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-[13.92px] text-[var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
      Recent Breakdowns
    </div>
  </div>
);
