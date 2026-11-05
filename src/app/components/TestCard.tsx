import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer rounded p-1 text-icon hover:bg-background-neutral"
      >
        <HiOutlineCog size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-sm text-font-subtle">
      <HiOutlineChevronUp size={16} className="shrink-0" />
      <span className="truncate">From entire frame to a single…</span>
    </div>

    <h2 className="mt-16 flex items-center gap-2 font-primary-bold text-xl">
      <HiOutlineChevronUp size={20} className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="testcard-token" className="text-sm">
          Personal Access Token
        </label>
        <HiOutlineInformationCircle size={18} className="shrink-0 text-icon" />
      </div>
      <input
        id="testcard-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="w-full rounded border border-border-bold bg-elevation-surface-sunken p-3 text-sm text-font-subtle placeholder:text-font-subtle"
      />
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="testcard-url" className="text-sm">
          Design URL
        </label>
        <HiOutlineInformationCircle size={18} className="shrink-0 text-icon" />
      </div>
      <input
        id="testcard-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="w-full rounded border border-border-bold bg-elevation-surface-sunken p-3 text-sm text-font-subtle placeholder:text-font-subtle"
      />
    </div>

    <div className="mt-8 flex gap-4">
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-[var(--DarkNeutral1100)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-[var(--DarkNeutral1100)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
