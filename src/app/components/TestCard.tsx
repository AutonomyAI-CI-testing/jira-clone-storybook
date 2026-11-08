import cx from "classix";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained: no props, no state and no data, so it renders the same
 * every time.
 *
 * Colours come from the repo's raw palette (`:root` in app.css), which is
 * declared once and never re-themed, so the card keeps this fixed dark look
 * under every app theme rather than following the active theme's roles.
 */
export const TestCard = (): JSX.Element => {
  const labelTextClass = "font-primary-bold text-[11.5px]";
  const placeholderInkClass = "text-[var(--DarkNeutral600)]";
  const fieldLabelClass =
    "flex items-center gap-[8px] text-[var(--DarkNeutral800)]";
  const buttonClass =
    "h-[37px] flex-1 rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[var(--DarkNeutral700)]";

  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral0)] pb-[62px] text-[var(--DarkNeutral900)]"
    >
      <div
        className="h-[9px] w-full bg-[var(--DarkNeutral100)]"
        aria-hidden="true"
      />

      <div className="mt-[11px] flex items-center justify-between px-[20px]">
        <span className="font-primary-bold text-[13.5px]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] px-[20px] text-[var(--DarkNeutral700)]">
        <MdKeyboardArrowUp size={12} aria-hidden="true" />
        <span className={cx(labelTextClass, "truncate")}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[9px] px-[20px]">
        <MdKeyboardArrowUp size={14} aria-hidden="true" />
        <span className="font-primary-bold text-[13.5px]">Add New Design</span>
      </div>

      <div className="mt-[28px] px-[18px]">
        <div className={fieldLabelClass}>
          <span className={labelTextClass}>Personal Access Token</span>
          <IoInformationCircleOutline size={15} aria-hidden="true" />
        </div>
        <div className="mt-[10px] flex h-[39px] items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[21px]">
          <span className={cx(labelTextClass, placeholderInkClass)}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      <div className="mt-[10px] px-[18px]">
        <div className={fieldLabelClass}>
          <span className={labelTextClass}>Design URL</span>
          <IoInformationCircleOutline size={15} aria-hidden="true" />
        </div>
        <div className="mt-[9px] flex h-[41px] items-center border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[22px]">
          <span className="font-primary-bold text-[10.5px] text-[var(--DarkNeutral600)]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      <div className="mt-[20px] flex gap-[15px] px-[43px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-[45px] px-[20px] font-primary-bold text-[13.5px]">
        Recent Breakdowns
      </div>
    </div>
  );
};
