import { BiChevronUp, BiInfoCircle } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const fieldLabelClass = "font-primary-bold text-xs text-font-subtle";

const fieldIconClass = "shrink-0 text-icon-subtle";

const fieldInputClass =
  "mt-3 h-9 w-full rounded border-none bg-background-input px-3 text-2xs text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-font-subtlest";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[color:var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral0)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[254px] flex-col bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm text-font">
        UI magician Agent
      </span>
      <IoSettingsOutline size={16} className={fieldIconClass} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <BiChevronUp size={12} className={fieldIconClass} />
      <span className="min-w-0 truncate font-primary-bold text-xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <BiChevronUp size={16} className="shrink-0 text-font" />
      <span className="font-primary-bold text-sm text-font">Add New Design</span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-token" className={fieldLabelClass}>
          Personal Access Token
        </label>
        <BiInfoCircle size={16} className={fieldIconClass} />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-design-url" className={fieldLabelClass}>
          Design URL
        </label>
        <BiInfoCircle size={16} className={fieldIconClass} />
      </div>
      <input
        id="testElem-design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-5 flex justify-center gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-sm text-font">
      Recent Breakdowns
    </h2>
  </div>
);
