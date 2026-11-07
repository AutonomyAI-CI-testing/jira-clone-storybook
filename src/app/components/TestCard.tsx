import {
  MdInfoOutline,
  MdKeyboardArrowUp,
  MdOutlineSettings,
} from "react-icons/md";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] text-[color:var(--Neutral400)]"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

    <div className="px-[20px] pb-[61px] pt-[11px]">
      <div className="flex items-center justify-between">
        <span className="text-xs">UI magician Agent</span>
        <MdOutlineSettings size={16} aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-2xs text-[color:var(--Neutral500)]">
        <MdKeyboardArrowUp size={12} aria-hidden="true" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-xs">
        <MdKeyboardArrowUp size={16} aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-2 text-2xs text-[color:var(--DarkNeutral800)]">
        <span>Personal Access Token</span>
        <MdInfoOutline size={15} aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
      />

      <div className="mt-[11px] flex items-center gap-2 text-2xs text-[color:var(--DarkNeutral800)]">
        <span>Design URL</span>
        <MdInfoOutline size={15} aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[18px] text-2xs text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
      />

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--DarkNeutral700)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--DarkNeutral700)]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] text-xs">Recent Breakdowns</div>
    </div>
  </div>
);
