import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoCogOutline } from "react-icons/io5";

/**
 * Static rendering of the "Test Page - Simple" Figma frame: a 254x508 dark panel
 * with a title row, a collapsed summary row, an "Add New Design" section holding
 * two labelled fields, a pair of buttons and a "Recent Breakdowns" heading.
 *
 * Self-contained on purpose: no props, no state, no data. The fields are
 * uncontrolled and the buttons are inert.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral0)] px-5 pb-[62px] pt-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm text-[color:var(--DarkNeutral900)]">
        UI magician Agent
      </span>
      <IoCogOutline
        size={16}
        aria-hidden="true"
        className="text-[color:var(--DarkNeutral900)]"
      />
    </div>

    {/* Collapsed summary row */}
    <div className="ml-[3px] mt-[18px] flex items-center gap-[9px]">
      <HiChevronUp
        size={12}
        aria-hidden="true"
        className="text-[color:var(--DarkNeutral900)]"
      />
      <span className="text-xs text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="ml-[6px] mt-[77px] flex items-center gap-[5px]">
      <HiChevronUp
        size={14}
        aria-hidden="true"
        className="text-[color:var(--DarkNeutral900)]"
      />
      <span className="font-primary-bold text-sm text-[color:var(--DarkNeutral900)]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-2">
      <label
        htmlFor="testCardToken"
        className="font-primary-bold text-xs text-[color:var(--DarkNeutral800)]"
      >
        Personal Access Token
      </label>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden="true"
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      id="testCardToken"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 text-xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-2">
      <label
        htmlFor="testCardUrl"
        className="font-primary-bold text-xs text-[color:var(--DarkNeutral800)]"
      >
        Design URL
      </label>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden="true"
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      id="testCardUrl"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-9 w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    {/* Buttons */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-xs text-[color:var(--DarkNeutral700)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-xs text-[color:var(--DarkNeutral700)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] font-primary-bold text-sm text-[color:var(--DarkNeutral900)]">
      Recent Breakdowns
    </div>
  </div>
);
