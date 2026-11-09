import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the cropped Figma panel ("UI magician Agent").
 * Smoke test only: no props, no state, no behaviour.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark flex min-h-[508px] w-[254px] flex-col bg-elevation-surface px-5 pb-5 pt-5 font-primary text-font"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-sm">UI magician Agent</h1>
        <HiOutlineCog aria-hidden="true" className="text-icon" size={16} />
      </div>

      {/* Collapsed section row */}
      <div className="mt-[18px] flex items-center gap-2 text-font-subtle">
        <HiChevronUp aria-hidden="true" size={12} />
        <span className="font-primary-bold text-xs">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <h2 className="mt-[75px] flex items-center gap-2 text-sm">
        <HiChevronUp aria-hidden="true" size={14} />
        <span className="font-primary-bold">Add New Design</span>
      </h2>

      {/* Personal Access Token */}
      <label
        htmlFor="test-personal-access-token"
        className="mt-[28px] flex items-center gap-2 font-primary-bold text-xs text-font-subtle"
      >
        Personal Access Token
        <HiOutlineInformationCircle aria-hidden="true" size={15} />
      </label>
      <input
        id="test-personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[10px] h-9 w-full border border-border-bold bg-background-input px-2 font-primary-bold text-xs text-font placeholder:text-font-subtlest"
      />

      {/* Design URL */}
      <label
        htmlFor="test-design-url"
        className="mt-[11px] flex items-center gap-2 font-primary-bold text-xs text-font-subtle"
      >
        Design URL
        <HiOutlineInformationCircle aria-hidden="true" size={15} />
      </label>
      <input
        id="test-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-[9px] h-9 w-full border border-border-bold bg-background-input px-2 font-primary-bold text-xs text-font placeholder:text-font-subtlest"
      />

      {/* Buttons */}
      <div className="ml-6 mt-[22px] flex gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-xs text-[color:var(--Neutral300)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-xs text-[color:var(--Neutral300)]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] font-primary-bold text-sm">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
