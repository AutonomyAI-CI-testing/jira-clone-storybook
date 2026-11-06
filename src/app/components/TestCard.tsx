import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

const labelClass =
  "flex items-center gap-2 text-2xs font-primary-bold text-font-subtle";

const fieldClass =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-2.5 py-2 text-2xs text-font placeholder:text-font-subtlest";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[var(--Neutral400)] hover:bg-[var(--Orange900)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs text-font">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="text-font-subtle"
      >
        <MdOutlineSettings aria-hidden size={18} />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 font-primary-bold text-2xs text-font-subtlest">
      <RiArrowUpSLine aria-hidden size={16} className="shrink-0" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-16 flex items-center gap-2 font-primary-bold text-xs text-font">
      <RiArrowUpSLine aria-hidden size={16} className="shrink-0" />
      Add New Design
    </div>

    <label className="mt-3 block">
      <span className={labelClass}>
        Personal Access Token
        <HiOutlineInformationCircle aria-hidden size={14} />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </label>

    <label className="mt-3 block">
      <span className={labelClass}>
        Design URL
        <HiOutlineInformationCircle aria-hidden size={14} />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className={fieldClass}
      />
    </label>

    <div className="mt-5 flex gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs text-font">
      Recent Breakdowns
    </h3>
  </div>
);
