import { HiOutlineCog, HiOutlineInformationCircle } from "react-icons/hi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Self-contained: no props, no state, no handlers.
 *
 * Colours come from the raw --DarkNeutral* ramp, which is declared once in
 * :root and never re-declared by a theme class, so the panel keeps one look
 * under every theme without pinning one.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] overflow-hidden bg-[var(--DarkNeutral100)] px-5 pt-5 font-primary text-[13.5px] text-[var(--DarkNeutral900)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold">UI magician Agent</span>
        <HiOutlineCog
          size={16}
          className="text-[var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-1 text-[11.5px] text-[var(--DarkNeutral500)]">
        <RiArrowDropDownLine size={18} aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-[76px] flex items-center gap-1 font-primary-bold">
        <RiArrowDropUpLine size={20} aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <label
        htmlFor="test-card-token"
        className="mt-[28px] flex items-center gap-2 text-[11.5px] text-[var(--DarkNeutral800)]"
      >
        Personal Access Token
        <HiOutlineInformationCircle size={15} aria-hidden="true" />
      </label>
      <input
        id="test-card-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-[11.5px] placeholder:text-[var(--DarkNeutral600)]"
      />

      {/* Design URL */}
      <label
        htmlFor="test-card-url"
        className="mt-3 flex items-center gap-2 text-[11.5px] text-[var(--DarkNeutral800)]"
      >
        Design URL
        <HiOutlineInformationCircle size={15} aria-hidden="true" />
      </label>
      <input
        id="test-card-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-[19px] text-[10.5px] placeholder:text-[var(--DarkNeutral600)]"
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[var(--DarkNeutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[var(--DarkNeutral600)]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[47px] font-primary-bold">Recent Breakdowns</div>
    </div>
  );
};
