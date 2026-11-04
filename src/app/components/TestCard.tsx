import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded-md bg-[var(--DarkNeutral0)] p-8 font-primary text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Agent settings"
          className="cursor-pointer text-[var(--DarkNeutral1000)]"
        >
          <FiSettings size={24} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <FiChevronUp
          size={20}
          className="shrink-0 text-[var(--DarkNeutral1000)]"
        />
        <span className="truncate text-base text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <FiChevronUp
          size={24}
          className="shrink-0 text-[var(--DarkNeutral1000)]"
        />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center gap-4">
          <label htmlFor="personal-access-token" className="text-base">
            Personal Access Token
          </label>
          <FiInfo
            size={20}
            className="shrink-0 text-[var(--DarkNeutral1000)]"
          />
        </div>
        <input
          id="personal-access-token"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-3 py-3 text-base placeholder:text-[var(--DarkNeutral600)]"
        />
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center gap-4">
          <label htmlFor="design-url" className="text-base">
            Design URL
          </label>
          <FiInfo
            size={20}
            className="shrink-0 text-[var(--DarkNeutral1000)]"
          />
        </div>
        <input
          id="design-url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-3 py-3 text-base placeholder:text-[var(--DarkNeutral600)]"
        />
      </div>

      <div className="mt-10 flex gap-8">
        <button
          type="button"
          className="w-[170px] cursor-pointer rounded bg-[var(--Orange800)] px-4 py-3 text-lg text-[var(--DarkNeutral1000)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] cursor-pointer rounded bg-[var(--Orange800)] px-4 py-3 text-lg text-[var(--DarkNeutral1000)]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};
