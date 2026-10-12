import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] px-8 py-10 font-primary text-[var(--DarkNeutral1000)]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[22px] leading-7">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[var(--DarkNeutral1000)]"
        >
          <FiSettings size={24} />
        </button>
      </div>

      <div className="mt-7 flex items-center gap-2 text-[var(--Neutral500)]">
        <FiChevronUp size={18} />
        <span className="font-primary-light text-[15px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <FiChevronUp size={20} />
        <h2 className="font-primary-bold text-[22px] leading-7">
          Add New Design
        </h2>
      </div>

      <div className="mt-9">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-token" className="text-base">
            Personal Access Token
          </label>
          <FiInfo size={18} />
        </div>
        <input
          id="testElem-token"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="mt-4 w-full rounded border border-[var(--Neutral500)] bg-[var(--DarkNeutral200)] px-4 py-4 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--Neutral500)]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-url" className="text-base">
            Design URL
          </label>
          <FiInfo size={18} />
        </div>
        <input
          id="testElem-url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-4 w-full rounded border border-[var(--Neutral500)] bg-[var(--DarkNeutral200)] px-4 py-4 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--Neutral500)]"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-md bg-[var(--Orange800)] px-4 py-4 text-base"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[var(--Orange800)] px-4 py-4 text-base"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-[22px] leading-7">
        Recent Breakdowns
      </h2>
    </div>
  );
};
