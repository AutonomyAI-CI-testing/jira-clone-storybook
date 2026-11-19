import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Self-contained smoke-test card, laid out from the "UI magician Agent" Figma
 * frame. It takes no props and is not wired into the app — it exists only to be
 * rendered on its own.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[508px] bg-[var(--DarkNeutral0)] px-10 py-10 font-primary text-base text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-primary-black text-xl text-[var(--Neutral200)]">
          UI magician Agent
        </h1>

        <button
          type="button"
          aria-label="Open settings"
          className="shrink-0 text-[var(--DarkNeutral900)]"
        >
          <IoSettingsOutline size={24} />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <IoChevronUpOutline size={20} className="shrink-0" />
        <span className="truncate">From entire frame to a singl…</span>
      </div>

      <div className="mt-40 flex items-center gap-2">
        <IoChevronUpOutline
          size={22}
          className="shrink-0 text-[var(--Neutral200)]"
        />
        <h2 className="font-primary-black text-xl text-[var(--Neutral200)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2">
          <label htmlFor="testElem-token" className="text-[var(--DarkNeutral1100)]">
            Personal Access Token
          </label>
          <button
            type="button"
            aria-label="About the personal access token"
            className="shrink-0"
          >
            <IoInformationCircleOutline size={18} />
          </button>
        </div>

        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-4 py-4 font-primary-light text-base text-[var(--Neutral200)] placeholder:text-[var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="testElem-url" className="text-[var(--DarkNeutral1100)]">
            Design URL
          </label>
          <button
            type="button"
            aria-label="About the design URL"
            className="shrink-0"
          >
            <IoInformationCircleOutline size={18} />
          </button>
        </div>

        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-4 py-4 font-primary-light text-base text-[var(--Neutral200)] placeholder:text-[var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-8 flex gap-8">
        <button
          type="button"
          className="w-[170px] rounded bg-[var(--Orange800)] px-6 py-5 text-[var(--Orange200)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded bg-[var(--Orange800)] px-6 py-5 text-[var(--Orange200)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-28 font-primary-black text-xl text-[var(--Neutral200)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
