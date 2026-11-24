import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained smoke-test card reproducing the "UI magician Agent" panel
 * from the Figma frame. It takes no props and holds no state.
 *
 * The palette is written with the raw custom properties declared in
 * `src/app/styles/app.css`, because this design is a fixed dark panel and the
 * semantic tokens re-bind per theme.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary text-[var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl text-white">
          UI magician Agent
        </h2>
        <FiSettings aria-hidden="true" className="text-white" size={24} />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[15px]">
        <FiChevronUp aria-hidden="true" size={20} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-24 flex items-center gap-2">
        <FiChevronUp aria-hidden="true" className="text-white" size={24} />
        <h3 className="font-primary-bold text-xl text-white">Add New Design</h3>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label
            className="text-[15px] text-[var(--DarkNeutral1000)]"
            htmlFor="personal-access-token"
          >
            Personal Access Token
          </label>
          <FiInfo aria-hidden="true" size={18} />
        </div>
        <input
          id="personal-access-token"
          className="mt-2 w-full rounded-md border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral0)] px-4 py-3 font-[ui-monospace,monospace] text-sm text-white outline-none placeholder:text-[var(--Neutral500)]"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          type="text"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <label
            className="text-[15px] text-[var(--DarkNeutral1000)]"
            htmlFor="design-url"
          >
            Design URL
          </label>
          <FiInfo aria-hidden="true" size={18} />
        </div>
        <input
          id="design-url"
          className="mt-2 w-full rounded-md border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral0)] px-4 py-3 font-[ui-monospace,monospace] text-sm text-white outline-none placeholder:text-[var(--Neutral500)]"
          placeholder="https://www.figma.com/file/"
          type="text"
        />
      </div>

      <div className="mt-6 flex items-center gap-6">
        <button
          className="rounded-md bg-[var(--Red800)] px-6 py-3 font-primary-bold text-[15px] text-white"
          type="button"
        >
          Awesome
        </button>
        <button
          className="rounded-md bg-[var(--Red800)] px-6 py-3 font-primary-bold text-[15px] text-white"
          type="button"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-20 font-primary-bold text-xl text-white">
        Recent Breakdowns
      </h3>
    </div>
  );
};
