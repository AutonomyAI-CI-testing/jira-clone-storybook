import cx from "classix";

const ICON_STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Settings gear in the panel header. */
const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

/** Disclosure chevron, drawn at whatever size it is asked for. */
const ChevronUpIcon = ({ width, height }: ChevronUpIconProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    aria-hidden="true"
    focusable="false"
    {...ICON_STROKE}
  >
    <path
      d={`M${width * 0.15} ${height * 0.8} L${width / 2} ${height * 0.2} L${
        width * 0.85
      } ${height * 0.8}`}
    />
  </svg>
);

/** Round "i" hint marker that trails a field label. */
const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    aria-hidden="true"
    focusable="false"
    {...ICON_STROKE}
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 7.2v3.4" />
    <circle cx="7.5" cy="4.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

/** A field label with its trailing hint marker. */
const LabelRow = ({ label, className }: LabelRowProps): JSX.Element => (
  <div className="flex items-center gap-5">
    <span
      className={cx("text-[11.5px] font-semibold leading-[13.92px]", className)}
    >
      {label}
    </span>
    <InfoIcon />
  </div>
);

/** One of the panel's two fields, shown in its placeholder state. */
const FieldInput = ({
  label,
  placeholder,
  className,
}: FieldInputProps): JSX.Element => (
  <input
    readOnly
    aria-label={label}
    placeholder={placeholder}
    className={cx("w-full font-semibold outline-none", className)}
  />
);

/** One of the panel's action buttons. */
const PanelButton = ({ label }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1b1b1b] px-5 pb-[62px] pt-5 font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-semibold">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUpIcon width={8} height={5} />
      <span className="min-w-0 truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUpIcon width={12} height={8} />
      <span className="font-semibold text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-7">
      <LabelRow label="Personal Access Token" className="text-[#a4a4a3]" />
      <FieldInput
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <LabelRow label="Design URL" className="text-[#a3a3a2]" />
      <FieldInput
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <h2 className="mt-[47px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface ChevronUpIconProps {
  width: number;
  height: number;
}

interface LabelRowProps {
  label: string;
  className?: string;
}

interface FieldInputProps {
  label: string;
  placeholder: string;
  className?: string;
}

interface PanelButtonProps {
  label: string;
}
