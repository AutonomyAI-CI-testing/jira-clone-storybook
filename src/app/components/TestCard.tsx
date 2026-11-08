import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained: no props, no state.
 *
 * The frame is a fixed dark surface that must look the same in every theme, so
 * its colours are taken from the raw palette variables (declared once in `:root`
 * and never re-mapped per theme) plus the `black` literal, rather than from the
 * theme-dependent semantic roles.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[60px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <HiOutlineCog
        aria-hidden="true"
        size={16}
        className="text-[color:var(--Neutral400)]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={12}
        className="text-[color:var(--DarkNeutral700)]"
      />
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={14}
        className="text-[color:var(--Neutral400)]"
      />
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center justify-between">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="text-[color:var(--DarkNeutral700)]"
      />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-[36px] w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
    />

    <div className="mt-3 flex items-center gap-3">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
        Design URL
      </span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="text-[color:var(--DarkNeutral700)]"
      />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full rounded border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
    />

    <div className="mt-[23px] flex items-center gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[46px]">
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
