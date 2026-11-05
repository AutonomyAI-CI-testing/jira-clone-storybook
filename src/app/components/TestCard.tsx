import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// The rust fill has no semantic role in the design system, so it reaches the raw
// palette through an arbitrary value rather than an invented hex.
const buttonClass =
  "rounded-md bg-[var(--Orange800)] px-8 py-5 font-primary-bold text-lg text-font-subtle";

// border-border-input resolves to a 26%-alpha black in the dark theme and reads
// as no border at all, so the visible edge uses border-border-bold.
const fieldClass =
  "mt-3 w-full rounded border border-border-bold bg-elevation-surface-raised px-6 py-5 font-primary-light text-sm text-font placeholder:text-font-subtlest";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <IoSettingsOutline size={28} className="text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-3">
      <IoChevronUpOutline size={20} className="text-font-subtle" />
      <span className="font-primary-light text-sm text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <IoChevronUpOutline size={24} className="text-font" />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <span className="font-primary text-sm">Personal Access Token</span>
      <IoInformationCircleOutline size={18} className="text-font-subtle" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={fieldClass}
    />

    <div className="mt-6 flex items-center gap-3">
      <span className="font-primary text-sm">Design URL</span>
      <IoInformationCircleOutline size={18} className="text-font-subtle" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={fieldClass}
    />

    <div className="mt-10 flex gap-8">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
