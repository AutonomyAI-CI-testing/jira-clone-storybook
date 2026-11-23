import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Standalone card reproducing the "UI magician Agent" Figma frame.
 *
 * Smoke-test component: self-contained, takes no props, holds no state and is
 * wired to nothing. It is not reachable from the app's routes; it renders only
 * through its story.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-8 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[22px] leading-tight">
        UI magician Agent
      </span>
      <IoSettingsOutline
        size={24}
        aria-hidden
        className="text-[var(--DarkNeutral1000)]"
      />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <IoChevronUpOutline
        size={20}
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <span className="truncate text-[17px] text-[var(--DarkNeutral1000)]">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <IoChevronUpOutline
        size={22}
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <span className="font-primary-bold text-[22px]">Add New Design</span>
    </div>

    <label className="mt-7 block">
      <span className="flex items-center gap-2 text-[17px] text-[var(--DarkNeutral1000)]">
        Personal Access Token
        <IoInformationCircleOutline size={20} aria-hidden />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-4 py-4 text-[17px] placeholder:text-[var(--DarkNeutral600)]"
      />
    </label>

    <label className="mt-4 block">
      <span className="flex items-center gap-2 text-[17px] text-[var(--DarkNeutral1000)]">
        Design URL
        <IoInformationCircleOutline size={20} aria-hidden />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-4 py-4 text-[17px] placeholder:text-[var(--DarkNeutral600)]"
      />
    </label>

    <div className="mt-9 ml-12 flex gap-9">
      <button
        type="button"
        className="w-[170px] rounded-md bg-[var(--Orange800)] px-8 py-4 text-[19px] text-[var(--DarkNeutral1000)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-md bg-[var(--Orange800)] px-8 py-4 text-[19px] text-[var(--DarkNeutral1000)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);
