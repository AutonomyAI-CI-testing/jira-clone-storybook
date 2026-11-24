import cx from "classix";

// Static mock of the "UI magician Agent" Figma frame: no props, no state and no
// behaviour, so it is deliberately built from plain elements and literal values
// taken from the frame instead of the app's semantic tokens.
const INPUT_CLASS = "mt-3 w-full rounded-none bg-[#272822] px-4 py-[10px]";

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-semibold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronIcon width={8} height={5} color="#b5b5b5" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronIcon width={12} height={8} color="#b2b2b1" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldLabel
      className="mt-7"
      label="Personal Access Token"
      labelClassName="text-[#a4a4a3]"
    />

    <input
      type="text"
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        INPUT_CLASS,
        "border border-[#a5adad] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      )}
    />

    <FieldLabel className="mt-3" label="Design URL" labelClassName="text-[#a3a3a2]" />

    <input
      type="text"
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className={cx(
        INPUT_CLASS,
        "border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      )}
    />

    <div className="mt-5 flex justify-center gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const FieldLabel = ({
  label,
  labelClassName,
  className,
}: FieldLabelProps): JSX.Element => (
  <div className={cx("flex items-center gap-2", className)}>
    <span className={cx("text-[11.5px] leading-[13.92px]", labelClassName)}>
      {label}
    </span>
    <InfoIcon />
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronIcon = ({ width, height, color }: ChevronIconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.1"
    strokeLinecap="round"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.4v3.6" />
    <circle cx="8" cy="4.8" r="0.6" fill="#b5b5b5" stroke="none" />
  </svg>
);

interface FieldLabelProps {
  label: string;
  labelClassName: string;
  className?: string;
}

interface ChevronIconProps {
  width: number;
  height: number;
  color: string;
}
