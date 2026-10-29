import { HiChevronUp } from "react-icons/hi";
import { MdInfoOutline, MdSettings } from "react-icons/md";

const INPUT_CLASSES =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-9 py-6 text-base text-font placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand";

const ACTION_CLASSES =
  "w-[170px] rounded-md bg-[var(--Orange800)] py-5 text-lg text-font hover:opacity-90";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-font hover:bg-background-neutral"
      >
        <MdSettings size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <HiChevronUp size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <HiChevronUp size={22} className="shrink-0" />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-base">
          Personal Access Token
        </span>
        <MdInfoOutline size={18} aria-hidden="true" className="text-font-subtle" />
      </div>
      <input
        type="text"
        className={INPUT_CLASSES}
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-base">Design URL</span>
        <MdInfoOutline size={18} aria-hidden="true" className="text-font-subtle" />
      </div>
      <input
        type="text"
        className={INPUT_CLASSES}
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-9">
      <button type="button" className={ACTION_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
