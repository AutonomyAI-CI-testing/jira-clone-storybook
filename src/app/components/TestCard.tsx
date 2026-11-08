import cx from "classix";
import { MdExpandLess, MdInfoOutline, MdSettings } from "react-icons/md";

const labelRowClass = "flex items-center gap-2";
const labelClass = "text-2xs text-font-subtle";
const inputClass =
  "h-[36px] w-full rounded border border-border-bold bg-[var(--DarkNeutral200)] px-3 text-2xs text-font-subtlest placeholder:text-font-subtlest";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[color:var(--Neutral400)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <MdSettings size={16} className="text-icon" aria-hidden="true" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <MdExpandLess
        size={16}
        className="shrink-0 text-icon"
        aria-hidden="true"
      />
      <span className="truncate text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <MdExpandLess
        size={16}
        className="shrink-0 text-icon"
        aria-hidden="true"
      />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <div className="mt-6">
      <div className={labelRowClass}>
        <span className={labelClass}>Personal Access Token</span>
        <MdInfoOutline
          size={15}
          className="shrink-0 text-icon"
          aria-hidden="true"
        />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        className={cx(inputClass, "mt-2")}
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <div className={labelRowClass}>
        <span className={labelClass}>Design URL</span>
        <MdInfoOutline
          size={15}
          className="shrink-0 text-icon"
          aria-hidden="true"
        />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        className={cx(inputClass, "mt-2")}
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <div className="mt-20 font-primary-bold text-xs">Recent Breakdowns</div>
  </div>
);
