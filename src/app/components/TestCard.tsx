import cx from "classix";

/**
 * Smoke-test panel rebuilt from the attached Figma frame ("UI magician Agent").
 * Self-contained: no props, no state, no data. Colours and sizes are deliberate
 * approximations of the frame, taken from its exported style guide.
 */
const panelClass =
  "flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-primary text-[#b5b5b5]";

const headingClass = "font-primary-bold text-[13.5px] leading-[16px]";

const labelClass = "text-[11.5px] leading-[14px]";

const inputBaseClass =
  "w-full border-solid bg-[#272822] px-3 text-[#737470] outline-none placeholder:text-[#737470]";

const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]";

const TestCard = (): JSX.Element => (
  <div id="testElem" className={panelClass}>
    <div className="flex items-start justify-between">
      <h1 className={headingClass}>UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-3 text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span className={labelClass}>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-3 text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <h2 className={headingClass}>Add New Design</h2>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-2 text-[#a4a4a3]">
        <label className={labelClass} htmlFor="testElem-token">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-token"
        className={cx(
          inputBaseClass,
          "mt-3 h-[36px] border border-[#a5adad] text-[11.5px] leading-[14px]"
        )}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-2 text-[#a3a3a2]">
        <label className={labelClass} htmlFor="testElem-url">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-url"
        className={cx(
          inputBaseClass,
          "mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] leading-[13px]"
        )}
        placeholder="https://www.figma.com/file/:"
        readOnly
      />
    </div>

    <div className="mt-[22px] flex gap-4 pl-6">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className={cx(headingClass, "mt-[47px] text-[#b0b0b0]")}>
      Recent Breakdowns
    </h2>
  </div>
);

const ChevronUpIcon = ({ width, height }: IconSizeProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 16 10"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 8L8 2L14 8" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="8" r="2.5" />
    <circle cx="8" cy="8" r="5.5" />
    <path d="M8 0.5V2.5M8 13.5V15.5M0.5 8H2.5M13.5 8H15.5M2.7 2.7L4.1 4.1M11.9 11.9L13.3 13.3M13.3 2.7L11.9 4.1M4.1 11.9L2.7 13.3" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width={15}
    height={15}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.5V11.5" />
    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface IconSizeProps {
  width: number;
  height: number;
}

export default TestCard;
