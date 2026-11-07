import { BsChevronUp, BsGear, BsInfoCircle } from "react-icons/bs";

/**
 * TestCard
 *
 * A static reproduction of the Figma frame "Test Page — Simple" (node 2-2):
 * a 254x508 dark panel holding an "Add New Design" form and a section heading.
 *
 * The frame is a fixed dark surface, so the `dark` theme class is pinned on the
 * root and the tokens inside it resolve for that surface in every app theme.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark h-[508px] w-[254px] bg-elevation-surface font-primary text-font"
    >
      <div
        className="h-[9px] w-full bg-[var(--DarkNeutral-100)]"
        aria-hidden="true"
      />

      <div className="px-5">
        <div className="mt-[11px] flex items-center justify-between">
          <span className="font-primary-bold text-xs">UI magician Agent</span>
          <BsGear size={16} className="text-font-subtle" aria-hidden="true" />
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <BsChevronUp
            size={10}
            className="text-font-subtlest"
            aria-hidden="true"
          />
          <span className="text-2xs text-font-subtlest">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-2">
          <BsChevronUp
            size={14}
            className="text-font-subtle"
            aria-hidden="true"
          />
          <span className="font-primary-bold text-xs">Add New Design</span>
        </div>

        <div className="mt-[28px] flex items-center gap-2">
          <span className="text-2xs text-font-subtle">
            Personal Access Token
          </span>
          <BsInfoCircle
            size={15}
            className="text-font-subtle"
            aria-hidden="true"
          />
        </div>

        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-[36px] w-full border border-border-bold bg-elevation-surface-raised px-[19px] text-2xs placeholder:text-font-subtlest"
        />

        <div className="mt-[11px] flex items-center gap-2">
          <span className="text-2xs text-font-subtle">Design URL</span>
          <BsInfoCircle
            size={15}
            className="text-font-subtle"
            aria-hidden="true"
          />
        </div>

        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-[11px] h-[37px] w-full border-2 border-border-bold bg-elevation-surface-raised px-[19px] text-2xs placeholder:text-font-subtlest"
        />

        <div className="ml-[24px] mt-[22px] flex gap-[17px]">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-font-subtlest"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-font-subtlest"
          >
            Prepare
          </button>
        </div>

        <div className="mt-[47px] font-primary-bold text-xs">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
