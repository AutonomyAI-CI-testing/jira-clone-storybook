type ChevronUpIconProps = {
  width: number;
  height: number;
};

function ChevronUpIcon({ width, height }: ChevronUpIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const GEAR_TEETH = [0, 45, 90, 135, 180, 225, 270, 315];

function SettingsIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="7" cy="8" r="4.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      {GEAR_TEETH.map((angle) => (
        <line
          key={angle}
          x1="7"
          y1="1.6"
          x2="7"
          y2="4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          transform={`rotate(${angle} 7 8)`}
        />
      ))}
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="6.6"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M7.5 6.9v3.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="4.6" r="0.75" fill="currentColor" />
    </svg>
  );
}

type FrameButtonProps = {
  label: string;
};

function FrameButton({ label }: FrameButtonProps) {
  return (
    <span className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
      {label}
    </span>
  );
}

type LabeledFieldProps = {
  label: string;
  placeholder: string;
  /** Height of the field box in the frame. */
  heightClass: string;
  /** Border weight and colour of the field box in the frame. */
  borderClass: string;
  /** Type size of the placeholder in the frame. */
  placeholderClass: string;
};

function LabeledField({
  label,
  placeholder,
  heightClass,
  borderClass,
  placeholderClass,
}: LabeledFieldProps) {
  return (
    <label className="flex flex-col">
      <span className="flex items-center gap-3 text-[#a4a4a3]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          {label}
        </span>
        <InfoIcon />
      </span>
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className={`mt-3 w-[211px] bg-[#272822] px-[19px] font-semibold text-[#737470] placeholder:text-[#737470] ${heightClass} ${borderClass} ${placeholderClass}`}
      />
    </label>
  );
}

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#1b1b1b] px-5 pt-5 font-[Inter,sans-serif] antialiased"
    >
      <div className="flex items-start justify-between text-[#b5b5b5]">
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon width={8} height={5} />
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
        <ChevronUpIcon width={12} height={8} />
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <LabeledField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          heightClass="h-[36px]"
          borderClass="border border-[#a5adad]"
          placeholderClass="text-[11.5px]"
        />
      </div>

      <div className="mt-[11px]">
        <LabeledField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          heightClass="h-[37px]"
          borderClass="border-2 border-[#929291]"
          placeholderClass="text-[10.5px]"
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <FrameButton label="Awesome" />
        <FrameButton label="Prepare" />
      </div>

      <div className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
