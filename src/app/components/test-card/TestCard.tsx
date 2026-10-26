import cx from "classix";

const FIELD_LABEL_CLASS = "text-[11.5px] leading-[13.92px]";
const FIELD_INPUT_CLASS = "w-[211px] rounded-none bg-[#272822] text-[#71726e]";
const ACTION_BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black font-primary-light">
    <div className="h-[9px] w-full" />

    <div className="px-5 pt-[11px] pb-[62px]">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon width={8} height={5} className="text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronUpIcon width={12} height={8} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[22px]">
        <span className={cx(FIELD_LABEL_CLASS, "text-[#a4a4a3]")}>Personal Access Token</span>
        <InfoIcon className="text-[#a4a4a3]" />
      </div>
      <input
        aria-label="Personal Access Token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          FIELD_INPUT_CLASS,
          "mt-[12px] h-[36px] border border-[#a5adad] px-[19px] text-[11.5px] leading-[13.92px] placeholder:text-[#737470]"
        )}
      />

      <div className="mt-[11px] flex items-center gap-[22px]">
        <span className={cx(FIELD_LABEL_CLASS, "text-[#a3a3a2]")}>Design URL</span>
        <InfoIcon className="text-[#a3a3a2]" />
      </div>
      <input
        aria-label="Design URL"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={cx(
          FIELD_INPUT_CLASS,
          "mt-[11px] h-[37px] border-2 border-[#929291] px-[20px] text-[10.5px] leading-[12.71px] placeholder:text-[#71726e]"
        )}
      />

      <div className="mt-[22px] ml-[24px] flex gap-[17px]">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);

interface IconProps {
  className: string;
}

interface ChevronUpIconProps extends IconProps {
  width: number;
  height: number;
}

const ChevronUpIcon = ({ width, height, className }: ChevronUpIconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("shrink-0", className)}
  >
    <path d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    className={cx("shrink-0", className)}
  >
    <circle cx="7.5" cy="7.5" r="6.25" strokeWidth="1" />
    <path d="M7.5 6.9v4.2" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("shrink-0", className)}
  >
    <circle cx="12" cy="12" r="6.5" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4M4.6 4.6l2.8 2.8M16.6 16.6l2.8 2.8M19.4 4.6l-2.8 2.8M7.4 16.6l-2.8 2.8" />
  </svg>
);
