import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Static rendering of the "UI magician Agent" Figma panel, built for a
 * Figma-to-component smoke test. Self-contained: no props, no state, no data.
 *
 * The `dark` class on the root is deliberate — the theme tokens are declared on
 * a plain `.dark` selector, so scoping it here keeps the card's palette the same
 * wherever it renders, whatever theme is active around it.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[254px] flex-col bg-elevation-surface px-5 pb-16 pt-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <IoSettingsOutline size={16} className="text-font-subtle" />
    </div>

    <div className="mt-3 flex items-center gap-3">
      <HiChevronUp size={14} className="shrink-0 text-font-subtle" />
      <span className="truncate text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp size={14} className="shrink-0 text-font-subtle" />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-token" className="text-xs text-font-subtle">
          Personal Access Token
        </label>
        <HiOutlineInformationCircle size={15} className="text-font-subtle" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full border border-border-bold bg-elevation-surface-raised px-4 py-3 text-2xs text-font-subtlest placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-url" className="text-xs text-font-subtle">
          Design URL
        </label>
        <HiOutlineInformationCircle size={15} className="text-font-subtle" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full border border-border-bold bg-elevation-surface-raised px-4 py-3 text-2xs text-font-subtlest placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-5 flex gap-4">
      {/* The design's rust has no token — the nearest, --Orange800, is a visibly
          different shade, so it stays a literal. */}
      <button
        type="button"
        className="min-w-[85px] rounded bg-[#843a17] px-5 py-3 text-2xs font-primary-bold text-font-subtlest"
      >
        Awesome
      </button>
      <button
        type="button"
        className="min-w-[85px] rounded bg-[#843a17] px-5 py-3 text-2xs font-primary-bold text-font-subtlest"
      >
        Prepare
      </button>
    </div>

    <span className="mt-12 font-primary-bold text-xs">Recent Breakdowns</span>
  </div>
);
