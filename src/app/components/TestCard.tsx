import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[var(--DarkNeutral0)] px-5 pb-[42px] pt-5 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <HiOutlineCog size={16} aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        size={10}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral600)]"
      />
      <span className="whitespace-nowrap text-2xs text-[color:var(--DarkNeutral600)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[68px] flex items-center gap-1.5">
      <HiChevronUp size={12} aria-hidden="true" />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <label className="mt-[28px] flex flex-col">
      <span className="flex items-center gap-2 text-2xs text-[color:var(--Neutral400)]">
        Personal Access Token
        <HiOutlineInformationCircle size={15} aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded border border-[color:var(--Neutral600)] bg-[var(--DarkNeutral200)] px-3 text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
      />
    </label>

    <label className="mt-[11px] flex flex-col">
      <span className="flex items-center gap-2 text-2xs text-[color:var(--Neutral400)]">
        Design URL
        <HiOutlineInformationCircle size={15} aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full rounded border-2 border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-3 text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
      />
    </label>

    <div className="mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[color:var(--Neutral400)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[color:var(--Neutral400)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-xs">Recent Breakdowns</h2>
  </div>
);
