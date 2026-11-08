/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel
 * from the supplied Figma frame.
 *
 * Deliberately standalone: no props, no state, no router/context hooks, so it
 * renders anywhere without a provider. The frame is a fixed dark surface, so
 * its colours are written as literal arbitrary values rather than semantic
 * tokens — the token roles re-resolve per app theme and would not stay dark.
 */
import cx from "classix";

interface ChevronProps {
  size?: number;
  className?: string;
}

const ChevronUp = ({ size = 12, className = "" }: ChevronProps) => (
  <svg
    viewBox="0 0 12 8"
    width={size}
    height={Math.round((size * 8) / 12)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <path d="M1.2 6.4 6 1.6l4.8 4.8" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="2.6" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.4 1.4M11.55 11.55l1.4 1.4M12.95 3.05l-1.4 1.4M4.45 11.55l-1.4 1.4" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.4v4.1" />
    <circle cx="8" cy="4.9" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const labelClass = "font-primary text-[11.5px] text-[#a4a4a3]";
const fieldClass = "mt-2 w-full bg-[#272822] px-3";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#0d0d0d] px-5 pb-8 pt-5 font-primary text-[13.5px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-4 flex min-w-0 items-center gap-2 font-primary text-[11.5px] text-[#8b9291]">
      <ChevronUp size={8} />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <h3 className="mt-16 flex items-center gap-2 font-primary-bold text-[#b2b2b1]">
      <ChevronUp size={12} />
      Add New Design
    </h3>

    <div className="mt-5 flex items-center gap-3">
      <span className={labelClass}>Personal Access Token</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
      className={cx(
        fieldClass,
        "h-[36px] border border-[color:#a5adad] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      )}
    />

    <div className="mt-4 flex items-center gap-3">
      <span className={labelClass}>Design URL</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={cx(
        fieldClass,
        "h-[37px] border-2 border-[color:#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      )}
    />

    <div className="mt-8 flex items-center gap-4 pl-6">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
