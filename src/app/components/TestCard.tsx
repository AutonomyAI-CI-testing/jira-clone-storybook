import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
        UI magician Agent
      </span>
      <HiOutlineCog
        size={16}
        className="shrink-0 text-[color:var(--DarkNeutral900)]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        size={10}
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
        aria-hidden="true"
      />
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-[5px] py-4">
      <HiChevronUp
        size={12}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
        aria-hidden="true"
      />
      <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
        Add New Design
      </span>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        size={15}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
        aria-hidden="true"
      />
    </div>

    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-[18px] font-primary-bold text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-3 flex items-center gap-3">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Design URL
      </span>
      <HiOutlineInformationCircle
        size={15}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
        aria-hidden="true"
      />
    </div>

    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-[37px] w-full rounded border-2 border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-[18px] font-primary-bold text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-[22px] flex justify-end gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral1100)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral1100)]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-12 font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
      Recent Breakdowns
    </p>
  </div>
);
