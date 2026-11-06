import { HiInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * TestCard — a self-contained, prop-less reproduction of the "UI magician Agent"
 * panel from the Figma frame. It reads no data and holds no state: the fields are
 * read-only and the buttons fire nothing.
 *
 * The frame is a fixed dark surface, so the component pins the `dark` theme class
 * on its own root and names semantic roles inside it — the design system's
 * sanctioned exception for a theme-independent surface. Every text node still
 * declares its own colour, because an inherited `color` does not re-resolve inside
 * a pinned subtree.
 *
 * Layout metrics come from the frame's own 1x coordinates, expressed as explicit
 * margins so the vertical rhythm reconstructs the 254x508 frame.
 */
const TestCard = (): JSX.Element => {
  const headingClass = "font-primary-bold text-xs leading-[16px] text-font";
  const labelClass =
    "font-primary-bold text-2xs leading-[14px] text-font-subtle";
  const fieldClass =
    "mt-[11px] h-[36px] w-full rounded border border-border-bold bg-elevation-surface-raised px-3 font-primary text-2xs text-font placeholder:text-font-subtlest";
  const buttonClass =
    "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral900)]";

  return (
    <div
      id="testElem"
      className="dark w-[254px] bg-elevation-surface px-[20px] pb-[62px] pt-[20px] text-font"
    >
      <div className="flex items-center justify-between">
        <span className={headingClass}>UI magician Agent</span>
        <MdOutlineSettings aria-hidden="true" size={16} className="text-icon" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <RiArrowUpSLine
          aria-hidden="true"
          size={12}
          className="text-font-subtle"
        />
        <span className="font-primary-bold text-2xs leading-[14px] text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <RiArrowUpSLine
          aria-hidden="true"
          size={14}
          className="text-font-subtle"
        />
        <span className={headingClass}>Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-3">
        <span className={labelClass}>Personal Access Token</span>
        <HiInformationCircle
          aria-hidden="true"
          size={14}
          className="text-icon"
        />
      </div>

      <input
        aria-label="Personal Access Token"
        className={fieldClass}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        tabIndex={-1}
      />

      <div className="mt-[11px] flex items-center gap-3">
        <span className={labelClass}>Design URL</span>
        <HiInformationCircle
          aria-hidden="true"
          size={14}
          className="text-icon"
        />
      </div>

      <input
        aria-label="Design URL"
        className={fieldClass}
        placeholder="https://www.figma.com/file/:"
        readOnly
        tabIndex={-1}
      />

      <div className="mt-[24px] flex gap-[17px] pl-[24px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-[46px]">
        <span className={headingClass}>Recent Breakdowns</span>
      </div>
    </div>
  );
};

export { TestCard };
export default TestCard;
