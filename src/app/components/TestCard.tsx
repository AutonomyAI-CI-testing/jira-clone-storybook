import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-8 font-primary text-[color:var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline aria-hidden="true" className="h-6 w-6" />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[color:var(--DarkNeutral700)]">
        <IoChevronUpOutline aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span className="min-w-0 truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40 flex items-center gap-2">
        <IoChevronUpOutline aria-hidden="true" className="h-5 w-5 shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between">
          <label htmlFor="testElem-token" className="text-base">
            Personal Access Token
          </label>
          <IoInformationCircleOutline aria-hidden="true" className="h-6 w-6" />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-6 h-[56px] w-full rounded-none border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-4 text-base placeholder:text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-url" className="text-base">
            Design URL
          </label>
          <IoInformationCircleOutline aria-hidden="true" className="h-6 w-6" />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-6 h-[56px] w-full rounded-none border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-4 text-base placeholder:text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-12 flex gap-8">
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[var(--Orange800)] py-4 text-lg font-primary-bold"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[var(--Orange800)] py-4 text-lg font-primary-bold"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
};
