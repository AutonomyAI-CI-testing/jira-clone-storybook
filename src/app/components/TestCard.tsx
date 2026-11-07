import {
  IoChevronUp,
  IoChevronUpOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { MdSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame
 * (254x508 at 1x). Self-contained on purpose: no props, no state, no data.
 * The dark theme class is pinned on the root so the panel keeps its dark look
 * whatever theme the app is in.
 */
export const TestCard = (): JSX.Element => {
  const labelClass = "font-primary-bold text-2xs text-font-subtle";
  const fieldClass =
    "flex h-9 items-center bg-elevation-surface-raised px-3 font-primary-bold text-2xs text-font-subtlest";
  const buttonClass =
    "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font";

  return (
    <div
      id="testElem"
      className="dark w-[254px] bg-elevation-surface font-primary text-font"
    >
      <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

      <div className="px-5 pb-[62px]">
        <div className="mt-[11px] flex items-center justify-between">
          <span className="font-primary-bold text-xs text-font">
            UI magician Agent
          </span>
          <MdSettings
            size={16}
            className="text-font-subtle"
            aria-hidden="true"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <IoChevronUpOutline
            size={12}
            className="text-font-subtlest"
            aria-hidden="true"
          />
          <span className="font-primary-bold text-2xs text-font-subtlest">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-2">
          <IoChevronUp
            size={12}
            className="text-font-subtle"
            aria-hidden="true"
          />
          <span className="font-primary-bold text-xs text-font-subtle">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-2">
          <span className={labelClass}>Personal Access Token</span>
          <IoInformationCircleOutline
            size={15}
            className="text-font-subtlest"
            aria-hidden="true"
          />
        </div>
        <div className={`mt-[11px] ${fieldClass}`}>figd_xxxxxxxxxxxxxxxxxx</div>

        <div className="mt-[11px] flex items-center gap-2">
          <span className={labelClass}>Design URL</span>
          <IoInformationCircleOutline
            size={15}
            className="text-font-subtlest"
            aria-hidden="true"
          />
        </div>
        <div className={`mt-2.5 ${fieldClass}`}>
          https://www.figma.com/file/:
        </div>

        <div className="mt-[23px] flex justify-center gap-4">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>

        <div className="mt-[46px] font-primary-bold text-xs text-font">
          Recent BreakDowns
        </div>
      </div>
    </div>
  );
};
