import cx from "classix";

interface ChevronIconProps {
  width: number;
  height: number;
  strokeWidth: number;
}

interface FieldLabelProps {
  label: string;
  className?: string;
}

interface PanelButtonProps {
  label: string;
}

const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronIcon = ({ width, height, strokeWidth }: ChevronIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.9V10.7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" />
  </svg>
);

const FieldLabel = ({ label, className }: FieldLabelProps) => (
  <div
    className={cx(
      "flex items-center gap-4 text-[#a3a3a2]",
      className
    )}
  >
    <span className="font-primary-bold text-[11.5px] leading-[13.9px]">
      {label}
    </span>
    <InfoIcon />
  </div>
);

const PanelButton = ({ label }: PanelButtonProps) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1e1e1e] font-primary text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full bg-[#2a2a2a]" />

    <div className="px-5 pb-6 pt-5">
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.3px]">
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
        <ChevronIcon width={8} height={5} strokeWidth={1.2} />
        <span className="font-primary-bold text-[11.5px] leading-[13.9px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[62px] flex items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
        <ChevronIcon width={12} height={8} strokeWidth={1.8} />
        <span className="font-primary-bold text-[13.5px] leading-[16.3px]">
          Add New Design
        </span>
      </div>

      <FieldLabel label="Personal Access Token" className="mt-[12px]" />
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] w-full border border-[#a5adad] bg-[#272822] px-[19px] py-[11px] font-primary-bold text-[11.5px] leading-[13.9px] text-[#737470] placeholder:text-[#737470]"
      />

      <FieldLabel label="Design URL" className="mt-[11px]" />
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] py-[11px] font-primary-bold text-[10.5px] leading-[12.7px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <PanelButton label="Awesome" />
        <PanelButton label="Prepare" />
      </div>

      <div className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.3px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
