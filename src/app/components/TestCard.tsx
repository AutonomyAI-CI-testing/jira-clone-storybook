const GEAR_TEETH = [0, 45, 90, 135, 180, 225, 270, 315];

const ChevronUp = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={`shrink-0 ${className}`}
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v4.3"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="h-4 w-[14px] shrink-0"
  >
    <g stroke="currentColor" strokeWidth="1.3">
      <circle cx="7" cy="8" r="2.9" />
      {GEAR_TEETH.map((angle) => (
        <line
          key={angle}
          x1="7"
          y1="1.6"
          x2="7"
          y2="5.4"
          transform={`rotate(${angle} 7 8)`}
        />
      ))}
    </g>
  </svg>
);

const LabelRow = ({
  label,
  className,
}: {
  label: string;
  className: string;
}) => (
  <div className={`flex items-center ${className}`}>
    <span className="font-primary text-[11.5px] leading-[14px]">{label}</span>
    <InfoIcon />
  </div>
);

const CardButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary text-[11.5px] leading-[14px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1c1c1c] p-5"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="font-primary text-[13.5px] leading-[16px]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUp className="h-[5px] w-2" />
      <span className="font-primary text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[77px]" />

    <div className="flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp className="h-2 w-3" />
      <span className="font-primary text-[13.5px] leading-[16px]">
        Add New Design
      </span>
    </div>

    <LabelRow
      label="Personal Access Token"
      className="mt-[28px] gap-[35px] text-[#a4a4a3]"
    />
    <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
      <span className="font-primary text-[11.5px] leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <LabelRow
      label="Design URL"
      className="mt-[11px] gap-[22px] text-[#a3a3a2]"
    />
    <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5">
      <span className="font-primary text-[10.5px] leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex items-center gap-[17px] pl-6">
      <CardButton label="Awesome" />
      <CardButton label="Prepare" />
    </div>

    <h2 className="mt-[47px] font-primary text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
