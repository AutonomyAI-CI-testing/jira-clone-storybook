import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral0)] p-5 font-primary text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <FiSettings
        size={15}
        className="shrink-0 text-[var(--DarkNeutral800)]"
        aria-hidden
      />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp
        size={10}
        className="shrink-0 text-[var(--DarkNeutral700)]"
        aria-hidden
      />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[8px]">
      <FiChevronUp size={12} className="shrink-0" aria-hidden />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <label className="mt-7 block text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]">
      <span className="flex items-center gap-1.5 font-primary-bold">
        Personal Access Token
        <FiInfo size={15} className="shrink-0" aria-hidden />
      </span>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[18px] text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral900)] outline-none placeholder:font-primary-bold placeholder:text-[var(--DarkNeutral600)]"
      />
    </label>

    {/* Design URL */}
    <label className="mt-3 block text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]">
      <span className="flex items-center gap-1.5 font-primary-bold">
        Design URL
        <FiInfo size={15} className="shrink-0" aria-hidden />
      </span>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[18px] text-[10.5px] leading-[12.71px] text-[var(--DarkNeutral900)] outline-none placeholder:font-primary-bold placeholder:text-[var(--DarkNeutral600)]"
      />
    </label>

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral900)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-[46px] font-primary-bold">Recent Breakdowns</span>
  </div>
);
