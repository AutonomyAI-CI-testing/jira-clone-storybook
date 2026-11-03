import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * The frame is a fixed dark panel rather than one of the product's screens, so
 * the root pins the repo's own `dark` theme and every colour below it resolves
 * through the semantic roles. The two action buttons' rust orange has no role in
 * the token set, so they use the raw palette through an arbitrary value — the
 * documented escape hatch for a colour with no semantic role.
 */
const actionButtonClass =
  "w-[170px] rounded-lg bg-[var(--Orange800)] px-8 py-4 font-primary text-base text-font-inverse hover:bg-[var(--Orange700)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-lg bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog aria-hidden="true" size={24} className="text-icon" />
    </div>

    <div className="mt-8 flex items-center gap-2">
      <HiChevronUp aria-hidden="true" size={20} className="text-icon" />
      <span className="font-primary text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <HiChevronUp aria-hidden="true" size={26} className="text-icon" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-20">
      <div className="flex items-center gap-3">
        <label htmlFor="testElem-token" className="font-primary text-base">
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={18}
          className="text-icon-subtle"
        />
      </div>
      <input
        id="testElem-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-4 font-primary text-base text-font placeholder:text-font-subtle"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor="testElem-url" className="font-primary text-base">
          Design URL
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={18}
          className="text-icon-subtle"
        />
      </div>
      <input
        id="testElem-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-4 font-primary text-base text-font placeholder:text-font-subtle"
      />
    </div>

    <div className="mt-14 flex justify-end gap-8">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
