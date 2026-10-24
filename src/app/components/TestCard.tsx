import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] rounded-xl bg-[var(--DarkNeutral200)] p-6 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[var(--DarkNeutral800)]"
      >
        <FiSettings size={24} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp size={20} aria-hidden="true" />
      <span className="truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden="true" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <label className="mt-8 block">
      <span className="flex items-center gap-2 text-base">
        Personal Access Token
        <FiInfo
          size={20}
          aria-hidden="true"
          className="text-[var(--DarkNeutral800)]"
        />
      </span>
      <input
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-14 w-full rounded-md border-2 border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral300)] px-4 text-base placeholder:text-[var(--DarkNeutral700)]"
      />
    </label>

    <label className="mt-6 block">
      <span className="flex items-center gap-2 text-base">
        Design URL
        <FiInfo
          size={20}
          aria-hidden="true"
          className="text-[var(--DarkNeutral800)]"
        />
      </span>
      <input
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-14 w-full rounded-md border-2 border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral300)] px-4 text-base placeholder:text-[var(--DarkNeutral700)]"
      />
    </label>

    <div className="mt-10 flex gap-8">
      <button
        type="button"
        className="h-[72px] w-[167px] rounded-[10px] bg-[#a63d18] text-lg text-white"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[72px] w-[167px] rounded-[10px] bg-[#a63d18] text-lg text-white"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-14 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
