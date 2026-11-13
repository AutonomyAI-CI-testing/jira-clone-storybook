import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[color:var(--DarkNeutral-100)] px-7 pt-12 pb-24 font-primary text-[color:var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between text-xl">
      <span>UI magician Agent</span>
      <IoSettingsOutline size={22} aria-hidden="true" className="shrink-0" />
    </div>

    <div className="mt-10 flex items-center gap-3 text-base text-[color:var(--DarkNeutral700)]">
      <HiChevronUp size={16} aria-hidden="true" className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="h-40" />

    <div className="flex items-center gap-3 text-xl">
      <HiChevronUp size={20} aria-hidden="true" className="shrink-0" />
      <span>Add New Design</span>
    </div>

    <div className="mt-14 flex items-center justify-between text-base text-[color:var(--DarkNeutral700)]">
      <span>Personal Access Token</span>
      <HiOutlineInformationCircle
        size={18}
        aria-hidden="true"
        className="shrink-0"
      />
    </div>

    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-6 h-12 w-full rounded border border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral250)] px-4 text-base text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-10 flex items-center justify-between text-base text-[color:var(--DarkNeutral700)]">
      <span>Design URL</span>
      <HiOutlineInformationCircle
        size={18}
        aria-hidden="true"
        className="shrink-0"
      />
    </div>

    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-6 h-12 w-full rounded border border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral250)] px-4 text-base text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-16 flex gap-8">
      <button
        type="button"
        className="h-[68px] flex-1 rounded-md bg-[color:var(--Orange800)] text-lg text-[color:var(--DarkNeutral700)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[68px] flex-1 rounded-md bg-[color:var(--Orange800)] text-lg text-[color:var(--DarkNeutral700)]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-28 text-xl">Recent Breakdowns</div>
  </div>
);
