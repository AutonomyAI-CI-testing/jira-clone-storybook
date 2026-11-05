import { BsChevronUp } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" panel from the reference
 * Figma frame (254x508 at 1x). Self-contained: no props, no state, no data.
 *
 * The frame is a dark UI, so the root pins the `dark` theme class and the
 * panel names semantic roles inside it; only the rust action buttons and the
 * frame's own top strip use raw values, because no role matches them.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark flex h-[508px] w-[254px] flex-col bg-elevation-surface font-primary text-font"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="flex items-start justify-between px-5 pt-[11px]">
        <h1 className="font-primary-bold text-xs text-font">
          UI magician Agent
        </h1>
        <MdSettings size={16} aria-hidden="true" className="text-font-subtle" />
      </div>

      <div className="mt-[18px] flex items-center gap-2 px-5">
        <BsChevronUp
          size={10}
          aria-hidden="true"
          className="text-font-subtlest"
        />
        <span className="font-primary-bold text-2xs text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2 px-5">
        <BsChevronUp
          size={12}
          aria-hidden="true"
          className="text-font-subtle"
        />
        <h2 className="font-primary-bold text-xs text-font">Add New Design</h2>
      </div>

      <div className="mt-[28px] px-5">
        <div className="flex items-center gap-2">
          <span className="font-primary-bold text-2xs text-font-subtle">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            aria-hidden="true"
            className="text-font-subtle"
          />
        </div>
        <input
          type="text"
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-full rounded border border-border-bold bg-elevation-surface-raised px-3 font-primary-bold text-2xs text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-[11px] px-5">
        <div className="flex items-center gap-2">
          <span className="font-primary-bold text-2xs text-font-subtle">
            Design URL
          </span>
          <HiOutlineInformationCircle
            size={15}
            aria-hidden="true"
            className="text-font-subtle"
          />
        </div>
        <input
          type="text"
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-[37px] w-full rounded border border-border-bold bg-elevation-surface-raised px-3 font-primary text-2xs text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral900)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral900)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] px-5 font-primary-bold text-xs text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};
