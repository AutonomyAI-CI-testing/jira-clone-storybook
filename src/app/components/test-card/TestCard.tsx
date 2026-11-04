import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const fieldClass =
  "mt-3 w-full rounded border border-border-bold bg-elevation-surface-overlay px-10 py-6 text-xl text-font placeholder:text-font-subtlest";

const sectionHeadingClass = "font-primary-black text-2xl";

const iconClass = "shrink-0 text-icon";

const actionButtonClass =
  "flex-1 rounded-md bg-[#a34a1e] py-5 font-primary-bold text-xl text-font";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pt-10 pb-32 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-3xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full"
      >
        <RiSettings3Line size={28} className={iconClass} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <RiArrowUpSLine size={28} aria-hidden="true" className={iconClass} />
      <span className="text-xl text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-36 flex items-center gap-4">
      <RiArrowUpSLine size={32} aria-hidden="true" className={iconClass} />
      <h2 className={sectionHeadingClass}>Add New Design</h2>
    </div>

    <div className="mt-14">
      <div className="flex items-center gap-4">
        <label
          htmlFor="personal-access-token"
          className="font-primary-bold text-xl"
        >
          Personal Access Token
        </label>
        <RiInformationLine size={28} aria-hidden="true" className={iconClass} />
      </div>
      <input
        id="personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-4">
        <label htmlFor="design-url" className="font-primary-bold text-xl">
          Design URL
        </label>
        <RiInformationLine size={28} aria-hidden="true" className={iconClass} />
      </div>
      <input
        id="design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={fieldClass}
      />
    </div>

    <div className="mt-10 flex gap-9">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-24 ${sectionHeadingClass}`}>Recent Breakdowns</h2>
  </div>
);
