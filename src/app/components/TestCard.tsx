import {
  HiChevronUp,
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/*
 * A deliberately fixed dark surface, so every colour comes from the raw
 * palette through an arbitrary value rather than a semantic role: this card
 * must not re-skin when the app theme changes.
 */
const sectionTitleClass = "text-2xl font-primary-bold text-[var(--DarkNeutral1100)]";

const fieldLabelClass = "text-xl font-primary-bold text-[var(--DarkNeutral1000)]";

const fieldClass =
  "mt-7 h-[63px] w-full rounded-none border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-10 text-xl text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]";

const buttonClass =
  "h-[67px] flex-1 rounded bg-[var(--Orange800)] text-xl font-primary-bold text-[var(--DarkNeutral800)]";

const iconClass = "shrink-0 text-[var(--DarkNeutral800)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-32 pt-10 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className={sectionTitleClass}>UI magician Agent</h1>
      <HiOutlineCog size={34} className={iconClass} />
    </div>

    <div className="mt-6 flex items-center gap-4 text-xl text-[var(--DarkNeutral800)]">
      <HiOutlineChevronUp size={26} className={iconClass} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-36 flex items-center gap-4">
      <HiChevronUp size={30} className={iconClass} />
      <h2 className={sectionTitleClass}>Add New Design</h2>
    </div>

    <div className="mt-12">
      <div className="flex items-center gap-4">
        <span className={fieldLabelClass}>Personal Access Token</span>
        <HiOutlineInformationCircle size={26} className={iconClass} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-4">
        <span className={fieldLabelClass}>Design URL</span>
        <HiOutlineInformationCircle size={26} className={iconClass} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className={fieldClass}
      />
    </div>

    <div className="ml-[50px] mt-14 flex gap-9">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-24 ${sectionTitleClass}`}>Recent Breakdowns</h2>
  </div>
);
