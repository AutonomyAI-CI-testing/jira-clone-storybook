import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "mt-3 w-full rounded border border-border-bold bg-transparent px-4 py-4 font-primary-light text-font placeholder:text-font-subtlest";

const BUTTON_CLASSES =
  "rounded bg-background-danger px-8 py-3 text-font transition hover:bg-background-danger-hovered active:bg-background-danger-pressed";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pt-10 pb-16 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <FiSettings aria-label="Settings" size={24} className="text-font" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-2">
      <FiChevronUp aria-hidden size={22} className="shrink-0" />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <label className="mt-16 block text-sm text-font-subtle">
      <span className="flex items-center gap-2">
        Personal Access Token
        <FiInfo aria-hidden size={16} className="shrink-0" />
      </span>
      <input
        readOnly
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASSES}
      />
    </label>

    <label className="mt-8 block text-sm text-font-subtle">
      <span className="flex items-center gap-2">
        Design URL
        <FiInfo aria-hidden size={16} className="shrink-0" />
      </span>
      <input
        readOnly
        type="text"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASSES}
      />
    </label>

    <div className="mt-12 flex gap-4">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
