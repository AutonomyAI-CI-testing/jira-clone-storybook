import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

/**
 * Smoke-test card reproducing the supplied Figma frame ("UI magician Agent").
 *
 * The frame's own palette has no semantic role in this design system, so each
 * colour is taken from the raw palette variables declared once in `:root`
 * (`src/app/styles/app.css`) rather than an invented hex.
 */
const labelClass =
  "font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]";
const fieldClass =
  "mt-[12px] h-[36px] w-full bg-[var(--DarkNeutral250)] px-[18px] font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)] focus:outline-none";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)]";

export const TestCard = () => {
  return (
    <div id="testElem" className="flex w-[254px] flex-col bg-black pb-[62px]">
      {/* Top band */}
      <div className="h-[9px] w-full bg-[var(--DarkNeutral100)]" />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-[11px]">
        <h2 className="font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </h2>
        <MdOutlineSettings
          aria-hidden
          size={16}
          className="text-[color:var(--DarkNeutral900)]"
        />
      </div>

      {/* Collapsed summary */}
      <div className="mt-[18px] flex items-center gap-[9px] pl-[23px]">
        <MdKeyboardArrowUp
          aria-hidden
          size={12}
          className="text-[color:var(--DarkNeutral700)]"
        />
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px]">
        <div className="flex items-center gap-[5px] pl-[26px]">
          <MdKeyboardArrowUp
            aria-hidden
            size={12}
            className="text-[color:var(--DarkNeutral900)]"
          />
          <h3 className="font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral900)]">
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token */}
        <div className="mt-[28px] px-5">
          <div className="flex items-center gap-[24px]">
            <label htmlFor="testElem-token" className={labelClass}>
              Personal Access Token
            </label>
            <MdOutlineInfo
              aria-hidden
              size={15}
              className="text-[color:var(--DarkNeutral800)]"
            />
          </div>
          <input
            id="testElem-token"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={`border border-[color:var(--DarkNeutral800)] ${fieldClass}`}
          />
        </div>

        {/* Design URL */}
        <div className="mt-[11px] px-5">
          <div className="flex items-center gap-[24px]">
            <label htmlFor="testElem-url" className={labelClass}>
              Design URL
            </label>
            <MdOutlineInfo
              aria-hidden
              size={15}
              className="text-[color:var(--DarkNeutral800)]"
            />
          </div>
          <input
            id="testElem-url"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className={`h-[37px] border-2 border-[color:var(--DarkNeutral700)] text-[10.5px] ${fieldClass}`}
          />
        </div>

        {/* Actions */}
        <div className="mt-[22px] flex gap-[17px] pl-[24px]">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[47px] px-5 font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
