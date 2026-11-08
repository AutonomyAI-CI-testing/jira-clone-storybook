import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained smoke-test fixture: no props, no state, no handlers.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] font-primary"
  >
    <div className="h-[9px] bg-[var(--DarkNeutral0)]" />

    <div className="px-5 pb-[62px] pt-[11px]">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs leading-4 text-[var(--DarkNeutral800)]">
          UI magician Agent
        </span>
        <HiOutlineCog
          size={16}
          className="text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp
          size={10}
          className="text-[var(--DarkNeutral600)]"
          aria-hidden="true"
        />
        <span className="text-2xs leading-[14px] text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <HiChevronUp
          size={12}
          className="text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-xs leading-4 text-[var(--DarkNeutral800)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <span className="text-2xs leading-[14px] text-[var(--DarkNeutral700)]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]"
      />

      <div className="mt-[11px] flex items-center gap-2">
        <span className="text-2xs leading-[14px] text-[var(--DarkNeutral700)]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[var(--DarkNeutral700)]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs leading-[13px] text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]"
      />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--Neutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--Neutral600)]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] block font-primary-bold text-xs leading-4 text-[var(--DarkNeutral800)]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);

export default TestCard;
