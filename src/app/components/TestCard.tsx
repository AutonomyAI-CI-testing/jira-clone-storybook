import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained: no props, no state, no data, nothing wired up.
 *
 * The `dark` class sits on the root so the component carries its own dark
 * semantic tokens and renders the same whatever theme wraps it.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-8 bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-icon hover:bg-background-neutral hover:text-icon-brand"
      >
        <FiSettings size={22} />
      </button>
    </div>

    <div className="flex items-center gap-3 text-font-subtle">
      <FiChevronUp size={18} />
      <span className="truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <FiChevronUp size={22} />
        <span className="font-primary-bold text-xl">Add New Design</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base text-font-subtle">
            Personal Access Token
          </span>
          <FiInfo size={18} className="text-icon-subtle" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-border-bold bg-elevation-surface-raised px-4 py-4 text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base text-font-subtle">Design URL</span>
          <FiInfo size={18} className="text-icon-subtle" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded-md border border-border-bold bg-elevation-surface-raised px-4 py-4 text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      {/* The frame's rust fill has no token in this palette, so it is the one
          literal in the file. */}
      <div className="mt-2 flex gap-6">
        <button
          type="button"
          className="rounded-lg bg-[#8f3a15] px-10 py-4 font-primary-bold text-base text-font-subtle hover:bg-[#7a3112] active:bg-[#662a10]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#8f3a15] px-10 py-4 font-primary-bold text-base text-font-subtle hover:bg-[#7a3112] active:bg-[#662a10]"
        >
          Prepare
        </button>
      </div>
    </div>

    <div className="font-primary-bold text-xl">Recent Breakdowns</div>
  </div>
);
