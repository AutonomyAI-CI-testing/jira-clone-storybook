import cx from "classix";

// The panel reproduces a Figma frame with its own dark palette. None of those
// colours exist in the semantic token layer (the nearest token is a visibly
// different shade), so they stay as arbitrary values instead of being remapped
// onto the app's theme.
const headingText = "font-primary-bold text-[13.5px] leading-[16.34px]";
const labelText = "font-primary-bold text-[11.5px] leading-[13.92px]";
const fieldBase =
  "w-[211px] border-2 bg-[#272822] px-[19px] font-primary-bold text-[#B5B5B5] outline-none";
const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8C8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className={cx(headingText, "text-[#B5B5B5]")}>
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsed row */}
    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp width={8} height={5} />
      <span className={cx(labelText, "min-w-0 truncate text-[#8B9291]")}>
        From entire frame to a single component
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUp width={12} height={8} />
      <h2 className={cx(headingText, "text-[#B2B2B1]")}>Add New Design</h2>
    </div>

    {/* Personal access token */}
    <div className="mt-7 flex items-center gap-2">
      <label
        htmlFor="test-card-token"
        className={cx(labelText, "text-[#A4A4A3]")}
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        fieldBase,
        "mt-3 h-9 border-[#A5ADAD] text-[11.5px] leading-[13.92px] placeholder:text-[#737470]"
      )}
    />

    {/* Design url */}
    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor="test-card-url"
        className={cx(labelText, "text-[#A3A3A2]")}
      >
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className={cx(
        fieldBase,
        "mt-3 h-[37px] border-[#929291] text-[10.5px] leading-[12.71px] placeholder:text-[#71726E]"
      )}
    />

    {/* Actions */}
    <div className="ml-6 mt-6 flex gap-[17px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    {/* Recent */}
    <h2 className={cx(headingText, "mt-[46px] text-[#B0B0B0]")}>
      Recent Breakdowns
    </h2>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#B5B5B5"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({ width, height }: ChevronUpProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="#B2B2B1"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 7 6 2l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="#A4A4A3"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="7" />
    <path d="M7.5 6.6v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.3" r="0.7" fill="#A4A4A3" stroke="none" />
  </svg>
);

interface ChevronUpProps {
  width: number;
  height: number;
}
